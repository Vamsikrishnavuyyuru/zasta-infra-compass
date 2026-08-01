import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const ALLOWED_MIME = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

function str(v: FormDataEntryValue | null, max: number): string {
  const s = (v ?? '').toString().trim();
  return s.slice(0, max);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function bytesToBase64(bytes: Uint8Array): string {
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(
      null,
      bytes.subarray(i, i + chunk) as unknown as number[],
    );
  }
  return btoa(binary);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: 'Server not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const form = await req.formData();

    const name = str(form.get('name'), 100);
    const email = str(form.get('email'), 255);
    const phone = str(form.get('phone'), 32);
    const experience = str(form.get('experience'), 64);
    const skills = str(form.get('skills'), 2000);
    const currentJobTitle = str(form.get('currentJobTitle'), 150);
    const positionApplyingFor = str(form.get('positionApplyingFor'), 150);
    const coverLetter = str(form.get('coverLetter'), 5000);
    const cv = form.get('cvAttachment');

    if (!name || !email || !phone || !experience || !currentJobTitle || !positionApplyingFor) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (!(cv instanceof File)) {
      return new Response(JSON.stringify({ error: 'CV attachment required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (cv.size > MAX_FILE_BYTES) {
      return new Response(JSON.stringify({ error: 'File too large' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (!ALLOWED_MIME.has(cv.type)) {
      return new Response(JSON.stringify({ error: 'Invalid file type' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const cvBytes = new Uint8Array(await cv.arrayBuffer());
    const cvBase64 = bytesToBase64(cvBytes);

    const submittedAt = new Date().toISOString();

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.5;">
        <h2 style="margin:0 0 12px;">New CV Submission</h2>
        <p style="margin:0 0 16px; color:#555;">Submitted at ${escapeHtml(submittedAt)}</p>
        <table cellpadding="6" cellspacing="0" style="border-collapse: collapse; font-size: 14px;">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
          <tr><td><strong>Experience</strong></td><td>${escapeHtml(experience)}</td></tr>
          <tr><td><strong>Current Job Title</strong></td><td>${escapeHtml(currentJobTitle)}</td></tr>
          <tr><td><strong>Position Applying For</strong></td><td>${escapeHtml(positionApplyingFor)}</td></tr>
          <tr><td valign="top"><strong>Skills</strong></td><td>${escapeHtml(skills).replace(/\n/g, '<br/>')}</td></tr>
          <tr><td valign="top"><strong>Cover Letter</strong></td><td>${escapeHtml(coverLetter).replace(/\n/g, '<br/>')}</td></tr>
        </table>
        <p style="margin-top:16px; font-size:13px; color:#555;">CV/Resume is attached to this email.</p>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Zasta Careers <careers@zastagroup.com>',
        to: ['hr@zastagroup.com', 'hrexecutive@zastagroup.com'],
        reply_to: email,
        subject: `New CV Submission — ${name}`,
        html,
        attachments: [
          {
            filename: cv.name || 'cv',
            content: cvBase64,
          },
        ],
      }),
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error(`Resend request failed [${res.status}]: ${errorBody}`);
      return new Response(
        JSON.stringify({ error: 'Email send failed', status: res.status, details: errorBody }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('submit-cv error:', e);
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

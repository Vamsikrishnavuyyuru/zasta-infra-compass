import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const ZAPIER_URL = Deno.env.get('ZAPIER_CV_WEBHOOK_URL');

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

  if (!ZAPIER_URL) {
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
    const coverLetter = str(form.get('coverLetter'), 5000);
    const cv = form.get('cvAttachment');

    if (!name || !email || !phone || !experience) {
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

    const outbound = new FormData();
    outbound.append('name', name);
    outbound.append('email', email);
    outbound.append('phone', phone);
    outbound.append('experience', experience);
    outbound.append('skills', skills);
    outbound.append('coverLetter', coverLetter);
    outbound.append('cvAttachment', cv, cv.name);
    outbound.append('submittedAt', new Date().toISOString());

    const res = await fetch(ZAPIER_URL, { method: 'POST', body: outbound });
    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Upstream failed' }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (_e) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const SERVICE_ID = Deno.env.get('EMAILJS_SERVICE_ID');
const TEMPLATE_ID = Deno.env.get('EMAILJS_TEMPLATE_ID');
const PUBLIC_KEY = Deno.env.get('EMAILJS_PUBLIC_KEY');

function s(v: unknown, max: number) {
  return (typeof v === 'string' ? v : '').trim().slice(0, max);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    return new Response(JSON.stringify({ error: 'Server not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const name = s(body.name, 100);
    const email = s(body.email, 255);
    const company = s(body.company, 150);
    const phone = s(body.phone, 32);
    const subject = s(body.subject, 200);
    const message = s(body.message, 5000);

    if (!name || !email || !subject || !message) {
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

    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', origin: 'http://localhost' },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: {
          from_name: name,
          from_email: email,
          company,
          phone,
          subject,
          message,
          to_email: 'hr@zastagroup.com',
        },
      }),
    });

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
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

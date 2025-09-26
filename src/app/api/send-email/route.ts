import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.formData();

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: {
        name: body.get("name"),
        phone: body.get("phone"),
        email: body.get("email"),
        service: body.get("service"),
        message: body.get("message"),
      },
    }),
  });

  if (!res.ok) {
    return NextResponse.redirect(new URL("/?success=false", req.url));
  }

  return NextResponse.redirect(new URL("/?success=true", req.url));
}

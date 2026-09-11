import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // NOTE: this does not send an email or persist data yet.
  // Wire up a provider (e.g. Resend, SendGrid) here before launch —
  // see the "Before going live" section in README.md.
  console.log("New contact enquiry:", parsed.data);

  return NextResponse.json({ ok: true });
}

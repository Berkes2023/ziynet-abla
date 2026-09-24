import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

const FORMSPREE_ENDPOINT =
  process.env.FORMSPREE_ENDPOINT ?? "https://formspree.io/f/mzezvjzp";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { ownerName, horseName, service, email, phone, message } =
    parsed.data;

  const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: ownerName,
      horseName,
      service,
      email,
      phone,
      message,
      _subject: `New enquiry from ${ownerName} (${service})`,
    }),
  });

  if (!formspreeResponse.ok) {
    console.error(
      "Formspree submission failed:",
      formspreeResponse.status,
      await formspreeResponse.text().catch(() => "")
    );
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

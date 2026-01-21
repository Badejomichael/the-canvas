import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY");
    }

    const body = await req.json();

    const {
      name,
      email,
      message,
      timeline,
      budget,
      animation_type,
    } = body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: "Animation Requests <hello@canvassary.xyz>",
      to: ["badejoadetola3@gmail.com"],
      subject: "New Animation Request",
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #111; line-height: 1.6;">
          <h2 style="margin-bottom: 8px;">New Animation Request</h2>
          <p style="color: #555; margin-top: 0;">
            A new client has submitted an animation request.
          </p>

          <hr style="margin: 24px 0;" />

          <h3>Client Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>

          <hr style="margin: 24px 0;" />

          <h3>Project Details</h3>
          <p><strong>Animation Type:</strong> ${animation_type}</p>
          <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
          <p><strong>Budget:</strong> ${budget}</p>

          <hr style="margin: 24px 0;" />

          <h3>Client Message</h3>
          <p style="background: #f7f7f7; padding: 12px; border-radius: 6px;">
            ${message}
          </p>

          <hr style="margin: 32px 0;" />

          <p style="font-size: 12px; color: #888;">
            Sent from your animation request form.
          </p>
        </div>
      `,
    });

    console.log("EMAIL SENT:", result);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}



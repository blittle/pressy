import { createPressyMiddleware } from "@pressy-pub/cloudflare";

export const onRequest = createPressyMiddleware((env) => ({
  sendEmail: async ({ to, subject, html }) => {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from: env.EMAIL_FROM, to: [to], subject, html }),
    });

    if (!resp.ok) {
      const body = await resp.text();
      console.error("Failed to send email:", resp.status, body);
      throw new Error(`Failed to send email: ${resp.status} ${body}`);
    }

    console.log("Email sent successfully");
    return resp.json();
  },
}));

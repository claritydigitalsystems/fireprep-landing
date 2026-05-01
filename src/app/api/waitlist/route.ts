const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return Response.json(
        { success: false, error: "Invalid request." },
        { status: 400 }
      );
    }

    const email =
      body && typeof body === "object" && "email" in body
        ? String((body as { email: unknown }).email).trim()
        : "";

    if (!email) {
      return Response.json(
        { success: false, error: "Add your email to join the waitlist." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return Response.json(
        {
          success: false,
          error: "That doesn't look like a valid email — try again.",
        },
        { status: 400 }
      );
    }

    const token = process.env.MAILERLITE_API_TOKEN;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!token || !groupId) {
      console.error("[waitlist] Missing MAILERLITE_API_TOKEN or MAILERLITE_GROUP_ID");
      return Response.json(
        {
          success: false,
          error: "Service temporarily unavailable. Please try again.",
        },
        { status: 500 }
      );
    }

    const mlRes = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        groups: [groupId],
        status: "active",
      }),
    });

    // 200/201 = subscribed, 422 = already exists — both are success for the user
    if (mlRes.ok || mlRes.status === 422) {
      return Response.json({ success: true });
    }

    if (mlRes.status >= 500) {
      console.error("[waitlist] Mailerlite returned", mlRes.status);
      return Response.json(
        {
          success: false,
          error: "Service temporarily unavailable. Please try again.",
        },
        { status: 502 }
      );
    }

    console.error("[waitlist] Mailerlite returned", mlRes.status);
    return Response.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 400 }
    );
  } catch (err) {
    console.error("[waitlist] Unexpected error:", err instanceof Error ? err.message : err);
    return Response.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

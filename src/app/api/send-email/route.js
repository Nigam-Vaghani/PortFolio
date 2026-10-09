import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, linkedin, github, portfolio, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const lambdaEndpoint =
      process.env.NEXT_PUBLIC_LAMBDA_API_URL || process.env.LAMBDA_API_URL;

    if (lambdaEndpoint) {
      try {
        const lambdaRes = await fetch(lambdaEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            linkedin,
            github,
            portfolio,
            message,
            to: "hello@nigamvaghani.dev",
          }),
        });

        if (!lambdaRes.ok) {
          const errData = await lambdaRes.json().catch(() => ({}));
          return NextResponse.json(
            { message: errData.message || "Failed to deliver email via AWS Lambda." },
            { status: lambdaRes.status }
          );
        }

        const data = await lambdaRes.json().catch(() => ({}));
        return NextResponse.json(
          { message: "Email sent successfully via AWS Lambda!", data },
          { status: 200 }
        );
      } catch (err) {
        console.error("Error connecting to AWS Lambda endpoint:", err);
        return NextResponse.json(
          { message: "Could not reach AWS Lambda endpoint. Please check CORS or endpoint URL." },
          { status: 502 }
        );
      }
    }

    // Fallback mode if Lambda URL is not configured yet
    console.log("📨 Contact Form Message Received:", {
      name,
      email,
      linkedin,
      github,
      portfolio,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: "Message received successfully! (Simulated mode — add NEXT_PUBLIC_LAMBDA_API_URL to connect AWS Lambda)",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in send-email API route:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}

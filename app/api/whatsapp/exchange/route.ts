import { NextResponse } from "next/server";

const FB_APP_ID = "1441438130621249";
const FB_VERSION = "v25.0";

type ExchangeRequestBody = {
  code?: unknown;
};

export async function POST(request: Request) {
  try {
    let body: ExchangeRequestBody;

    try {
      body = (await request.json()) as ExchangeRequestBody;
    } catch {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const code = typeof body.code === "string" ? body.code.trim() : "";

    if (!code) {
      return NextResponse.json(
        { error: "Authorization code is required." },
        { status: 400 }
      );
    }

    const appSecret = process.env.FB_APP_SECRET;

    if (!appSecret) {
      console.error("FB_APP_SECRET is missing.");
      return NextResponse.json(
        { error: "Server configuration is missing." },
        { status: 500 }
      );
    }

    const params = new URLSearchParams({
      client_id: FB_APP_ID,
      client_secret: appSecret,
      code,
    });

    const response = await fetch(
      `https://graph.facebook.com/${FB_VERSION}/oauth/access_token?${params.toString()}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = (await response.json()) as {
      access_token?: string;
      token_type?: string;
    };

    if (!response.ok || !data.access_token) {
      console.error("Meta token exchange failed:", data);

      return NextResponse.json(
        { error: "Meta token exchange failed.", details: data },
        { status: response.ok ? 502 : response.status }
      );
    }

    return NextResponse.json({
      success: true,
      accessToken: data.access_token,
      access_token: data.access_token,
      tokenType: data.token_type,
    });
  } catch (error) {
    console.error("WhatsApp token exchange error:", error);

    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
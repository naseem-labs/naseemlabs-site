import { NextResponse } from "next/server";

const FB_APP_ID = "1441438130621249";
const FB_VERSION = "v25.0";

type ExchangeRequestBody = {
  code?: unknown;
  business_id?: unknown;
  waba_id?: unknown;
  phone_number_id?: unknown;
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
    const businessId =
      typeof body.business_id === "string" ? body.business_id.trim() : "";
    const wabaId =
      typeof body.waba_id === "string" ? body.waba_id.trim() : "";
    const phoneNumberId =
      typeof body.phone_number_id === "string"
        ? body.phone_number_id.trim()
        : "";

    if (!code || !businessId || !wabaId || !phoneNumberId) {
      return NextResponse.json(
        { error: "Complete WhatsApp connection data is required." },
        { status: 400 }
      );
    }

    const appSecret = process.env.FB_APP_SECRET;
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!appSecret || !supabaseUrl || !supabaseServiceRoleKey) {
      console.error("Required server configuration is missing.");
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
        { error: "Meta token exchange failed." },
        { status: response.ok ? 502 : response.status }
      );
    }

    const supabaseResponse = await fetch(
      `${supabaseUrl}/rest/v1/whatsapp_connections`,
      {
        method: "POST",
        headers: {
          apikey: supabaseServiceRoleKey,
          Authorization: `Bearer ${supabaseServiceRoleKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          business_id: businessId,
          waba_id: wabaId,
          phone_number_id: phoneNumberId,
          phone_number: null,
          access_token: data.access_token,
          status: "connected",
          connected_at: new Date().toISOString(),
        }),
      }
    );

    if (!supabaseResponse.ok) {
      console.error(
        "Supabase WhatsApp connection insert failed:",
        await supabaseResponse.text()
      );
      return NextResponse.json(
        { error: "Could not save the WhatsApp connection. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("WhatsApp token exchange error:", error);

    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

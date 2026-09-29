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

    const phoneResponse = await fetch(
      `https://graph.facebook.com/${FB_VERSION}/${encodeURIComponent(
        phoneNumberId
      )}?fields=display_phone_number`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.access_token}`,
        },
        cache: "no-store",
      }
    );

    const phoneData = (await phoneResponse.json()) as {
      display_phone_number?: unknown;
    };
    const phoneNumber =
      typeof phoneData.display_phone_number === "string"
        ? phoneData.display_phone_number.trim()
        : "";

    if (!phoneResponse.ok || !phoneNumber) {
      console.error("Meta phone number lookup failed:", {
        status: phoneResponse.status,
        hasPhoneNumber: Boolean(phoneNumber),
      });
      return NextResponse.json(
        {
          error:
            "Could not retrieve the WhatsApp phone number. Please try again.",
        },
        { status: 502 }
      );
    }

    const connectionPayload = {
      business_id: businessId,
      waba_id: wabaId,
      phone_number_id: phoneNumberId,
      phone_number: phoneNumber,
      access_token: data.access_token,
      status: "connected",
      connected_at: new Date().toISOString(),
    };

    const supabaseHeaders = {
      apikey: supabaseServiceRoleKey,
      Authorization: `Bearer ${supabaseServiceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    };

    const existingConnectionResponse = await fetch(
      `${supabaseUrl}/rest/v1/whatsapp_connections?phone_number_id=eq.${encodeURIComponent(
        phoneNumberId
      )}`,
      {
        method: "PATCH",
        headers: supabaseHeaders,
        body: JSON.stringify(connectionPayload),
      }
    );

    if (!existingConnectionResponse.ok) {
      console.error(
        "Supabase WhatsApp connection update failed:",
        await existingConnectionResponse.text()
      );
      return NextResponse.json(
        { error: "Could not save the WhatsApp connection. Please try again." },
        { status: 502 }
      );
    }

    const updatedConnections =
      (await existingConnectionResponse.json()) as unknown[];

    if (updatedConnections.length === 0) {
      const insertResponse = await fetch(
        `${supabaseUrl}/rest/v1/whatsapp_connections`,
        {
          method: "POST",
          headers: {
            ...supabaseHeaders,
            Prefer: "return=minimal",
          },
          body: JSON.stringify(connectionPayload),
        }
      );

      if (!insertResponse.ok) {
        console.error(
          "Supabase WhatsApp connection insert failed:",
          await insertResponse.text()
        );
        return NextResponse.json(
          { error: "Could not save the WhatsApp connection. Please try again." },
          { status: 502 }
        );
      }
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

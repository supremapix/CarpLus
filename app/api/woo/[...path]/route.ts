import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const searchParams = request.nextUrl.searchParams;
  const storeUrl = searchParams.get("storeUrl");
  const consumerKey = searchParams.get("ck");
  const consumerSecret = searchParams.get("cs");

  if (!storeUrl || !consumerKey || !consumerSecret) {
    return NextResponse.json(
      { error: "Credenciais ausentes" },
      { status: 400 }
    );
  }

  const wooPath = path.join("/");
  const wooUrl = `${storeUrl}/wp-json/wc/v3/${wooPath}`;

  try {
    const response = await fetch(wooUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64"),
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("WooCommerce API error:", error);
    return NextResponse.json(
      { error: "Erro ao conectar com WooCommerce" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const searchParams = request.nextUrl.searchParams;
  const storeUrl = searchParams.get("storeUrl");
  const consumerKey = searchParams.get("ck");
  const consumerSecret = searchParams.get("cs");

  if (!storeUrl || !consumerKey || !consumerSecret) {
    return NextResponse.json(
      { error: "Credenciais ausentes" },
      { status: 400 }
    );
  }

  const wooPath = path.join("/");
  const wooUrl = `${storeUrl}/wp-json/wc/v3/${wooPath}`;

  try {
    const body = await request.json();

    const response = await fetch(wooUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64"),
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("WooCommerce API error:", error);
    return NextResponse.json(
      { error: "Erro ao criar produto no WooCommerce" },
      { status: 500 }
    );
  }
}

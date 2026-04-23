import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Limpa o cookie de sessão removendo-o do navegador
  response.cookies.set("admin_session", "", { maxAge: 0, path: "/" });

  return response;
}

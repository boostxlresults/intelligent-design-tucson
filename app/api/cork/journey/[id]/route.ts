import { NextRequest, NextResponse } from "next/server";
import { updateJourney } from "@/lib/cork/journeyStore";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const fields = (await req.json()) as Record<string, unknown>;
  await updateJourney(id, fields);
  return NextResponse.json({ ok: true });
}

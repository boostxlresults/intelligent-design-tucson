import { NextRequest, NextResponse } from "next/server";
import { createJourney } from "@/lib/cork/journeyStore";

export async function POST(req: NextRequest) {
  let utm: Record<string, string> | undefined;
  try {
    const body = await req.json();
    utm = body?.utm;
  } catch {
    /* empty body ok */
  }
  const id = await createJourney(utm);
  return NextResponse.json({ id });
}

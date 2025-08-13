import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
   const { Context, input } = await req.json();

    if (!Context || !input) {
      return NextResponse.json(
        { error: "Missing context or question" },
        { status: 400 },
      );
    }

    const prompt = `You must answer the following question using ONLY the information found in the provided context. and Simplify the answer with same language of question to egyptian students. If the answer is not explicitly stated in the context, respond exactly with:  Answer not found in context. Context: '${Context}' Question: '${input}'`;

    const res = await axios.post(
      "https://api.puter.com/v1/ai/complete",
      {
        model: "gpt-4.5-preview", // or "o3-mini" / "o1-mini"
        prompt,
        max_tokens: 200,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return NextResponse.json({ answer: res.data.output.trim() });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.response?.data || err.message || "Unknown error" },
      { status: 500 },
    );
  }
}

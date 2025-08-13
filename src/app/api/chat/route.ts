import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const request:any = await req.json();

     const res = await fetch(
      "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      },
    );
 
    if (!res.ok) {
      const errText = await res.text();
     //   throw new Error(errText);
    }

    const data = await res.json();

    // Hugging Face returns an array with generated_text
    return NextResponse.json({ text: data[0]?.generated_text || "" });
  } catch (error: any) {
    console.error("Hugging Face API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate text" },
      { status: 500 }
    );
  }
}

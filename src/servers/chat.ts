export async function POST(req: Request) {
  const { prompt } = await req.json();
  const res = await fetch(
    "https://api-inference.huggingface.co/models/gpt2",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer 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`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: prompt }),
    }
  );
  return new Response(await res.text());
}

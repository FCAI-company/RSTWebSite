import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
 const { Context, input } = await req.json();
 const apiKey = process.env.HF_TOKEN
   ? process.env.HF_TOKEN.replace(/_/g, ""): "";
 console.log(apiKey);
   const response = await axios.post(
     "https://router.huggingface.co/v1/chat/completions",
     {
       messages: [
         {
           role: "user",
           content: `You must answer the following question using ONLY the information found in the provided context. and Simplify the answer with same language of question to egyptian students. If the answer is not explicitly stated in the context, respond exactly with:  Answer not found in context. Context: '${Context}' Question: '${input}'`,
         },
       ],
       model: "openai/gpt-oss-120b:fireworks-ai",
     },
     {
       headers: {
         Authorization: `Bearer hf_${apiKey}`,
         "Content-Type": "application/json",
       },
     },
   );
    // .then((response) => {
    //  return NextResponse.json(response.data, { status: 200 });
    // }).catch((error) => {
    //     return NextResponse.json({ error: error.message }, { status: 500 });
    
    // });


 
    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

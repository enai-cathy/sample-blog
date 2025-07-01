
import { NextResponse } from "next/server";
import OpenAI from "openai";


export async function POST(req: Request) {
  const { question, prompt } = await req.json();
  
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
  });
  
 
try{ 
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: prompt },
      { role: "user", content: question },
    ],
  });

  return NextResponse.json({ result: response.choices[0].message.content });
} catch (err) {
  console.error("OpenAI Error:", err);

  const errorMsg = (err as {code?: string})?.code === "insufficient_quota"
    ? "You've exceeded your OpenAI quota. Please check your billing or try again later."
    : "This Service is Temporarily down. Please try again later.";

  return NextResponse.json({ error: errorMsg }, { status: 500 });
}
}

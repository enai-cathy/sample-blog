// import OpenAI from "openai";
// const client = new OpenAI();

// const response = await client.responses.create({
//   model: "gpt-4.1-2025-04-14",
//   input: "Write a one-sentence bedtime story about a unicorn.",
// });

// console.log(response.output_text);


// import OpenAI from "openai";

// const client = new OpenAI({
//   apiKey:
//     process.env.OPENAI_API_KEY,
// });

// const response = await client.responses.create({
//   model: "gpt-4.1",
//   input: "Write a one-sentence bedtime story about a unicorn.",
// });

//  console.log(response.output_text);


// app/api/serena/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { question, prompt } = await req.json();
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

// app/api/carousel/route.ts
import { NextResponse } from "next/server";
import { getCarouselPosts } from "@/app/lib/getCarouselPosts";

export async function GET() {
  const posts = await getCarouselPosts();
  return NextResponse.json(posts);
}

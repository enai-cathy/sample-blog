// lib/getCarouselPosts.ts
import { neon } from "@neondatabase/serverless";

export async function getCarouselPosts() {
  const sql = neon(process.env.DATABASE_URL!);
  
try{ 
    const posts =
      await sql`SELECT id, title, description, image FROM posts LIMIT 5;`;
    return posts;
  } catch (error) {
    console.error("❌ Error fetching carousel posts:", error);
    return [];
  }
}

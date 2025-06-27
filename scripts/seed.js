
import dotenv from "dotenv";
dotenv.config();

import { neon } from "@neondatabase/serverless";
import { posts } from "../src/app/lib/placeholder-data.js"; // adjust path if needed



const sql = neon(process.env.DATABASE_URL);

async function seedPosts() {
  try {
    // to create tables
    // You must split your table creation commands into separate await sql statements, like this:
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await sql`
    CREATE TABLE IF NOT EXISTS posts (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      slug TEXT UNIQUE,
      image TEXT,
      description TEXT,
      title TEXT NOT NULL UNIQUE,
      content TEXT NOT NULL,
      date TEXT NOT NULL,
      author TEXT NOT NULL
    );
  `;

    console.log("✅ Ensured 'posts' table exists");

    // Insert posts
    for (const post of posts) {
      await sql`
      INSERT INTO posts (id, slug, image, title, description, content, date, author)
      VALUES (
        ${post.id},
        ${post.slug},
        ${post.image},
        ${post.title},
        ${post.description},
        ${post.content},
        ${post.date},
        ${post.user}
      )
      ON CONFLICT (id) DO NOTHING;
    `;
    }

    console.log(`✅ Seeded ${posts.length} posts to Neon`);
  } catch (error) {
    console.error("❌ Error seeding Neon DB:", error.message || error);
    process.exit(1);
  }
}

seedPosts();

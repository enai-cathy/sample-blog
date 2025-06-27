import { neon } from "@neondatabase/serverless";

export  function connectToDB() {
  const sql = neon(process.env.DATABASE_URL!);
return sql;

  // try {
  //   const result = sql`SELECT * FROM posts`;
  //   console.log('Connected to database')
  //   return result;
  // } catch (error) {
  //   console.error("Database error:", error);
  //   throw error;
  // }
}
export async function getPosts() {
  const sql = neon(process.env.DATABASE_URL!);
  try{
    const data = await sql`SELECT * FROM posts`
    console.log(data)
    return data;
  } catch (error) {
    console.error("Database error:", error);
      throw error;
  }
  
}
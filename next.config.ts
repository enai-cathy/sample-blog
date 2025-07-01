import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  env:{
    OpenAI_API_KEY: process.env.OPEN_API_KEY,
  }
};

export default nextConfig;

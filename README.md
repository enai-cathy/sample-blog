# Sample Blog — Modern Tech Blog with AI & MongoDB

A **Next.js + TypeScript** powered **tech blog** with **MongoDB** for content management and **Serena AI (OpenAI integration)** for intelligent insights and writing assistance. Built to showcase clean architecture, scalable backend integration, and AI-driven features for the modern web.

<p align="left">
  <a href="https://nextjs.org/"><img alt="Next.js" src="https://img.shields.io/badge/Next.js-14+-black?logo=nextdotjs&logoColor=white"></a>
  <a href="https://www.typescriptlang.org/"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Strong-blue?logo=typescript&logoColor=white"></a>
  <a href="https://www.mongodb.com/"><img alt="MongoDB" src="https://img.shields.io/badge/Database-MongoDB-green?logo=mongodb&logoColor=white"></a>
  <a href="https://openai.com/"><img alt="OpenAI" src="https://img.shields.io/badge/AI-OpenAI-412991?logo=openai&logoColor=white"></a>
  <a href="./LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green.svg"></a>
</p>

---

##  Overview

**Sample Blog** is a full-stack **tech blogging platform** designed to highlight modern development practices:  
-  **MongoDB database** for blog post storage  
-  **Serena AI integration** powered by OpenAI for smart recommendations, summaries, or assisted writing  
-  **Next.js (App Router)** frontend with TypeScript  
-  Optimized fonts via `next/font` (Geist)  
-  Deployable instantly on **Vercel**  

This project doubles as a **portfolio piece** to showcase advanced web development, API integration, and AI-driven content systems.

---

##  Features

-  Blog system backed by **MongoDB**
-  **AI-powered assistant (Serena AI)** to generate summaries or enhance posts
-  **Next.js App Router** for performance and scalability
-  SEO-ready with metadata and Open Graph setup
-  Accessible UI with semantic HTML
-  One-click deploy to Vercel

---

## 🛠 Tech Stack

- **Frontend:** Next.js 14+, TypeScript, React  
- **Database:** MongoDB (Atlas or self-hosted)  
- **AI Integration:** OpenAI API (Serena AI features)  
- **Styling:** *(update with Tailwind CSS / CSS Modules / etc. as applicable)*  
- **Deployment:** Vercel  
- **Tooling:** ESLint, Prettier  

---

## 📂 Project Structure
sample-blog/
├── app/ # App Router pages & layouts
│ ├── layout.tsx # Global layout, fonts, SEO
│ └── page.tsx # Home page
├── components/ # Reusable UI components
├── lib/ # Database & AI utility functions
│ ├── db.ts # MongoDB connection logic
│ └── openai.ts # OpenAI (Serena AI) integration
├── models/ # MongoDB schemas/models
├── public/ # Static assets (images, icons)
├── styles/ # Global or module styles
├── .env.local # Local environment variables
├── next.config.ts # Next.js configuration
├── package.json
└── README.md
---

## ⚡ Getting Started

### 1. Clone and Install
```bash
git clone https://github.com/enai-cathy/sample-blog.git
cd sample-blog
npm install

### 2. Configure Environment
Create a .env.local file:

MONGODB_URI="your-mongodb-uri"
OPENAI_API_KEY="your-openai-key"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

### 3. Configure Environment
npm run dev
# open http://localhost:3000

### 4. Build for Production
npm run build
npm run start

## AI Integration (Serena AI)
- Serena AI leverages the OpenAI API to provide:
- insights on tech related questions
- bug fixes
- learning paths

### The integration lives in lib/openai.ts. You can extend it with custom prompts for your use case.

## Roadmap

 - Add user authentication (NextAuth.js)
 - Markdown/MDX support for blog posts
 - Rich editor for AI-assisted writing
 - Dark/light theme toggle
 - Analytics dashboard


## Contributing

Contributions are welcome!

- **Fork the repo**
- **Create a feature branch**: git checkout -b feat/your-feature
- **Commit**: git commit -m "feat: add your feature"
- **Push**: git push origin feat/your-feature
- **Open a Pull Request**


 Author

Enaikato Cathy Ige-Edaba


💼 LinkedIn: https://www.linkedin.com/in/enaikato-ige-edaba/

⭐ If you find this project useful, consider giving it a star on GitHub!


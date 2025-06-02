# 📝 Todo List App (CRUD API)

A modern and responsive Todo List application built with:

- **Next.js (App Router)**
- **Prisma ORM**
- **Tailwind CSS**
- **REST API (CRUD)**
- **PostgreSQL Neon DB**

![screencapture-localhost-3000-2025-06-01-01_23_10](https://github.com/user-attachments/assets/018fa270-47ac-4862-bdd3-27c3a1c2487d)

---

## 🚀 Features

- 📥 Add new tasks
- ✅ Mark tasks as done/undone
- 🗑️ Delete tasks
- 📦 Full backend using Prisma + Next.js API routes

---

## 🛠️ Technologies Used

| Tech             | Description                         |
| ---------------- | ----------------------------------- |
| **Next.js**      | React framework for SSR/SSG         |
| **Prisma**       | Type-safe ORM for DB access         |
| **Tailwind CSS** | Utility-first CSS framework         |
| **PostgreSQL**   | via Neon or any compatible provider |

## 📂 Installation & Setup

# 1. Install dependencies

npm install

# 2. Set up the DB

npx prisma generate
npx prisma migrate dev --name init

# 3. Run the dev server

npm run dev

---

## ⚠️ Why Next.js 14?

Although Next.js 15 is the latest version, I chose to use **Next.js 14** because:

- Next.js 15 heavily relies on **Server Actions**, which change how backend logic is handled.
- My app uses traditional **API routing** via `app/api`, which works best with **Next.js 14**.
- Compatibility issues occurred when using Prisma with the new Server Actions approach.

# Next.js Developer Portfolio

<p align="center">
  <a href="https://your-portfolio-url.com"> <!--- <<< Add your deployed URL here -->
    <img src="public/bot.gif" alt="Portfolio Demo" width="600"/>
  </a>
</p>

<p align="center">
  A modern, full-stack developer portfolio built with Next.js, React, and Tailwind CSS. Showcasing skills, projects, and a passion for building great software.
</p>

<p align="center">
  <a href="https://nextjs.org/" title="Next.js">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  </a>
  <a href="https://react.dev/" title="React">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  </a>
  <a href="https://www.typescriptlang.org/" title="TypeScript">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  </a>
  <a href="https://tailwindcss.com/" title="Tailwind CSS">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  </a>
  <a href="LICENSE" title="License">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT">
  </a>
</p>

## ✨ Features

- **Sleek & Responsive UI:** Built with Tailwind CSS for a beautiful experience on any device.
- **Dynamic Content:** Easily manage sections for skills, work history, education, and projects.
- **Interactive Chat Assistant:** An AI-powered chatbot to engage with visitors.
- **Contact Form:** A functional contact form with email notifications using React Email.
- **Visitor Analytics:** (Optional) Log visitor information for insights.
- **Dark/Light Mode:** Seamless theme switching for user preference.
- **SEO Optimized:** Ready for search engines to find you.

## 🚀 Live Demo

[**Check out the live version here!**](https://your-portfolio-url.com) <!--- <<< Add your deployed URL here -->

## 🛠️ Tech Stack

| Category   | Technologies                                                                                             |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| **Frontend**   | `Next.js`, `React`, `TypeScript`, `Tailwind CSS`, `Framer Motion`, `React Email`                       |
| **Backend**    | `Next.js API Routes`                                                                                   |
| **Database**   | `SQLite` / `PostgreSQL` (with `Prisma` ORM)                                                          |
| **Deployment** | `Vercel`, `Netlify`, `Docker`                                                                          |
| **Tooling**    | `ESLint`, `Prettier`, `shadcn/ui`                                                                        |

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/your-portfolio.git
    cd your-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    -   Create a `.env` file by copying `.env.example`.
    -   Fill in the necessary values (e.g., email service credentials, database URL).

4.  **Run database migrations (if using a database):**
    ```bash
    npx prisma migrate dev
    ```

5.  **Start the development server:**
    ```bash
    npm run dev
    ```

6.  **Open your browser** to `http://localhost:3000`.

## 🎨 Customization

- **Personal Information:** Update your details, skills, experience, and project information in `app/lib/data.ts`.
- **Assets:** Replace images in `public/` with your own. The folder structure is self-explanatory.
- **Styling:** Modify the theme and colors in `tailwind.config.ts` and `app/globals.css`.

### Project Structure

```
app/                # Main Next.js app (pages, components, API routes)
  components/       # React components (sections, UI, etc.)
  api/              # API routes (contact, chat, visitor logging)
  context/          # React context providers
  functions/        # Utility functions (e.g., send-email)
  lib/              # Data, hooks, types
public/             # Static assets (images, icons)
prisma/             # Prisma schema and migrations (if used)
```

## 🚢 Deployment

This project is optimized for deployment on platforms like Vercel and Netlify.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fyour-portfolio)

For other platforms, you can build the project and run it as a standalone Node.js server:

```bash
npm run build
npm start
```

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements, feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

# PostHog Analytics Integration

This project uses [PostHog](https://posthog.com/) for analytics.

## Setup Instructions

1. **Install dependencies**
   ```bash
   npm install posthog-js posthog-node
   ```

2. **Set environment variables**
   Create a `.env.local` file in the project root with the following:
   ```env
   NEXT_PUBLIC_POSTHOG_KEY=your_project_api_key
   NEXT_PUBLIC_POSTHOG_HOST=https://us.posthog.com
   ```
   Replace `your_project_api_key` with your actual PostHog project API key (find it in your PostHog project settings).

3. **Reverse Proxy**
   The project is configured to proxy analytics requests through `/ingest` to PostHog's US servers. This helps with ad blockers and privacy. See `next.config.mjs` for details.

4. **Provider Setup**
   The app is already wrapped with the PostHogProvider in `app/layout.tsx`.

5. **Custom Events**
   You can track custom events using the PostHog client in your components:
   ```js
   import posthog from 'posthog-js';
   posthog.capture('event_name', { property: 'value' });
   ```

---

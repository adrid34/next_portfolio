# Developer Portfolio

A modern, full-stack developer portfolio built with Next.js, React, and Tailwind CSS. This project showcases your skills, experience, education, and projects, and includes a contact form and chat assistant.

## Features

- **Responsive Design:** Mobile-friendly and visually appealing UI.
- **Skills & Experience:** Dynamic sections for skills, work history, and education.
- **Projects Showcase:** Highlight your best work with images and descriptions.
- **Certifications:** Display your certifications with images.
- **Contact Form:** Visitors can send you messages via email.
- **Chat Assistant:** Interactive assistant for visitors.
- **Visitor Analytics:** Logs visitor info for analytics (IP, etc.).
- **Dark/Light Theme:** Toggle between dark and light modes.

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API routes
- **Database:** (Optional) Prisma, SQLite/PostgreSQL (for visitor logging)
- **Email:** Nodemailer (or similar)
- **Other:** Shadcn UI, various image assets

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in required values (email credentials, database URL, etc.).

4. **Run database migrations (if using Prisma):**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/                # Main Next.js app (pages, components, API routes)
  components/       # React components (sections, UI, etc.)
  api/              # API routes (contact, chat, visitor logging)
  context/          # React context providers
  functions/        # Utility functions (e.g., send-email)
  lib/              # Data, hooks, types
  public/           # Static assets (images, icons)
prisma/             # Prisma schema and migrations
```

## Customization

- **Update your info:** Edit data in `app/lib/data.ts` and images in `public/`.
- **Add projects/certifications:** Place images in the appropriate folders and update the data files.
- **Change theme/colors:** Edit `tailwind.config.ts` and `globals.css`.

## Deployment

- Easily deployable to Vercel, Netlify, or any Node.js hosting.
- For Vercel:  
  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project)

## Contact

For any inquiries, feel free to reach out via email: [adrianmadrid5245@gmail.com](mailto:adrianmadrid5245@gmail.com)

## License

MIT

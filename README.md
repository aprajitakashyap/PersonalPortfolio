# 🌿 Personal Engineering Portfolio — Aprajita Kashyap

A modern, high-performance, and visually engaging personal portfolio website built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed with a warm earthy aesthetic (minimalist meets maximalist elegance), custom typography (Outfit, Inter, and Cormorant Garamond), smooth micro-interactions, and responsive components.

---

## ✨ Features

- **⚡ Modern Tech Stack**: Powered by Next.js 15 App Router and React 19 for speed and performance.
- **🎨 Warm Earthy Design System**: Tailored HSL design tokens with parchment background (`#ebe8e0`), cream cards, and rich olive accent colors.
- **✨ Custom Preloader**: Smooth animated intro sequence with a gradient progress loader.
- **👑 Custom Monogram & Header**: Glassmorphic sticky navbar featuring an editorial **AK** serif monogram logo.
- **🚀 Full-Viewport Hero Section**: Highlighting engineering profile, availability status badge, sketch portrait, and quick CTA actions.
- **🔄 Infinite Tech Stack Marquee**: Continuous smooth scrolling marquee showcasing technical capabilities.
- **⭐ Featured Flagship Showcase & Gallery**: Interactive project cards with video/image previews, tech tags, and repository links.
- **💼 Interactive Career Timeline**: Experience section detailing engineering roles, skills, and contributions.
- **📬 Contact & Collaboration Section**: Form for messages, status indication, and direct email connection.
- **📱 Fully Responsive & Accessible**: Optimized for mobile, tablet, and desktop viewports with reduced-motion support.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + Custom CSS Variables |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Fonts** | Google Fonts (`Outfit`, `Inter`, `Cormorant Garamond`) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **UI Components** | Radix UI Slot, Class Variance Authority (`cva`), `clsx`, `tailwind-merge` |

---

## 📁 Project Structure

```text
PersonalPortfolio/
├── docs/                   # Design and product specifications
├── public/                 # Static assets (images, avatar, resume)
├── src/
│   ├── app/                # Next.js App Router (layout, global styles, root page)
│   ├── components/         # Reusable React components
│   │   ├── common/         # Container, Preloader, Section, Heading, Cursor
│   │   ├── layout/         # Navbar, MobileMenu, Footer
│   │   ├── sections/       # Hero, TechMarquee, FeaturedProject, ProjectGallery, Experience, Contact
│   │   └── ui/             # Radix & primitive UI components (Button, Cards, etc.)
│   ├── config/             # Site configuration, SEO & navigation settings
│   ├── data/               # Project data, experience, technologies, and achievements
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions (`cn`, helper logic)
│   ├── styles/             # Global CSS and Tailwind directives (`globals.css`)
│   └── types/              # TypeScript interface definitions
├── package.json            # Project dependencies & scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18.x** or higher and **npm** installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aprajitakashyap/PersonalPortfolio.git
   cd PersonalPortfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View in Browser**:
   Open [http://localhost:3000](http://localhost:3000) to view the live portfolio.

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode with Hot Module Replacement (HMR).
- `npm run build`: Builds the application for production to the `.next` folder.
- `npm run start`: Starts the production server after building.
- `npm run lint`: Runs Next.js ESLint checker for code quality and syntax errors.

---

## 👤 Author

**Aprajita Kashyap**
- GitHub: [@aprajitakashyap](https://github.com/aprajitakashyap)
- LinkedIn: [Aprajita Kashyap](https://linkedin.com/in/aprajitakashyap)
- Email: [aprajitaworks@gmail.com](mailto:aprajitaworks@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

# Diego MD - Creative Portfolio

A premium, cinematic creative portfolio website showcasing expertise in video editing, motion graphics, photography, and visual design.

## Features

- **Modern Design**: Dark mode first, high contrast, cinematic aesthetic
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading times and smooth scrolling
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Modern icon library

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page with all sections
│   └── globals.css     # Global styles and Tailwind
├── components/
│   ├── Navigation.tsx  # Fixed navigation bar
│   ├── Hero.tsx        # Hero section with CTA
│   ├── About.tsx       # About me section
│   ├── Tools.tsx       # Tools & software showcase
│   ├── Skills.tsx      # Skills & expertise grid
│   ├── Portfolio.tsx   # Portfolio gallery with modal
│   ├── Workflow.tsx    # Creative workflow timeline
│   ├── Services.tsx    # Services offered
│   ├── Contact.tsx     # Contact form and info
│   └── Footer.tsx      # Footer component
└── public/             # Static assets
```

## Customization

- Update portfolio items in `components/Portfolio.tsx`
- Modify services in `components/Services.tsx`
- Adjust colors in `tailwind.config.ts`
- Update content in respective component files

## License

Private project - All rights reserved

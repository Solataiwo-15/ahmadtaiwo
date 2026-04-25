export const data = {
  name: "Ahmad Taiwo",
  title: "Frontend Engineer",
  location: "Lagos, Nigeria",
  email: "ahmadtaiwo15@gmail.com",
  phone: "+2348167191894",
  linkedin: "https://linkedin.com/in/ahmad-taiwo/",
  github: "https://github.com/Solataiwo-15",
  openTo: "Remote opportunities",

  bio: [
    "I'm a Frontend Engineer with 2+ years of experience building modern web apps using React, Next.js, and TypeScript. I focus on creating responsive, accessible, and polished interfaces that make products easier to use.",
    "I enjoy working at the point where design meets code — from building reusable components to improving performance and connecting APIs, I like turning ideas into real products people can use.",
  ],

  skills: {
    Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    "Frameworks & Libraries": ["React.js", "Next.js", "React Hooks", "Zustand", "Context API"],
    "Styling & UI": ["Tailwind CSS", "Shadcn UI", "Chakra UI", "Material UI", "Framer Motion"],
    Tools: ["Git", "GitHub", "Vercel", "Supabase", "Vite", "Figma"],
    "Other Skills": ["API Integration", "Responsive Design", "Performance Optimization", "CI/CD Deployment"],
  },

  projects: [
    {
      id: 1,
      name: "Edible Mart",
      tagline: "Full-stack beef booking platform",
      description:
        "Replaces manual WhatsApp bookings with a customer-facing app and admin dashboard. Customers browse products, book slots, manage carts, receive email notifications, and generate order reports. Admins manage stock, orders, and unpaid debt.",
      tech: ["Next.js", "TypeScript", "Supabase", "Zustand", "Resend", "Vercel"],
      live: "https://edible-mart-v2.vercel.app/",
      github: "https://github.com/Solataiwo-15/EDIBLE_MART",
      emoji: "🥩",
      featured: true,
    },
    {
      id: 2,
      name: "Maglo",
      tagline: "Financial tracking for small businesses",
      description:
        "Helps small businesses track revenue, calculate VAT automatically, and view business metrics through a real-time dashboard.",
      tech: ["Next.js", "TypeScript"],
      live: "https://finance-dashboard-swart-ten.vercel.app/login",
      github: "https://github.com/Solataiwo-15/finance-dashboard",
      emoji: "📊",
      featured: false,
    },
    {
  id: 3,
  name: "Portfolio",
  tagline: "This very website you're looking at",
  description:
    "Designed and built my personal portfolio from scratch with a focus on UI craftsmanship, smooth animations, and a great user experience across all devices.",
  tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Vercel"],
  live: "https://ahmadtaiwo.vercel.app/",
  github: "https://github.com/Solataiwo-15/ahmadtaiwo",
  emoji: "🎨",
  featured: false,
},
    {
      id: 4,
      name: "Todo Board",
      tagline: "Kanban task management app",
      description:
        "A task management board with Kanban-style columns. Users create, move, and delete tasks with a sleek interface and smooth interactions.",
      tech: ["Next.js", "TypeScript", "Chakra UI"],
      live: "https://todo-board-assignment.vercel.app/",
      github: "https://github.com/Solataiwo-15/todo-board-assignment",
      emoji: "✅",
      featured: false,
    },
    {
      id: 5,
      name: "QR Generator",
      tagline: "Sleek QR code creator",
      description:
        "A responsive QR Code Generator that lets users create QR codes from any text or URL, with a clean interface and modern design.",
      tech: ["JavaScript", "CSS"],
      live: "https://qr-code-generator-ten-liart.vercel.app/",
      github: "https://github.com/Solataiwo-15/QR-Code-Generator",
      emoji: "🔳",
      featured: false,
    },
  ],

  experience: [
    {
      role: "Freelance Frontend Developer",
      company: "Self-employed",
      period: "Jan 2026 – Present",
      location: "Remote",
      points: [
        "Built Edible Mart — a full-stack beef booking platform using Next.js, TypeScript, Supabase, and Zustand, replacing manual WhatsApp-based ordering for a client.",
        "Delivered end-to-end from architecture to deployment on Vercel, including admin dashboard, email notifications, and row-level security.",
        "Managing ongoing client relationships, feature updates, and technical requirements independently.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "ArchSaint Nexus",
      period: "Jan 2026 – Apr 2026",
      location: "Remote, Nigeria",
      points: [
        "Built responsive and interactive UIs using React.js and Tailwind CSS.",
        "Collaborated with ops and design teams to turn UI concepts into working frontend features.",
        "Improved frontend performance, created reusable component libraries, and maintained design consistency.",
      ],
    },
    {
      role: "Frontend Engineer Intern",
      company: "Ascent TechHub Africa",
      period: "Jul 2025 – Dec 2025",
      location: "Remote, Nigeria",
      points: [
        "Worked in an Agile team with weekly sprints and stand-ups.",
        "Built modular frontend components and integrated REST APIs.",
        "Managed state with React Hooks; participated in code reviews and debugging sessions.",
      ],
    },
  ],

  education: {
    degree: "B.Sc. Physics",
    school: "Federal University of Agriculture, Abeokuta",
    period: "2019 – 2024",
  },
};
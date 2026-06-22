import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Manya Kapoor",
  initials: "MK",
  url: "http://localhost:3000",
  location: "Ghaziabad, India",
  locationLink: "https://www.google.com/maps/place/Ghaziabad",
  description:
    "Full-Stack + DevOps Developer. Building AI-powered products and solving real-world problems through software.",
  summary:
    "I am a B.Tech Computer Science student at Maharaja Surajmal Institute of Technology with a strong interest in Full Stack Development, DevOps, Cloud Computing, and Artificial Intelligence. I actively participate in hackathons, mentor students through Google Developers Group, and enjoy building scalable applications using modern technologies. My current focus is on AI-powered SaaS products and cloud-native development.",
avatarUrl: "/placeholder.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "JavaScript", icon: Typescript },
    { name: "MongoDB", icon: Postgresql },
    { name: "Express", icon: Nodejs },
    { name: "AWS", icon: Docker },
    { name: "TailwindCSS", icon: ReactLight },
    { name: "Linux", icon: Docker },
    { name: "Jenkins", icon: Docker },
    { name: "C++", icon: Csharp },
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "blessedmanyakapoor1111@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Manya-Kapoor",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manya-kapoor-623b70323/",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:blessedmanyakapoor1111@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Google Developers Group",
      href: "https://developers.google.com/community/gdg",
      badges: ["Current"],
      location: "New Delhi, India",
      title: "Department Member",
      logoUrl: "/gdg.png",
      start: "Jan 2026",
      end: "Present",
      description:
        "Mentored 15+ students during the Google Cloud Campaign 2026 and earned a Merit Certificate for outstanding participation. Collaborated with fellow developers and contributed to community learning initiatives while strengthening cloud and development skills.",
    },
  ],
  education: [
    {
      school: "Maharaja Surajmal Institute of Technology",
      href: "https://www.msit.in/",
      degree:
        "Bachelor of Technology in Computer Science Engineering (CGPA: 8.5/10)",
      logoUrl: "/msit.png",
      start: "2024",
      end: "2028",
    },
    {
      school: "Mayo International School",
      href: "#",
      degree: "Class XII - Percentage: 78.8%",
      logoUrl: "/mayo.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Seth Anandram Jaipuria School",
      href: "#",
      degree: "Class X - Percentage: 96.6%",
      logoUrl: "/jaipuria.png",
      start: "2009",
      end: "2022",
    },
  ],

  projects: [
    {
      title: "AI Powered Social Media Automation Platform",
      href: "#",
      dates: "June 2026 - Present",
      active: true,
      description:
        "Built a Full Stack AI SaaS platform that allows users to connect multiple social media accounts, schedule posts across platforms, and generate engaging content using AI. The platform focuses on automating content workflows and improving social media management efficiency.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "OpenAI API",
        "TailwindCSS",
        "MERN Stack",
        "CodeRabbit",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

    {
      title: "AI Virtual Assistant",
      href: "#",
      dates: "June 2026 - Present",
      active: true,
      description:
        "Developed a JARVIS-inspired AI Virtual Assistant using the MERN stack. The assistant provides intelligent interactions through a clean and responsive interface and demonstrates the integration of AI capabilities into modern web applications.",
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "TailwindCSS",
        "MERN Stack",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

    {
      title: "Portfolio Website",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "Designed and developed a modern personal portfolio to showcase projects, achievements, technical skills, and experiences. Built with a focus on performance, aesthetics, and responsive design.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Wie",
      dates: "January 30th, 2025",
      location: "Women's Hackathon",
      description:
        "Finished in the Top 10 teams by developing a real-time ambulance tracking system that helps critical patients receive timely medical attention through optimized road clearance and faster emergency response.",
      image: "/hackwie.png",
      links: [],
    },

    {
      title: "HackWithMait 5.0",
      dates: "October 25th, 2024",
      location: "New Delhi, India",
      description:
        "Built a platform that automatically fills college applications, reducing manual effort and making the admission process faster and hassle-free for students.",
      image: "/hackwithmait5.png",
      links: [],
    },

    {
      title: "HackWithMait 6.0",
      dates: "October 30th, 2025",
      location: "New Delhi, India",
      description:
        "Developed a portal enabling farmers to book cold storages and sell crops efficiently, helping minimize wastage and maximize profits.",
      image: "/hackwithmait6.png",
      links: [],
    },

    {
      title: "Decode Dilemma",
      dates: "2025",
      location: "MSIT, New Delhi",
      description:
        "Won First Prize in the Decode Dilemma competition held at Maharaja Surajmal Institute of Technology.",
      image: "/decodedilemma.png",
      win: "🥇 First Prize Winner",
      links: [],
    },

    {
      title: "Google On-Campus Cloud Campaign 2026",
      dates: "2026",
      location: "Google Developers Group",
      description:
        "Earned a Merit Certificate for outstanding performance and active participation in the Google On-Campus Cloud Campaign 2026.",
      image: "/googlecloud.png",
      win: "Merit Certificate",
      links: [],
    },
  ],
} as const;

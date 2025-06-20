import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

import html from "@/public/skills/html.png";
import css from "@/public/skills/css.png";
import typescript from "@/public/skills/typescript.png";
import react from "@/public/skills/react.png";
import next from "@/public/skills/next.png";
import tailwind from "@/public/skills/tailwind.png";
import node from "@/public/skills/node.png";
import express from "@/public/skills/express.png";
import javascript from "@/public/skills/javascript.png";
import python from "@/public/skills/python.png";
import git from "@/public/skills/git.png";
import mysql from "@/public/skills/mysql.png";
import postgresql from "@/public/skills/postgresql.png";
import redis from "@/public/skills/redis.png";
import docker from "@/public/skills/docker.png";
import githubactions from "@/public/skills/githubactions.png";
import aws from "@/public/skills/aws.png";
import azure from "@/public/skills/azure.png";
import jest from "@/public/skills/jest.png";
import playwright from "@/public/skills/playwright.png";
import phpunit from "@/public/skills/phpunit.png";
import prettier from "@/public/skills/prettier.png";
import eslint from "@/public/skills/eslint.png";
import websocket from "@/public/skills/websocket.png";
import mqtt from "@/public/skills/mqtt.png";
import openai from "@/public/skills/openai.png";
import tensorflow from "@/public/skills/tensorflow.png";
import graphql from "@/public/skills/graphql.png";
import redux from "@/public/skills/redux.png";
import php from "@/public/skills/php.png";
import vercel from "@/public/skills/vercel.png";
import ledgent from "@/public/history/ledgent.png";
import amazon from "@/public/history/amazon.png";
import avco from "@/public/history/avco.png";
import mobile from "@/public/history/mobile.png";
import mongodb from "@/public/skills/mongo.png";
import githubActions from "@/public/skills/githubactions.png";

import parker from "@/public/history/parker.png";
import southTexas from "@/public/history/south-texas.png";

import shipstationLogo from "@/public/projects/shipstation.png";
import wayfairLogo from "@/public/projects/wayfair.png";
import losantLogo from "@/public/projects/losant.png";
import phsLogo from "@/public/projects/phs.png";
import stayeaseLogo from "@/public/projects/stayease.png";

export const links = [
  {
    hash: "#home",
    label: "Home",
  },
  {
    hash: "#skills",
    label: "Skills",
  },
  {
    hash: "#projects",
    label: "Projects",
  },
  {
    hash: "#experience",
    label: "Experience",
  },
  {
    hash: "#education",
    label: "Education",
  },
  {
    hash: "#certifications",
    label: "Certifications",
  },
  {
    hash: "#contact",
    label: "Contact",
  },
] as const;

export const phoneNumber = "+1 (432) 204-2304";

export const calendlyUrl = "https://calendly.com/adrianmadrid5245/1-hour-meeting";

export const socials = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/adrian-madrid-a7b66b2a2/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    href: "https://x.com/A_Madrid920304",
  },
  { name: "Telegram", icon: FaTelegram, href: "https://t.me/adrid34" },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://www.github.com/adrid34",
  },
] as const;

export const skills = [
  // Core Languages & Tools
  { name: "JavaScript", image: javascript },
  { name: "TypeScript", image: typescript },
  { name: "Python", image: python },
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "PHP", image: php },

  // Frontend Technologies
  { name: "React", image: react },
  { name: "Next.js", image: next },
  { name: "Tailwind CSS", image: tailwind },
  { name: "Redux", image: redux },

  // Backend Technologies
  { name: "Node.js", image: node },
  { name: "Express", image: express },

  // Databases
  { name: "PostgreSQL", image: postgresql },
  { name: "MySQL", image: mysql },
  { name: "Redis", image: redis },

  // DevOps & Cloud
  { name: "Git", image: git },
  { name: "Docker", image: docker },
  { name: "GitHub Actions", image: githubactions },
  { name: "AWS", image: aws },
  { name: "Azure", image: azure },

  // Testing & Linting
  { name: "Jest", image: jest },
  { name: "Playwright", image: playwright },
  { name: "PHPUnit", image: phpunit },
  { name: "Prettier", image: prettier },
  { name: "ESLint", image: eslint },

  // Real-Time & Messaging
  { name: "WebSocket", image: websocket },
  { name: "MQTT", image: mqtt },

  // AI / ML / APIs
  { name: "OpenAI API", image: openai },
  { name: "TensorFlow.js", image: tensorflow },

  // Other Tech
  { name: "GraphQL", image: graphql },
] as const;

export const projects = [
  {
    name: "ShipStation, Order Tracking Dashboard",
    image: shipstationLogo, // add your image import for ShipStation
    description:
      "Improved the order tracking dashboard for over 130,000 e-commerce merchants by refactoring legacy React class components to functional components with hooks, and introducing Redux Toolkit for state management.",
    tech: [
      { src: react, alt: "react" },
      { src: redux, alt: "redux toolkit" },
      { src: node, alt: "node.js" },
      { src: postgresql, alt: "postgresql" },
      { src: websocket, alt: "websocket" },
      { src: docker, alt: "docker" },
    ],
    tags: ["Real-time", "Performance", "Refactoring"],
    link: "https://www.shipstation.com/",
    code: "#",
  },

  {
    name: "Wayfair, Product Page Redesign",
    image: wayfairLogo, // add your image import for Wayfair
    description:
      "Led the migration from monolithic frontend architecture to modular React components with server-side rendering, reducing page load times by 25% and boosting conversion rates by 15%.",
    tech: [
      { src: react, alt: "react" },
      { src: next, alt: "next.js" },
      { src: node, alt: "node.js" },
      { src: graphql, alt: "graphql" },
      { src: redis, alt: "redis" },
      { src: aws, alt: "aws" },
    ],
    tags: ["SSR", "Performance", "Scalability"],
    link: "https://www.wayfair.com/",
    code: "#",
  },

  {
    name: "Losant, IoT Application Platform",
    image: losantLogo, // add your image import for Losant
    description:
      "Contributed to the development of a scalable IoT application platform using React and Node.js, focusing on real-time device data visualization and workflow automation.",
    tech: [
      { src: react, alt: "react" },
      { src: node, alt: "node.js" },
      { src: mongodb, alt: "mongodb" },
      { src: websocket, alt: "websocket" },
      { src: docker, alt: "docker" },
    ],
    tags: ["IoT", "Real-time", "Automation"],
    link: "https://www.losant.com/",
    code: "#",
  },

  {
    name: "Presbyterian Healthcare Services",
    image: phsLogo, // add your image import for Presbyterian Healthcare Services
    description:
      "Developed the public-facing Next.js website integrating Contentful CMS for real-time content updates, implementing reusable React components and Storybook for UI consistency, improving site performance and editorial workflows.",
    tech: [
      { src: next, alt: "next.js" },
      { src: react, alt: "react" },
      { src: tailwind, alt: "tailwind" },
      { src: vercel, alt: "vercel" },
    ],
    tags: ["CMS", "SSG", "Performance"],
    link: "https://www.phs.org/",
    code: "#",
  },

  {
    name: "StayEase Hotel Booking, Online Platform",
    image: stayeaseLogo, // add your image import for StayEase
    description:
      "Led development of the real-time hotel booking flow with Next.js and React, integrating WebSocket APIs for availability, Stripe for payments, and optimizing performance during peak traffic seasons.",
    tech: [
      { src: next, alt: "next.js" },
      { src: react, alt: "react" },
      { src: websocket, alt: "websocket" },
      { src: tailwind, alt: "tailwind" },
      { src: githubActions, alt: "github actions" },
    ],
    tags: ["Booking", "Real-time", "Payments"],
    link: "https://www.stayease.com/",
    code: "#",
  },
];

export const experiences = [
  {
    image: ledgent,
    title: "Senior Software Engineer",
    subtitle: "Ledgent Technology",
    dates: "Mar 2020 – Apr 2025",
    location: "Hollywood, FL",
    description: [
      "Architected and delivered scalable, high-performance web applications leveraging Next.js with advanced SSR, ISR, and dynamic routing, improving page load speed by 30% and boosting user engagement by 20%.",
      "Led the integration of real-time data pipelines using WebSocket and MQTT protocols, enabling live device monitoring across BLE networks with near-zero latency.",
      "Spearheaded AI-powered predictive analytics for device fault detection, utilizing TensorFlow.js and custom AI APIs to reduce downtime by 15%.",
      "Established robust DevOps pipelines with GitHub Actions and Azure Pipelines, automating CI/CD workflows, reducing deployment time by 40%, and ensuring zero-downtime releases on Vercel and Azure.",
      "Mentored and coached a team of 5+ developers, enforcing coding standards, reviewing PRs, and driving adoption of best practices including ESLint, Prettier, Jest, and Playwright.",
      "Collaborated closely with product owners and UX designers using Agile/Scrum methodologies to iteratively deliver new features, improving client satisfaction scores.",
    ],
  },
  {
    image: amazon,
    title: "Senior Software Engineer",
    subtitle: "Amazon",
    dates: "Aug 2017 – Feb 2020",
    location: "Seattle, WA",
    description: [
      "Developed critical components of Amazon's flagship e-commerce UI with React.js and Redux, implementing complex state management with Redux Thunk and Saga, resulting in 25% faster page responsiveness.",
      "Designed and implemented secure, scalable Node.js backend microservices integrating Stripe payment gateways and JWT-based authentication with RBAC to enhance security and compliance.",
      "Led performance tuning of PostgreSQL databases, optimizing queries and indexing strategies that improved transaction processing speed by 20%.",
      "Owned end-to-end feature delivery, including comprehensive unit, integration, and end-to-end testing with Jest, Enzyme, and Postman, significantly reducing post-release defects.",
      "Automated build and deployment processes using AWS CodePipeline, ECS, and ECR, supporting a high-velocity continuous delivery model.",
    ],
  },
  {
    image: avco,
    title: "Full Stack Engineer",
    subtitle: "Avco Consulting",
    dates: "May 2015 – Jul 2017",
    location: "Houston, TX",
    description: [
      "Led development of HIPAA-compliant healthcare applications using PHP Laravel and MySQL, ensuring strict data security and privacy standards for patient information.",
      "Collaborated with cross-functional teams including clinicians, designers, and QA to design intuitive scheduling and telemedicine features that increased user adoption by 18%.",
      "Drove agile transformation initiatives within the development team, introducing Kanban boards and daily stand-ups to enhance communication and accelerate delivery cycles.",
      "Provided mentorship and technical guidance to junior engineers, establishing a culture of continuous learning and code quality.",
    ],
  },
  {
    image: mobile,
    title: "Full Stack Developer",
    subtitle: "Mobile Programming LLC",
    dates: "May 2013 – Apr 2015",
    location: "New York, NY",
    description: [
      "Developed a responsive, user-centric hotel booking platform with HTML5, CSS3, and jQuery, integrating Google Maps API for enhanced geolocation functionality.",
      "Engineered backend services with PHP Laravel, leveraging Ratchet WebSockets for real-time updates and notifications, improving customer engagement metrics by 22%.",
      "Optimized PostgreSQL databases using table partitioning and Redis caching, accelerating critical queries by over 40%, ensuring smooth scaling under peak loads.",
      "Designed and implemented automated testing suites with PHPUnit and conducted rigorous performance testing using Apache JMeter, significantly increasing system reliability.",
    ],
  },
];

export const certifications = [
  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "2023",
    description:
      "The bearer of this certificate has passed the HackerRank role certification test",
    image: "/certificates/1.png",
    frameType: 2,
  },

  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    date: "2023",
    description: "JavaScript Algorithms and Data Structures",
    image: "/certificates/4.png",
    frameType: 3,
  },
  {
    name: "JavaScript Certificate",
    issuer: "HackerRank",
    date: "2023",
    description:
      "The bearer of this certificate has passed the HackerRank skill certification test",
    image: "/certificates/3.png",
    frameType: 4,
  },
  {
    name: "Unlocking the Power of JavaScript",
    issuer: "Scaler",
    date: "2023",
    description:
      "In recognition ofthe completion of the tutorial: JavaScript Course With Certification: Unlocking the Power of JavaScript",

    image: "/certificates/5.png",
    frameType: 1,
  },
  {
    name: "React Certificate",
    issuer: "HackerRank",
    date: "2023",
    description:
      "The bearer of this certificate has passed the HackerRank skill certification test",
    image: "/certificates/2.png",
    frameType: 2,
  },
] as const;

export const bio = [
  `Senior Software Engineer with 12+ years of experience building high-performance web apps using Next.js, React, and Node.js. Proven expertise in AI/ML integration, scalable architecture, and cloud-native development. Strong track record of delivering modern, reliable, and user-focused solutions.`,
  `Skilled in Agile, DevOps, and mentoring teams to deliver robust, scalable products. Passionate about leveraging modern technologies to solve real-world problems and drive business value.`,
] as const;

export const educations = [
  {
    school: "Parker University",
    location: "Dallas, TX",
    degree: "Bachelor's Degree in Computer Science",
    startDate: "Apr 2011",
    endDate: "Mar 2013",
    description:
      "Completed a Bachelor's degree program focused on Computer Science fundamentals and software development.",
  },
  {
    school: "South Texas College",
    location: "McAllen, TX",
    degree: "Associate's Degree in Computer Science",
    startDate: "Apr 2009",
    endDate: "Mar 2011",
    description:
      "Completed an Associate's degree covering foundational computer science topics and practical programming skills.",
  },
] as const;

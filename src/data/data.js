export const me = {
  first: "MD. IFTIAR",
  last: "RAFI",
  photo: "/rafi.jpg", // put your photo in /public/rafi.jpg
  photo2: "/rafi-2.jpg", // optional second photo for the footer
  email: "iftiarrafi@gmail.com",
  github: "https://github.com/iftiarrafi",
  leetcode: "https://leetcode.com/u/serjonsnow/",
  location: "Dhaka, Bangladesh",
};

export const education = [
  [
    "Rajshahi University of Engineering & Technology",
    "B.Sc. in Computer Science and Engineering",
    "2022 – 2026",
  ],
  ["Notre Dame College", "Higher Secondary Certificate", "2018 – 2020"],
  ["Willes Little Flower School and College", "Secondary School Certificate", "2009 – 2018"],
];

// thumb: put images in /public/projects/ — until then a placeholder is shown
export const projectGroups = [
  {
    title: "Systems & web",
    items: [
      {
        name: "Microservice E-commerce Backend",
        stack: "Express.js · Kafka · Docker",
        thumb: "/projects/microservice-ecommerce.png",
        text: "An e-commerce backend split into containerized services that talk through Kafka events, with rate limiting against traffic spikes.",
        link: "https://github.com/iftiarrafi/microservice-ecommerce-backend",
      },
      {
        name: "TrueCanvas",
        stack: "MERN · Redis · PyTorch · Flask",
        thumb: "projects/truecanvas.jpg",
        text: "A social platform for sharing only human-drawn art. A fine-tuned Vision Transformer, served from a Flask microservice to classify and prevent sharing AI generated art.",
        link: "https://github.com/iftiarrafi/True-Canvas",
      },
      {
        name: "Echo",
        stack: "Socket.io · Redis · Node.js",
        thumb: "projects/echo.jpg",
        text: "A real-time chat app over WebSockets, with Redis caching to ease the load on the database and JWT-secured traffic.",
        link: "https://github.com/iftiarrafi/Echo-ChatApp",
      },
      {
        name: "Musico",
        stack: "MERN · Redux Toolkit · Tailwind",
        thumb: "projects/musico.png",
        text: "A platform that connects fans with band members: event booking, chat, Stripe payments and an admin dashboard.",
        link: "https://github.com/iftiarrafi/Musico",
      },
    ],
  },
  {
    title: "Agentic AI Systems",
    items: [
      {
        name: "DATA AI Agent",
        stack: "LangGraph · PostgreSQL · ChatGroq",
        thumb: "/projects/data-ai-agent.jpg",
        text: "Multi-Agent Data Analyst & ETL System multi-agent AI system built with LangGraph, LangChain, and PostgreSQL.",
        link: "https://github.com/iftiarrafi/Data-AI-Agent",
      },
      {
        name: "Multi-Agent Blog Generator",
        stack: "LangGraph · LangChain · Groq",
        thumb: "/projects/multi-agent-blogger.jpg",
        text: "Research, writer and editor agents share one stateful workflow, pausing for a human to approve or send feedback.",
        link: "https://github.com/iftiarrafi/Multi-AI-Agent-Blog-Generator-using-LangGraph",
      },
      {
        name: "PDF Chat Bot",
        stack: "LangChain · Streamlit · Groq",
        thumb: "/projects/rag-pdf-chatbot.jpg",
        text: "A retrieval-augmented chatbot: parse, chunk, embed and search a PDF, then answer questions grounded in it.",
        link: "https://github.com/iftiarrafi/PDF-RAG-Bot",
      },
    ],
  },
];

export const toolkit = [
  ["Languages", "Python, C, C++, JavaScript, TypeScript, SQL"],
  [
    "Systems & web",
    "Node.js, Express, React, Next.js, Docker, Kafka, Redis, Nginx, Socket.io",
  ],
  [
    "ML & AI",
    "PyTorch, Keras, scikit-learn, OpenCV, NumPy, Pandas, LangChain, LangGraph",
  ],
];

export const milestones = [
  [
    "HackSpark, Intra-RUET Hackathon 2026",
    "Top 10 of 41 teams with a microservice e-commerce app and an AI chatbot.",
  ],
  [
    "NASA International Space Apps Challenge 2025",
    "Won “The Galactic Problem Solver” with Asteroid Odyssey.",
    "https://asteroid-odyssey.vercel.app/",
  ],
  [
    "LeetCode",
    "185+ problems: dynamic programming, graphs, backtracking, union-find, greedy.",
    me.leetcode,
  ],
];

export const community = [
  ["Content and Media Secretary", "RUET Computing Society, 2025–2026"],
  ["Promotion Secretary", "Onuronon Cultural Club, RUET, 2025–2026"],
];

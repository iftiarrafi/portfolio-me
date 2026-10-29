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
    title: "Systems & Web Applications",
    items: [
      {
        name: "TrueCanvas",
        stack: "MERN · Redis · PyTorch · Flask",
        thumb: "projects/truecanvas.jpg",
        text: "A social platform for sharing only human-drawn art. A fine-tuned Vision Transformer, served from a Flask microservice to classify and prevent sharing AI generated art.",
        link: "https://github.com/iftiarrafi/True-Canvas",
        video_link: "https://youtu.be/yKUEOZPR2UE"
      },
      {
        name: "Microservice E-commerce Backend",
        stack: "Express.js · Kafka · Docker",
        thumb: "/projects/microservice-ecommerce.png",
        text: "An e-commerce backend split into containerized services that talk through Kafka events, with rate limiting against traffic spikes.",
        link: "https://github.com/iftiarrafi/microservice-ecommerce-backend",
        video_link: "https://github.com/iftiarrafi/microservice-ecommerce-backend"
      },

      {
        name: "Echo",
        stack: "Socket.io · Redis · Node.js",
        thumb: "projects/echo.jpg",
        text: "A real-time chat app over WebSockets, with Redis caching to ease the load on the database and JWT-secured traffic.",
        link: "https://github.com/iftiarrafi/Echo-ChatApp",
        video_link: "https://youtu.be/49-qr4b13Pw"
      },
      {
        name: "Musico",
        stack: "MERN · Redux Toolkit · Tailwind",
        thumb: "projects/musico.png",
        text: "A platform that connects fans with band members: event booking, chat, Stripe payments and an admin dashboard.",
        link: "https://github.com/iftiarrafi/Musico",
        video_link: "https://github.com/iftiarrafi/Musico"
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
        video_link: "https://youtu.be/rlc12O6PXl0"
      },
      {
        name: "F.R.I.D.A.Y",
        stack: "LangGraph · FAISS · Google Embeddings · Streamlit ·  ChatGroq",
        thumb: "/projects/chatbot.png",
        text: "A full-fledged chatbot with RAG , Tools and Database for chat thread persistency",
        link: "https://github.com/iftiarrafi/F.R.I.D.A.Y",
        video_link: "https://youtu.be/xmeE2yC3Qz4"
      },
      {
        name: "Multi-Agent Blog Generator",
        stack: "LangGraph · LangChain · Groq",
        thumb: "/projects/multi-agent-blogger.jpg",
        text: "Research, writer and editor agents share one stateful workflow using Human-in-the-loop, pausing for a human to approve or send feedback.",
        link: "https://github.com/iftiarrafi/Multi-AI-Agent-Blog-Generator-using-LangGraph",
        video_link: "https://youtu.be/uS5QspuW0lY"
      },
      {
        name: "RAG Evaluation System",
        stack: "LangGraph · Deepeval · Groq",
        thumb: "/projects/rag_eval.jpg",
        text: "A evaluation lab for one RAG pipeline: ask questions about a PDF, score the answers with DeepEval metrics, and compare saved evaluation runs.",
        link: "https://github.com/iftiarrafi/Rag-Evaluation-System-with-DeepEval",
        video_link: "https://github.com/iftiarrafi/Rag-Evaluation-System-with-DeepEval"
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
    "210+ problems: dynamic programming, graphs, backtracking, union-find, greedy.",
    me.leetcode,
  ],
];

export const community = [
  ["Content and Media Secretary", "RUET Computing Society, 2025–2026"],
  ["Promotion Secretary", "Onuronon Cultural Club, RUET, 2025–2026"],
];

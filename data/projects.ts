export const projects = [
  {
    id: 1,
    title: "Retrospective Chat Application",
    description: "Created a real-time retrospective discussion platform using Spring Boot and WebSockets to facilitate smooth collaboration across remote teams.",
    image: "/images/retrospective.png",
    technologies: ["React.js", "Spring Boot", "MySQL", "WebSockets", "Spring Security"],
    hasMultipleRepos: true,
    repositories: [
      {
        label: "Frontend",
        url: "https://github.com/Dhanush653/Retrospect-Frontend-main"
      },
      {
        label: "Backend",
        url: "https://github.com/Dhanush653/Retrospect-Backend-main"
      }
    ],
  },
  {
    id: 2,
    title: "Book Store Application",
    description: "Developed a full-stack Book Store application with a Spring Boot backend and React frontend to provide a seamless shopping experience",
    image: "/images/bookstore.png",
    technologies: ["React.js", "Spring Boot", "MySQL", "Spring Security", "Bootstrap"],
    hasMultipleRepos: true,
    repositories: [
      {
        label: "Frontend",
        url: "https://github.com/Dhanush653/Book_Store-Application-Frontend"
      },
      {
        label: "Backend",
        url: "https://github.com/Dhanush653/BookStore-Application-backend"
      }
    ],
  },
  {
    id: 3,
    title: "Pothole Detection System",
    description: "Developed a pothole detection system using image processing techniques to identify and report road potholes for maintenance purposes.",
    image: "/images/pothole.jpg",
    technologies: ["Python", "YOLO", "Machine Learning", "OpenCV"],
    hasMultipleRepos: false,
    repositories: [
      {
        label: "Frontend",
        url: "https://github.com/Dhanush653/Pothole-Detection-And-Repair-Management-System"
      },
    ]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern portfolio website with animations and responsive design.",
    image: "/images/portfolio.webp",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    hasMultipleRepos: false,
    repositories: [
      {
        label: "Frontend",
        url: "https://github.com/Dhanush653/portfolio"
      },
    ]
  },
  {
    id: 5,
    title: "Static Gaming Website",
    description: "A static website for gaming enthusiasts to explore various games and related content.",
    image: "/images/game.webp",
    technologies: ["React","Material-UI", "CSS", "JavaScript"],
    hasMultipleRepos: false,
    repositories: [
      {
        label: "Frontend",
        url: "https://github.com/Dhanush653/Gaming-Website-Frontend"
      },
    ]
  }
];

"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Layers,
} from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      "React.js",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Hibernate",
      "FastAPI",
      "REST APIs",
      "Microservices Architecture",
      "RabbitMQ",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "MySQL",
      "Database Design",
      "ORM",
    ],
  },
  {
    title: "Tools & Testing",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "Selenium",
    ],
  },
  {
    title: "Foundations",
    icon: Layers,
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "SOLID Principles",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  relative bg-white rounded-xl p-6
                  shadow-sm hover:shadow-lg
                  transition-all
                "
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {group.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-3 py-1 text-sm rounded-full
                        border border-blue-200
                        text-blue-700 bg-blue-50
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

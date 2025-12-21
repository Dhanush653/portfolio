"use client";

import React, {useState} from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  const [openRepoId, setOpenRepoId] = useState<number | null>(null);

  const toggleRepo = (id: number) => {
    setOpenRepoId(prev => (prev === id ? null : id));
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={
                    project.image ||
                    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='192' viewBox='0 0 400 192'%3E%3Crect width='400' height='192' fill='%23e5e7eb'/%3E%3Ctext x='200' y='100' text-anchor='middle' font-family='Arial' font-size='24' fill='%236b7280'%3ENo Image%3C/text%3E%3C/svg%3E`
                  }
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='192' viewBox='0 0 400 192'%3E%3Crect width='400' height='192' fill='%23e5e7eb'/%3E%3Ctext x='200' y='100' text-anchor='middle' font-family='Arial' font-size='24' fill='%236b7280'%3E${project.title}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {project.hasMultipleRepos && project.repositories ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleRepo(project.id)}
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition cursor-pointer"
                    >
                      GitHub
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openRepoId === project.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {openRepoId === project.id && (
                      <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg overflow-hidden">
                        {project.repositories &&
                          project.repositories.map((repo) => (
                            <a
                              key={repo.label}
                              href={repo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                            >
                              {repo.label}
                            </a>
                          ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={project.repositories && project.repositories[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Dhanush653?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
          >
            View All Projects on GitHub
            <svg
              className="ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

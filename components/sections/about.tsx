"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Overview
            </h3>

            <div className="space-y-4 text-gray-700">
              <p>
                I work on the development and maintenance of web applications,
                contributing across both frontend and backend systems as part
                of end-to-end feature delivery.
              </p>

              <p>
                My work typically involves implementing application logic,
                integrating APIs, working with databases, and ensuring that
                features are stable and production-ready.
              </p>

              <p>
                I focus on writing understandable code, following established
                patterns, and collaborating effectively within development
                teams.
              </p>
            </div>
          </motion.div>

          {/* Right Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Application Development
              </div>
              <div className="text-gray-600 text-sm">
                Building and maintaining web applications
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Backend & APIs
              </div>
              <div className="text-gray-600 text-sm">
                Working with services, APIs, and data layers
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Code Quality
              </div>
              <div className="text-gray-600 text-sm">
                Readability, structure, and maintainability
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Team Collaboration
              </div>
              <div className="text-gray-600 text-sm">
                Working within teams and shared codebases
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
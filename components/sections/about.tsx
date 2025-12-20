"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get to know me</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                I'm a passionate full-stack web developer with over 3 years of experience
                creating digital solutions that make a difference. My journey in web development
                started with a curiosity about how websites work, and it has evolved into a
                career dedicated to crafting exceptional user experiences.
              </p>
              <p>
                I specialize in modern web technologies including React, Next.js, Node.js,
                and various databases. I believe in writing clean, maintainable code and
                staying up-to-date with the latest industry trends and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or sharing my knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Technologies</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header / Hero */}
      <header className="relative flex items-center justify-center h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center z-20"
        >
          <TypingAnimation className="text-6xl md:text-8xl font-bold tracking-tight">
            Ahmad Hijazi
          </TypingAnimation>
          <p className="mt-6 text-xl md:text-2xl text-gray-300">
            Software Engineer & Creative Thinker
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-tr from-purple-700 via-blue-900 to-black"
        />
      </header>
      {/* Navigation */}
      <nav className="fixed top-5 right-5 z-50">
        <ul className="menu menu-horizontal bg-gray-900 rounded-lg shadow-md space-x-4 p-2">
          <li>
            <a href="#about" className="hover:text-purple-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20 lg:px-32">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I’m Ahmad Hijazi, a software engineer who builds clean, performant,
            and beautiful web experiences. I love working with modern front-end
            stacks and am passionate about design, interaction, and performance
            optimization.
          </p>
        </motion.div>
      </section>
      {/* Projects Grid */}
      <section
        id="projects"
        className="py-20 px-6 md:px-20 lg:px-32 bg-gray-900"
      >
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", damping: 10 }}
          >
            <Card className="bg-gray-800 border border-gray-700 shadow-lg overflow-hidden">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-2">Project One</h3>
                <p className="text-gray-400">
                  Description of project one, the tech used, challenges solved.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", damping: 10 }}
          >
            <Card className="bg-gray-800 border border-gray-700 shadow-lg overflow-hidden">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
                <p className="text-gray-400">
                  Brief summary of project two, features, outcome.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", damping: 10 }}
          >
            <Card className="bg-gray-800 border border-gray-700 shadow-lg overflow-hidden">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-2">Project Three</h3>
                <p className="text-gray-400">
                  What this project involved, what’s special about it.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* Contact / Footer */}
      <footer id="contact" className="py-20 px-6 md:px-20 lg:px-32">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 mb-6">
            I’m currently open to opportunities. Let’s build something great
            together.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="btn btn-primary px-8 py-4 text-lg"
          >
            Say Hello
          </a>
        </motion.div>
      </footer>
    </div>
  );
}

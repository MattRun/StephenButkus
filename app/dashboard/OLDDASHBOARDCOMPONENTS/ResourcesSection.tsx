'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const resourcesLinks = [
  { title: "Exam Dates", path: "/dashboard/pages/resources/examdates" },
  { title: "Certification Info", path: "/dashboard/pages/resources/certificationinfo" },
  { title: "FAQ", path: "/dashboard/pages/resources/faq" }
];

export default function ResourcesSection() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Resources</h2>
        <div className="space-y-6">
          {resourcesLinks.map((resource, index) => (
            <motion.div
              key={index}
              className="text-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link href={resource.path}>
                <a className="bg-blue-600 text-white px-8 py-4 rounded hover:bg-blue-700 transition">
                  {resource.title}
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

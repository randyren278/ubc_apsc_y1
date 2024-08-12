"use client";
import React from "react";

// Example posts data
const posts = [
  {
    title: "Latest Updates",
    date: "August 11, 2024",
    content:
      "We are excited to announce new resources for your first-year engineering courses! Check out the latest lecture notes, practice exams, and more to help you excel in your studies. Currently PHYS 157 and 158 are live!",
  },
  // Add more posts here
];

export default function HomePage() {
  return (
    <div className="p-8 bg-neutral-900 min-h-screen">
      <h1 className="text-4xl font-bold text-white">
        Welcome to APSC Buddy 👋🏻
      </h1>
      <p className="mt-4 text-lg  text-gray-300">
        Your best first-year engineering resource.
      </p>

      {/* Blog Posts Section */}
      <div className="mt-10 space-y-8">
        {posts.map((post, index) => (
          <div key={index} className="p-6 bg-neutral-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold  text-white">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              {post.date}
            </p>
            <p className="mt-4 text-gray-300">
              {post.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

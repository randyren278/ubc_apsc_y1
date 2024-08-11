"use client";
import React from "react";

export default function HomePage() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-neutral-900 min-h-screen">
      <h1 className="text-4xl font-bold text-black dark:text-white">
        Welcome to APSC Buddy
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Your best first-year engineering resource.
      </p>
    </div>
  );
}

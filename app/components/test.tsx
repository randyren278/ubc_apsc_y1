"use client";
import React from "react";

export default function TestPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        PDF Access Test
      </h1>
      <a
        href="/test.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 underline"
      >
        Open Test PDF
      </a>
    </div>
  );
}


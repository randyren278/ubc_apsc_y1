"use client";
import React from "react";

export default function CoursesPage() {
  const courses = [
    "Math 100",
    "Math 101",
    "Math 152",
    "APSC 100",
    "APSC 101",
    "APSC 160",
    "Chem 154",
    "Phys 157",
    "Phys 158",
    "Phys 159 Lab",
    "Statics 170",
    "WRDS 150B",
  ];

  return (
    <div className="flex flex-wrap justify-center items-center p-8 bg-gray-100 dark:bg-neutral-900 min-h-screen">
      {courses.map((course, idx) => (
        <div
          key={idx}
          className="w-full md:w-1/2 lg:w-1/3 p-4"
        >
          <div className="bg-white dark:bg-neutral-800 shadow-md rounded-lg p-6 flex items-center justify-center text-center h-32 transition duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-neutral-700 hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {course}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";
import React from "react";

export default function CoursesPage() {
  const courses = [
    "Math 100",
    "Math 101",
    "Physics 100",
    "Physics 101",
    "Chemistry 100",
    "Chemistry 101",
    "Engineering Design 100",
    "Engineering Design 101",
    "Computer Science 100",
    "Materials 100",
    "Statics 100",
    "Dynamics 100",
  ];

  return (
    <div className="flex flex-wrap justify-center items-center p-8 bg-gray-100 dark:bg-neutral-900 min-h-screen">
      {courses.map((course, idx) => (
        <div
          key={idx}
          className="w-full md:w-1/2 lg:w-1/3 p-4"
        >
          <div className="bg-white dark:bg-neutral-800 shadow-md rounded-lg p-6 flex items-center justify-center text-center h-32">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {course}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

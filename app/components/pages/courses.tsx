"use client";
import React from "react";

interface CoursesPageProps {
  setTab: (tab: string) => void; // Define the type for setTab prop
}

export default function CoursesPage({ setTab }: CoursesPageProps) {
  const courses = [
    { name: "Math 100", id: "math-100" },
    { name: "Math 101", id: "math-101" },
    { name: "Math 152", id: "math-152" },
    { name: "APSC 100", id: "apsc-100" },
    { name: "APSC 101", id: "apsc-101" },
    { name: "APSC 160", id: "apsc-160" },
    { name: "Chem 154", id: "chem-154" },
    { name: "Phys 157", id: "phys-157" },
    { name: "Phys 158", id: "phys-158" },
    { name: "Phys 159 Lab", id: "phys-159" },
    { name: "Phys 170", id: "phys-170" },
    { name: "WRDS 150B", id: "wrds-150b" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center p-8 bg-neutral-900 min-h-screen">
      {courses.map((course, idx) => (
        <div
          key={idx}
          className="w-full md:w-1/2 lg:w-1/3 p-4"
          onClick={() => setTab(course.id)} // Set the tab on click
        >
          <div className="bg-neutral-800 shadow-md rounded-lg p-6 flex items-center justify-center text-center h-32 transition duration-200 ease-in-out hover:bg-neutral-700 hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold text-white">
              {course.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";
import React from "react";

interface CourseTabProps {
  course: string;
}

export default function CourseTab({ course }: CourseTabProps) {
  const renderContent = () => {
    switch (course) {
      case "math-100":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Lecture Notes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Math 100 lecture notes...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Practice Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Math 100 practice questions...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Exams
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Math 100 exams...
            </p>
          </div>
        );
      case "math-101":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Lecture Notes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Math 101 lecture notes...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Practice Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Math 101 practice questions...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Exams
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Math 101 exams...
            </p>
          </div>
        );
      case "math-152":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Lecture Notes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Math 152 lecture notes...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Practice Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Math 152 practice questions...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Exams
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Math 152 exams...
            </p>
          </div>
        );
      case "apsc-100":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Lecture Notes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for APSC 100 lecture notes...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Practice Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for APSC 100 practice questions...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Exams
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for APSC 100 exams...
            </p>
          </div>
        );
      case "apsc-101":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Lecture Notes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for APSC 101 lecture notes...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Practice Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for APSC 101 practice questions...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Exams
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for APSC 101 exams...
            </p>
          </div>
        );
      case "apsc-160":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Lecture Notes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for APSC 160 lecture notes...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Practice Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for APSC 160 practice questions...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Exams
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for APSC 160 exams...
            </p>
          </div>
        );
      case "chem-154":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Lecture Notes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Chem 154 lecture notes...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Practice Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Chem 154 practice questions...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Exams
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Chem 154 exams...
            </p>
          </div>
        );
      case "phys-157":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Lecture Notes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Phys 157 lecture notes...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Practice Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Phys 157 practice questions...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Exams
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Phys 157 exams...
            </p>
          </div>
        );
      case "phys-158":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Lecture Notes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Phys 158 lecture notes...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Practice Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Phys 158 practice questions...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Exams
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Phys 158 exams...
            </p>
          </div>
        );
      case "phys-159":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Lecture Notes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Phys 159 lecture notes...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Practice Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Phys 159 practice questions...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Exams
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Phys 159 exams...
            </p>
          </div>
        );
      case "phys-170":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Lecture Notes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Phys 170 lecture notes...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Practice Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Phys 170 practice questions...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Exams
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for Phys 170 exams...
            </p>
          </div>
        );
      case "wrds-150b":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Lecture Notes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for WRDS 150B lecture notes...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Practice Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for WRDS 150B practice questions...
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Exams
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content for WRDS 150B exams...
            </p>
          </div>
        );
      default:
        return <p>No content available for this course.</p>;
    }
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-neutral-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        {course.replace("-", " ").toUpperCase()}
      </h1>
      {renderContent()}
    </div>
  );
}

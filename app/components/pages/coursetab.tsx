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
            <ul className="list-none">
              {[
                "PHYS 157 Week 1-1.pdf",
                "PHYS 157 Week 1-2.pdf",
                "PHYS 157 Week 2-1.pdf",
                "PHYS 157 Week 2-2.pdf",
                "PHYS 157 Week 2-3.pdf",
                "PHYS 157 Week 3-1.pdf",
                "PHYS 157 Week 3-2.pdf",
                "PHYS 157 Week 3-3.pdf",
                "PHYS 157 Week 4-1.pdf",
                "PHYS 157 Week 4-2.pdf",
                "PHYS 157 Week 4-3.pdf",
                "PHYS 157 Week 5-1.pdf",
                "PHYS 157 Week 5-2.pdf",
                "PHYS 157 Week 6-1.pdf",
                "PHYS 157 Week 6-2.pdf",
                "PHYS 157 Week 6-3.pdf",
                "PHYS 157 Week 7-1.pdf",
                "PHYS 157 Week 7-2.pdf",
                "PHYS 157 Week 7-3.pdf",
                "PHYS 157 Week 8-1.pdf",
                "PHYS 157 Week 8-2.pdf",
                "PHYS 157 Week 8-3.pdf",
                "PHYS 157 Week 9-1.pdf",
                "PHYS 157 Week 9-2.pdf",
                "PHYS 157 Week 9-3.pdf",
                "PHYS 157 Week 10-1.pdf",
                "PHYS 157 Week 10-2.pdf",
                "PHYS 157 Week 10-3.pdf",
                "PHYS 157 Week 11-1.pdf",
                "PHYS 157 Week 12-1.pdf",
                "PHYS 157 Week 12-2.pdf",
                "PHYS 157 Week 12-3.pdf",
                "PHYS 157 Week 13-1.pdf",
                "PHYS 157 Week 13-2.pdf",
                "PHYS 157 Week 13-3.pdf",
                "PHYS 157 Week 14-1.pdf",
                "PHYS 157 Week 14-2.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/phys157/lecture_notes/${fileName}`}
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Tutorials
            </h2>
            <ul className="list-none">
              {[
                "tutorial1sol.pdf",
                "tutorial2sol.pdf",
                "tutorial3sol.pdf",
                "tutorial4sol.pdf",
                "tutorial5sol.pdf",
                "tutorial6sol.pdf",
                "tutorial7sol.pdf",
                "tutorial8sol.pdf",
                "tutorial9sol.pdf",
                "tutorial10sol.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/phys157/tutorials/${fileName}`}
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName}
                  </a>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Written Homework
            </h2>
            <ul className="list-none">
              {[
                "HW1_sol.pdf",
                "HW2_sol.pdf",
                "HW3_sol.pdf",
                "HW4_sol.pdf",
                "HW5_sol.pdf",
                "HW6_sol.pdf",
                "HW7_sol.pdf",
                "HW8_sol.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/phys157/written_hw/${fileName}`}
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName}
                  </a>
                </li>
              ))}
            </ul>
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
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-decoration: underline">
        {course.replace("-", " ").toUpperCase()}
      </h1>
      {renderContent()}
    </div>
  );
}

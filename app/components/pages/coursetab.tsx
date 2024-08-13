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
            <h2 className="text-2xl font-semibold  text-white">
              Math Assignments
            </h2>
            <ul className="list-none">
              {["A1(A).pdf", "A2(A).pdf", "A3(A).pdf", "A4(A).pdf"].map(
                (fileName, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href={`/math100/math assignments/${fileName}`}
                      className="text-blue-500 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {fileName.replace(".pdf", "")}
                    </a>
                  </li>
                )
              )}
            </ul>

            <h2 className="text-2xl font-semibold  text-white">Textbook</h2>
            <ul className="list-none">
              {["calculus 1 textbook.pdf"].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/math100/textbook/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold  text-white">Problem Book</h2>
            <ul className="list-none">
              {["calculus 1 problems.pdf"].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/math100/textbook/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      case "math-101":
        return (
          <div>
            <h2 className="text-2xl font-semibold  text-white">
              Math Assignments
            </h2>
            <ul className="list-none">
              {[
                "A1(A)sol.pdf",
                "A2(A)sol.pdf",
                "A3(A)sol.pdf",
                "A4(A)sol.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/math101/math assignments/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold  text-white">Textbook</h2>
            <ul className="list-none">
              {["calculus 2 textbook.pdf"].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/math 101/textbook/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold  text-white">Problem Book</h2>
            <ul className="list-none">
              {["calculus 2 problems.pdf"].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/math 101/textbook/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      case "math-152":
        return (
          <div>
            <h2 className="text-2xl font-semibold  text-white">
              Lecture Notes
            </h2>
            <ul className="list-none">
              {["math152 student lecture notes.pdf"].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/math 152/lecture notes/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold  text-white">Textbook</h2>
            <ul className="list-none">
              {["math152 textbook.pdf"].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/math 152/textbook/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold  text-white">Labs</h2>
            <ul className="list-none">
              {[
                "lab1.pdf",
                "lab2.pdf",
                "lab3.pdf",
                "lab4.pdf",
                "lab5.pdf",
                "lab6.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/math 152/labs/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      case "apsc-100":
        return (
          <div>
            <h2 className="text-2xl font-semibold  text-white">
              Module Content
            </h2>
            <ul className="list-none">
              {[
                "Cardboard chair poster.png",
                "Bike Lane Recommendation.pdf",
                "H.O.L.D. Ease Bottle & Can Opener.png",
                "HOLD Technical Memo.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/apsc100/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "").replace(".png", "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
        case "apsc-101":
          return (
            <div>
              <h2 className="text-2xl font-semibold  text-white">
                Module Content
              </h2>
              <ul className="list-none">
                {[
                  "EOI.pdf",
                  "Eposter.pdf",
                  "Van Anda Final PPTX.pdf",
                  "Final Spreadsheet.xlsx",
                ].map((fileName, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href={`/apsc101/${fileName}`}
                      className="text-blue-500 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {fileName.replace(".pdf", "").replace(".xlsx", "")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
      case "apsc-160":
        return (
          <div>
            <h2 className="text-2xl font-semibold  text-white">
              Online Programming in C Resources
            </h2>
            <p className=" text-gray-300">
              W3Schools, LeetCode, Code Academy, HackerRank, and Tinkercad (for arduino)
            </p>
          </div>
        );
      case "chem-154":
        return (
          <div>
            <h2 className="text-2xl font-semibold  text-white">
              Lecture Notes
            </h2>
            <ul className="list-none">
              {[
                "Lecture 1.pdf",
                "Lecture 2.pdf",
                "Lecture 3-1.pdf",
                "Lecture 3.pdf",
                "Lecture 4.pdf",
                "Lecture 5.pdf",
                "Lecture 6.pdf",
                "Lecture 7.pdf",
                "Lecture 8.pdf",
                "Lecture 9.pdf",
                "Lecture 10.pdf",
                "Lecture 11.pdf",
                "Lecture 12.pdf",
                "Lecture 13.pdf",
                "Lecture 14.pdf",
                "Lecture 15.pdf",
                "Lecture 16.pdf",
                "Lecture 17.pdf",
                "Lecture 18.pdf",
                "Lecture 19.pdf",
                "Lecture 20.pdf",
                "Lecture 21-1.pdf",
                "Lecture 21.pdf",
                "Lecture 22.pdf",
                "Lecture 23.pdf",
                "Lecture 24.pdf",
                "Lecture 25.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/chem154/lecture_notes/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold  text-white">
              Practice Questions
            </h2>
            <ul className="list-none">
              {[
                "CHEM154-WS-Unit 1_KEY.pdf",
                "CHEM154-WS-Unit 2_KEY.pdf",
                "CHEM154-WS-Unit 3_KEY.pdf",
                "CHEM154-WS-Unit 4_KEY.pdf",
                "CHEM154-WS-Unit 5_KEY.pdf",
                "CHEM154-WS-Unit 6_KEY.pdf",
                "CHEM154-WS-Unit 7_KEY.pdf",
                "CHEM154-WS-Unit 8_KEY.pdf",
                "CHEM154-WS-Unit 9_KEY.pdf",
                "CHEM154-WS-Unit 10_KEY.pdf",
                "CHEM154-WS-Unit 11_KEY.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/chem154/worksheets/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold  text-white">Exams</h2>
            <ul className="list-none">
              {[
                "CHEM_154_Midterm_Exam_Solutions.pdf",
                "CHEM154_Final_Solutions.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/chem154/exams/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      case "phys-157":
        return (
          <div>
            <h2 className="text-2xl font-semibold  text-white">
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
                    className="text-blue-500 hover:text-blue-700    "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold  text-white">Tutorials</h2>
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
                    className="text-blue-500 hover:text-blue-700    "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName}
                  </a>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-semibold  text-white">
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
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName}
                  </a>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-semibold  text-white">Exams</h2>
            <p className=" text-gray-300">Content for Phys 157 exams...</p>
          </div>
        );

      case "phys-158":
        return (
          <div>
            <h2 className="text-2xl font-semibold  text-white">
              Lecture Notes
            </h2>
            <ul className="list-none">
              {[
                "Week 01-1 PHYS 158-2024.pdf",
                "Week 01-2 PHYS 158-2024.pdf",
                "Week 01-3 PHYS 158-2024.pdf",
                "Week 02-1 PHYS 158-2024.pdf",
                "Week 02-2 PHYS 158-2024.pdf",
                "Week 02-3 PHYS 158-2024.pdf",
                "Week 03-1 PHYS 158.pdf",
                "Week 03-2 PHYS 158.pdf",
                "Week 03-3 PHYS 158.pdf",
                "Week 4-1 PHYS 158.pdf",
                "Week 4-2 PHYS 158.pdf",
                "Week 4-3 PHYS 158.pdf",
                "Week 5-1 PHYS 158-2024.pdf",
                "Week 5-2 PHYS 158-2024.pdf",
                "Week 5-3 PHYS 158-2024.pdf",
                "Week 06-1 PHYS 158-2024.pdf",
                "Week 06-2 PHYS 158-2024.pdf",
                "Week 07-1 PHYS 158-2024.pdf",
                "Week 07-2 PHYS 158-2024.pdf",
                "Week 07-3 PHYS 158-2024.pdf",
                "Week 08-1 PHYS 158-2024.pdf",
                "Week 08-2 PHYS 158-2024.pdf",
                "Week 08-3 PHYS 158-2024.pdf",
                "Week 09-1 PHYS 158-2024.pdf",
                "Week 09-2 PHYS 158-2024.pdf",
                "Week 09-3 PHYS 158-2024.pdf",
                "Week 10-1 PHYS 158-2024.pdf",
                "Week 10-2 PHYS 158-2024.pdf",
                "Week 10-3 PHYS 158-2024.pdf",
                "Week 11-1 PHYS 158-2024.pdf",
                "Week 11-2 PHYS 158-2024.pdf",
                "Week 12-1 PHYS 158-2024.pdf",
                "Week 12-2 PHYS 158-2024.pdf",
                "Week 12-3 PHYS 158-2024.pdf",
                "Week 13-1 PHYS 158-2024.pdf",
                "Week 13-2 PHYS 158-2024.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/phys158/lecture_notes/${fileName}`}
                    className="text-blue-500 hover:text-blue-700    "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold  text-white">Tutorials</h2>
            <ul className="list-none">
              {[
                "Week2_solutions.pdf",
                "Week3_Solutions.pdf",
                "Week4_Solutions.pdf",
                "Week5_Solutions.pdf",
                "Week6_Solutions.pdf",
                "Week7_solutions.pdf",
                "Week8_Solutions.pdf",
                "Week9 - Solutions.pdf",
                "Week10 - Solutions.pdf",
                "Week11 - Solutions.pdf",
                "Week12 - Solutions.pdf",
                "Week13_solutions.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/phys158/tutorials/${fileName}`}
                    className="text-blue-500 hover:text-blue-700    "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}{" "}
                    {/* Remove the .pdf extension in display */}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold  text-white">
              Written Homework
            </h2>
            <ul className="list-none">
              {[
                "written_hw1.pdf",
                "written_hw2.pdf",
                "written_hw3.pdf",
                "written_hw4.pdf",
                "written_hw5.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/phys158/written_hw/${fileName}`}
                    className="text-blue-500 hover:text-blue-700    "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}{" "}
                    {/* Remove the .pdf extension in display */}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold  text-white">Exams</h2>
            <p className=" text-gray-300">Content for Phys 158 exams...</p>
          </div>
        );
      case "phys-159":
        return (
          <div>
            <h2 className="text-2xl font-semibold  text-white">Labs</h2>
            <ul className="list-none">
              {[
                "LAB-1.pdf",
                "LAB-2.pdf",
                "LAB-3.pdf",
                "LAB-4.pdf",
                "LAB-5.pdf",
                "LAB-6.pdf",
                "LAB-7.pdf",
                "LAB-8.pdf",
                "LAB-9.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/phys159/${fileName}`}
                    className="text-blue-500 hover:text-blue-700    "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}{" "}
                    {/* Remove the .pdf extension in display */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      case "phys-170":
        return (
          <div>
            <h2 className="text-2xl font-semibold  text-white">
              Lecture Notes
            </h2>
            <ul className="list-none">
              {[
                "PHYS 170 Week 01-1.pdf",
                "PHYS 170 Week 01-2.pdf",
                "PHYS 170 Week 01-3.pdf",
                "PHYS 170 Week 02-1.pdf",
                "PHYS 170 Week 02-2.pdf",
                "PHYS 170 Week 02-3.pdf",
                "PHYS 170 Week 03-1.pdf",
                "PHYS 170 Week 03-2.pdf",
                "PHYS 170 Week 03-3.pdf",
                "PHYS 170 Week 04-1.pdf",
                "PHYS 170 Week 04-2.pdf",
                "PHYS 170 Week 04-3.pdf",
                "PHYS 170 Week 05-1.pdf",
                "PHYS 170 Week 05-2.pdf",
                "PHYS 170 Week 05-3.pdf",
                "PHYS 170 Week 06-1.pdf",
                "PHYS 170 Week 06-2.pdf",
                "PHYS 170 Week 06-3.pdf",
                "PHYS 170 Week 07-1.pdf",
                "PHYS 170 Week 07-2.pdf",
                "PHYS 170 Week 07-3.pdf",
                "PHYS 170 Week 08-1.pdf",
                "PHYS 170 Week 08-2.pdf",
                "PHYS 170 Week 08-3.pdf",
                "PHYS 170 Week 09-1.pdf",
                "PHYS 170 Week 09-2.pdf",
                "PHYS 170 Week 09-3.pdf",
                "PHYS 170 Week 10-1.pdf",
                "PHYS 170 Week 10-2.pdf",
                "PHYS 170 Week 10-3.pdf",
                "PHYS 170 Week 11-1.pdf",
                "PHYS 170 Week 11-2.pdf",
                "PHYS 170 Week 12-1.pdf",
                "PHYS 170 Week 12-2.pdf",
                "PHYS 170 Week 12-3.pdf",
                "PHYS 170 Week 13-1.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/phys170/lecture_notes/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}{" "}
                    {/* Remove the .pdf extension in display */}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold  text-white">Tutorials</h2>
            <ul className="list-none">
              {[
                "tutorial 1.pdf",
                "tutorial 2.pdf",
                "tutorial 3.pdf",
                "tutorial 4.pdf",
                "tutorial 5.pdf",
                "tutorial 6.pdf",
                "tutorial 7.pdf",
                "tutorial 8.pdf",
                "tutorial 9.pdf",
                "tutorial 10.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/phys170/tutorial/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}{" "}
                    {/* Remove the .pdf extension in display */}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold  text-white">Exams</h2>
            <ul className="list-none">
              {[
                "midterm exam questions.pdf",
                "midterm exam sol.pdf",
                "final exam questions.pdf",
                "final exam sol.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/phys170/exams/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}{" "}
                    {/* Remove the .pdf extension in display */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      case "wrds-150b":
        return (
          <div>
            <h2 className="text-2xl font-semibold  text-white">Assessments</h2>
            <ul className="list-none">
              {[
                "ILA Reader Response.pdf",
                "ILA Research and Responsibility.pdf",
                "Proposal and Annotated Bibliography.pdf",
                "WRDS 150B FInal Paper.pdf",
              ].map((fileName, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/wrds150b/assessments/${fileName}`}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fileName.replace(".pdf", "")}{" "}
                    {/* Remove the .pdf extension in display */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return <p>No content available for this course.</p>;
    }
  };

  return (
    <div className="p-8 bg-neutral-900 min-h-screen">
      <h1 className="text-3xl font-bold  text-white mb-6 text-decoration: underline">
        {course.replace("-", " ").toUpperCase()}
      </h1>
      {renderContent()}
    </div>
  );
}

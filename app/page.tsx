"use client";
import React, { useState } from "react";
import SidebarDemo from "./components/bar";
import HomePage from "./components/pages/home";
import CoursesPage from "./components/pages/courses";
import PracticePage from "./components/pages/practice";
import ExamsPage from "./components/pages/exams";
import CourseTab from "./components/pages/coursetab";

export default function MainPage() {
  const [tab, setTab] = useState<string>("home"); // Default tab is home

  const renderContent = () => {
    switch (tab) {
      case "courses":
        return <CoursesPage setTab={setTab} />; // Pass setTab to CoursesPage
      case "practice":
        return <PracticePage />;
      case "exams":
        return <ExamsPage />;
      default:
        if (tab.startsWith("math") || tab.startsWith("apsc") || tab.startsWith("chem") || tab.startsWith("phys") || tab.startsWith("wrds")) {
          return <CourseTab course={tab} />; // Render the course-specific tab if a course ID is set
        }
        return <HomePage />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <SidebarDemo setTab={setTab} />
      <div className="flex-1 p-8 ml-12  bg-gray-100 dark:bg-neutral-900 ">
        {renderContent()}
      </div>
    </div>
  );
}

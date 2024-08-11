"use client";
import React, { useState } from "react";
import SidebarDemo from "./components/bar";
import HomePage from "./components/pages/home";
import CoursesPage from "./components/pages/courses";
import PracticePage from "./components/pages/practice";
import ExamsPage from "./components/pages/exams";

export default function MainPage() {
  const [tab, setTab] = useState("home"); // Default to home tab

  const renderContent = () => {
    switch (tab) {
      case "courses":
        return <CoursesPage />;
      case "practice":
        return <PracticePage />;
      case "exams":
        return <ExamsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SidebarDemo setTab={setTab} />

      {/* Main Content Area */}
      <div className="flex-1 p-8 ml-64 bg-gray-100 dark:bg-neutral-900">
        {renderContent()}
      </div>
    </div>
  );
}

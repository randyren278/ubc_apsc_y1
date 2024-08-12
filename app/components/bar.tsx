"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody } from "./ui/sidebar";
import { IconBook, IconPencil, IconCertificate, IconSchool } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Define the type for the setTab prop
interface SidebarDemoProps {
  setTab: (tab: string) => void;
}

export function SidebarDemo({ setTab }: SidebarDemoProps) {
  const links = [
    {
      label: "Courses",
      tab: "courses", // Tab name for Courses
      icon: (
        <IconBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Practice",
      tab: "practice", // Tab name for Practice
      icon: (
        <IconPencil className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Exams",
      tab: "exams", // Tab name for Exams
      icon: (
        <IconCertificate className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <div className="flex h-screen w-64 fixed">
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100 dark:bg-neutral-800">
        <div onClick={() => setTab("home")} className="cursor-pointer">
          <div className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-md">
            <IconSchool className="text-black dark:text-white h-5 w-5 flex-shrink-0" />
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="ml-4 font-medium text-black dark:text-white whitespace-pre"
            >
              APSC Buddy
            </motion.span>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          {links.map((link, idx) => (
            <div
              key={idx}
              onClick={() => setTab(link.tab)}
              className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-md cursor-pointer"
            >
              {link.icon}
              <span className="ml-4 text-neutral-700 dark:text-neutral-200">
                {link.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarDemo;

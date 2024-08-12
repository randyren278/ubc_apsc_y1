"use client";
import React, { useState } from "react";
import { IconBook, IconPencil, IconCertificate, IconSchool } from "@tabler/icons-react";
import { motion } from "framer-motion";

interface SidebarDemoProps {
  setTab: (tab: string) => void;
}

export function SidebarDemo({ setTab }: SidebarDemoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const links = [
    {
      label: "Courses",
      tab: "courses",
      icon: (
        <IconBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Practice",
      tab: "practice",
      icon: (
        <IconPencil className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Exams",
      tab: "exams",
      icon: (
        <IconCertificate className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <div
      className={`flex h-screen fixed transition-all duration-300 ${isHovered ? 'w-64' : 'w-13'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100 dark:bg-neutral-800">
        <div onClick={() => setTab("home")} className="cursor-pointer">
          <div className="flex items-center p-4 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-md">
            <IconSchool className="text-black dark:text-white h-5 w-5 flex-shrink-0" />
            {isHovered && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-4 font-medium text-black dark:text-white whitespace-pre text-sm"
              >
                APSC Buddy
              </motion.span>
            )}
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          {links.map((link, idx) => (
            <div
              key={idx}
              onClick={() => setTab(link.tab)}
              className="flex items-center p-4 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-md cursor-pointer"
            >
              {link.icon}
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-4 text-neutral-700 dark:text-neutral-200 text-sm"
                >
                  {link.label}
                </motion.span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarDemo;

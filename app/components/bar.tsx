"use client";
import React, { useState } from "react";
import {
  IconBook,
  IconPencil,
  IconCertificate,
  IconSchool,
  IconMail,
} from "@tabler/icons-react";
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
      icon: <IconBook className="   text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
  ];

  return (
    <div
      className={`flex h-screen fixed transition-all duration-300 ${
        isHovered ? "w-64" : "w-13"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-neutral-800">
        <div onClick={() => setTab("home")} className="cursor-pointer">
          <div className="flex items-center p-4 hover:bg-neutral-700 rounded-md">
            <IconSchool className="text-white h-5 w-5 flex-shrink-0" />
            {isHovered && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-4 font-medium text-white whitespace-pre text-sm"
              >
                APSC Buddy
              </motion.span>
            )}
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2 flex-grow">
          {links.map((link, idx) => (
            <div
              key={idx}
              onClick={() => setTab(link.tab)}
              className="flex items-center p-4  hover:bg-neutral-700 rounded-md cursor-pointer"
            >
              {link.icon}
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-4    text-neutral-200 text-sm"
                >
                  {link.label}
                </motion.span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <div className="flex items-center p-4  hover:bg-neutral-700 rounded-md cursor-pointer">
            <a
              href="mailto:randyren278@gmail.com"
              className="flex items-center  hover:bg-neutral-700 rounded-md cursor-pointer    text-neutral-200 hover:text-neutral-100"
            >
              <IconMail className="h-5 w-5 flex-shrink-0" />
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-3    text-neutral-200 whitespace-pre text-sm"
                >
                  Contact Me
                </motion.span>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarDemo;

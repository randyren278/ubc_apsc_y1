"use client";
import React, { useState } from "react";
import {
  IconBook,
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
      icon: <IconBook className="text-neutral-200 h-5 w-5 flex-shrink-0" />,
      href: null,  // No href for courses
    },
    {
      label: "Contact Me",
      tab: null,  // No tab change for Contact Me
      icon: <IconMail className="text-neutral-200 h-5 w-5 flex-shrink-0" />,
      href: "mailto:randyren278@gmail.com",  // Mailto link for Contact Me
    }
  ];

  const handleLinkClick = (link: any) => {
    if (link.href) {
      window.location.href = link.href;  // Handle mailto link
    } else if (link.tab) {
      setTab(link.tab);  // Handle tab change
    }
  };

  return (
    <div
      className={`flex h-auto fixed${isHovered ? "w-64" : "w-13"}`}
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
              onClick={() => handleLinkClick(link)}
              className="flex items-center p-4 hover:bg-neutral-700 rounded-md cursor-pointer"
            >
              {link.icon}
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-4 text-neutral-200 text-sm"
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

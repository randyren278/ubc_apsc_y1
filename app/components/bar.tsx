"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody } from "./ui/sidebar";
import {
  IconBook,
  IconPencil,
  IconCertificate,
  IconSchool,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function SidebarDemo() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Courses",
      href: "/courses", // Link to the Courses page
      icon: (
        <IconBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Practice",
      href: "/practice", // Link to the Practice page
      icon: (
        <IconPencil className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Exams",
      href: "/exams", // Link to the Exams page
      icon: (
        <IconCertificate className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <div className="flex h-screen w-64">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Link href="/home" passHref>
              <div className="font-normal flex items-center p-2 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-md cursor-pointer">
                <IconSchool className="text-black dark:text-white h-5 w-5 flex-shrink-0" />
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  className="ml-2 font-medium text-black dark:text-white whitespace-pre"
                >
                  APSC Buddy
                </motion.span>
              </div>
            </Link>

            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <Link key={idx} href={link.href} passHref>
                  <div className="font-normal flex space-x-2 items-center p-2 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-md cursor-pointer">
                    {link.icon}
                    <span className="ml-4 text-neutral-700 dark:text-neutral-200">
                      {link.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

export default SidebarDemo;

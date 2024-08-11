"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconBook,
  IconPencil,
  IconCertificate,
  IconSchool,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function SidebarDemo() {
  const links = [
    {
      label: "Courses",
      href: "#",
      icon: (
        <IconBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Practice",
      href: "#",
      icon: (
        <IconPencil className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Exams",
      href: "#",
      icon: (
        <IconCertificate className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="/" // Linking to the root URL to reload the page
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <IconSchool className="text-black dark:text-white h-5 w-6 flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        APSC Buddy
      </motion.span>
    </Link>
  );
};


export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <IconSchool className="text-black dark:text-white h-5 w-6 flex-shrink-0" />
    </Link>
  );
};

// Updated Dashboard component with the grey background
const Dashboard = () => {
  return (
    <div className="flex flex-1 bg-gray-100 dark:bg-neutral-900 items-center justify-center"> {/* Reverted to grey background */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Your best first-year engineering resource
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Welcome to APSC Buddy, your go-to resource for navigating your first year in engineering.
        </p>
      </div>
    </div>
  );
};

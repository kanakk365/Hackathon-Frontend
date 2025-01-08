import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar"; // Adjust the path as necessary
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom"; // React Router for navigation
import { motion } from "framer-motion";
import {
  FileImage,
  FileText,
  Link2,
  LogOut,
  Plus,
  Share,
  Share2,
  Twitter,
  User,
  Youtube,
} from "lucide-react";
import { ThoughtCardType } from "./type/Types";
import { Button } from "./ui/button";
import axios from "axios";
import { ApiRoutes } from "@/utils/routeApi";

export function DashboardSide() {
  const links = [
    {
      label: "Video",

      icon: (
        <Youtube className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Tweet",

      icon: (
        <Twitter className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Link",

      icon: (
        <Link2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Image",

      icon: (
        <FileImage className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Article",

      icon: (
        <FileText className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const userData = JSON.parse(localStorage.getItem("user") || "{}");

  const [selectedType, setSelectedType] = useState<ThoughtCardType>(null);

  const [signOut, setSignout] = useState(false);

  const signout = () => {
    setSignout(true);
  };
  const signOutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className={` rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-transparent w-[100vw] flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-[100vh]`}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  selectedType={selectedType}
                  onSelectType={setSelectedType}
                />
              ))}
            </div>
          </div>

          <div className="   flex justify-between items-center">
            <div className="flex gap-2 justify-center items-center cursor-pointer">
              <span className=" p-1 rounded-full">
                <User className=" rounded-full" />
              </span>
              {open && <p>{userData.username}</p>}
            </div>
            {open && (
              <a onClick={signOutHandler}>
                <LogOut className="hover:text-gray-100 text-gray-500 cursor-pointer" />
              </a>
            )}
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
      to="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      to="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

const Dashboard = () => {
  const [isCreateNewOpen , setIsCreateNewOpen] = useState(false)
  const [isShareOpen , setIsShareOpen] = useState(false)
  
  const [alltags, setAllTags] = useState<{ _id: string; title: string }[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const openCreate = async()=>{
    setIsCreateNewOpen(true)
  }  
  const closeCreate= async()=>{
    setIsCreateNewOpen(false)
  }


  const openShare = ()=> setIsShareOpen(true)
  return (
    <div className="flex flex-1">
      <div className=" border border-neutral-700 p-10 md:p-10 rounded-tl-2xl  bg-transparent flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex flex-col gap-2">
          <div className="h-20 w-full rounded-lg flex justify-between items-center">
            <div>
              <h1 className="text-xl md:text-3xl">My Brain</h1>
            </div>
            <div className="flex gap-5">
              <Button variant={"ghost"} className=" flex justify-center items-center gap-1 text-center rounded-md bg-transparent no-underline cursor-pointer shadow-2xl leading-6  text-white  border-[1px] border-slate-500 px-4 py-2 font-mono font-medium transition-colors hover:text-indigo-300">
                {" "}
                <Plus /> <span className="sm:inline hidden">Create New</span>
              </Button>
              <Button>
                {" "}
                <Share2 /> <span className="sm:inline hidden">Share</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

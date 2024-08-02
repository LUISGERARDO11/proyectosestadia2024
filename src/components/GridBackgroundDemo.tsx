import React from "react";
import { IconBrandFacebook, IconBrandInstagram, IconBrandGithub, IconBrandYoutube } from '@tabler/icons-react';

export function GridBackgroundDemo() {
  return (
<div className="h-[20rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto px-5 text-center">
        {/* Links */}
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-m text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Press</a>
          <a href="#" className="hover:underline">Accessibility</a>
          <a href="#" className="hover:underline">Partners</a>
        </div>

        {/* Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <IconBrandFacebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <IconBrandInstagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <IconBrandGithub className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <IconBrandYoutube className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 dark:text-gray-400 mt-6">
          © 2024 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import monkey from "../../../public/icon.png";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      setIsVisible(window.scrollY > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`styled-div fixed inset-0 z-30 flex items-center justify-between p-5 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } `}
    >
      <div className="h-10 w-10 overflow-hidden rounded-full">
        <Image
          src={monkey}
          alt="monkey"
          height={100}
          width={100}
          className="h-full w-full rounded-full bg-customYellow object-cover"
        />
      </div>
      <nav className="flex items-center gap-5">
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#work">Work</Link>
        <Link href="#projects">Projects</Link>
        <Link
          href="https://drive.google.com/drive/folders/1LlIYE-RSdiewmPfpWViG3Cd2I6DWeAZW?usp=sharing"
          className="rounded-full bg-customYellow p-2 text-2xl text-customShade"
        >
          CV
        </Link>
      </nav>
    </div>
  );
}

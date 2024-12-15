"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import monkey from "../../../public/icon.png";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust this value to control when the header becomes visible
      const scrollThreshold = 200; 
      setIsVisible(window.scrollY > scrollThreshold);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`
        fixed inset-0
        flex justify-between items-center 
        styled-div z-30 p-5 
        transition-all duration-300 ease-in-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-full'}
      `}
    >
      <div className="w-10 h-10 overflow-hidden rounded-full">
        <Image
          src={monkey}
          alt="monkey"
          height={100}
          width={100}
          className="bg-customYellow rounded-full w-full h-full object-cover"
        />
      </div>
      <nav className="flex gap-5">
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#work">Work</Link>
        <Link href="#projects">Projects</Link>
      </nav>
    </div>
  );
}
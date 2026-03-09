"use client";

import { useState, useRef, useEffect } from "react";
import { ShoppingCart, PersonOutline, Sort, Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import gsap from "gsap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Open sidebar
      gsap.to(overlayRef.current, {
        display: "block",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Close sidebar
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.4,
        ease: "power3.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (overlayRef.current) overlayRef.current.style.display = "none";
        },
      });
      // Re-enable body scroll
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="flex justify-between items-center h-20 max-w-[1248px] mx-auto w-full relative z-30">
        <div className="flex items-center gap-16">
          <div className="font-logo text-2xl font-normal leading-none tracking-normal text-black cursor-pointer relative left-2">
            GREENMIND
          </div>
          <nav className="hidden md:flex gap-10 font-poppins">
            <a href="#" className="no-underline text-black font-semibold text-base transition-colors hover:text-black">Home</a>
            <a href="#" className="no-underline text-gray-500 font-medium text-base transition-colors hover:text-black">Products</a>
            <a href="#" className="no-underline text-gray-500 font-medium text-base transition-colors hover:text-black">Contacts</a>
          </nav>
        </div>
        
        <div className="flex items-center md:gap-6 gap-3">
          <IconButton aria-label="Cart" className="text-black hover:scale-110 transition-transform">
            <ShoppingCart fontSize="small" />
          </IconButton>
          <IconButton aria-label="User Profile" className="text-black hover:scale-110 transition-transform">
            <PersonOutline fontSize="medium" />
          </IconButton>
          
          <div className="w-[1px] h-6 bg-gray-200 md:flex hidden"></div>
          
          <IconButton 
            aria-label="Menu" 
            className="text-black hover:scale-110 transition-transform"
            onClick={toggleSidebar}
          >
            <Sort fontSize="medium" style={{ transform: "scaleX(-1)" }} />
          </IconButton>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 z-[40] hidden opacity-0"
        onClick={toggleSidebar}
      />

      {/* Mobile Sidebar */}
      <div 
        ref={sidebarRef}
        className="fixed top-0 left-0 h-full w-[280px] bg-[#c1dcdc] z-[50] shadow-2xl p-8 transform -translate-x-full"
      >
        <div className="flex justify-between items-center mb-12">
          <div className="font-logo text-2xl font-normal text-black">
            GREENMIND
          </div>
          <IconButton onClick={toggleSidebar} className="text-black">
            <Close fontSize="medium" />
          </IconButton>
        </div>

        <nav className="flex flex-col gap-8 font-poppins">
          <a 
            href="#" 
            onClick={toggleSidebar}
            className="no-underline text-black font-bold text-xl hover:translate-x-2 transition-transform inline-block"
          >
            Home
          </a>
          <a 
            href="#" 
            onClick={toggleSidebar}
            className="no-underline text-gray-600 font-semibold text-xl hover:text-black hover:translate-x-2 transition-transform inline-block"
          >
            Products
          </a>
          <a 
            href="#" 
            onClick={toggleSidebar}
            className="no-underline text-gray-600 font-semibold text-xl hover:text-black hover:translate-x-2 transition-transform inline-block"
          >
            Contacts
          </a>
        </nav>
      </div>
    </>
  );
}

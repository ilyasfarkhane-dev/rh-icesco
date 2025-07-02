'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 py-3 transition-colors duration-300 shadow-sm bg-[#0e7378]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="ICESCO Logo" width={100} height={100} className={`transition-all duration-300 ${scrolled ? "" : "grayscale"}`} />
       
      </div>
      {/* Nav Links */}
      <div className="flex-1 flex justify-center">
        <ul className="flex gap-8 items-center">
          <li>
            <Link href="/" className="text-base font-medium border-b-2 pb-1 transition-colors duration-300 text-white ">Home</Link>
          </li>
          <li>
            <Link href="#" className="text-base font-medium transition-colors duration-300 text-white">Jobs</Link>
          </li>
          <li>
            <Link href="#" className="text-base font-medium transition-colors duration-300 text-white">Companies</Link>
          </li>
          <li>
            <Link href="#" className="text-base font-medium transition-colors duration-300 text-white">About</Link>
          </li>
          <li>
            <Link href="#" className="text-base font-medium transition-colors duration-300 text-white">Contact</Link>
          </li>
        </ul>
      </div>
      {/* Auth Buttons */}
      <div className="flex items-center gap-2">
        <Link href="#" className="text-base font-medium px-3 py-1 rounded transition-colors duration-300 text-white">Sign in</Link>
        <Button asChild className="px-5 py-1.5 rounded-full text-base font-semibold shadow-none transition-colors duration-300 flex justify-center items-center cursor-pointer text-[#0e7378] bg-white">
          <Link href="/signup">Sign up</Link>
        </Button>
      </div>
    </nav>
  );
}

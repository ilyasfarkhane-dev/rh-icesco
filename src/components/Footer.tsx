import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0e7378] text-white py-8 mt-12 border-t border-[#d1e6e7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="ICESCO Logo" width={100} height={100} />
          
        </div>
        <div className="text-sm opacity-80">&copy; {new Date().getFullYear()} ICESCO. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { Carousel } from "@/components/ui/carousel";

export default function Hero() {
  return (
    <section className="w-full min-h-screen pt-12 pb-2 px-2 md:px-0 flex flex-col md:flex-row items-center justify-between gap-0 md:gap-2 relative overflow-hidden border-t border-[#e6f0ee] bg-[#e1f1f2]">
      {/* Left: Text and Search */}
      <div className="flex-1 flex flex-col gap-6 max-w-4xl z-10 pl-2 md:pl-16">
        <div className="pt-2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2 tracking-tight font-sans">
            Unlock your future <br /> with the right job <br />
            <span className="text-[#18816b]">Start applying today</span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-4 max-w-md font-normal font-sans">
            Browse curated job offers from top companies. Apply in seconds, track your applications, and land your dream role faster than ever before.
          </p>
        </div>
        {/* Search Bar */}
        <div className="w-full max-w-full bg-white rounded-full shadow-[0_4px_24px_0_rgba(24,129,107,0.10)] flex flex-row flex-nowrap items-center gap-2 px-4 py-4 mt-2 border border-[#e6f0ee] min-w-0" style={{height: '80px'}}>
          <div className="flex items-center w-full md:w-auto min-w-[180px]">
            <Select>
              <SelectTrigger className="w-full md:w-48 rounded-full border-none focus:ring-0 text-gray-700 bg-transparent px-4 py-3 text-base font-medium">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="paris">Paris</SelectItem>
                <SelectItem value="nyc">New York</SelectItem>
                <SelectItem value="berlin">Berlin</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="hidden md:block h-8 w-px bg-[#e6f0ee] mx-1" />
          <div className="flex items-center w-full md:w-auto min-w-[180px]">
            <Select>
              <SelectTrigger className="w-full md:w-48 rounded-full border-none focus:ring-0 text-gray-700 bg-transparent px-4 py-3 text-base font-medium">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fulltime">Full Time</SelectItem>
                <SelectItem value="parttime">Part Time</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="hidden md:block h-8 w-px bg-[#e6f0ee] mx-1" />
          <div className="flex items-center w-full md:w-auto min-w-[180px]">
            <Select>
              <SelectTrigger className="w-full md:w-48 rounded-full border-none focus:ring-0 text-gray-700 bg-transparent px-4 py-3 text-base font-medium">
                <SelectValue placeholder="Salary Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-2k">$0 - $2,000</SelectItem>
                <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                <SelectItem value="10k+">$10,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="rounded-full bg-[#18816b] text-white px-8 py-3 flex items-center gap-2 ml-0 md:ml-2 shadow-md hover:bg-[#146b59] text-base font-semibold whitespace-nowrap">
            <Search className="w-5 h-5" />
            Search
          </Button>
        </div>
      </div>
      {/* Right: Carousel */}
      <div className="flex-1 flex items-end justify-end w-full h-full min-h-[340px] relative pr-2 md:pr-16">
        <div className="w-full md:w-[520px] h-[320px] md:h-[420px]">
          {/* Carousel of humanity images */}
          <Carousel />
        </div>
      </div>
    </section>
  );
}

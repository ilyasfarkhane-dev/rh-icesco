import { Briefcase, Building2, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <section className="w-full py-4 bg-white flex flex-col items-center">
      <div className="text-[#18816b] font-semibold text-lg mb-2">Our Services</div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center">Empowering Your Job Search</h2>
      <p className="text-gray-500 text-base md:text-lg mb-10 max-w-2xl text-center">
        Explore our recruitment platform: discover jobs, connect with top companies, and get personalized career support. We help you find, apply, and succeed in your next role.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Find a Job */}
        <div className="rounded-2xl bg-gray-50 shadow-sm p-8 flex flex-col items-center text-center">
          <Briefcase className="w-16 h-16 text-[#18816b] mb-4" />
          <h3 className="text-xl font-bold mb-2">Find a Job</h3>
          <p className="text-gray-500 mb-6">Browse thousands of job offers from leading employers and apply in just a few clicks.</p>
          <Button variant="outline" className="rounded-full px-6 py-2 border-[#18816b] text-[#18816b] font-semibold">Browse Jobs</Button>
        </div>
        {/* Top Companies */}
        <div className="rounded-2xl bg-[#18816b] shadow-md p-8 flex flex-col items-center text-center text-white">
          <Building2 className="w-16 h-16 text-white mb-4" />
          <h3 className="text-xl font-bold mb-2">Top Companies</h3>
          <p className="text-white/90 mb-6">Connect with reputable companies, see their profiles, and discover exclusive opportunities.</p>
          <Button className="rounded-full px-6 py-2 bg-white text-[#18816b] font-semibold hover:bg-gray-100">See Companies</Button>
        </div>
        {/* Career Support */}
        <div className="rounded-2xl bg-gray-50 shadow-sm p-8 flex flex-col items-center text-center">
          <UserCheck className="w-16 h-16 text-[#18816b] mb-4" />
          <h3 className="text-xl font-bold mb-2">Career Support</h3>
          <p className="text-gray-500 mb-6">Get expert advice, resume tips, and personalized guidance to boost your job search success.</p>
          <Button variant="outline" className="rounded-full px-6 py-2 border-[#18816b] text-[#18816b] font-semibold">Get Support</Button>
        </div>
      </div>
    </section>
  );
}

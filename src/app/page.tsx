import Hero from "@/components/Hero";
import FilterMenu from "@/components/FilterMenu";
import JobList from "@/components/JobList";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

function ContactSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-24 mb-12">
      <div className="flex flex-col md:flex-row gap-12 items-stretch bg-gradient-to-br from-[#e1f1f2] to-[#f7fbfb] rounded-2xl shadow-lg border border-[#d1e6e7] p-12 md:p-12">
        {/* Left: Text */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0e7378] mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg mb-6">
            Have questions or need help? Reach out to our team and we’ll get back to you as soon as possible. We’re here to support your job search and answer any inquiries about our platform.
          </p>
          <ul className="text-gray-700 text-base space-y-2 mb-6">
            <li><span className="font-semibold text-[#0e7378]">Email:</span> <a href="mailto:support@icesco.com" className="underline hover:text-[#18816b]">support@icesco.com</a></li>
            <li><span className="font-semibold text-[#0e7378]">Phone:</span> <span className="">+212 123 456 789</span></li>
            <li><span className="font-semibold text-[#0e7378]">Address:</span> 123 Main St, Rabat, Morocco</li>
          </ul>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-[#0e7378] hover:text-[#18816b] transition-colors" aria-label="LinkedIn"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a href="#" className="text-[#0e7378] hover:text-[#18816b] transition-colors" aria-label="Twitter"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.01-4.52 4.5 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64 1.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 0 1 .96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.56 1.74 2.18 3 4.1 3.04A9.06 9.06 0 0 1 0 19.54 12.8 12.8 0 0 0 6.92 22c8.29 0 12.83-6.87 12.83-12.83 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 24 4.59a9.1 9.1 0 0 1-2.6.71z"/></svg></a>
            <a href="#" className="text-[#0e7378] hover:text-[#18816b] transition-colors" aria-label="Facebook"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          </div>
        </div>
        {/* Right: Contact Form */}
        <form className="md:w-1/2 w-full bg-white rounded-2xl shadow p-8 flex flex-col gap-5 border border-[#d1e6e7]">
          <div>
            <label className="block text-sm font-medium mb-1 text-[#0e7378]">Name</label>
            <input type="text" className="w-full rounded-lg border border-[#d1e6e7] px-3 py-2 bg-[#f7fbfb] focus:outline-none focus:ring-2 focus:ring-[#0e7378]" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-[#0e7378]">Email</label>
            <input type="email" className="w-full rounded-lg border border-[#d1e6e7] px-3 py-2 bg-[#f7fbfb] focus:outline-none focus:ring-2 focus:ring-[#0e7378]" placeholder="you@email.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-[#0e7378]">Message</label>
            <textarea className="w-full rounded-lg border border-[#d1e6e7] px-3 py-2 bg-[#f7fbfb] min-h-[100px] focus:outline-none focus:ring-2 focus:ring-[#0e7378]" placeholder="How can we help you?" required />
          </div>
          <button type="submit" className="bg-[#0e7378] hover:bg-[#18816b] text-white font-semibold rounded-lg px-6 py-2 mt-2 transition-colors shadow">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-24 min-h-screen  text-neutral-900">
        <Hero />
        <Services />
        {/* Job Board Section */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0e7378] mb-2">Browse Job Offers</h2>
            <p className="text-gray-500 text-base md:text-lg">Use filters to find jobs that match your skills and interests. Results update instantly as you filter.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-1/3 w-full">
              <FilterMenu />
            </aside>
            <div className="hidden md:block w-px bg-[#e6f0ee] my-2" />
            <div className="md:w-2/3 w-full">
              <JobList />
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

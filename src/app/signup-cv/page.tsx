"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const initialForm = {
  name: "John Doe",
  email: "john.doe@email.com",
  education: "Bachelor of Science in Computer Science",
  experience: "Frontend Developer at Example Inc.",
  skills: "React, Next.js, TailwindCSS",
  cv: null as File | null,
};

export default function SignupCVPage() {
  const [form, setForm] = useState(initialForm);
  const [showModal, setShowModal] = useState(false);

  // Save dummy user info to localStorage for process dashboard
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userInfo", JSON.stringify(form));
    }
  }, [form]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] || null;
    setForm(f ? { ...form, cv: f } : form);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
    window.location.href = "/process";
  }

  return (
    <div className="min-h-screen flex items-center justify-center font-sans bg-[#e1f1f2] py-12">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md flex flex-col border border-[#d1e6e7] p-8">
        <h1 className="text-2xl font-bold text-[#0e7378] mb-6 text-center">Sign Up Using CV</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">Upload your CV (PDF, DOCX)</span>
            <input type="file" accept=".pdf,.docx" onChange={handleFileChange} className="w-full rounded-lg border border-[#d1e6e7] px-3 py-2 bg-[#f7fbfb]" />
          </label>
          {form.cv && <div className="text-xs text-[#0e7378] mb-2">Selected: {form.cv.name}</div>}
          <Button type="submit" className="bg-[#0e7378] hover:bg-[#18816b] text-white w-full mt-2">Submit</Button>
        </form>
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-30 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-8 border border-[#d1e6e7] flex flex-col gap-4 my-16">
              <h2 className="text-xl font-bold text-[#0e7378] mb-2">Edit Your Information</h2>
              <form className="flex flex-col md:flex-row gap-4 relative min-h-[340px]" onSubmit={e => { e.preventDefault(); handleClose(); }}>
                <div className="flex-1 flex flex-col gap-4">
                  <div>
                    <label className="font-semibold block mb-1">Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} className="w-full rounded-lg border border-[#d1e6e7] px-2 py-1 bg-white text-black" />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">Email</label>
                    <input name="email" value={form.email} onChange={handleChange} className="w-full rounded-lg border border-[#d1e6e7] px-2 py-1 bg-white text-black" />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">Education</label>
                    <input name="education" value={form.education} onChange={handleChange} className="w-full rounded-lg border border-[#d1e6e7] px-2 py-1 bg-white text-black" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div>
                    <label className="font-semibold block mb-1">Experience</label>
                    <input name="experience" value={form.experience} onChange={handleChange} className="w-full rounded-lg border border-[#d1e6e7] px-2 py-1 bg-white text-black" />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">Skills (comma separated)</label>
                    <textarea name="skills" value={form.skills} onChange={handleChange} className="w-full rounded-lg border border-[#d1e6e7] px-2 py-1 bg-white text-black" />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">CV</label>
                    <input type="text" value={form.cv ? form.cv.name : 'Not uploaded'} disabled className="w-full rounded-lg border border-[#d1e6e7] px-2 py-1 bg-[#f7fbfb] text-black" />
                  </div>
                </div>
                <div className="absolute left-0 right-0 bottom-0 flex gap-2 p-0 md:px-8">
                  <Button type="submit" className="bg-[#0e7378] hover:bg-[#18816b] text-white flex-1">Save & Close</Button>
                </div>
              </form>
            </div>
          </div>
        )}
        <Button asChild variant="outline" className="border-[#0e7378] text-[#0e7378] mt-4">
          <a href="/signup">Back to Signup</a>
        </Button>
      </div>
    </div>
  );
}

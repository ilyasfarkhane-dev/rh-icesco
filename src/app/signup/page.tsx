'use client'

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  "Personal Info",
  "Education",
  "Experience",
  "Skills",
  "Upload CV",
  "Review & Submit"
];

export default function SignupPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    education: "",
    experience: "",
    skills: "",
    cv: null as File | null,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function next() {
    if (step < steps.length - 1) setStep(step + 1);
  }
  function prev() {
    if (step > 0) setStep(step - 1);
  }

  return (
    <div className="min-h-screen flex items-center justify-center  font-sans py-12">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl flex flex-col border border-[#d1e6e7] overflow-hidden">
        {/* Stepper Row */}
        <div className="w-full flex items-center justify-between px-8 pt-10 pb-6 bg-[#0e7378]">
          {steps.map((label, i) => (
            <div key={label} className="flex-1 flex flex-col items-center relative">
              <div className={`z-10 flex items-center justify-center rounded-full w-8 h-8 ${i < step ? 'bg-[#18816b]' : i === step ? 'bg-white border-2 border-[#18816b]' : 'bg-[#e1f1f2] border-2 border-[#e1f1f2]'} transition-all duration-300`}>
                {i < step ? (
                  <CheckCircle className="w-5 h-5 text-white" />
                ) : (
                  <span className={`font-bold text-sm ${i === step ? 'text-[#18816b]' : 'text-[#0e7378]'}`}>{i + 1}</span>
                )}
              </div>
              <span className={`mt-2 text-xs font-semibold text-center ${i === step ? 'text-white' : 'text-[#e1f1f2]'}`}>{label}</span>
              {i < steps.length - 1 && (
                <div className="absolute top-4 right-0 left-1/2 h-0.5 bg-[#e1f1f2] z-0" style={{ width: '100%' }} />
              )}
            </div>
          ))}
        </div>
        {/* Step Form */}
        <div className="flex-1 flex flex-col justify-center px-8 py-12 bg-white">
          {step === 0 && (
            <form className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-[#0e7378] mb-2">Personal Information</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} className="w-full rounded-lg border border-[#d1e6e7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e7378] bg-[#f7fbfb]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input name="email" value={form.email} onChange={handleChange} className="w-full rounded-lg border border-[#d1e6e7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e7378] bg-[#f7fbfb]" />
              </div>
            </form>
          )}
          {step === 1 && (
            <form className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-[#0e7378] mb-2">Education</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Highest Degree</label>
                <input name="education" value={form.education} onChange={handleChange} className="w-full rounded-lg border border-[#d1e6e7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e7378] bg-[#f7fbfb]" />
              </div>
            </form>
          )}
          {step === 2 && (
            <form className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-[#0e7378] mb-2">Experience</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Most Recent Job Title</label>
                <input name="experience" value={form.experience} onChange={handleChange} className="w-full rounded-lg border border-[#d1e6e7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e7378] bg-[#f7fbfb]" />
              </div>
            </form>
          )}
          {step === 3 && (
            <form className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-[#0e7378] mb-2">Skills</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Key Skills (comma separated)</label>
                <input name="skills" value={form.skills} onChange={handleChange} className="w-full rounded-lg border border-[#d1e6e7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e7378] bg-[#f7fbfb]" />
              </div>
            </form>
          )}
          {step === 4 && (
            <form className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-[#0e7378] mb-2">Upload CV</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CV File (PDF, DOCX)</label>
                <input type="file" accept=".pdf,.doc,.docx" onChange={e => setForm(f => ({ ...f, cv: e.target.files ? e.target.files[0] : null }))} className="w-full rounded-lg border border-[#d1e6e7] px-3 py-2 bg-[#f7fbfb]" />
                {form.cv && <span className="text-xs text-[#0e7378] mt-1 block">Selected: {form.cv.name}</span>}
              </div>
            </form>
          )}
          {step === 5 && (
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold text-[#0e7378] mb-2">Review & Submit</h2>
              <div className="bg-[#f7fbfb] rounded-lg p-4 border border-[#d1e6e7] text-sm text-gray-700">
                <div><span className="font-semibold">Name:</span> {form.name}</div>
                <div><span className="font-semibold">Email:</span> {form.email}</div>
                <div><span className="font-semibold">Education:</span> {form.education}</div>
                <div><span className="font-semibold">Experience:</span> {form.experience}</div>
                <div><span className="font-semibold">Skills:</span> {form.skills}</div>
                <div><span className="font-semibold">CV:</span> {form.cv ? form.cv.name : 'Not uploaded'}</div>
              </div>
              <Button className="bg-[#0e7378] hover:bg-[#18816b] text-white w-full">Submit Application</Button>
              <Button type="button" variant="outline" className="border-[#0e7378] text-[#0e7378] mt-2" onClick={prev}>Previous</Button>
            </div>
          )}
          {/* Navigation buttons only if not on last step */}
          {step < 5 && (
            <div className="flex gap-4 mt-8">
              <Button type="button" variant="outline" className="border-[#0e7378] text-[#0e7378]" onClick={prev} disabled={step === 0}>Previous</Button>
              <Button type="button" className="bg-[#0e7378] hover:bg-[#18816b] text-white" onClick={next} disabled={step === steps.length - 1}>Next</Button>
            </div>
          )}
          {/* Bottom separator and upload CV */}
          <div className="flex flex-col items-center mt-12">
            <div className="flex items-center w-full mb-4">
              <div className="flex-1 h-px bg-[#e1f1f2]" />
              <span className="px-4 text-[#0e7378] font-semibold text-sm">or</span>
              <div className="flex-1 h-px bg-[#e1f1f2]" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button asChild variant="ghost" className="p-0 m-0 h-auto min-h-0 bg-transparent hover:bg-transparent focus:bg-transparent">
                <a href="/signup-cv" className="flex flex-col items-center cursor-pointer">
                  <span className="bg-[#e1f1f2] rounded-full p-4 mb-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#0e7378]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
                  </span>
                  <span className="text-[#0e7378] font-medium">Sign up using CV</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import JobCard from "@/components/JobCard";

const jobs = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "Acme Corp",
    location: "Remote",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 2,
    position: "UI/UX Designer",
    company: "Designify",
    location: "On-site",
    tags: ["Figma", "Sketch", "Minimalism"],
  },
  {
    id: 3,
    position: "Backend Engineer",
    company: "DataWorks",
    location: "Hybrid",
    tags: ["Node.js", "API", "SQL"],
  },
  {
    id: 4,
    position: "Product Manager",
    company: "InnovateX",
    location: "Remote",
    tags: ["Agile", "Leadership", "Roadmap"],
  },
];

export default function JobList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map(job => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

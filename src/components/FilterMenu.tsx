import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Briefcase, BarChart2, Building2 } from "lucide-react";

const locations = ["Remote", "On-site", "Hybrid"];
const types = ["Full-time", "Part-time", "Contract"];
const experience = ["Entry", "Mid", "Senior", "Lead"];
const industries = ["Tech", "Finance", "Healthcare", "Education", "Other"];

export default function FilterMenu() {
  return (
    <aside className="bg-white   p-6 flex flex-col gap-6 w-full">
      <h3 className="text-lg font-semibold mb-2">Filter Jobs</h3>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="location">
          <AccordionTrigger className="flex items-center gap-2 hover:no-underline focus:no-underline outline-none ring-0 shadow-none"><MapPin className="w-4 h-4" />Location</AccordionTrigger>
          <AccordionContent>
            {locations.map(loc => (
              <div key={loc} className="flex items-center gap-2 py-1">
                <Checkbox id={loc} />
                <label htmlFor={loc} className="text-sm">{loc}</label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="type">
          <AccordionTrigger className="flex items-center gap-2 hover:no-underline focus:no-underline outline-none ring-0 shadow-none"><Briefcase className="w-4 h-4" />Type</AccordionTrigger>
          <AccordionContent>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {types.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="experience">
          <AccordionTrigger className="flex items-center gap-2 hover:no-underline focus:no-underline outline-none ring-0 shadow-none"><BarChart2 className="w-4 h-4" />Experience Level</AccordionTrigger>
          <AccordionContent>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                {experience.map(exp => (
                  <SelectItem key={exp} value={exp}>{exp}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="industry">
          <AccordionTrigger className="flex items-center gap-2 hover:no-underline focus:no-underline outline-none ring-0 shadow-none"><Building2 className="w-4 h-4" />Industry</AccordionTrigger>
          <AccordionContent>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map(ind => (
                  <SelectItem key={ind} value={ind}>{ind}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}

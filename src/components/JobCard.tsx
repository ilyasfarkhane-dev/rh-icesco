import { Badge } from "@/components/ui/badge";
import { Building2, MapPin } from "lucide-react";

interface JobCardProps {
  position: string;
  company: string;
  location: string;
  tags: string[];
}

export default function JobCard({ position, company, location, tags }: JobCardProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col gap-3 shadow-none">
      <div className="flex items-center gap-2 text-neutral-700 mb-1">
        <Building2 className="w-4 h-4" />
        <span className="font-semibold text-base">{company}</span>
      </div>
      <h4 className="text-lg font-bold mb-1">{position}</h4>
      <div className="flex items-center gap-2 text-neutral-500 text-sm mb-2">
        <MapPin className="w-4 h-4" />
        {location}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map(tag => (
          <Badge key={tag} variant="outline" className="text-xs px-2 py-1 border-neutral-200 bg-neutral-50">{tag}</Badge>
        ))}
      </div>
    </div>
  );
}

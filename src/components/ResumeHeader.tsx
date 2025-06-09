import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

interface ResumeHeaderProps {
  name?: string;
  title?: string;
  location?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  summary?: string;
  avatarUrl?: string;
  skills?: string[];
}

const ResumeHeader = ({
  name = "Saran Ravindranath",
  title = "Product Manager",
  location = "San Jose, USA",
  email = "rtsaran.kp@gmail.com",
  phone = "+1 479-412-8287",
  linkedin = "https://www.linkedin.com/in/saranravindranath/",
  summary = "Strategic Product Manager with 15+ years of experience driving end-to-end product innovation for Fortune 500 enterprises and high-growth startups. Expert in bridging technical complexity and business strategy to deliver scalable solutions across payments ecosystems, user security, and omnichannel platforms.",
  avatarUrl = "/profile-picture.jpg",
  skills = [
    "Product Roadmap",
    "A/B Testing",
    "User Profiling",
    "Business Intelligence",
    "Data Analysis",
    "Agile Framework",
  ],
}: ResumeHeaderProps) => {
  return (
    <div className="w-full bg-slate-900 text-white p-6 md:p-10 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-teal-500">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="bg-teal-700 text-2xl">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">
                {name}
              </h1>
              <h2 className="text-xl md:text-2xl text-teal-400 font-medium mb-2">
                {title}
              </h2>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-slate-300 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-slate-400" />
                  <span>{location}</span>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-1 hover:text-teal-400 transition-colors"
                >
                  <Mail size={16} className="text-slate-400" />
                  <span>{email}</span>
                </a>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-1 hover:text-teal-400 transition-colors"
                >
                  <Phone size={16} className="text-slate-400" />
                  <span>{phone}</span>
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-teal-400 transition-colors"
                >
                  <Linkedin size={16} className="text-slate-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <p className="text-slate-300 mb-4 max-w-3xl">{summary}</p>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-slate-800 text-teal-400 border-teal-700 hover:bg-slate-700"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <Card className="mt-6 bg-slate-800 border-slate-700">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4 text-center">
            <div className="flex-1 p-3 border-b md:border-b-0 md:border-r border-slate-700">
              <div className="text-3xl font-bold text-amber-500">15+</div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="flex-1 p-3 border-b md:border-b-0 md:border-r border-slate-700">
              <div className="text-3xl font-bold text-amber-500">40%</div>
              <div className="text-sm text-slate-400">
                Faster Time-to-Market
              </div>
            </div>
            <div className="flex-1 p-3 border-b md:border-b-0 md:border-r border-slate-700">
              <div className="text-3xl font-bold text-amber-500">$10M+</div>
              <div className="text-sm text-slate-400">Cost Efficiencies</div>
            </div>
            <div className="flex-1 p-3">
              <div className="text-3xl font-bold text-amber-500">25%+</div>
              <div className="text-sm text-slate-400">
                Conversion Rate Boost
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeHeader;

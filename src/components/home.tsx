import React from "react";
import ResumeHeader from "./ResumeHeader";
import ExperienceTimeline from "./ExperienceTimeline";
import SkillsVisualization from "./SkillsVisualization";
import AchievementsMetrics from "./AchievementsMetrics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header Section */}
      <ResumeHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <Tabs defaultValue="achievements" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="mt-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">
                Key Achievements
              </h2>
              <AchievementsMetrics />
            </Card>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="mt-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">
                Professional Experience
              </h2>
              <ExperienceTimeline />
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="mt-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">
                Skills & Expertise
              </h2>
              <SkillsVisualization />
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Saran Ravindranath | Interactive
            Resume
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/saranravindranath/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:saran.rt@icloud.com"
              className="hover:text-blue-300 transition-colors"
            >
              Email
            </a>
            <button
              className="hover:text-blue-300 transition-colors"
              onClick={() => window.print()}
            >
              Download PDF
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsVisualizationProps {
  skills?: Skill[];
}

const SkillsVisualization = ({
  skills = defaultSkills,
}: SkillsVisualizationProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Prepare radar chart data
  const radarData = [
    { skill: "AI/ML Implementation", value: 90 },
    { skill: "User Experience", value: 85 },
    { skill: "Technical Implementation", value: 88 },
    { skill: "Stakeholder Management", value: 95 },
    { skill: "Agile Methodology", value: 92 },
  ];

  // Prepare bar chart data for key metrics
  const metricsData = [
    { name: "Cost Reduction", value: 75 },
    { name: "Process Efficiency", value: 60 },
    { name: "User Satisfaction", value: 85 },
    { name: "Revenue Growth", value: 45 },
    { name: "Time to Market", value: 90 },
  ];

  // Career timeline data
  const timelineData = [
    {
      year: "2013",
      role: "Senior Business Analyst",
      company: "Photon Infotech",
    },
    { year: "2016", role: "Senior Business Analyst", company: "HCL America" },
    { year: "2018", role: "Technical Analyst", company: "Arrow Electronics" },
    {
      year: "2019",
      role: "Lead Business Analyst",
      company: "Hexaware Technologies",
    },
    { year: "2021", role: "Product Manager", company: "UST Global" },
  ];

  return (
    <div className="w-full bg-white rounded-xl shadow-sm">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">
          Skills & Metrics Visualizations
        </h2>
        <div className="w-16 h-1 bg-orange-400 mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Skills Radar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ delay: 0.1 }}
        >
          <Card className="h-full bg-white border border-gray-200">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Skills Radar
                </h3>
                <div className="w-12 h-0.5 bg-orange-400 mx-auto rounded"></div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid gridType="polygon" className="stroke-gray-200" />
                    <PolarAngleAxis
                      dataKey="skill"
                      tick={{ fontSize: 10, fill: "#6B7280" }}
                      className="text-xs"
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{ fontSize: 8, fill: "#9CA3AF" }}
                      tickCount={6}
                    />
                    <Radar
                      name="Skills"
                      dataKey="value"
                      stroke="#0891b2"
                      fill="#0891b2"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Metrics Bar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full bg-white border border-gray-200">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Key Metrics
                </h3>
                <div className="w-12 h-0.5 bg-orange-400 mx-auto rounded"></div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={metricsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="stroke-gray-200"
                    />
                    <XAxis
                      dataKey="name"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      tick={{ fontSize: 10, fill: "#6B7280" }}
                    />
                    <YAxis tick={{ fontSize: 10, fill: "#6B7280" }} />
                    <Bar dataKey="value" fill="#0891b2" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Career Timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ delay: 0.3 }}
        >
          <Card className="h-full bg-white border border-gray-200">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Career Timeline
                </h3>
                <div className="w-12 h-0.5 bg-orange-400 mx-auto rounded"></div>
              </div>
              <div className="space-y-4">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-12 h-8 bg-blue-900 text-white text-xs font-medium rounded flex items-center justify-center flex-shrink-0">
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-blue-900">
                        {item.role}
                      </div>
                      <div className="text-xs text-gray-600">
                        {item.company}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Skills Summary */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Core Competencies
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills
            .filter((skill) => skill.level >= 90)
            .slice(0, 8)
            .map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-blue-50 p-3 rounded-lg text-center"
              >
                <div className="text-blue-900 font-medium text-sm">
                  {skill.name}
                </div>
                <div className="text-teal-600 font-bold text-lg">
                  {skill.level}%
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

// Default skills data
const defaultSkills: Skill[] = [
  // Technical skills
  { name: "Product Roadmapping", level: 95, category: "technical" },
  { name: "Agile Methodology", level: 90, category: "technical" },
  { name: "API Integrations", level: 85, category: "technical" },
  { name: "Payment Systems", level: 92, category: "technical" },
  { name: "User Authentication", level: 88, category: "technical" },
  { name: "SQL & Data Analysis", level: 80, category: "technical" },

  // Product Management
  { name: "Stakeholder Management", level: 95, category: "product" },
  { name: "OKR Strategy", level: 90, category: "product" },
  { name: "A/B Testing", level: 85, category: "product" },
  { name: "User Research", level: 88, category: "product" },
  { name: "Cost Optimization", level: 92, category: "product" },
  { name: "Vendor Negotiation", level: 90, category: "product" },

  // Soft Skills
  { name: "Cross-functional Leadership", level: 95, category: "soft" },
  { name: "Communication", level: 92, category: "soft" },
  { name: "Problem Solving", level: 90, category: "soft" },
  { name: "Team Collaboration", level: 88, category: "soft" },
  { name: "Adaptability", level: 85, category: "soft" },
  { name: "Strategic Thinking", level: 90, category: "soft" },
];

export default SkillsVisualization;

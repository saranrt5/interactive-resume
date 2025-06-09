import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  Building,
  Calendar,
  Award,
} from "lucide-react";

interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

interface ExperienceTimelineProps {
  experiences?: Experience[];
}

const defaultExperiences: Experience[] = [
  {
    id: "1",
    company: "UST Global",
    role: "Product Manager",
    location: "Bentonville, United States",
    period: "09/2021 - Present",
    description:
      "Led the e-commerce payments team for Walmart Stores | Sam's Club, defining OKRs and KPIs that resulted in significant improvements in payment authentication and transaction speed.",
    achievements: [
      "Defined and monitored OKRs and KPIs for the e-commerce payments team, resulting in a 15% reduction in payment authentication errors and a 10% increase in transaction speed.",
      "Spearheaded the creation of a product roadmap for the payments platform, incorporating customer feedback and industry trends, and collaborated with engineering and UX teams to deliver 15+ releases on schedule, reducing time spent by 18%.",
      "Optimized authentication workflow with Worldpay, reducing transaction fees by $1.2M annually, and implemented fraud detection tools that decreased chargebacks by 55% while maintaining 99.9% uptime with 200 orders per minute.",
      "Authored user stories, PRDs, and API specifications for cross-functional teams, reducing development errors by 27% and accelerating sprint cycles by 20% through clear product guidelines and business rules.",
      "Led the development of a replenishment product roadmap for sam's club that prioritized automation and predictive analytics, decreasing manual order processing by 30%.",
      "Utilized SQL and Tableau to analyze A/B tests and user behavior, influencing roadmap priorities that increased average order value (AOV) by 15% and reduced cart abandonment by 12%.",
      "Developed a Machine Learning algorithm to classify customers based on purchase and refund history, automating the refunds process and enhancing decision-making efficiency.",
    ],
    skills: [
      "OKR Strategy",
      "Agile Roadmapping",
      "Technical Documentation",
      "Vendor Negotiation",
      "Cost Optimization",
      "Stakeholder Alignment",
      "Data Analysis",
      "JIRA",
      "Confluence",
      "Worldpay",
      "Looker",
      "SQL",
    ],
    metrics: [
      { label: "Authentication Error Reduction", value: "15%" },
      { label: "Transaction Speed Increase", value: "10%" },
      { label: "Annual Cost Savings", value: "$1.2M" },
      { label: "Chargeback Reduction", value: "55%" },
      { label: "Development Error Reduction", value: "27%" },
      { label: "Sprint Cycle Acceleration", value: "20%" },
    ],
  },
  {
    id: "2",
    company: "Hexaware Technologies",
    role: "Lead Business Analyst",
    location: "Chennai, India",
    period: "05/2019 - 07/2021",
    description:
      "Led the automation of purchase order creation in ServiceNow from SAP Mercury, streamlining the procurement process and improving efficiency for E&Y.",
    achievements: [
      "Led the automation of purchase order creation in ServiceNow from SAP Mercury, streamlining the procurement process and improving efficiency.",
      "Delivered $15 million in annual cost savings by identifying and automating key manual processes across the organization.",
      "Developed comprehensive functional requirement specifications (FSRs) for critical business processes, including customer master, quotation processing, and sales order processing.",
      "Created detailed functional specifications for Reports, Interfaces, Conversions, Enhancements, and Forms (RICEFW) development.",
      "Prepared thorough unit test scripts and checklists to ensure the quality and accuracy of implemented functionalities within functional specifications.",
      "Successfully spearheaded cross-functional teams in the implementation of a new software system, achieving a 20% efficiency increase and $100,000 in annual cost savings.",
    ],
    skills: [
      "Process Automation",
      "Requirements Gathering",
      "Cross-functional Leadership",
      "Technical Documentation",
      "SAP Mercury",
      "ServiceNow",
    ],
    metrics: [
      { label: "Annual Cost Savings", value: "$15M" },
      { label: "Efficiency Increase", value: "20%" },
      { label: "Additional Cost Savings", value: "$100K" },
    ],
  },
  {
    id: "3",
    company: "Arrow Electronics",
    role: "Technical Analyst",
    location: "Denver, United States",
    period: "03/2018 - 01/2019",
    description:
      "Spearheaded the migration of an eCommerce platform to SAP Hybris from a micro-service architecture, enhancing system efficiency and scalability.",
    achievements: [
      "Spearheaded the migration of an eCommerce platform to SAP Hybris from a micro-service architecture, enhancing system efficiency and scalability.",
      "Collaborated with business teams to align product development with the strategic roadmap, ensuring cohesive growth and strategic objectives were met.",
      "Launched a shipping consolidation feature, optimizing over 500,000 orders and deliveries, resulting in $5 million in annual cost savings.",
      "Designed and implemented a single-page checkout process, improving user experience, increasing conversion rates by 11%, and boosting revenue by 6%.",
      "Integrated third-party APIs for address validation and tracking, enhancing operational accuracy and customer satisfaction.",
      "Managed technical oversight for User Profile, Cart, and Checkout modules across multiple projects, ensuring seamless functionality and performance.",
      "Authored functional requirement specifications (FSRs) for critical processes, including customer management, quotations, and sales orders, streamlining operations and improving cross-team collaboration.",
    ],
    skills: [
      "SAP Hybris Migration",
      "Cost Reduction Strategies",
      "Conversion Rate Optimization (CRO)",
      "API Integrations",
      "Agile Product Ownership",
      "Technical Documentation",
    ],
    metrics: [
      { label: "Cost Savings", value: "$5M" },
      { label: "Conversion Rate Increase", value: "11%" },
      { label: "Revenue Boost", value: "6%" },
      { label: "Orders Optimized", value: "500K+" },
    ],
  },
  {
    id: "4",
    company: "HCL America Inc",
    role: "Senior Business Analyst",
    location: "Denver, United States",
    period: "01/2016 - 02/2018",
    description:
      "Led the development of an internal application for CenturyLink's customer support team, streamlining the onboarding process for internet, telephone, and digital TV services by managing grid connections and generating telephone numbers for customer selection during onboarding sessions.",
    achievements: [
      "Led the development of an internal application for CenturyLink's customer support team, streamlining the onboarding process for internet, telephone, and digital TV services by managing grid connections and generating telephone numbers for customer selection during onboarding sessions.",
      "Spearheaded the creation of an eCommerce portal for an SD-WAN service company, delivering key features such as product catalogue, user registration, login, and order placement to enhance customer experience and facilitate online sales.",
      "Designed innovative solutions for grid management and telephone number generation at CenturyLink, improving the efficiency and effectiveness of the customer onboarding process.",
      "Formulated detailed functional user stories to guide UX and testing teams in design creation and test case preparation, ensuring alignment with project goals and seamless collaboration.",
      "Developed comprehensive use cases, user profiles, and requirement traceability matrices, maintaining clear communication across teams and ensuring all project requirements were met.",
    ],
    skills: [
      "Business Analysis",
      "Requirements Gathering",
      "User Story Creation",
      "eCommerce Development",
      "Process Optimization",
      "Cross-functional Collaboration",
    ],
    metrics: [
      { label: "Process Efficiency Improvement", value: "35%" },
      { label: "User Onboarding Time Reduction", value: "40%" },
    ],
  },
  {
    id: "5",
    company: "Photon Infotech Inc",
    role: "Senior Business Analyst",
    location: "Dallas, United States",
    period: "04/2013 - 08/2015",
    description:
      "Partnered with Fortune 500 clients (Walgreens, Neiman Marcus) to deliver strategic business analysis, identifying $12M+ in omnichannel revenue opportunities through customer journey mapping and launching products first with USP.",
    achievements: [
      "Partnered with Fortune 500 clients (Walgreens, Neiman Marcus) to deliver strategic business analysis, identifying $12M+ in omnichannel revenue opportunities through customer journey mapping and launching products first with USP.",
      "Conceptualized native iOS/Android apps from scratch for Olive Garden and Capital Grille, featuring real-time menu customization, TO-GO ordering, table reservation and rewards synchronization. Achieved 4.8-star ratings across 500K+ downloads, driving 22% YoY growth in digital orders.",
      "Led the development of innovative and cutting-edge native iOS app for a major retailer, integrating advanced features such as relevant items, magic mirror, and image search to elevate the shopping experience and drive user interaction.",
      "Spearheaded the design and implementation of an adaptive and responsive digital platform for Walgreens, successfully transitioning to a new architecture that improved user experience across Walgreens.com and m.Walgreens.com, ensuring seamless functionality and enhanced accessibility.",
    ],
    skills: [
      "Enterprise Retail Solutions",
      "Computer Vision Integration",
      "Cross-Functional Stakeholder Leadership",
      "A/B Testing Optimization",
    ],
    metrics: [
      { label: "Revenue Growth Identified", value: "$12M+" },
      { label: "App Rating", value: "4.8/5" },
      { label: "Digital Order Growth", value: "22%" },
      { label: "App Downloads", value: "500K+" },
      { label: "Users Impacted", value: "30M" },
    ],
  },
  {
    id: "6",
    company: "Royal Bank of Scotland",
    role: "Analyst",
    location: "Chennai, India",
    period: "03/2011 - 04/2013",
    description:
      "Spearheaded the design, development, and maintenance of the payments, user accounts management, and application security modules, enhancing system efficiency by 20% and reducing security incidents by 15%.",
    achievements: [
      "Spearheaded the design, development, and maintenance of the payments, user accounts management, and application security modules, enhancing system efficiency by 20% and reducing security incidents by 15%.",
      "Served as the go-to Subject-Matter Expert (SME) for payments, user accounts management, and application security, providing critical technical guidance to the development team and ensuring seamless integration of these modules.",
      "Ensured strict adherence to RBS Group's security and compliance standards through meticulous attention to detail and proactive risk management strategies, achieving zero compliance violations during my tenure.",
    ],
    skills: [
      "Payment Gateways",
      "Identity & Access Management (IAM)",
      "Regulatory Compliance",
      "Cross-Functional Leadership",
    ],
    metrics: [
      { label: "System Efficiency Improvement", value: "20%" },
      { label: "Security Incident Reduction", value: "15%" },
      { label: "Transactions/Month", value: "2M" },
      { label: "Compliance Violations", value: "0" },
    ],
  },
  {
    id: "7",
    company: "eNoah iSolutions",
    role: "Business Analyst",
    location: "Chennai, India",
    period: "11/2009 - 02/2011",
    description:
      "Spearheaded the design and development of a secure .NET project for Hooper Holmes, integrating insurance and medical records into company applications and EHR systems.",
    achievements: [
      "Spearheaded the design and development of a secure .NET project for Hooper Holmes, integrating insurance and medical records into company applications and EHR systems.",
      "Implemented efficient solutions to streamline processes and improve data accuracy within the organization.",
    ],
    skills: [
      ".NET Development",
      "Healthcare Integration",
      "Data Security",
      "Process Optimization",
    ],
    metrics: [
      { label: "Data Accuracy Improvement", value: "25%" },
      { label: "Process Efficiency", value: "30%" },
    ],
  },
];

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences = defaultExperiences,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const exp of experiences) {
        const cardElement = cardRefs.current[exp.id];
        if (cardElement) {
          const rect = cardElement.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setExpandedId(exp.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [experiences]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Professional Experience
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          const isExpanded = expandedId === exp.id;

          return (
            <div key={exp.id} className="mb-12 relative">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow-sm z-10"></div>

              {/* Experience card */}
              <motion.div
                ref={(el) => (cardRefs.current[exp.id] = el)}
                className={`md:w-5/12 ${isEven ? "md:ml-auto" : "md:mr-auto"} relative`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-800">
                          {exp.role}
                        </CardTitle>
                        <div className="flex items-center mt-1 text-gray-600">
                          <Building size={16} className="mr-1" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-700 border-blue-200"
                      >
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </Badge>
                    </div>
                    <CardDescription className="text-teal-600 font-medium mt-1">
                      {exp.location}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-700">{exp.description}</p>

                    {/* Skills */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {exp.skills
                        .slice(0, isExpanded ? undefined : 3)
                        .map((skill, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-gray-100 text-gray-700"
                          >
                            {skill}
                          </Badge>
                        ))}
                      {!isExpanded && exp.skills.length > 3 && (
                        <Badge
                          variant="outline"
                          className="bg-transparent text-gray-500"
                        >
                          +{exp.skills.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Expanded content */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        {/* Key achievements */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                            <Award size={16} className="mr-1 text-blue-500" />
                            Key Achievements
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Metrics */}
                        {exp.metrics && exp.metrics.length > 0 && (
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                            {exp.metrics.map((metric, i) => (
                              <div
                                key={i}
                                className="bg-blue-50 p-3 rounded-lg text-center"
                              >
                                <div className="text-blue-700 font-bold text-xl">
                                  {metric.value}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </CardContent>

                  <CardFooter className="pt-0 flex justify-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpand(exp.id)}
                      className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp size={16} className="mr-1" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} className="mr-1" />
                          Show More
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;

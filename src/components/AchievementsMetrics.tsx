import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  DollarSignIcon,
  TrendingUpIcon,
  TruckIcon,
  ShoppingCartIcon,
  ShieldIcon,
  ArrowRightLeftIcon,
  BarChart3Icon,
  RocketIcon,
} from "lucide-react";

interface KeyAchievement {
  id: number;
  title: string;
  metrics: {
    value: string;
    label: string;
    color: string;
  }[];
  description: string;
  icon: React.ReactNode;
}

interface KeyMetric {
  id: number;
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const AchievementsMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyAchievements: KeyAchievement[] = [
    {
      id: 1,
      title: "Payment Authentication Optimization",
      metrics: [
        { value: "15%", label: "Reduction in Errors", color: "text-teal-600" },
        { value: "10%", label: "Speed Increase", color: "text-teal-600" },
      ],
      description:
        "Defined and monitored OKRs and KPIs for the e-commerce payments team, resulting in significant improvements in payment processing.",
      icon: <BarChart3Icon className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "Transaction Fee Optimization",
      metrics: [
        { value: "$1.2M", label: "Annual Savings", color: "text-teal-600" },
        { value: "55%", label: "Chargeback Reduction", color: "text-teal-600" },
      ],
      description:
        "Optimized authentication workflow with Worldpay, reducing transaction fees and implementing fraud detection tools while maintaining 99.9% uptime with 200 orders per minute.",
      icon: <DollarSignIcon className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "Shipping Consolidation",
      metrics: [
        { value: "500K+", label: "Orders Optimized", color: "text-teal-600" },
        { value: "$5M", label: "Annual Savings", color: "text-teal-600" },
      ],
      description:
        "Launched a shipping consolidation feature, optimizing over 500,000 orders and deliveries, resulting in significant cost savings.",
      icon: <TruckIcon className="h-6 w-6" />,
    },
    {
      id: 4,
      title: "Checkout Process Redesign",
      metrics: [
        { value: "11%", label: "Conversion Increase", color: "text-teal-600" },
        { value: "6%", label: "Revenue Growth", color: "text-teal-600" },
      ],
      description:
        "Designed and implemented a single-page checkout process, improving user experience, increasing conversion rates, and boosting revenue.",
      icon: <ShoppingCartIcon className="h-6 w-6" />,
    },
  ];

  const keyMetrics: KeyMetric[] = [
    {
      id: 1,
      title: "Annual Cost Savings",
      value: "$15M+",
      description: "Through process automation",
      icon: <DollarSignIcon className="h-8 w-8" />,
      color: "text-orange-500",
    },
    {
      id: 2,
      title: "Revenue Growth",
      value: "$12M+",
      description: "Identified omnichannel opportunities",
      icon: <BarChart3Icon className="h-8 w-8" />,
      color: "text-orange-500",
    },
    {
      id: 3,
      title: "Faster Time-to-Market",
      value: "40%",
      description: "Through improved processes",
      icon: <RocketIcon className="h-8 w-8" />,
      color: "text-orange-500",
    },
    {
      id: 4,
      title: "Conversion Rate Boost",
      value: "25%+",
      description: "Using data-driven insights",
      icon: <ShoppingCartIcon className="h-8 w-8" />,
      color: "text-orange-500",
    },
    {
      id: 5,
      title: "Risk Reduction",
      value: "75%",
      description: "Through improved security",
      icon: <ShieldIcon className="h-8 w-8" />,
      color: "text-orange-500",
    },
    {
      id: 6,
      title: "Transaction Volume",
      value: "2M/month",
      description: "Payments processed",
      icon: <ArrowRightLeftIcon className="h-8 w-8" />,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl shadow-sm">
      {/* Key Achievements Section */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Key Achievements
          </h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-full bg-orange-100 text-orange-600 flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">
                        {achievement.title}
                      </h3>
                      <div className="flex gap-6 mb-3">
                        {achievement.metrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <div
                              className={`text-2xl font-bold ${metric.color}`}
                            >
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-600">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-700">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Metrics & Impact Section */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Key Metrics & Impact
          </h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isVisible
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`${metric.color} mb-4 flex justify-center`}>
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-blue-900 mb-1">
                    {metric.title}
                  </div>
                  <div className="text-xs text-gray-600">
                    {metric.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsMetrics;

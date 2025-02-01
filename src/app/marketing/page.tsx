
import { TrendingUp, Users, Target, BarChart } from 'lucide-react';
import React from 'react';
import HeroSection from '@/components/marketing-component/hero/page';

const Marketing = () => {
  return (
    <div>
      <HeroSection/>
      

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
                title: "Digital Marketing",
                description: "Comprehensive digital marketing campaigns that drive results."
              },
              {
                icon: <Users className="w-8 h-8 text-teal-500" />,
                title: "Social Media Management",
                description: "Engaging social media presence and community building."
              },
              {
                icon: <Target className="w-8 h-8 text-blue-500" />,
                title: "SEO Optimization",
                description: "Improve your search rankings and online visibility."
              },
              {
                icon: <BarChart className="w-8 h-8 text-teal-500" />,
                title: "Analytics & Reporting",
                description: "Data-driven insights to optimize your marketing efforts."
              }
            ].map((service) => (
              <div key={service.title} className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Marketing;
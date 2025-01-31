import Head from 'next/head';
import Layout from '@/components/layout';
import { TrendingUp, Users, Target, BarChart } from 'lucide-react';

export default function Marketing() {
  return (
    <Layout>
      <Head>
        <title>Marketing Services - Eryx Media</title>
        <meta name="description" content="Strategic marketing solutions for your business" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Strategic Marketing Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Drive growth and engagement with data-driven marketing strategies.
          </p>
        </div>
      </section>

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
    </Layout>
  );
}

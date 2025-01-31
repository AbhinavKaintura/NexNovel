import Head from 'next/head';
import Layout from '@/components/layout';
import { ArrowRight, Palette, Layout as LayoutIcon, Image, PenTool } from 'lucide-react';

export default function Design() {
  return (
    <Layout>
      <Head>
        <title>Design Services - Eryx Media</title>
        <meta name="description" content="Professional design services for your brand" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Design that Makes an Impact
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Transform your brand with cutting-edge design solutions that capture attention and inspire action.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Palette className="w-8 h-8 text-pink-500" />,
                title: "Brand Identity",
                description: "Logo design, color palettes, and comprehensive brand guidelines."
              },
              {
                icon: <LayoutIcon className="w-8 h-8 text-purple-500" />,
                title: "UI/UX Design",
                description: "User-centered interfaces that enhance digital experiences."
              },
              {
                icon: <Image className="w-8 h-8 text-pink-500" />,
                title: "Visual Design",
                description: "Engaging graphics for web, print, and social media."
              },
              {
                icon: <PenTool className="w-8 h-8 text-purple-500" />,
                title: "Illustration",
                description: "Custom illustrations and visual storytelling."
              }
            ].map((service) => (
              <div key={service.title} className="p-8 border rounded-lg hover:shadow-lg transition-all">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
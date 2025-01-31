// pages/index.tsx
import Head from 'next/head';
import Layout from '@/components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Eryx Media - Transform Ideas into Reality</title>
        <meta name="description" content="Eryx Media - A multidisciplinary agency specializing in Design, Marketing, Development, and Media" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Ideas into Impactful Realities
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            We blend creativity with strategy to deliver innovative solutions that elevate brands.
          </p>
          <div className="text-2xl font-semibold tracking-wide">
            Envision. Execute. Excel
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Design',
                description: 'Crafting compelling visuals that tell your story.',
                path: '/design'
              },
              {
                title: 'Marketing',
                description: 'Strategic solutions to reach your target audience.',
                path: '/marketing'
              },
              {
                title: 'Development',
                description: 'Building seamless digital experiences.',
                path: '/development'
              },
              {
                title: 'Media',
                description: 'Creating engaging content that drives results.',
                path: '/media'
              }
            ].map((service) => (
              <div
                key={service.title}
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.path}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Eryx Media</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Eryx Media, we don't just build brands; we create legacies. Our team of forward-thinkers thrives on collaboration, ensuring every project is tailored to meet unique goals while driving measurable results. With a focus on storytelling and technology, we help businesses stand out in a competitive landscape.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
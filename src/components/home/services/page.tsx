'use client';
import { ServiceCard } from '@/components/home/services/serviceCard/page';

export const Services = () => {
  const services = [
    {
      title: "Brand Design",
      description: "Creating distinctive visual identities that resonate and inspire."
    },
    {
      title: "Digital Experience",
      description: "Crafting immersive digital journeys and intuitive interfaces."
    },
    {
      title: "Strategy",
      description: "Developing comprehensive brand and marketing strategies."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

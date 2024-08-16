import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    imageSrc: "./user1.png",
    logoSrc: "./5star.png",
    quote: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    name: "Jenny Wilson",
    company: "Grower.io"
  },
  {
    imageSrc: "./user2.png",
    logoSrc: "./5star.png",
    quote: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    name: "Devon Lane",
    company: "DLDesign.co"
  }
];

function TestimonialsSection() {
  return (
    <section>
      <p className="mt-48 text-base tracking-normal leading-7 text-center text-lime-500 max-md:mt-10">
        3940+ Happy SPEDIT Users
      </p>
      <h2 className="mt-6 text-5xl tracking-tighter leading-none text-center text-white max-md:max-w-full max-md:text-4xl">
        Don't just take our words
      </h2>
      <div className="mt-20 w-full max-w-[1229px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
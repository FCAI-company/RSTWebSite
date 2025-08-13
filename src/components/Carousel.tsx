"use client";

import { useState, useRef, useEffect } from "react";

const slides = [
  {
    title: "Faculty of Engineering",
    description: "Explore cutting-edge labs and real-world projects.",
    image: "/images/engineering.jpg",
  },
  {
    title: "Faculty of Dentistry",
    description: "State-of-the-art clinics and expert-led training.",
    image: "/images/dentistry.jpg",
  },
  {
    title: "Faculty of Business",
    description: "Master leadership and entrepreneurship.",
    image: "/images/business.jpg",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeoutRef.current!);
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="w-full min-w-full h-[400px] bg-cover bg-center flex items-end p-8 text-white"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-black/50 p-4 rounded-xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p className="text-sm">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

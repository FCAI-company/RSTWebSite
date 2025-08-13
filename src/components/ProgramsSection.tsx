// components/HorizontalAccordion.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const items = [
  {
    title: "Faculty of Computers and Artificial Intelligence",
    description:
      "The Faculty of Computers and Artificial Intelligence equips students with cutting-edge skills in computing, data science, and AI to shape the future of technology and innovation.",
    button: "Read More",
    image: "/ProgramsSection/csAI.webp",
    link:"https://rst.edu.eg/faculty-of-computers-and-artificial-intelligence/",
  },
  {
    title: "Faculty of Dentistry",
     description:
      "The Faculty of Dentistry is dedicated to advancing oral health through innovative education, research, and patient care — shaping skilled professionals for a brighter, healthier future.",
    button: "Read More",
    image: "/ProgramsSection/Dentistry.webp",
    link:"https://rst.edu.eg/faculty-of-dentistry/",
  },
  {
    title: "Faculty of Physical Therapy",
       description:
      "The Faculty of Physical Therapy prepares skilled professionals to restore movement, improve quality of life, and lead in rehabilitation through hands-on education and clinical excellence.",
    button: "Read More",
    image: "/ProgramsSection/Physical Therapy.webp",
    link:"https://rst.edu.eg/faculty-of-physical-therapy/",
  },
  {
    title: "Faculty of Engineering",
           description:
      "The Faculty of Engineering empowers innovators to design solutions, drive technology forward, and build a better future through cutting-edge education and research.",
    button: "Read More",
    image: "/ProgramsSection/Engineering.webp",
    link:"https://rst.edu.eg/faculty-of-engineering/",
  },
   {
    title: "Faculty of Engineering",
           description:
      "The Faculty of Engineering empowers innovators to design solutions, drive technology forward, and build a better future through cutting-edge education and research.",
    button: "Read More",
    image: "/ProgramsSection/Nursing.webp",
    link:"https://rst.edu.eg/faculty-of-computers-and-artificial-intelligence/",
  },
      {
    title: "Faculty of Nursing",
           description:
      "The Faculty of Nursing prepares compassionate, skilled professionals to lead in healthcare, combining science, care, and critical thinking to improve lives.",
    button: "Read More",
    image: "/ProgramsSection/Engineering.webp",
    link:"https://rst.edu.eg/faculty-of-nursing/",
  },
   {
    title: "Faculty of Business Administration",
           description:
      "The Faculty of Business Administration develops future leaders with the knowledge, skills, and vision to excel in a dynamic global economy.",
    button: "Read More",
    image: "/ProgramsSection/Business.webp",
    link:"https://rst.edu.eg/faculty-of-business-administration/",
  },
];

export  function ProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="Faculties"
      style={{ minHeight: "calc(100dvh - 105px)" }}
      className="    relative flex items-center bg-gradient-to-br from-background via-background to-secondary/20"
    >
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0047AB] mb-0 text-center">
          Discover Our Faculties
        </h2>
        <p className=" text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-0 text-center">
          Explore top-tier programs across a wide range of disciplines designed
          for future leaders.
        </p>
        <span className="mb-4 mx-auto flex  bg-[#0047AB] w-[300px] h-[2px]"></span>

        <div className="snap-x flex  overflow-x-auto  scroll-smooth custom-scrollbar overflow-y-hidden  h-[500px]  ">
          {items.map((item, index: number) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={clsx(
                  " snap-start relative transition-all  duration-500 ease-in-out cursor-pointer m-1",
                  isActive
                    ? " min-w-[350px] md:min-w-[500px]"
                    : "min-w-[150px] md:min-w-[150px]",
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover z-0"
                />
                <div
                  className="absolute inset-0    z-10"
                  style={{ backgroundColor: "rgba(0, 71, 171,0.6)" }}
                />
                {isActive ? (
                  <div className="transition-all flex flex-col justify-between h-full duration-500 absolute p-8  text-white z-20 max-w-[70%]">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                      <p className="mb-4">{item.description}</p>
                    </div>
                    <button
                      className="border border-white px-4 py-2"
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      {item.button}
                    </button>
                  </div>
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-500
                      translate-y-4 group-hover:translate-y-0
                    text-white"
                  >
                    <h3 className="text-2xl text-center font-bold">
                      {item.title}
                    </h3>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

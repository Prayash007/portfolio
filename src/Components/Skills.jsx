import React, { useState } from 'react';

// Importing images from the assets folder
import cppImage from '../assets/Cpp.svg';
import jsImage from '../assets/JavaScript.svg';
import tailwindImage from '../assets/Tailwind.svg';
import htmlCssImage from '../assets/CSS.svg';
import reactImage from '../assets/React.svg';
import nodeImage from '../assets/Node.svg';
import mongoImage from '../assets/Mongo.svg';
import javaImage from '../assets/java.svg';

function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const skills = [
    [
      { name: 'C++', image: cppImage },
      { name: 'JavaScript', image: jsImage },
      { name: 'Tailwind', image: tailwindImage },
      { name: 'HTML/CSS', image: htmlCssImage },
    ],
    [
      { name: 'React.js', image: reactImage },
      { name: 'Node.js', image: nodeImage },
      { name: 'MongoDB', image: mongoImage },
      { name: 'Java', image: javaImage },
    ],

  ];

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + skills.length) % skills.length;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % skills.length;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="bg-gray-300 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>

        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden">
          {/* Skills Slide */}
          <div className="flex justify-center space-x-10 transition-all duration-300">
            {skills[currentIndex].map((skill, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6 w-48 h-48 flex flex-col items-center justify-center">
                <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-4" />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-300 text-white p-2 rounded-full hover:bg-purple-600 transition-all"
            onClick={handlePrev}
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-300 text-white p-2 rounded-full hover:bg-purple-600 transition-all"
            onClick={handleNext}
          >
            ›
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="mt-4">
          {skills.map((_, idx) => (
            <span
              key={idx}
              className={`inline-block w-3 h-3 mx-1 rounded-full cursor-pointer ${currentIndex === idx ? 'bg-purple-500' : 'bg-gray-700'}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsCarousel;

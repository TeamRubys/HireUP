import { useState } from 'react';
import album1 from './album1.jpg';
import album2 from './album2.jpg';
import album3 from './album3.jpg';
import Image from 'next/legacy/image';

const Album = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const images = [
    album1.src,
    album2.src,
    album3.src,
  ];

  const texts = [
    'HireUp is designed to connect clients and their business ideas to product development specialists that can help them bring their digital ideas to fruition.',
    'HireUp is differentiating itself from the competition by targeting only software engineers, designers, and product managers.',
    'Gen Z to Millennial entrepreneurs, and Freelancers with software engineering, design, or product management experience.'
  ]

  const title = [
    'What kind of company are we?',
    'What makes us unique?',
    'Who is our target audience?'
  ]

  const handleDotClick = (index: number) => {
    setActiveImageIndex(index);
    setIsActive(true);
  };

  return (
    <div className="mx-auto w-4/5 grid grid-cols-2 gap-4" style={{ height: "40vh" }}>
      <div className="grid grid-cols-2 gap-4" style={{ display: "contents" }}>
      <div className="p-4 rounded-md" style={{ width: "80%"}}>
      <div className="flex justify-center items-center mb-4">
  {images.map((_, index) => (
    <div
      key={index}
      className={`${
        activeImageIndex === index ? "h-4 w-4" : "h-2.5 w-2.5"
      } rounded-full mx-1 border-2 ${
        activeImageIndex === index ? "border-green-300" : "border"
      } ${
        activeImageIndex === index ? "bg-green-300" : "bg-transparent"
      } hover:bg-green-300 cursor-pointer`}
      onMouseEnter={() => handleDotClick(index)}
      onMouseLeave={() => setIsActive(false)}
    ></div>
  ))}
</div>
<div className="bg-green-300 rounded-md p-4 text-white" style={{ boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, 0.1)' }}>
  <h2 className="text-lg font-bold mb-2">{title[activeImageIndex]}</h2>
  {texts[activeImageIndex]}
</div>
</div>
<div className="relative">
          <Image
            src={images[0]}
            className={`absolute inset-0 w-full h-full transition-transform ${
              activeImageIndex === 0 ? 'z+10' : 'z-10'
            }`}
            style={{
              transform: activeImageIndex === 0 ? 'translate(0, 0)' : (activeImageIndex === 1 ? 'translate(-8%, -8%)': 'translate(-4%, -4%)'),
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)'
            }}
          />
          <Image
            src={images[1]}
            className={`absolute inset-0 w-full h-full transition-transform ${
              activeImageIndex === 0 ? '0' : (activeImageIndex === 1 ? 'z+10' : 'z-20')
            }`}
            style={{
              transform:
                activeImageIndex === 0 ? 'translate(-4%, -4%)': (activeImageIndex === 1 ? 'translate(0%, 0%)': 'translate(-8%, -8%)'),
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)'
            }}
          />
          <Image
            src={images[2]}
            className={`absolute inset-0 w-full h-full transition-transform ${
              activeImageIndex === 0 ? 'z-10' : (activeImageIndex === 1 ? 'z+10' : 'z+10')
            }`}
            style={{
              transform:
              activeImageIndex === 0 ? 'translate(-8%, -8%)': (activeImageIndex === 1 ? 'translate(-4%, -4%)': 'translate(0%, 0%)'),
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Album;

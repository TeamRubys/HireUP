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
    'HireUp is designed to connect clients and their business ideas to product development specialists that can help them bring their digital ideas to fruition. We work closely with our clients to ensure that their ideas are translated into high-quality, effective digital products.',
    'We are committed to providing a personalized experience for both clients and specialists. Our platform allows for easy communication and collaboration between clients and specialists, ensuring that the project stays on track and the final product meets expectations.',
    'Our target audience consists of Gen Z to Millennial entrepreneurs and freelancers with software engineering, design, or product management experience who are looking to launch and grow their own businesses or freelancing careers.'
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
      <div className="p-4 rounded-md" style={{ width: "120%"}}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
  <div style={{ display: 'flex', flexGrow: 1 }}>
    <div>
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
    <div style={{
  position: 'relative',
  flexGrow: 0,
  marginTop: '20px',
  width: '60%'
}}>
  <div style={{
    position: 'absolute',
    bottom: '-5px',
    left: 0,
    right: 0,
    height: '3px',
    backgroundColor: '#B9F5D8',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '100',
    width: isActive === false ? '0' : '100%',
    transition: 'width 0.3s ease-in-out'
  }}></div>
  <div style={{
    width: isActive === false ? '20px' : '30px',
    height: isActive === false ? '20px' : '30px',
    borderRadius: isActive === false ? '0' : '50%',
    backgroundColor: '#B9F5D8',
    position: 'absolute',
    bottom: '47.5%',
    right: isActive === false ? '-5px' : '-10px',
    zIndex: '100',
    transition: 'border-radius 0.3s ease-in-out, transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out',
    transform: isActive === false ? 'scale(0)' : 'scale(1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: isActive === false ? '0' : '14px',
    fontWeight: isActive === false ? '400' : '600',
    color: isActive === false ? 'transparent' : '#6B8F71'
  }}>
    {isActive === false ? '' : activeImageIndex + 1}
  </div>
</div>



  </div>
</div>

</div>
<div className="relative">
          <Image
            src={images[0]}
            className={`absolute inset-0 w-full h-full transition-transform ${
              activeImageIndex === 0 ? 'z+10' : 'z-10'
            }`}
            layout="fill"
            style={{
              transform: activeImageIndex === 0 ? 'translate(0, 0)' : (activeImageIndex === 1 ? 'translate(-8%, -8%)': 'translate(-4%, -4%)'),
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
            }}
          />
          <Image
            src={images[1]}
            className={`absolute inset-0 w-full h-full transition-transform ${
              activeImageIndex === 0 ? '0' : (activeImageIndex === 1 ? 'z+10' : 'z-20')
            }`}
            layout="fill"
            style={{
              transform:
              activeImageIndex === 0 ? 'translate(-4%, -4%)': (activeImageIndex === 1 ? 'translate(0%, 0%)': 'translate(-8%, -8%)'),
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
            }}
          />
          <Image
            src={images[2]}
            className={`absolute inset-0 w-full h-full transition-transform ${
              activeImageIndex === 0 ? 'z-10' : (activeImageIndex === 1 ? 'z+10' : 'z+10')
            }`}
            layout="fill"
            style={{
              transform:
              activeImageIndex === 0 ? 'translate(-8%, -8%)': (activeImageIndex === 1 ? 'translate(-4%, -4%)': 'translate(0%, 0%)'),
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Album;

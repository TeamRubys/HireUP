import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import image1 from './working1.jpg';
import image2 from './working2.jpg';
import image3 from './working3.jpg';

// const HeroImage = () => {
//   return (
//     <Image priority={true}/>
//   )
// }

const images = [
  {
    id: 1,
    src: image1,
    alt: 'Image 1',
    text: 'Image 1 description',
    headline: 'Connect with Hiring Managers Directly: Land Your Dream Job with HireUp.',
  },
  {
    id: 2,
    src: image2,
    alt: 'Image 2',
    text: 'Image 2 description',
    headline: 'Find Your Perfect Job Match with Personalized Profiles and Massive Job Listings on HireUp.',
  },
  {
    id: 3,
    src: image3,
    alt: 'Image 3',
    text: 'Image 3 description',
    headline: 'Stand Out to Employers with HireUp: The Ultimate Platform for Job Seekers.',
  },
];

const GalleryWrapper = styled.div`
  position: relative;
  height: 55vh;
  width: 110vh;
`;

const GalleryImage = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 3s ease-in-out;
  opacity: ${({ active }) => (active ? 1 : 0)};
  height: 100%;
  width: 100%;
`;

const GalleryHeadline = styled.h2`
  position: absolute;
  left: 5%;
  bottom: 10%;
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  opacity: ${({ active, textOpacity }) => (active ? textOpacity : 0)};
  transition: opacity 1s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  useEffect(() => {
    setTextOpacity(1);
  }, [currentIndex]);

  return (
    <GalleryWrapper style={{width:'100%'}}>
      {images.map((image, index) => (
        <div key={image.id} style={{width:'100%'}}>
          <GalleryImage
            key={image.id}
            src={image.src}
            alt={image.alt}
            // width='100vh'
            // height='100vh'
            fill
            sizes='100vw'
            active={+(index === currentIndex)}
            priority={true}
          />
          <GalleryHeadline
            active={+(index === currentIndex)}
            textOpacity={textOpacity}
          >
            {image.headline}
          </GalleryHeadline>
        </div>
      ))}
    </GalleryWrapper>
  );
};

export default Gallery;

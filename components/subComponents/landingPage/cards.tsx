import Head from 'next/head';
import { useState } from 'react';
import card1 from './card1.jpg';
import card2 from './card2.jpg';
import card3 from './card3.jpg';
import Image from 'next/legacy/image';

const Cards = () => {
  return (
    <div className="flex justify-center mt-4" style={{width:'100%', marginBottom:'5%'}}>
      <div className="mx-4" style={{ width: '25%' }}>
        <div style={{ backgroundColor: 'transparent' }}>
          <div className="flex items-center mb-2">
          </div>
          <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
             <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))' }}>
              <Image
              src={card1}
              alt="card1"
              layout="fill"
              style={{ objectFit: 'cover', objectPosition: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}
              />
              </div>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="text-sm" style={{ color: '#1d1e18', textAlign: 'center', fontWeight: 'bold', marginBottom: '50%' }}>
                  Discover your dream job with us! We have over 100K job opportunities waiting for you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4" style={{ width: '25%' }}>
        <div style={{ backgroundColor: 'transparent' }}>
          <div className="flex items-center mb-2">
          </div>
          <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
             <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))' }}>
              <Image
              src={card2}
              alt="card2"
              layout="fill"
              style={{ objectFit: 'cover', objectPosition: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}
              />
              </div>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="text-sm" style={{ color: '#1d1e18', textAlign: 'center', fontWeight: 'bold', marginBottom: '50%' }}>
                We're everywhere you want to be! With over 120 locations, we're the perfect choice for your next career move.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4" style={{ width: '25%' }}>
        <div style={{ backgroundColor: 'transparent' }}>
          <div className="flex items-center mb-2">
          </div>
          <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
             <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))' }}>
              <Image
              src={card3}
              alt="card3"
              layout="fill"
              style={{ objectFit: 'cover', objectPosition: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}
              />
              </div>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="text-sm" style={{ color: '#1d1e18', textAlign: 'center', fontWeight: 'bold', marginBottom: '50%' }}>
                Join the ranks of our successful engineers! With 70K+ engineers hired, our team is filled with the best in the business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Cards;

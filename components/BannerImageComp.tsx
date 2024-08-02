// components/BannerImageComp.tsx
import React from 'react';

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, background }) => {
  return (
    <div style={{ background: `url(${background})`, padding: '20px', color: '#fff' }}>
      <img src={image} alt={title} style={{ width: '100px', height: '100px' }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{cta}</button>
    </div>
  );
};

export default BannerImageComp;

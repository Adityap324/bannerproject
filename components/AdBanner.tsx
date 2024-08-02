import React from 'react';
import Image from 'next/image';
import styles from '../styles/AdBanner.module.css';

interface AdBannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  backgroundColor: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ title, description, cta, image, backgroundColor }) => {
  return (
    <div className={styles.adBanner} style={{ backgroundColor }}>
      <div className={styles.adBannerImage}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          style={{ objectFit: 'cover' }} 
        />
      </div>
      <div className={styles.adBannerContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{cta}</button>
      </div>
    </div>
  );
};

export default AdBanner;

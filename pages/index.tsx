import React from 'react';
import AdBanner from '../components/AdBanner';
import adData from '../data/ads.json';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      {adData.map((ad, index) => (
        <AdBanner
          key={index}
          title={ad.title}
          description={ad.description}
          cta={ad.cta}
          image={ad.image}
          backgroundColor={ad.backgroundColor}
        />
      ))}
    </div>
  );
};

export default HomePage;

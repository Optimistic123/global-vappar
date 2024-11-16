import React from 'react';
import './HomeScreen.scss';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="text-content">
        <h4>Global Vvpyar</h4>
        <h1>
          All about <span className="highlight">Import Export</span>
        </h1>
        <p>
          Learn about <strong>Import, Export Consulting</strong> and develop business.
        </p>
      </div>
      <div className="image-content">
        <img src="/assets/import-export.webp" alt="Illustration" />
      </div>
    </div>
  );
};

export default HomeScreen;

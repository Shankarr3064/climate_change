import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IndiaDisasterZones from './components/IndiaDisasterZones';
import IndiaPredictionEngines from './components/IndiaPredictionEngines';
import LastMileDelivery from './components/LastMileDelivery';
import IndiaDataSources from './components/IndiaDataSources';
import GlobalExpansion from './components/GlobalExpansion';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <IndiaDisasterZones />
      <IndiaPredictionEngines />
      <LastMileDelivery />
      <IndiaDataSources />
      <GlobalExpansion />
    </div>
  );
}

export default App;
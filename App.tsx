
import React from 'react';
import AlertBar from './components/AlertBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import PainPoints from './components/PainPoints';
import SimpleWay from './components/SimpleWay';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AlertBar />
      <Header />
      <main>
        <Hero />
        <Stats />
        <SimpleWay />
        <PainPoints />
      </main>
      <Footer />
    </div>
  );
};

export default App;

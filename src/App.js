import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import Context from './components/Context';
import Timeline from './components/Timeline';
import Actors from './components/Actors';
import Methods from './components/Methods';
import Investigations from './components/Investigations';
import Sources from './components/Sources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Introduction />
      <Context />
      <Timeline />
      <Actors />
      <Methods />
      <Investigations />
      <Sources />
      <Footer />
    </div>
  );
}

export default App;

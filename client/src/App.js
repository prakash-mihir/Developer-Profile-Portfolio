import React from 'react';
import Dev from './components/Dev';
import Landing from './components/Landing';
import WelcomeText from './components/WelcomeText';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Landing />
      <WelcomeText />
      <Dev />
    </div>
  );
};

export default App;
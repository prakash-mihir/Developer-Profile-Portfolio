import React from 'react';
import Landing from './components/Landing';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/devPage/Header';

const App = () => {
  return (
    <div className="App">
      {/* <Landing /> */}
      <Router>
        <Routes>
          <Route path='dev/:id' element={<Header />} />
          <Route path="*" element={<Landing />}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
};

export default App;
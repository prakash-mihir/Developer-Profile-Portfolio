import React from 'react';
import Landing from './components/Landing';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/devPage/Header';

const App = () => {
  return (
    <div className="App">
      {/* <Landing /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path='/dev/:id' element={<Header />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
};

export default App;
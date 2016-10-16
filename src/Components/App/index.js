import React from 'react';
import './App.css';
import Hero from '../Hero';
import Dashboard from '../Dashboard';
import Footer from '../Footer';

const App = (props) => {
  return (
    <div className="App">
      <Hero />
      <Dashboard />
      {props.children}
      <Footer />
    </div>
  );
}

export default App;

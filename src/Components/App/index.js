import React, { Component } from 'react';
import './App.css';
import Hero from '../Hero';
import Dashboard from '../Dashboard';
import Footer from '../Footer';

const individuals = [
  {
    name: "Anita Coleman",
    image: "coleman-opt.jpg",
    audio: "coleman.mp3",
    timelineId: "0ArmAJfFcZtYadEdMcHNONThKMkhrelpWaWFhYXJBTFE"
  },
  {
    name: "Crystal Miller",
    image: "miller-opt.jpg",
    audio: "miller.mp3",
    timelineId: "0ArmAJfFcZtYadFA4NGhUbHk1dUF6eml0MVQ4bUVXb2c"
  },
  {
    name: "Lisa Echols",
    image: "echols-opt.jpg",
    audio: "echols.mp3",
    timelineId: "0ArmAJfFcZtYadE5NNUtsWk1FSkVaRVVpbmVsd3BxdlE"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Dashboard individuals={individuals} />
        <Footer />
      </div>
    );
  }
}

export default App;

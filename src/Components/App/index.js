import React, { Component } from 'react';
import './App.css';
import Hero from '../Hero';
import Dashboard from '../Dashboard';
import Footer from '../Footer';

const individuals = [
  {
    name: "Anita Coleman",
    image: "coleman.jpg",
    audio: "coleman.WAV",
    timelineId: "0ArmAJfFcZtYadEdMcHNONThKMkhrelpWaWFhYXJBTFE"
  },
  {
    name: "Crystal Miller",
    image: "miller.jpg",
    audio: "miller.WAV",
    timelineId: "0ArmAJfFcZtYadFA4NGhUbHk1dUF6eml0MVQ4bUVXb2c"
  },
  {
    name: "Lisa Echols",
    image: "echols.jpg",
    audio: "echols.WAV",
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

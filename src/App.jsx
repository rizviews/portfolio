import React from 'react';
import TopNavigation from './components/top-nav';
import Home from './components/home';
import About from './components/about';
import Expertise from './components/expertise';
import Experiences from './components/experience';
import Education from './components/education';
import Social from './components/social'
import Contact from './components/contact';

import './App.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <TopNavigation />
        <Home />
        <About />
        <Expertise />
        <Experiences />
        <Education />
        <Social />
        <Contact />
      </div>
    );
  }
}

export default App;

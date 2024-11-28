import React from 'react';
// Importing components for navigation, header, footer, about section, and plans section
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Plans from './components/Plans';

const App = () => {
  return (
    <>
      {/* Navigation bar for easy access to different sections */}
      <NavBar />

      {/* Header section of the page */}
      <Header />

      {/* Plans section where pricing or available plans are displayed */}
      <Plans />

      {/* About section providing information about the service */}
      <divbout />

      {/* Footer section for additional information or links */}
      <Footer />
    </>
  );
};

export default App;

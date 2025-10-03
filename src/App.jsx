import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Intro from './components/introduction';
import Footer from './components/footer';
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        
        <Intro />
        
      </div>
      <Footer />
    </>
  );
}

export default App

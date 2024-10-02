import React from "react";
import Header from './component/Header';
import FeaturedBox from './component/FeaturedBox';
import AboutBox from './component/AboutBox';
import ProjectsBox from './component/ProjectsBox';
import ContactBox from './component/ContactBox';
import Footer from './component/Footer';
import './App.css'


function App() {

  return (
    <>    
      <div className="App">
        <Header />
        <main className="wrapper">
        <FeaturedBox />
        <AboutBox />
        <ProjectsBox />
        <ContactBox />
        </main>
        <Footer />
      </div>
    </>
  )
}


export default App



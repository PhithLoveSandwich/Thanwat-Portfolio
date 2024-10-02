import Header from './component/Header';
import FeaturedBox from './component/FeaturedBox';
import AboutBox from './component/AboutBox';
import ProjectsBox from './component/ProjectsBox';
import ContactBox from './component/ContactBox';
import Footer from './component/Footer';
import './App.css'
import Typed from 'typed.js';
import {useEffect} from "react";

function App() {

  useEffect(()=>{
    /**ใช้เอคเฟค */
    const typingEffect = new Typed(".typedText",{
      String:["Student"],
      loop:true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
});
return () =>{
  typingEffect.destroy();
};
},[]); 

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

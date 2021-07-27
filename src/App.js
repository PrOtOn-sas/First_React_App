import React from 'react'
import './App.css';
import Menu from './components/Menu.js'
import Showcase from './components/Showcase.js'
import Services from './components/Services.js'
import Designers from './components/Designers.js'
import Packages from './components/Packages.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'
function App() {
  return (
    <>
    <Menu />
    <div className="main">
        <h1>Interior design</h1>
        <Showcase />
        <Services />
        <Designers />
        <Packages />
        <Contact />
    </div>
    <Footer />
    </>
  )
}

export default App;

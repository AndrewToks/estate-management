import React from 'react'
// import Header from './components/Header/Header'
import Hero from './components/Hero'
import './App.css'
import Footer from './components/Footer/Footer'
import GetStarted from './components/GetStarted/GetStarted'

import Residencies from './components/Residencies/Residencies'
import Value from './components/Value/Value'
import Contact from './components/Contact/Contact'
function App(){
    return(
        <div className='App'>
            <div>
        <div className="white-gradient" />
            {/* <Header /> */}
             <Hero />  
        </div>
             <Residencies />
             <Value /> 
             <Contact />
             <GetStarted />
             <Footer />
       </div>
    )
}
export default App
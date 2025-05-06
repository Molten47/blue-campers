import React from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Campers from './Components/Campers/Campers'
import Process from './Components/Process/Process'
import Touch from './Components/Touch/Touch'
import Optional from './Components/Optional/Optional'
import Fqas from './Components/FQA/Fqas'
import Newsletter from './Components/Newsletter/Newsletter'
import Gallery from './Components/Gallery/Gallery'
import Google from './Components/Google/Google'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
     <Header/>
      <Hero/>
      <Campers/>
      <Process/>
      <Touch/>
      <Optional/>
      <Fqas/>
      <Newsletter/>
      <Gallery/>
      <Google/>
      <Footer/>
    </div>
  )
}

export default App

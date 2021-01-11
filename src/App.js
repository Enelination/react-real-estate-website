import React, { useState } from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles';
import {SliderData} from './data/SliderData'
import Dropdown from './components/Dropdpwn';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';


function App() {
  const [isopen,setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isopen)
  }
  return (
    <>
    <GlobalStyle  />
    <Navbar toggle={toggle} />
    <Dropdown  isopen={isopen}   toggle={toggle}/>
    <Hero slides={SliderData} />
    <InfoSection {...InfoData}/>
    </>
  );
}

export default App;

import React from 'react';
import './App.scss';
import {Navbar} from './components/';
import {Header, AboutUs, Menu, Chef, Intro, Laurels, Gallery, FindUs, Footer} from './containers';

const App = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <AboutUs/>
    <Menu/>
    <Chef/>
    <Intro/>
    <Laurels/>
    <Gallery/>
    <FindUs/>
    <Footer/>
    </>
  )
}

export default App
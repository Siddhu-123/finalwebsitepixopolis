import React, { Component } from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './components/nav/nav';
import Homepage from './components/homepage';
import Accountpage from './components/accountpage/accountpage';
import Cartpage from './components/cartpage';
class App extends Component{
  render(){
    return(
      <div className='App'>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/Account" element={<Accountpage/>}></Route>
            <Route path="/Cart" element={<Cartpage/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      );
  }
}

export default App;
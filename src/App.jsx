import React from 'react';
import {Routes, Route} from "react-router-dom";
// components / pages
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
// stylesheets
import './styles/App.css';
import './styles/Header.css';
import './styles/Footer.css';
import './styles/Home.css';
import './styles/About.css';
import './styles/letters/M.css';
import './styles/letters/A.css';
import './styles/letters/T.css';
import './styles/environment/Ground.css';
import './styles/environment/Cave.css';


function App() {
  return (
    <div className='App'>
      <Header> </Header>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes> 
      <Footer> </Footer>
    </div>
  );
}

export default App;

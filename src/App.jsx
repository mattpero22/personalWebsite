import React from 'react';
import { Route } from 'react-router-dom';
// components / pages
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
// stylesheets
import './styles/Main.css';
import './styles/App.css';
import './styles/pages/Home.css';
import './styles/pages/About.css';
import './styles/pages/Skills.css';
import './styles/pages/Projects.css';
import './styles/pages/Contact.css';
import './styles/components/Header.css';
import './styles/components/Sidebar.css';
import './styles/components/Footer.css';
import './styles/components/letters/M.css';
import './styles/components/letters/A.css';
import './styles/components/letters/T.css';
import './styles/components/environment/Ground.css';
import './styles/components/environment/Cave.css';


function App() {
  return (
    <div className='App'>
      <Header />
      <Route exact path="/">
        <Main />
      </Route>
      <Footer />
    </div>
  );
}

export default App;

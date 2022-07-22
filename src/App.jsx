import React from 'react';
// components / pages
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
// stylesheets
import './styles/App.css';
import './styles/Header.css';
import './styles/Home.css';
import './styles/letters/M.css';
import './styles/letters/A.css'
import './styles/letters/T.css'


function App() {
  return (
    <div className='App'>
      <Header> </Header>
      <Main> </Main>
      <Footer> </Footer>
    </div>
  );
}

export default App;

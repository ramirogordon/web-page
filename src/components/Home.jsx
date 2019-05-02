import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Main />
    </div>
  )
}

export default Home

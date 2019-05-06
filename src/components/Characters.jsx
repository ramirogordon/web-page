import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import '../styles/Characters.scss';
import Character from './Character';

const Characters = (props) => {
  const char = props.state.characters;
  return (
    <div>
      <Navbar />
      <div className="full-characters">
        <h1>Character Sets</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eligendi, ducimus dolores id sed sunt consectetur nesciunt
          vitae laboriosam ipsa repudiandae, repellat labore temporibus
          suscipit dolore libero minima. Vero, debitis non.
          </p>
        <div className="lineal-div"></div>
        <div className="characters-content">
          <Character characters={char} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps)(Characters);

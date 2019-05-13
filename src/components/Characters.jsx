import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import '../styles/Characters.scss';
import Character from './Character';

const Characters = (props) => {
  console.log(props.state.characters);
  const char = props.state.characters;
  return (
    <>
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
    </>
  )
}

const mapStateToProps = (state) => ({
  state: state.reducerCharacter
})

export default connect(mapStateToProps)(Characters);

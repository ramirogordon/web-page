import React from 'react'
import Navbar from './Navbar';
import { connect } from 'react-redux';
import TableAbilities from './TableAbilities';
import '../styles/Abilities.scss';

const Abilities = (props) => {
  return (
    <>
      <Navbar />
      <div className="abilities-screen">
        <div className="header-abilities">
          <div className="title-abilities">
            <h1>Abilities Sets</h1>
          </div>
          <div className="description-abilities">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ipsum molestias aperiam culpa dicta quae repudiandae qui 
              commodi quo. Dolorem, quidem.
            </p>
          </div>
        </div>
        <div className="full-abilities">
          <TableAbilities abilities={props.state.abilities}/>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  state: state.reducerAbilities
})

export default connect(mapStateToProps)(Abilities)

import React from 'react';
import Navbar from './Navbar';
import '../styles/Characters.scss';
import imgWitcher from '../images/the_witcher.jpeg';

const Characters = () => {
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
        <div className="characters-content">
          <div className="character-card">
            <div className="character-image">
              <img src="http://pngriver.com/wp-content/uploads/2018/04/Download-Archer-PNG-Transparent.png" alt="img1"/>
            </div>
            <div className="character-data">
              <h2>This is a character card</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Veritatis, voluptas!
              </p>
            </div>
          </div>
          <div className="character-card">
            <div className="character-image">
              <img src="http://pngriver.com/wp-content/uploads/2018/04/Download-Archer-PNG-Transparent.png" alt="img1"/>
            </div>
            <div className="character-data">
              <h2>This is a character card</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Veritatis, voluptas!
              </p>
            </div>
          </div>
          <div className="character-card">
            <div className="character-image">
              <img src="http://pngriver.com/wp-content/uploads/2018/04/Download-Archer-PNG-Transparent.png" alt="img1"/>
            </div>
            <div className="character-data">
              <h2>This is a character card</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Veritatis, voluptas!
              </p>
            </div>
          </div>
          <div className="character-card">
            <div className="character-image">
              <img src="http://pngriver.com/wp-content/uploads/2018/04/Download-Archer-PNG-Transparent.png" alt="img1"/>
            </div>
            <div className="character-data">
              <h2>This is a character card</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Veritatis, voluptas!
              </p>
            </div>
          </div>
          <div className="character-card">
            <div className="character-image">
              <img src="http://pngriver.com/wp-content/uploads/2018/04/Download-Archer-PNG-Transparent.png" alt="img1"/>
            </div>
            <div className="character-data">
              <h2>This is a character card</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Veritatis, voluptas!
              </p>
            </div>
          </div>
          <div className="character-card">
            <div className="character-image">
              <img src="http://pngriver.com/wp-content/uploads/2018/04/Download-Archer-PNG-Transparent.png" alt="img1"/>
            </div>
            <div className="character-data">
              <h2>This is a character card</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Veritatis, voluptas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Characters

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
              <img src="http://pngriver.com/wp-content/uploads/2018/04/Download-Archer-PNG-Transparent.png" alt="img1" />
            </div>
            <div className="character-data">
              <div className="character-description">
                <p>level 7</p>
                <h2>Volomir</h2>
                <div className="description-value">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Veritatis, voluptas!
                </div>
              </div>
              <div className="character-stats">
                <div className="stats">
                  <div className="stats-value">
                    185
                  </div>
                  <div className="stats-name">
                    Life
                  </div>
                </div>
                <div className="stats">
                  <div className="stats-value">
                    90
                  </div>
                  <div className="stats-name">
                    Magic Armor
                  </div>
                </div>
                <div className="stats no-border">
                  <div className="stats-value">
                    90
                  </div>
                  <div className="stats-name">
                    Physical Armor
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="character-card">
            <div className="character-image">
              <img src="http://pngriver.com/wp-content/uploads/2018/04/Download-Archer-PNG-Transparent.png" alt="img1" />
            </div>
            <div className="character-data">
              <div className="character-description">
                <p>level 7</p>
                <h2>Volomir</h2>
                <div className="description-value">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Veritatis, voluptas!
                </div>
              </div>
              <div className="character-stats">
                <div className="stats">
                  <div className="stats-value">
                    185
                  </div>
                  <div className="stats-name">
                    Life
                  </div>
                </div>
                <div className="stats">
                  <div className="stats-value">
                    90
                  </div>
                  <div className="stats-name">
                    Magic Armor
                  </div>
                </div>
                <div className="stats no-border">
                  <div className="stats-value">
                    90
                  </div>
                  <div className="stats-name">
                    Physical Armor
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="character-card">
            <div className="character-image">
              <img src="http://pngriver.com/wp-content/uploads/2018/04/Download-Archer-PNG-Transparent.png" alt="img1" />
            </div>
            <div className="character-data">
              <div className="character-description">
                <p>level 7</p>
                <h2>Volomir</h2>
                <div className="description-value">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Veritatis, voluptas!
                </div>
              </div>
              <div className="character-stats">
                <div className="stats">
                  <div className="stats-value">
                    185
                  </div>
                  <div className="stats-name">
                    Life
                  </div>
                </div>
                <div className="stats">
                  <div className="stats-value">
                    90
                  </div>
                  <div className="stats-name">
                    Magic Armor
                  </div>
                </div>
                <div className="stats no-border">
                  <div className="stats-value">
                    90
                  </div>
                  <div className="stats-name">
                    Physical Armor
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="character-card">
            <div className="character-image">
              <img src="http://pngriver.com/wp-content/uploads/2018/04/Download-Archer-PNG-Transparent.png" alt="img1" />
            </div>
            <div className="character-data">
              <div className="character-description">
                <p>level 7</p>
                <h2>Volomir</h2>
                <div className="description-value">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Veritatis, voluptas!
                </div>
              </div>
              <div className="character-stats">
                <div className="stats">
                  <div className="stats-value">
                    185
                  </div>
                  <div className="stats-name">
                    Life
                  </div>
                </div>
                <div className="stats">
                  <div className="stats-value">
                    90
                  </div>
                  <div className="stats-name">
                    Magic Armor
                  </div>
                </div>
                <div className="stats no-border">
                  <div className="stats-value">
                    90
                  </div>
                  <div className="stats-name">
                    Physical Armor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Characters

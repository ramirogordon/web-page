import React from 'react'
import { Link } from 'react-router-dom';

const Character = (props) => {
    console.log(props.characters);
    const characters = props.characters;
    const listCharacters = characters.map((character, i) => {
        return (
            <div className="character-card" key={i}>
                <Link to="/characters/custom">
                    <div className="character-image">
                        <img src={character.img} alt="img1" />
                    </div>
                    <div className="character-data">
                        <div className="character-description">
                            <p>Level {character.level}</p>
                            <h2>{character.name}</h2>
                            <div className="description-value">
                                {character.description}
                            </div>
                        </div>
                        <div className="character-stats">
                            <div className="stats">
                                <div className="stats-value">
                                    {character.life}
                                </div>
                                <div className="stats-name">
                                    Life
                                </div>
                            </div>
                            <div className="stats">
                                <div className="stats-value">
                                    {character.magicArmor}
                                </div>
                                <div className="stats-name">
                                    Magic Armor
                                </div>
                            </div>
                            <div className="stats no-border">
                                <div className="stats-value">
                                    {character.physicalArmor}
                                </div>
                                <div className="stats-name">
                                    Physical Armor
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <>
            {listCharacters}
        </>
    )
}

export default Character

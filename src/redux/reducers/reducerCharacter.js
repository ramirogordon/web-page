import {characters} from '../../data/data.json';
const defaultState = {
    characters
}

function reducerCharacter(state = defaultState, {type}) {
    switch (type) {
        case 'LOAD_CHARACTERS': {
            return state.characters;
        }
        default: {
            return state;
        }
    }
}

export default reducerCharacter;

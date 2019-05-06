import {characters} from '../../data.json';
const defaultState = {
    characters
}

function character(state = defaultState, {type}) {
    switch (type) {
        case 'LOAD_CHARACTERS': {
            return state.characters;
        }
        default: {
            return state;
        }
    }
}

export default character;

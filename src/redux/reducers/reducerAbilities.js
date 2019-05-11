import {abilities} from '../../data/abilities.json';
const defaultState = {
    abilities
}

function reducerAbilities(state = defaultState, {type, payload}) {
    switch (type) {
        case 'LOAD_ABILITIES': {
            return state.abilities;
        }
        default: {
            return state;
        }
    }
}

export default reducerAbilities;
import { createStore, compose, combineReducers } from "redux";
import reducerCharacter from './reducers/reducerCharacter';
import reducerAbilities from './reducers/reducerAbilities';

const reducers = combineReducers({
    reducerCharacter,
    reducerAbilities
})

const store = createStore(
    reducers,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;

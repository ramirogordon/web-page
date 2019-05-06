import { createStore, compose } from "redux";
import character from './reducers/character';


const store = createStore(
    character,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;

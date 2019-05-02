import { createStore, compose } from "redux";
import user from './reducers/user';


const store = createStore(
    user,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;

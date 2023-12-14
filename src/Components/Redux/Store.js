import {createStore , combineReducers} from 'redux'
import FavoriteReducer from './Reducers/FavoriteReducer'
import PanierReducer from './Reducers/PanierReducer';


const rootReducer = combineReducers ({
    FavoriteReducer,
    PanierReducer
});

const store = createStore(rootReducer)

export default store ;
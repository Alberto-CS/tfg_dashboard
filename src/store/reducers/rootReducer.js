import authReducer from './authReducer'
import dishReducer, * as fromDishes from './dishReducer'
import menuReducer from './menuReducer'
import searchReducer from './searchReducer'
import restaurantReducer from './restaurantReducer'
import { combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth: authReducer,
    dish: dishReducer,
    menu: menuReducer,
    restaurant: restaurantReducer,
    search: searchReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer

export const getDishes = (state, filter) =>
    fromDishes.getDishes(state, filter)

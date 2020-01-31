import authReducer from './authReducer'
import dishReducer from './dishReducer'
import menuReducer from './menuReducer'
import restaurantReducer from './restaurantReducer'
import { combineReducers} from 'redux'
import langReducer from './langReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    dish: dishReducer,
    menu: menuReducer,
    restaurant: restaurantReducer,
    language: langReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});


export default rootReducer
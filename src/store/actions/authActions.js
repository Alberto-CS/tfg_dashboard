import firebase from 'firebase'


export const signIn = (credentials) => {
    return (dispatch) =>{
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) =>{
            dispatch({ type: 'LOGIN_ERROR', err})
        })
    }
}

export const signOut = () => {
    return (dispatch) => {
        firebase.auth().signOut().then(
            () => {
                dispatch({ type: 'SIGNOUT_SUCCESS'});
            }
        )
    }
}

export const signUp = (newUser) => {
    return (dispatch, {getFirestore}) => {
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                name: newUser.name,
                restaurant: newUser.restaurant
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch(err =>{
            dispatch({type: 'SIGNUP_ERROR', err})
        })
    }
}
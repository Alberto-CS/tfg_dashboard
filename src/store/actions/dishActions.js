

export const createDish = (dish) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('platos').add({
            ...dish,
            restaurantId: getState().firebase.auth.uid
        }).then(() => {
            dispatch({ type: 'CREATE_DISH', dish });
        }).catch((err) => {
            dispatch({ type: 'CREATE_DISH_ERROR', err });
        })
        
    }
}

//TODO: update a dish
export const updateDish = (dish) => {
    console.log("entro en updateDish actions")
    console.log(dish)
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('platos').doc(dish.id).update().then(() => {
            dispatch({ type: 'UPDATE_DISH'});
        }).catch((err) => {
            dispatch({ type: 'UPDATE_DISH_ERROR', err });
        })
        
    }
}

export const deleteDish = (dish) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('platos').doc(dish.id).delete().then(() => {
            dispatch({ type: 'DELETE_DISH'});
        }).catch((err) => {
            dispatch({ type: 'DELETE_DISH_ERROR', err });
        })
        
    }
}
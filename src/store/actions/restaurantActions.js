export const selectRestaurant = (restaurant, id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('users').doc(id).update({
            restaurant: restaurant
        }).then(() => {
            dispatch({ type: 'UPDATE_RESTAURANT'});
        }).catch((err) => {
            dispatch({ type: 'UPDATE_RESTAURANT_ERROR', err });
        })
    }

}

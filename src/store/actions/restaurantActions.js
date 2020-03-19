export const selectRestaurant = (restaurant, id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('users').doc(id).update({
            restaurant: restaurant
        })
    }

}

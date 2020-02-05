export const createMenu = (menu) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('menu').add({
            ...menu,
            restaurantId: getState().firebase.auth.uid
        }).then(() => {
            dispatch({ type: 'CREATE_MENU', menu });
        }).catch((err) => {
            dispatch({ type: 'CREATE_MENU_ERROR', err });
        })
    }
}

export const updateMenu = (menu) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('menu').doc(menu.id).update({
            ...menu,
        }).then(() => {
            dispatch({ type: 'UPDATE_MENU', menu });
        }).catch((err) => {
            dispatch({ type: 'UPDATE_MENU_ERROR', err });
        })
    }

}

export const deleteMenu = (menu) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('menu').doc(menu.id).delete().then(() => {
            dispatch({ type: 'DELETE_MENU'});
        }).catch((err) => {
            dispatch({ type: 'DELETE_MENU_ERROR', err });
        })
        
    }
}

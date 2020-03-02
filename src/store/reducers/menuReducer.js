const initState = {menues: []}

const menuReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_MENU': 
            console.log('Menu added', action.dishes)
            setTimeout(function(){ window.location.href = './list';}, 1500);
            return state;
        case 'CREATE_MENU_ERROR':
            console.log('Menu added error', action.err);
            return state;
        case 'UPDATE_MENU': 
            console.log('Menu updated', action.dishes)
            setTimeout(function(){ window.location.href = './list';}, 1500);
            return state;
        case 'UPDATE_MENU_ERROR':
            console.log('Menu updated error', action.err);
            return state;             
        case 'DELETE_MENU': 
            console.log('Menu deleted', action.dishes)
            return state;
        case 'DELETE_MENU_ERROR':
            console.log('Menu deleted error', action.err);
            return state;        
        default:
            return state;
    }
}

export default menuReducer
const initState = {
    //dummy data
    dishes: []
}

const dishReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_DISH': 
            console.log('Dish added', action.dishes)
            setTimeout(function(){ window.location.href = './list';}, 3000);
            return state;
        case 'CREATE_DISH_ERROR':
            console.log('Dish added error', action.err);
            return state;
        case 'UPDATE_DISH': 
            console.log('Dish updated', action.dishes)
            return state;
        case 'UPDATE_DISH_ERROR':
            console.log('Dish updated error', action.err);
            return state;             
        case 'DELETE_DISH': 
            console.log('Dish deleted', action.dishes)
            return state;
        case 'DELETE_DISH_ERROR':
            console.log('Dish deleted error', action.err);
            return state;        
        default:
            return state;
    }
}

export default dishReducer

export const getDishes = (dishes, filter) => {
    if (dishes !== undefined){
        if (filter === '' || filter === undefined ){
            return dishes
        } else {
            return dishes.filter(dish => {
                if (dish.title.includes(filter)){
                    return dish
                } else {
                    return null
                }
                
            })        
        }
    }
}
const initState = {
    //dummy data
    dishes: [
        {id: '1', title: 'Bibimbap', photo: 'https://picsum.photos/200', description: 'A Korean dish consisting of rice topped with sautéed vegetables, chilli paste, and beef or other meat, sometimes with the addition of a raw or fried egg', allergens: 'egg, soy'},
        {id: '2', title: 'Ramyeon', photo: 'https://picsum.photos/200', description: 'A Japanese dish cosisting of quick-cooking noodles, typically served in a broth with meat and vegetables', allergens: ''},
        {id: '3', title: 'Maki sushi', photo: 'https://picsum.photos/200', description: 'A Japanese dish consisting of sushi and raw vegetables wrapped in seaweed', allergens: ''},
        {id: '4', title: 'Kimchi', photo: 'https://picsum.photos/200', description: 'A Korean dish of spicy pickled cabbage.', allergens: ''}
    ]
}

const dishReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_DISH': 
            console.log('Dish added', action.dishes)
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
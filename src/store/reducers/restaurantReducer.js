const initState = {
    restaurants: []
}

const restaurantReducer = (state = initState, action) => {
    return state
}

export default restaurantReducer

export const getRestaurant = (restaurant, filter) => {
    if (restaurant !== undefined){
        if (filter === '' || filter === undefined ){
            return restaurant
        } else {
            return restaurant.filter(restaurant => {
                if (restaurant.name.includes(filter)){
                    return restaurant
                } else {
                    return null
                }
                
            })        
        }
    }
}
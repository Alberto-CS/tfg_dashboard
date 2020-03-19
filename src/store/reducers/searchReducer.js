const initState = {
    search: ""
}

const searchReducer = (state = initState, action) => {
    switch (action.type){
        case 'NEW FILTER':
            return {
                ...state,
                search: action.filter
            }
        default:
            return state
    }    
}
export default searchReducer
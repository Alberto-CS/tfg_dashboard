export const search = (filter) => {
    return (dispatch) =>{
            dispatch({ type: 'NEW FILTER', filter})
    }
}
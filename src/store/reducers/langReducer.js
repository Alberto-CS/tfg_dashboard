const initState = {
    languages: [
        {id: '1', language: 'spanish', prefix: 'sp' , flag: 'https://picsum.photos/200'}, 
        {id: '1', language: 'english', prefix: 'en' , flag: 'https://picsum.photos/200'}, 
        {id: '1', language: 'french', prefix: 'fr' , flag: 'https://picsum.photos/200'}, 
        {id: '1', language: 'korean', prefix: 'kr' , flag: 'https://picsum.photos/200'} 
    ]
}

const langReducer = (state = initState, action) => {
    return state
}

export default langReducer
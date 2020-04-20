const initialState = {
    activePage: 'MAIN'
}

const headerReducer = (state = initialState, action) => {
    switch (action.type){
        case 'CHANGE_TO_ABOUT':
            return {...state, activePage: action.payload};
        case 'CHANGE_TO_PORTFOLIO':
            return {...state, activePage: action.payload};
        case 'CHANGE_TO_CONTACTS':
            return {...state, activePage: action.payload};
        case 'CHANGE_TO_MAIN':
            return {...state, activePage: action.payload};
    }
    return state;
}

export default headerReducer;
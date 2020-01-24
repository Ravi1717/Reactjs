const istate = {
    name: 'ramesh',
    wishes: ['eat', 'code']
}


const reducer = (state = istate, action) => {
    //console.log(action)
    // return state;

    if (action.type === 'CHANGE_NAME') {
        return {
            ...state,
            name: action.payload
        }
    }
    return state;
}

export default reducer;
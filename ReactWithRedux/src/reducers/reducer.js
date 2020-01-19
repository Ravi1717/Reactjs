
const initialstate = {
    name: 'ravi',
    wishes: ['eat', 'code']
}


const reducer = (state = initialstate, action) => {

    if (action.type === 'CHANGE_NAME') {
        return {
            ...state,
            name: action.payload
        }
    }


    return state;

}

export default reducer;
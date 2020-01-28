/*export const anotherName = (name) => {
    return {
        type: 'CHANGE_NAME',
        payload: name                              ///ACTION CREATORS
    }                                                                    //ASYNCHRONOUS OPERATION
}
*/


export const anotherName = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res2 => {
                dispatch({
                    type: 'CHANGE_NAME',
                    payload: res2[0].name
                })
            })

    }
}




export const addwish = () => {
    return {
        type: 'add_wish',
        payload: 'Play'
    }
}
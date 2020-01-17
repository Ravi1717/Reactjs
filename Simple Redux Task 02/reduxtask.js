const redux = require('redux');
const createStore = redux.createStore;
const initialstate = {
    firstname: 'ravi',

}

const rootreducer = (state = initialstate, action) => {
    if (action.type === 'lastname') {
        return {
            fullname: state.firstname + action.value
        };

    }
    return state;
}



const store = createStore(rootreducer);
console.log(store.getState());


store.subscribe(() => {
    console.log(['Subscription'], store.getState());
});

store.dispatch({ type: 'lastname', value: 'verma' })
console.log(store.getState());


// initial state 

const initialState = {
    count : 0
}

// Reducer funtion

function counterReducer (state = initialState, action){
    switch(action.type) {
        case "INCREMENT":
            return{...state, count : state.count + 1};
        case "DECREMENT" :
            return {...state, count: state.count - 1};
        default :
            return state;
    }
}


// create store

const store = Redux.createStore(counterReducer);


// subscribe (listen for state changes)

store.subscribe(()=>{
    console.log("current state", store.getState())
})

// dispatch action

store.dispatch({type: "INCREMENT"});
store.dispatch({type: "INCREMENT"});
store.dispatch({type: "DECREMENT"});
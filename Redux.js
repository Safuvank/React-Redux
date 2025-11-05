const redux = require("redux")
const createStore = redux.createStore;


// action in redux

const ORDER_PIZZA = "ORDER_PIZZA"

// action creater

function orderPizza () {
    return {
        type: ORDER_PIZZA,
        payload : 2
    }
    
}


const initialState = {
    pizzaBase : 100,
}

const reducer = (state = initialState,action) =>{
    switch (action.type){
        case ORDER_PIZZA:
            return {
                ...state,
                pizzaBase : state.pizzaBase - 1
            }
        default :
            return state
    }
}

const store = createStore(reducer)

console.log("initial State",store.getState())


const unsubscribe = store.subscribe(()=>console.log("Updated State", store.getState()))


store.dispatch(orderPizza())
store.dispatch(orderPizza())
unsubscribe();
store.dispatch(orderPizza());


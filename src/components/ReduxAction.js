const redux = require( 'react-redux' )
const createStore = redux.createStore()

const BUY_CAKE = 'BUY CAKE';


//Action
function buyCake(){ //action creater
  return {
    type: BUY_CAKE,
    info:'first redux action'
  }
}

//state
const initialState = {
  numOfCakes:10
}

//Reducer
//(previousState, action) => newState
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:return{numOfCakes : state.numOfCakes - 1}
  
    default:return state
  }
}

// store
//hold application state 
const store = createStore(reducer)

//give current state
console.log('initial state : ', store.getState())

//register listeners
const unsubscribe = store.subscribe(() => console.log('updated state : ',store.getState()))

// update state
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())


// handle unregistering
unsubscribe()
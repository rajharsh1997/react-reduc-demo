// import {BUY_CAKE} from './cakeTypes';

// const initialState = {
//     numOfCakes : 10
// }

// const cakeReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         default: return state
//     }
// }

// export default cakeReducer

import {BUY_CAKE} from './cakeTypes';

const initialState = {
    numOfCakes : 10
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            //insted of 1 we reduce by action.payload for NewCakeContainer
            numOfCakes: state.numOfCakes - action.payload
        }
        default: return state
    }
}

export default cakeReducer
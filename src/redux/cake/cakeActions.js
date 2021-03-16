// import {BUY_CAKE} from './cakeTypes'

// //import since as a convention we need to keep type as a constant

// export const buyCake = () => {
//     return {
//         type: BUY_CAKE
//     }
// }

import {BUY_CAKE} from './cakeTypes'

//import since as a convention we need to keep type as a constant
// for NewCakeContainer we have to pass number as prop and keep dwfault as 1 so CakeContainer does not break
export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}
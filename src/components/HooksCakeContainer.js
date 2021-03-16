import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>!!Hook!! Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cakes</button>
        </div>
    )
}

//useSelector is close or similarto mapStateToProps
//useDispatch returns a reference to the dispatch function from the redux store

export default HooksCakeContainer

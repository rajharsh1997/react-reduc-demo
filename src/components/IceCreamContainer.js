import React from 'react'
import {buyIceCream} from '../redux'
//To connect the two function to react component use connect HOC
import {connect} from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of iceCreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy iceCreams</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        // numOfIceCreams: state.numOfIceCreams
        // The above will cause blank after Number of iceCreams
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(IceCreamContainer)

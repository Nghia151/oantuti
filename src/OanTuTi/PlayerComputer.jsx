import React, { Component } from 'react'
import {connect} from 'react-redux'
class PlayerComputer extends Component {
    render() {
        const {playerComputer} = this.props;
        
        return (
            <div className="player mt-4">
                
                <div className="bubble" style={{position:'relative'}}>
                    <img  className="mt-3" src={playerComputer.hinhAnh} alt="" width={60} height={60} />
                </div>
                <div className="speech-bubble"></div>   
                    <img src="./images/playerComputer.png" alt="" width={200} height={200}/>
                
            </div>
        )
    }
}
const mapStateToProps = state =>({
    playerComputer:state.gameOanTuTiReducer.playerComputer
})


export default connect(mapStateToProps)(PlayerComputer)
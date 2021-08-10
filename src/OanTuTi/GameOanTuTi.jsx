import React, { Component } from 'react'
import Player from './Player'
import PlayerComputer from './PlayerComputer'

import './GameOanTuTi.css'
import Info from './Info'
import {connect} from 'react-redux'
import {actPlayGame, actKetQua } from '../store/action/gameOanTuTiAction'

class GameOanTuTi extends Component {
    render() {
        const {playGame} = this.props;
        return (
            <div className="game">
                <div className="row">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4 mt-4">
                        <Info />
                        <button stype={{position: 'relative'}} className="btn btn-success mt-3" onClick={()=>playGame()} >Play game</button>
                    </div>
                    <div className="col-4">
                        <PlayerComputer />
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>({
    playGame: () =>{
        let count = 0;
        let randomComputerItem = setInterval(()=>{
            dispatch(actPlayGame())
            count++;
            if(count > 10){
            clearInterval(randomComputerItem);
            dispatch(actKetQua())
            }
            
        },100)
        

    }
})


export default connect(null, mapDispatchToProps)(GameOanTuTi)
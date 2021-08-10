import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actChonKeoBuaBao } from '../store/action/gameOanTuTiAction';
class Player extends Component {
    render() {
        const { mangDatCuoc, selectItem } = this.props;
        return (
            <div className="player mt-4">
                <div className="bubble">
                    <img className="mt-3" src={mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh} width={60} height={60} />
                </div>
                <div className="speech-bubble"></div>
                <img src="./images/player.png" alt="" width={200} height={200} />

                <div className="row">
                    {mangDatCuoc.map((item, idx) => {
                        let active = {};
                        if(item.datCuoc){
                             
                            active = {background:'#1edd84'};
                        }
                        return (<div className="col-4">
                            <button style={active} className="btnSelect" onClick={()=> selectItem(item.ma)}>
                                <img src={item.hinhAnh} alt="" width={30} height={30} />
                            </button>
                        </div>
                        )
                    })}


                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    mangDatCuoc: state.gameOanTuTiReducer.mangDatCuoc
})
const mapDispatchToProps = dispatch => ({
    selectItem: (ma) => {
        dispatch(actChonKeoBuaBao(ma))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Player)


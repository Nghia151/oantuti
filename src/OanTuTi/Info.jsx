import React, { Component } from 'react'
import {connect} from 'react-redux'
class Info extends Component {
    render() {
        const {ketQua, soBanChoi, soBanThang} = this.props;
        return (
            <div>
                <div className="text-warning display-4">{ketQua}</div>
                <div className="text-success display-4">Số bàn thắng:
                    <span className="text-danger"> {soBanThang} </span>
                </div>
                <div className="text-success display-4">Tổng bàn chơi: 
                    <span className="text-danger"> {soBanChoi} </span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    ketQua: state.gameOanTuTiReducer.ketQua,
    soBanThang:state.gameOanTuTiReducer.soBanThang,
    soBanChoi:state.gameOanTuTiReducer.soBanChoi,
})

export default connect (mapStateToProps)(Info)
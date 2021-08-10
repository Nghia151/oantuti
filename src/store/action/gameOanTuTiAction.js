import * as gameOanTuTiConstants from '../constants/gameOanTuTiConstants';
export const actChonKeoBuaBao = mangDatCuoc => ({
    type: gameOanTuTiConstants.CHON_KEO_BUA_BAO,
    payload: mangDatCuoc,
})
export const actPlayGame = () =>({
    type: gameOanTuTiConstants.PLAY_GAME
})
export const actKetQua = () =>({
    type: gameOanTuTiConstants.KET_QUA
})
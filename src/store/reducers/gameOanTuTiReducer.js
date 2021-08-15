import * as gameOanTuTiConstants from '../constants/gameOanTuTiConstants';
const initialState = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './images/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './images/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './images/bao.png', datCuoc: false },
    ],
    soBanThang: 0,
    soBanChoi: 0,
    ketQua: 'Chơi nè anh mentor:)',
    playerComputer: { ma: 'keo', hinhAnh: './images/keo.png' },
    // {ma: 'bua', hinhAnh: './images/bua.png', datCuoc:false},
    // {ma: 'bao', hinhAnh: './images/bao.png', datCuoc:false}
};
const gameOanTuTiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case gameOanTuTiConstants.CHON_KEO_BUA_BAO: {
            // khi người dùng chọn thì nên reset lại kết quả và reset lại máy chọn thành rỗng
            let mangDatCuocUpdate = [...state.mangDatCuoc];
            mangDatCuocUpdate = mangDatCuocUpdate.map((item, idx) => {
                return { ...item, datCuoc: false };
            });// nghĩ được cái hàm này cũng hay đó :))
            state.mangDatCuoc.ma = payload;
            // let index = mangDatCuocUpdate.findIndex(item => item.ma === payload);
            let datCuocFind = mangDatCuocUpdate.find((item) => item.ma === payload); // chỗ này nên sử dụng find để tìm ra thẳng luôn k cần find index
            // if(index !== -1){// không cần if vì chắn chắn là tìm sẽ ra(chọn bằng cách click button chứ đâu nhập tay)
            datCuocFind.datCuoc = true;
            // }
            state.mangDatCuoc = mangDatCuocUpdate;
            return { ...state };
        }
        case gameOanTuTiConstants.PLAY_GAME: {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let itemNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.playerComputer = itemNgauNhien;
            return { ...state };
        }
        case gameOanTuTiConstants.KET_QUA:
            let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
            let playerComputer = state.playerComputer;
            state.soBanChoi += 1;
            // thuật toán để check thắng hòa thua như sau:
            // tạo ra 1 list [keo,bua,bao]; mỗi lần người dùng chọn hoặc máy chọn thì dùng hàm findIndex để lấy index ra
            // để ý thấy cái mảng này, thì index của nó có quy luật thắng thua như sau
            // mình chọn cái gì bạn chọn đúng cái đó thì hòa, cái này dễ
            // mình chọn bất cứ cái gì, nếu bạn chọn sau mình 1 index, mình thua ("bua" thắng "keo", "bao" thang "bua"),
            // hoặc bạn chọn trước mình 2 đơn vị mình cũng thua(mình chọn "bao" bạn chọn "keo")
            // if(indexYou===indexMe){
            //     result ="DRAW";
            // }else if(indexMe===indexYou-1|| indexMe === indexYou+2){
            //     result ="LOSE";
            // }else{
            //     result ="WIN";
            // }
            // nếu không hiểu lắm có thể inbox riêng a để hỏi
            switch (player.ma) {
                case 'keo':
                    if (playerComputer.ma === 'keo') {
                        state.ketQua = 'Thắng sao được keke!';
                    } else if (playerComputer.ma === 'bua') {
                        state.ketQua = 'Mentor đã thua:))))';
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = 'Ok, mentor thắng=)';
                    }
                    break;
                case 'bua':
                    if (playerComputer.ma === 'keo') {
                        state.soBanThang += 1;
                        state.ketQua = 'Ok, mentor thắng=)';
                    } else if (playerComputer.ma == 'bua') {
                        state.ketQua = 'Thắng sao được keke!';
                    } else {
                        state.ketQua = 'Mentor đã thua:))))';
                    }
                    break;
                case 'bao':
                    if (playerComputer.ma === 'keo') {
                        state.ketQua = 'Mentor đã thua:))))';
                    } else if (playerComputer.ma === 'bua') {
                        state.ketQua = 'Ok, mentor thắng=)';
                        state.soBanThang += 1;
                    } else {
                        state.ketQua = 'Thắng sao được keke!';
                    }
                    break;
                default:
                    return { ...state };
            }
        default:
            return { ...state };
    }
};

export default gameOanTuTiReducer;

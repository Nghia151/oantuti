import { createStore, combineReducers } from 'redux';
import gameOanTuTiReducer from './reducers/gameOanTuTiReducer';

// Khởi tạo root reducer (quản lý các reducers con)
const rootReducer = combineReducers({
  // key: value
    gameOanTuTiReducer,
});

// Khởi tạo redux store (quản lý root reducer)
const store = createStore(
  rootReducer,
  // Config redux dev tool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
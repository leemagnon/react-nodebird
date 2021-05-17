import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import post from './post';
import user from './user';

// (이전 상태, 액션) => 다음 상태. reducer 초기화 시 default 부분 실행됨.
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;

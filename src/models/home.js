// import { routerRedux } from 'dva/router';
// import { queryURL } from '../utils';
import { message } from 'antd';
import { sendBuyService } from '../services/home';

export default {
  namespace: 'home',
  state: {
    BJK3: [],
    BJPK10: [],
    rate: 1,
    timerCtrl: true,
  },

  effects: {
    *updateCtrl({ payload }, { put }) {
      yield put({ type: 'updateCtrlValue', payload });
    },
    *updateBJK3({ payload }, { put }) {
      yield put({ type: 'updateBJK3List', payload });
    },
    *delBJK3Item({ payload }, { put }) {
      yield put({ type: 'delBJK3List', payload });
    },
    *clearBJK3({ payload }, { put }) {
      yield put({ type: 'updateBJK3List', payload: [] });
    },
    *updateBJPK10({ payload }, { put }) {
      yield put({ type: 'updateBJPK10List', payload });
    },
    *delBJPK10Item({ payload }, { put }) {
      yield put({ type: 'delBJPK10List', payload });
    },
    *clearBJPK10({ payload }, { put }) {
      yield put({ type: 'updateBJPK10List', payload: [] });
    },
    *updateRate({ payload }, { put }) {
      yield put({ type: 'updateRateValue', payload });
    },
    *sendBuy({ payload }, { put, call }) {
      yield put({ type: 'trend/showLoading' });
      const data = yield call(sendBuyService, payload.data);
      yield put({ type: 'trend/hideLoading' });
      if (data.success) {
        if (payload.cb) {
          payload.cb();
        }
      } else {
        throw data;
      }
    },
  },
  reducers: {
    updateCtrlValue(state, { payload }) {
      return {
        ...state,
        timerCtrl: payload,
      };
    },
    updateBJK3List(state, { payload }) {
      return {
        ...state,
        BJK3: payload,
      };
    },
    delBJK3List(state, { payload }) {
      state.BJK3.forEach((i, index) => {
        if (i.index === payload) {
          state.BJK3.splice(index, 1);
        }
      });
      return {
        ...state,
        BJK3: state.BJK3,
      };
    },
    updateBJPK10List(state, {payload}){
      return {
        ...state,
        BJPK10: payload,
      };
    },
    delBJPK10List(state, { payload }) {
      state.BJPK10.forEach((i, index) => {
        if (i.index === payload) {
          state.BJPK10.splice(index, 1);
        }
      });
      return {
        ...state,
        BJPK10: state.BJPK10,
      };
    },
    updateRateValue(state, { payload }) {
      return {
        ...state,
        rate: payload,
      };
    },
  },
};

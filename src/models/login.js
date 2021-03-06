import { routerRedux } from 'dva/router';
import { config } from '../utils';
import { login, signIn, signOut } from '../services/login';
import { setToken } from '../utils/request';

const { sessionKey } = config;

export default {
  namespace: 'login',
  state: {
    loginLoading: false,
  },

  effects: {
    *login({
             payload,
           }, { put, call }) {
      yield put({ type: 'showLoginLoading' });
      const data = yield call(login, payload);
      yield put({ type: 'hideLoginLoading' });
      if (!data.success) {
        throw data;
      } else {
        sessionStorage.setItem(sessionKey.token, data.token);
        sessionStorage.setItem(sessionKey.userName, data.userName);
        yield put(routerRedux.push('/home'));
        setToken(data.token);
      }
    },
    *signIn({
             payload,
           }, { put, call }) {
      yield put({ type: 'showLoginLoading' });
      const data = yield call(signIn, payload);
      yield put({ type: 'hideLoginLoading' });
      if (!data.success) {
        throw data;
      } else {
        sessionStorage.setItem(sessionKey.token, data.token);
        sessionStorage.setItem(sessionKey.userName, data.userName);
        yield put(routerRedux.push('/home'));
        setToken(data.token);
      }
    },
    *logOut({ payload }, { put, call }) {
      const data = yield call(signOut);
      if(!data.success){
        throw data;
      }else {
        yield put(routerRedux.push('/login'));
      }
    },
  },
  reducers: {
    showLoginLoading(state) {
      return {
        ...state,
        loginLoading: true,
      };
    },
    hideLoginLoading(state) {
      return {
        ...state,
        loginLoading: false,
      };
    },
  },
};

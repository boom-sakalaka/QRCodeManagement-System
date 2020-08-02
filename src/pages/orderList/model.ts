import { Effect, Reducer } from 'umi';
import { message } from 'antd';
import { queryOrderList } from './service';

export interface OrderListStateType {
  orderData?: any[];
}
export interface MyOrderListType {
  namespace: string;
  state:OrderListStateType;
  effects: {
    getOrderList: Effect;
  };
  reducers: {
    saveOrderList: Reducer<OrderListStateType>;
    // saveCurrentStep: Reducer<OrderListStateType>;
  };
}
const Model: MyOrderListType = {
  namespace: 'MyOrderList',
  state: {
    orderData: [],
  },
  effects: {
    *getOrderList({ payload }, { call, put }) {
      const response = yield call(queryOrderList, payload);
      yield put({
        type: 'saveOrderList',
        payload: response,
      });
      message.success('查询成功');
    },
  },
  reducers: {
    saveOrderList(state, { payload }) {
      return {
        ...state,
        orderData: payload,
      };
    },
  }
};

export default Model;
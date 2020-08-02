import { Effect, Reducer } from 'umi';
import { message } from 'antd';
import { queryOrderList } from './service';


interface RequestData {
  data: any[];
  success: boolean;
  total: number;
}

export interface OrderListStateType {
  orderData?: RequestData;
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
    orderData: {
      data: [],
      success: false,
      total: 0
    },
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
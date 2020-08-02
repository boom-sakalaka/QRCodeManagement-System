import React ,{ useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import { OrderListStateType} from './model'

interface StepFormProps {
  data: OrderListStateType['orderData'];
  dispatch: Dispatch;
}
const OrderList : React.FC<StepFormProps> = ({ data, dispatch }) => {
  useEffect(() => {
    dispatch({
      type: 'MyOrderList/getOrderList',
      param: {}
    })
  }, []);
  return (
  <div>{data?.map((item, index) => {
    return (<span key={index}>{item.dw_opening_size}</span>)
  })}</div>
  )
}


export default connect(
  ({ MyOrderList }: {MyOrderList: OrderListStateType}) => 
  ({data: MyOrderList.orderData}))
  (OrderList);
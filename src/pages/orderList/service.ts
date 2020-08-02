import request from '@/utils/request';
import { TableListParams } from './data'

export async function queryOrderList(params:TableListParams) {
  return  request('/api/orderList', {
    params,
  });
}

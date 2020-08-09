import request from '@/utils/request';

export async function queryList(params: any) {
  return request('/api/ManufactureProfile', {
    params,
  });
}

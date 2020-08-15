import request from '@/utils/request';
// import baseData from '@/utils/constants';

// const { baseUrl } = baseData
export interface LoginParamsType {
  userName: string;
  password: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
  // console.log('111' + JSON.stringify(params))
  // return request(baseUrl +'/admin/index/login', {
  //   method: 'POST',
  //   data: params,
  // });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing

  // {
  //   path: '/welcome',
  //   name: '欢迎',
  //   icon: 'smile',
  //   component: './Welcome',
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   component: './Admin',
  //   authority: ['admin'],
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //       authority: ['admin'],
  //     },
  //   ],
  // },
  // {
  //   name: '基础表格',
  //   icon: 'table',
  //   path: '/list',
  //   component: './ListTableList',
  // },
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: '登录',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/order/orderList',
            },
            {
              path: '/order',
              name: '订单管理',
              icon: 'table',
              routes: [
                {
                  path: '/order/orderList',
                  name: '订单列表',
                  icon: 'smile',
                  component: './orderList',
                },
                {
                  path: '/order/addOrder',
                  name: '新增订单',
                  icon: 'smile',
                  component: './AddOrder',
                },
              ],
            },
            {
              path: '/management',
              name: '条码管理',
              icon: 'table',
              routes: [
                {
                  path: '/management/print',
                  name: '条码列表',
                  icon: 'smile',
                  component: './QrcodePrint',
                },
              ],
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});

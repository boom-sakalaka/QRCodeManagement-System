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
              path: '/basicInformation',
              name: '基础资料',
              icon: 'table',
              routes: [
                {
                  path: '/basicInformation/ProductArchive',
                  name: '产品档案',
                  icon: 'smile',
                  component: './ProductArchive',
                },
                {
                  path: '/basicInformation/ManufacturerProfile',
                  name: '制造商档案',
                  icon: 'smile',
                  component: './ManufacturerProfile',
                },
                {
                  path: '/basicInformation/SeriesFile',
                  name: '系列档案',
                  icon: 'smile',
                  component: './SeriesFile',
                },
                {
                  path: '/basicInformation/MaterialFile',
                  name: '材质档案',
                  icon: 'smile',
                  component: './MaterialFile',
                },
                {
                  path: '/basicInformation/StandardFile',
                  name: '执行标准档案',
                  icon: 'smile',
                  component: './StandardFile',
                },
                {
                  path: '/basicInformation/ConstructionPartyFiles',
                  name: '施工方档案',
                  icon: 'smile',
                  component: './ConstructionPartyFiles',
                },
                {
                  path: '/basicInformation/QualityAssurerFile',
                  name: '质检方档案',
                  icon: 'smile',
                  component: './QualityAssurerFile',
                },
                {
                  path: '/basicInformation/StoreFile',
                  name: '门店档案',
                  icon: 'smile',
                  component: './StoreFile',
                },
                {
                  path: '/basicInformation/DesignerProfile',
                  name: '设计师档案',
                  icon: 'smile',
                  component: './DesignerProfile',
                },
              ],
            },
            {
              path: '/SystemSettings',
              name: '系统设置',
              icon: 'table',
              routes: [
                {
                  path: '/SystemSettings/UserManagement',
                  name: '用户管理',
                  icon: 'smile',
                  component: './UserManagement',
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

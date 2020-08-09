// import { Request, Response } from 'express';

export default {
  'GET /api/orderList': {
    data: [
      {
        dw_opening_size: '202007001',
        dw_community_name: '深圳XX区XX街道XX小区',
        dw_building_number: 1,
        dw_floor: 12,
        dw_house_type: '户型A',
        dw_hole_number: 2,
      },
      {
        dw_opening_size: '202007002',
        dw_community_name: '深圳XX区XX街道XX小区',
        dw_building_number: 1,
        dw_floor: 12,
        dw_house_type: '户型A',
        dw_hole_number: 2,
      },
      {
        dw_opening_size: '202007003',
        dw_community_name: '深圳XX区XX街道XX小区',
        dw_building_number: 1,
        dw_floor: 12,
        dw_house_type: '户型A',
        dw_hole_number: 2,
      },
    ],
    total: 3,
    success: true,
  },
  'GET /api/ManufactureProfile': {
    data: [
      {
        dw_manufacturer_code: '001',
        dw_manufacturer: '佛山XX门窗',
      },
      {
        dw_manufacturer_code: '002',
        dw_manufacturer: '广东XX门窗',
      },
    ],
    total: 2,
    success: true,
  },
  'GET /api/SeriesFile': {
    data: [
      {
        dw_serial_coding: '001',
        dw_series_name: '平开窗系列',
      },
      {
        dw_serial_coding: '002',
        dw_series_name: '推拉窗系列',
      },
    ],
    total: 2,
    success: true,
  },
  'GET /api/MaterialFile': {
    data: [
      {
        dw_material_code: '001',
        dw_material_name: '铝合金',
      },
      {
        dw_material_code: '002',
        dw_material_name: '不锈钢',
      },
    ],
    total: 2,
    success: true,
  },
  'GET /api/StandardFile': {
    data: [
      {
        dw_executive_standard_coding: '001',
        dw_executive_standard: '中华人民共和国国家标准:铝合金门窗(GB/T 8478-2008)',
      },
    ],
    total: 1,
    success: true,
  },
  'GET /api/ConstructionPartyFiles': {
    data: [
      {
        dw_construction_unit_code: '001',
        dw_construction_unit: '深圳XX公司',
      },
    ],
    total: 1,
    success: true,
  },
  'GET /api/QualityAssurerFile': {
    data: [
      {
        dw_quality_inspection_unit_code: '001',
        dw_quality_inspection_unit: '深圳XX公司',
      },
    ],
    total: 1,
    success: true,
  },
  'GET /api/StoreFile': {
    data: [
      {
        dw_store_code: '001',
        dw_store_name: '佛山一店',
      },
      {
        dw_store_code: '001',
        dw_store_name: '佛山二店',
      },
    ],
    total: 1,
    success: true,
  },
  'GET /api/DesignerProfile': {
    data: [
      {
        dw_designer_code: '001',
        dw_designer: 'Bruce',
      },
      {
        dw_designer_code: '001',
        dw_designer: 'Griff',
      },
    ],
    total: 1,
    success: true,
  },
  'GET /api/UserManagement': {
    data: [
      {
        dw_brand_code: '001',
        dw_brand_name: '新豪轩',
        dw_user_id: '01001',
        dw_user_name: '新豪轩用户1',
        dw_is_it_an_administrator: '是',
      },
      {
        dw_brand_code: '001',
        dw_brand_name: '派雅',
        dw_user_id: '02001',
        dw_user_name: '派雅用户1',
        dw_is_it_an_administrator: '否',
      },
      {
        dw_brand_code: '001',
        dw_brand_name: '轩尼斯',
        dw_user_id: '03001',
        dw_user_name: '',
        dw_is_it_an_administrator: '',
      },
      {
        dw_brand_code: '001',
        dw_brand_name: '皇派',
        dw_user_id: '04001',
        dw_user_name: '新豪轩用户1',
        dw_is_it_an_administrator: '',
      },
    ],
    total: 3,
    success: true,
  },
};

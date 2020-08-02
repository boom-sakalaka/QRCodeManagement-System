export interface TableListItem {
  dw_opening_size: string;
  dw_community_name: string;
  dw_building_number: number;
  dw_floor: number;
  dw_house_type: string;
  dw_hole_number: number
}


export interface TableListParams {
  status?: string;
  name?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}
import { Campaign } from '../../../../store/type';

export type CampaignList = Campaign[]
export type ColumnList = Column[]

export interface CampaignsTableBodyType {
  campaings: CampaignList,
  currentPage: number,
  rowsNumber: number,
}

export interface CampaignsTableHeaderType {
  columns: ColumnList
}

export interface CampaignsTableRowType {
  row: Campaign,
}
export interface ColumnSelectorType {
  column: Column,
  row: Campaign,
}

export interface NameColumnType {
  campaign: Campaign,
}

export interface Column {
  id: 'id' | 'name' | 'description' | 'view' | 'leads' | 'convertion';
  align?: 'right';
  format?: (value: number) => string;
  style?: React.CSSProperties | {};
}

export interface CampaignsTableType {
  campaings: CampaignList,
  extended: boolean,
}

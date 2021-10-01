export interface Column {
  id: 'id' | 'name' | 'description' | 'view' | 'leads' | 'convertion';
  align?: 'right';
  format?: (value: number) => string;
  style?: React.CSSProperties | {};
}

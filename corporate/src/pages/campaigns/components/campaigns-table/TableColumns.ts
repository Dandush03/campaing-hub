import { Column } from './type';

const columns: Column[] = [
  { id: 'id', style: { display: 'none' } },
  { id: 'name', style: { minWidth: 350 } },
  { id: 'description', style: { minWidth: 100 } },
  { id: 'view', style: { minWidth: 100 } },
  { id: 'leads',
    style: { minWidth: 170 },
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'convertion',
    style: { minWidth: 170 },
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

export default columns;

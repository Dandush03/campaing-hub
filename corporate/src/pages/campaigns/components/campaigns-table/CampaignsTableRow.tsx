import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Column, Data } from './type';

interface CampaignsTableRowType {
  row: Data,
  columns: Column[]
}

const CampaignsTableRow: React.FunctionComponent<CampaignsTableRowType> = ({
  row, columns,
}) => {
  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={row.code}>
      {columns.map((column) => {
        const value = row[column.id];
        return (
          <TableCell key={column.id} align={column.align}>
            {column.format && typeof value === 'number' ?
                            column.format(value) :
                            value}
          </TableCell>
        );
      })}
    </TableRow>
  );
};
export default CampaignsTableRow;

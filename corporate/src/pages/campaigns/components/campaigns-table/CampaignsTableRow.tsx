import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Campaign } from '../../../../store/type';
import columns from './TableColumns';

interface CampaignsTableRowType {
  row: Campaign,
}

const CampaignsTableRow: React.FunctionComponent<CampaignsTableRowType> = ({
  row,
}) => {
  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={row.id}>
      {columns.slice(1).map((column) => {
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

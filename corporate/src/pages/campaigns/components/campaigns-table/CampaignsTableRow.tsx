import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Campaign } from '../../../../store/type';
import { Column } from './type';
import columns from './TableColumns';
import ColumnName from './ColumnName';
import { Typography } from '@mui/material';
import { BrowserView, MobileView } from 'react-device-detect';

interface CampaignsTableRowType {
  row: Campaign,
}
interface ColumnSelectorType {
  column: Column,
  row: Campaign,
}
const ColumnSelector: React.FunctionComponent<ColumnSelectorType> = ({
  row, column,
}) => {
  const value = row[column.id];

  if (!row || !column || !value) return <div></div>;

  if (row && column.id === 'name') {
    return <ColumnName campaign={row}/>;
  }

  if (column.format && typeof value === 'number' ) {
    return <div>{column.format(value)}</div>;
  }

  return <Typography>{row[column.id]}</Typography>;
};


const CampaignsTableRow: React.FunctionComponent<CampaignsTableRowType> = ({
  row,
}) =>
  <TableRow
    hover
    role="checkbox"
    tabIndex={-1}
    key={row.id}>
    <BrowserView renderWithFragment>
      {columns.slice(1).map((column) => {
        return (
          <TableCell key={column.id} align={column.align}>
            <ColumnSelector row={row} column={column} />
          </TableCell>
        );
      })}
    </BrowserView>
    <MobileView renderWithFragment>
      <TableCell key={columns[0].id} align={columns[0].align} >
        <ColumnName campaign={row} />
      </TableCell>
    </MobileView>
  </TableRow>;

export default CampaignsTableRow;

import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Campaign } from '../../../../store/type';
import { Column } from './type';
import columns from './TableColumns';
import ColumnName from './ColumnName';
import { Typography } from '@mui/material';
import { isDesktop } from 'react-device-detect';
import { useHistory } from 'react-router-dom';

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
}) => {
  const history = useHistory();

  const handleRowClick = () => {
    history.push(`/corporate/campaigns/${row.id}`);
  };

  return (
    <TableRow
      hover
      onClick={handleRowClick}
      role="checkbox"
      tabIndex={-1}
      sx={{ textDecoration: 'none' }}
      key={row.id}>
      {isDesktop ? columns.slice(1).map((column) => {
        return (
          <TableCell key={column.id} align={column.align}>
            <ColumnSelector row={row} column={column} />
          </TableCell>
        );
      }):
      <TableCell key={columns[0].id} align={columns[0].align} >
        <ColumnName campaign={row} />
      </TableCell>
      }
    </TableRow>
  );
};

export default CampaignsTableRow;

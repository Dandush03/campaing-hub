import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Column } from './type';

interface CampaignsTableHeaderType {
  columns: Column[]
}

const CampaignsTableHeader:
  React.FunctionComponent<CampaignsTableHeaderType> = ({
    columns,
  }) => {
    return (
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ top: 0, minWidth: column.minWidth }}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

export default CampaignsTableHeader;

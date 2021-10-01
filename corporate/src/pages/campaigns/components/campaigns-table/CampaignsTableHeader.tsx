import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Column } from './type';
import { useTranslation } from 'react-i18next';

interface CampaignsTableHeaderType {
  columns: Column[]
}

const CampaignsTableHeader:
  React.FunctionComponent<CampaignsTableHeaderType> = ({
    columns,
  }) => {
    const { t } = useTranslation('campaigns');
    return (
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ top: 0, ...column.style }}
            >
              {t(column.id)}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

export default CampaignsTableHeader;

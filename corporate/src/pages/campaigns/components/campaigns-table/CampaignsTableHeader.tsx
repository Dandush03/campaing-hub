import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Column } from './type';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { isDesktop } from 'react-device-detect';

interface CampaignsTableHeaderType {
  columns: Column[]
  extended: Boolean
}

const CampaignsTableHeader:
  React.FunctionComponent<CampaignsTableHeaderType> = ({
    columns, extended,
  }) => {
    const { t } = useTranslation('campaigns');
    return (
      <TableHead>
        <TableRow>
          {isDesktop && extended ? columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ top: 0, ...column.style }}
            >
              <Typography>{t(column.id)}</Typography>
            </TableCell>
          )) :
            <TableCell
              key={columns[1].id}
              align={columns[1].align}
              style={{ top: 0, ...columns[1].style }}
            >
              <Typography>{t(columns[1].id)}</Typography>
            </TableCell>
          }
        </TableRow>
      </TableHead>
    );
  };

export default CampaignsTableHeader;

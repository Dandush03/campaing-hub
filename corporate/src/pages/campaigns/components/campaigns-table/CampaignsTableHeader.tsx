import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Column } from './type';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { BrowserView, MobileView } from 'react-device-detect';

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
          <BrowserView renderWithFragment>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ top: 0, ...column.style }}
              >
                <Typography>{t(column.id)}</Typography>
              </TableCell>
            ))}
          </BrowserView>
          <MobileView renderWithFragment>
            <TableCell
              key={columns[1].id}
              align={columns[1].align}
              style={{ top: 0, ...columns[1].style }}
            >
              <Typography>{t(columns[1].id)}</Typography>
            </TableCell>
          </MobileView>
        </TableRow>
      </TableHead>
    );
  };

export default CampaignsTableHeader;

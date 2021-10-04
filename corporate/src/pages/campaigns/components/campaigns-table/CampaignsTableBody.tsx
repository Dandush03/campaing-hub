import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import CampaignsTableRow from './CampaignsTableRow';
import { CampaignsTableBodyType } from './type';

const CampaignsTableBody: React.FunctionComponent<CampaignsTableBodyType> = ({
  campaings, currentPage, rowsNumber,
}) => {
  return (
    <TableBody>
      {campaings
          .slice(currentPage, rowsNumber)
          .map((row) => {
            return (
              <CampaignsTableRow
                row={row}
                key={`row-${row.id}`} />
            );
          })}
    </TableBody>
  );
};

export default CampaignsTableBody;

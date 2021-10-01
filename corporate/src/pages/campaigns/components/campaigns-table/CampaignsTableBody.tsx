import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import { Campaign } from '../../../../store/type';
import CampaignsTableRow from './CampaignsTableRow';

interface CampaignsTableBodyType {
  campaings: Campaign[],
  currentPage: number,
  rowsNumber: number
}

const CampaignsTableBody: React.FunctionComponent<CampaignsTableBodyType> = ({
  campaings, currentPage, rowsNumber,
}) => {
  return (
    <TableBody>
      {campaings
          .slice(currentPage, rowsNumber)
          .map((row) => {
            return (
              <CampaignsTableRow row={row} key={`row-${row.id}`}/>
            );
          })}
    </TableBody>
  );
};

export default CampaignsTableBody;

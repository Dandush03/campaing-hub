import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import { Campaign } from '../../../../store/type';
import CampaignsTableRow from './CampaignsTableRow';

interface CampaignsTableBodyType {
  campaings: Campaign[],
  currentPage: number,
  rowsNumber: number,
  extended: boolean
}

const CampaignsTableBody: React.FunctionComponent<CampaignsTableBodyType> = ({
  campaings, currentPage, rowsNumber, extended,
}) => {
  return (
    <TableBody>
      {campaings
          .slice(currentPage, rowsNumber)
          .map((row) => {
            return (
              <CampaignsTableRow
                row={row}
                key={`row-${row.id}`}
                extended={extended}/>
            );
          })}
    </TableBody>
  );
};

export default CampaignsTableBody;

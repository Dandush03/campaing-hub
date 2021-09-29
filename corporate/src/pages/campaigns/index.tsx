import { Box } from '@mui/system';
import * as React from 'react';
import CampaignsTable from './components/CampaignsTable';

interface CampaignsType {
}

const Campaigns: React.FunctionComponent<CampaignsType> = ({
}) =>
  <Box display='flex' flexDirection='column'>
    Campaings
    <CampaignsTable />
  </Box>;


export default Campaigns;

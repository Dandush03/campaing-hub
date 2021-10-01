import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import CampaignsTable from './components/campaigns-table';
import { RootState, Campaign } from '../../store/type';
import { getCampaingsList } from '../../actions/campaignsAction';
interface CampaignsType {
}

const Campaigns: React.FunctionComponent<CampaignsType> = ({
}) => {
  const campaings:Campaign[] = useSelector(
      (state: RootState) => state.campaigns,
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (campaings.length === 0) dispatch(getCampaingsList());
  }, []);

  const { t } = useTranslation('campaigns');

  return (
    <Box display='flex' flexDirection='column'>
      <Typography variant='h4' padding={2}>
        {t('title')}
      </Typography>
      <CampaignsTable campaings={campaings}/>
    </Box>
  );
};


export default Campaigns;

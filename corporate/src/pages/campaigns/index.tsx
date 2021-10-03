import { Collapse, CollapseProps, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import {
  Switch, Route, RouteComponentProps,
} from 'react-router-dom';

import CampaignsTable from './components/campaigns-table';
import CampaignViewer from './components/campaign-viewer';
import { RootState, Campaign } from '../../store/type';
import { getCampaingsList } from '../../actions/campaignsAction';

interface MatchParams {
  campaignId?: string
}
export interface MatchProps extends RouteComponentProps<MatchParams>{
}

interface CampaignsType {
  route: MatchProps,
}

interface CustomCollapseType extends CollapseProps {
  extended?: boolean
}

const ExtendedCollapse = (props: CustomCollapseType) => <Collapse {...props}/>;

const CustomCollapse = styled(
    ExtendedCollapse, { shouldForwardProp: (prop) => prop !== 'extended' })(
    ({ theme, extended }) => ({
      ...(extended && {
        'width': '100%',
        '& .MuiCollapse-wrapperInner': {
          width: '100%',
        },
      }),
      ...(!extended && {
        borderRight: `${theme.palette.neutral.light} 1px solid`,
        overflow: 'hidden',
      }),
    }),
);

const Campaigns: React.FunctionComponent<CampaignsType> = ({
  route,
}) => {
  const campaignId = route.location.pathname.split('/').pop();
  const campaings:Campaign[] = useSelector(
      (state: RootState) => state.campaigns,
  );
  const dispatch = useDispatch();
  const [extended, setExtended] = React.useState(true);

  React.useEffect(() => {
    if (campaings.length === 0) dispatch(getCampaingsList());
  }, []);

  React.useEffect(() => {
    campaignId === 'campaigns' && setExtended(true);
  }, [route]);

  const handleCurrentSelection = (campaignId?: string) => {
    if (campaignId) setExtended(false);
  };

  const { t } = useTranslation('campaigns');

  return (
    <Box>
      <CustomCollapse orientation="horizontal"
        in={extended}
        extended={extended}
        collapsedSize={365}>
        <Box display='flex' flexDirection='column' width={1}>
          <Typography variant='h4' padding={2}>
            {t('title')}
          </Typography>
          <CampaignsTable
            campaings={campaings}
            extended={extended}/>
        </Box>
      </CustomCollapse>
      <Switch>
        <Route
          path='/corporate/campaigns/:campaignId'
          exact
          render={
            (route: MatchProps) =>
              <CampaignViewer
                route={route}
                handleCurrentSelection={handleCurrentSelection}/>
          }/>
      </Switch>
    </Box>
  );
};


export default Campaigns;

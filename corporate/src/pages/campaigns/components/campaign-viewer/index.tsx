import * as React from 'react';
import { MatchProps } from '../..';

interface CampaignType {
  route: MatchProps,
  handleCurrentSelection: (campaignId: string) => void
}

const Campaign: React.FunctionComponent<CampaignType> = ({
  route, handleCurrentSelection,
}) => {
  const campaignId = route.match.params.campaignId;
  React.useEffect(() => {
    if (campaignId) handleCurrentSelection(campaignId);
  }, []);
  return <div>Campaigns</div>;
};

export default Campaign;

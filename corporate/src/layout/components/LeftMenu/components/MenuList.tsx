import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CampaignIcon from '@mui/icons-material/Campaign';
import ListItemButton from '@mui/material/ListItemButton';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SvgIconProps } from '@mui/material';

interface ItemType {
  path?: string,
  text: string,
  Icon: (props: SvgIconProps) => JSX.Element;
}

const Item: React.FunctionComponent<ItemType> = ({
  path, text, Icon,
}) => path ?
  <ListItem disablePadding>
    <ListItemButton component={Link} to={path}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem> :
  null;


const MenuList: React.FunctionComponent<{}> = ({
}) => {
  const { t } = useTranslation('menu');
  return (
    <>
      <List>
        <Item
          path='/corporate'
          text={t('dashboard')}
          Icon={DashboardIcon}
        />
      </List>
      <Divider />
      <List>
        <Item
          path='/corporate/campaigns'
          text={t('campaigns')}
          Icon={CampaignIcon}
        />
      </List>
      <List>
        <Item
          path='/corporate/leads'
          text={t('leads')}
          Icon={RecentActorsIcon}
        />
      </List>
    </>);
};

export default MenuList;

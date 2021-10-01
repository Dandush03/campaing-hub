import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import { RIGTH_DRAWER_WIDTH } from '../../utils';
import DrawerHeader from './components/DrawerHeader';
import MenuList from './components/MenuList';

const openedMixin = (theme: Theme): CSSObject => ({
  width: RIGTH_DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: '0',
  border: '0',
  [theme.breakpoints.up('sm')]: {
    width: '0',
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) =>
  prop !== 'open' })(
    ({ theme, open }) => ({
      width: RIGTH_DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
);

interface RigthMenuType {
  handleRigthSideMenuClose: () => void,
  open?: boolean,
}

const RigthMenu: React.FunctionComponent<RigthMenuType> = ({
  handleRigthSideMenuClose, open = false,
}) => {
  return (
    <Drawer
      variant="permanent"
      open={open}
      anchor='right'>
      <DrawerHeader handleRigthSideMenuClose={handleRigthSideMenuClose}/>
      <Divider />
      <MenuList />
    </Drawer>
  );
};

export default RigthMenu;

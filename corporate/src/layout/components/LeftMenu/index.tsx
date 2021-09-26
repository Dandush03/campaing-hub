import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import { LEFT_DRAWER_WIDTH } from '../../utils';
import DrawerHeader from './components/DrawerHeader';
import MenuList from './components/MenuList';

const openedMixin = (theme: Theme): CSSObject => ({
  width: LEFT_DRAWER_WIDTH,
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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) =>
  prop !== 'open' })(
    ({ theme, open }) => ({
      width: LEFT_DRAWER_WIDTH,
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

interface LeftMenuType {
  handleLeftSideMenuClose: () => void,
  open?: boolean,
}

const LeftMenu: React.FunctionComponent<LeftMenuType> = ({
  handleLeftSideMenuClose, open = false,
}) => {
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader handleLeftSideMenuClose={handleLeftSideMenuClose}/>
      <Divider />
      <MenuList />
    </Drawer>
  );
};

export default LeftMenu;

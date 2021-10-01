import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import { LEFT_DRAWER_WIDTH, RIGTH_DRAWER_WIDTH } from '../../../utils';

interface AppBarProps extends MuiAppBarProps {
  openRight?: boolean,
  openLeft?: boolean,
  rightDrawerWidth?: number,
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) =>
    !['openLeft', 'openRight'].includes(String(prop)),
})<AppBarProps>(({
  theme, openLeft, openRight,
}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(openLeft && {
    marginLeft: LEFT_DRAWER_WIDTH,
    width: `calc(100% - ${LEFT_DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(openRight && {
    marginRight: RIGTH_DRAWER_WIDTH,
    width: `calc(100% - ${RIGTH_DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default AppBar;

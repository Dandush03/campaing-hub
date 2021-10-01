import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from './components/AppBar';
import SettingsIcon from '@mui/icons-material/Settings';

interface HeaderType {
  handleLeftSideMenuOpen: () => void,
  handleRigthSideMenuOpen: () => void,
  openLeft?: boolean,
  openRight?: boolean,
}

const Header: React.FunctionComponent<HeaderType> = ({
  handleLeftSideMenuOpen, handleRigthSideMenuOpen,
  openLeft = false, openRight = false,
}) =>
  <AppBar
    position='absolute'
    openLeft={openLeft}
    openRight={openRight}
    arial-label='Header'>
    <Toolbar>
      <IconButton
        color="inherit"
        role='alert'
        aria-label="Open Left SideMenu"
        onClick={handleLeftSideMenuOpen}
        edge="start"
        sx={{
          marginRight: '36px',
          ...(openLeft && { display: 'none' }),
        }}
      >
        <MenuIcon aria-hidden="true"/>
      </IconButton>
      <Typography variant="h6" noWrap component="div">
            The Lead Maker
      </Typography>
      <IconButton
        color="inherit"
        role='alert'
        aria-label="Open Left SideMenu"
        onClick={handleRigthSideMenuOpen}
        edge="start"
        sx={{
          marginLeft: 'auto',
          alignSelf: 'right',
          ...(openRight && { display: 'none' }),
        }}
      >
        <SettingsIcon aria-hidden="true"/>
      </IconButton>
    </Toolbar>
  </AppBar>;


export default Header;

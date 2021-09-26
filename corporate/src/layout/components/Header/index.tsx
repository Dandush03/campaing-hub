import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from './components/AppBar';

interface HeaderType {
  handleLeftSideMenuOpen: () => void,
  open?: boolean,
}

const Header: React.FunctionComponent<HeaderType> = ({
  handleLeftSideMenuOpen, open = false,
}) =>
  <AppBar position="fixed" open={open} arial-label='Header'>
    <Toolbar>
      <IconButton
        color="inherit"
        role='alert'
        aria-label="Open SideMenu"
        onClick={handleLeftSideMenuOpen}
        edge="start"
        sx={{
          marginRight: '36px',
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon aria-hidden="true"/>
      </IconButton>
      <Typography variant="h6" noWrap component="div">
            Mini variant drawer
      </Typography>
    </Toolbar>
  </AppBar>;


export default Header;

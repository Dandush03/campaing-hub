/* eslint-disable no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserSession } from '../actions/userAction';
import { RootState } from '../store/type';
import RigthMenu from './components/RigthMenu';
import { ThemeProvider } from '@emotion/react';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      light: '#ddd',
    },
  },
});


const Layout:React.FunctionComponent<{children: React.ReactNode}> =({
  children,
}) => {
  const [openLeft, setOpenLeft] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!user.login) dispatch(getCurrentUserSession());
  }, []);

  const handleLeftSideMenuClick = () => {
    setOpenLeft(!openLeft);
    setOpenRight(false);
  };

  const handleRigthSideMenuClick = () => {
    setOpenRight(!openRight);
    setOpenLeft(false);
  };

  const handleCloseAllMenus = () => {
    setOpenLeft(false);
    setOpenRight(false);
  };

  if (!user.login) return <div></div>;

  return (
    <React.Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <Box
          sx={{ display: 'flex' }}
          position='absolute'
          width='100%'
          overflow='hidden'>
          <CssBaseline />
          <Header
            openLeft={openLeft}
            openRight={openRight}
            handleLeftSideMenuOpen={handleLeftSideMenuClick}
            handleRigthSideMenuOpen={handleRigthSideMenuClick}
          />
          <LeftMenu
            open={openLeft}
            handleLeftSideMenuClose={handleLeftSideMenuClick}
          />
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 0, pt: 8 }}
            onClickCapture={handleCloseAllMenus}>
            {children}
          </Box>
          <RigthMenu
            open={openRight}
            handleRigthSideMenuClose={handleRigthSideMenuClick}
          />
        </Box>
      </ThemeProvider>
    </React.Suspense>
  );
};

export default Layout;

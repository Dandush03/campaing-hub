import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserSession } from '../actions/userAction';
import { RootState } from '../store/type';
import RigthMenu from './components/RigthMenu';

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
    </React.Suspense>
  );
};

export default Layout;

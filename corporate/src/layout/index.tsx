import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserSession } from '../actions/userAction';
import { RootState } from '../store/type';

const Layout:React.FunctionComponent<{children: React.ReactNode}> =({
  children,
}) => {
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCurrentUserSession());
  }, []);

  const handleLeftSideMenuClick = () => {
    setOpen(!open);
  };

  if (!user.login) return <div></div>;

  return (
    <Box sx={{ display: 'flex' }} maxWidth={'100vw'} overflow='hidden'>
      <CssBaseline />
      <Header
        open={open}
        handleLeftSideMenuOpen={handleLeftSideMenuClick}
      />
      <LeftMenu
        open={open}
        handleLeftSideMenuClose={handleLeftSideMenuClick}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 9 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

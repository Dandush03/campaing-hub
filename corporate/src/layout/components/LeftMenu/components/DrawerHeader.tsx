import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Header = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface DrawerHeaderType {
  handleLeftSideMenuClose: () => void,
}

const DrawerHeader: React.FunctionComponent<DrawerHeaderType> = ({
  handleLeftSideMenuClose,
}) => {
  const theme = useTheme();

  return (
    <Header>
      <IconButton
        onClick={handleLeftSideMenuClose}
        arial-label='Close SideMenu'
        aria-describedby='Close SideMenu'
        role='alert'
      >
        {theme.direction === 'rtl' ?
            <ChevronRightIcon aria-hidden="true"/> :
            <ChevronLeftIcon aria-hidden="true"/>}
      </IconButton>
    </Header>
  );
};

export default DrawerHeader;

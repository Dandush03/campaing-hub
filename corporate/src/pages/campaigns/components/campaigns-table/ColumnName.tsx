import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { NameColumnType } from './type';


const NameColumn: React.FunctionComponent<NameColumnType> = ({
  campaign,
}) =>
  <Box display={'flex'}>
    <Box mr={2}>
      <Avatar
        variant='rounded'
        alt={campaign.name}
        src={campaign.icon}
        sx={{
          width: 50,
          height: 50,
          border: '3px solid',
          borderColor: 'primary.light',
        }}
      />
    </Box>
    <Box>
      <Typography>
        {campaign.name}
      </Typography>
      <Typography variant='caption'>
        {campaign.id}
      </Typography>
    </Box>
  </Box>;

export default NameColumn;

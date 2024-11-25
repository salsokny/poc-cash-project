'use client'; // Material UI requires client-side rendering

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      className="bg-gray-100 text-center p-4 w-full"
      sx={{
        position: 'relative',
        bottom: 0,
        left: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} MyApp. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

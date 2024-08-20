'use client';
import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const HeadingBox: React.FC = () => {
  return (
    <Card
      sx={{
        height: '153px',
        background: 'linear-gradient(91.88deg, #2B7FFF 0.26%, #6BA6FF 59.59%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CardContent>
        <Typography variant="h4" component="div" align="center" sx={{fontWeight: '1000'}}>
          What Can we Help you create Today?
        </Typography>
        <Typography variant="body1" component="div" sx={{ fontFamily: 'Albert Sans, sans-serif', mt: 1, display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
        Start with a Blank state, ready Template or Lore ipsum 
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HeadingBox;

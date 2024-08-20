import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import YouTubeIcon from '@mui/icons-material/YouTube';

export function TrendCard(): React.JSX.Element {
  const imageUrl = '/assets/carddhanurai.png'; // Local image path in the public directory

  return (
    <Card sx={{ 
      width: 223, 
      height: 278, 
      backgroundColor: 'white', 
      display: 'flex', 
      flexDirection: 'column', 
      borderRadius: 0 
    }}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt="Image"
        sx={{ 
          width: 191, 
          height: 180, 
          margin: '10px auto' 
        }} 
      />
      <CardContent sx={{ padding: '8px 16px' }}> {/* Adjust padding to reduce the gap */}
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 'bold', 
            whiteSpace: 'nowrap', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis',
            mb: 1 // Margin bottom to separate from icon-text section
          }}
        >
          Typography Trends: Bol...
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <YouTubeIcon sx={{ color: '#FF0000' }} />
          <Typography variant="body2">
            YouTube
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 1, justifyContent: 'space-between' }}>
          <Typography variant="body2" sx={{fontWeight: 'bold',fontFamily: 'Albert Sans'}}>
            5th May, 2024
          </Typography>
          <Typography variant="body2" sx={{fontWeight: 'bold',fontFamily: 'Albert Sans'}}>
            12:30pm
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

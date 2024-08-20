import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';

export interface BudgetProps {
  diff?: number;
  trend: 'up' | 'down';
  sx?: SxProps;
  value: string;
}

export function Budget({ value }: BudgetProps): React.JSX.Element {
  return (
    <Card
      sx={{
        width: '340px',
        height: '130px',
        borderRadius: '20px',
        backgroundColor: '#B5E7C6',
      }}
    >
      <CardContent>
        <Stack direction="row" spacing={3} alignItems="center">
          <Avatar
            sx={{
              backgroundColor: '#9AC9AA',
              borderRadius: '10px',
              height: '56px',
              width: '56px',
            }}
          >
            <Avatar
              sx={{
                backgroundColor: '#B5E7C6',
                border: '1px solid black',
                borderRadius: '6px',
                height: '36px',
                width: '36px',
              }}
            >
              <MusicNoteOutlinedIcon sx={{ width: '30px', height: '30px', color: 'black' }} />
            </Avatar>
          </Avatar>
          <Stack spacing={1}>
            <Typography color="text.secondary">
              Channels
            </Typography>
            <Typography variant="h4">10</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

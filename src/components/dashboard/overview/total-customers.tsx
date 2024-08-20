import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';

export interface BudgetProps {
  diff?: number;
  trend: 'up' | 'down';
  sx?: SxProps;
  value: string;
}

export function TotalCustomers({ value }: BudgetProps): React.JSX.Element {
  return (
    <Card
      sx={{
        width: '340px',
        height: '130px',
        borderRadius: '20px',
        backgroundColor: '#BBAACC',
      }}
    >
      <CardContent>
        <Stack direction="row" spacing={3} alignItems="center">
          <Avatar
            sx={{
              backgroundColor: '#A597B2',
              borderRadius: '10px',
              height: '56px',
              width: '56px',
            }}
          >
            <Avatar
              sx={{
                backgroundColor: '#BBAACC',
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
              Budget
            </Typography>
            <Typography variant="h4">10</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

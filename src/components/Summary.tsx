import React from 'react';
import { Box, Typography } from '@mui/material';

type SummaryProps = {
  numOfPeople: number;
  totalAmount: number;
};

const Summary: React.FC<SummaryProps> = ({ numOfPeople, totalAmount }) => {
  return (
    <Box>
      {/* 人数表示 */}
      <Box display="flex" alignItems="center" mb={2}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
          人数:
        </Typography>
        <Typography variant="body1" sx={{ mr: 1 }}>
          {numOfPeople}
        </Typography>
        <Typography variant="body1">名様</Typography>
      </Box>

      {/* 合計金額表示 */}
      <Box display="flex" alignItems="center">
        <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
          合計:
        </Typography>
        <Typography variant="body1" sx={{ mr: 1 }}>
          {totalAmount}
        </Typography>
        <Typography variant="body1">円</Typography>
      </Box>
    </Box>
  );
};

export default Summary;

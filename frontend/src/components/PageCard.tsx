import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface PageCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

function PageCard({ title, subtitle, children }: PageCardProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
      <Paper elevation={2} sx={{ p: 4, maxWidth: 480, width: '100%' }}>
        <Typography variant="h2" sx={{ mb: subtitle ? 1 : 3 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            {subtitle}
          </Typography>
        )}
        {children}
      </Paper>
    </Box>
  );
}

export default PageCard;
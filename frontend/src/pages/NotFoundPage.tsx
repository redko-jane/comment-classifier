import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

function NotFoundPage() {
  return (
    <Box
      sx={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: 6,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '6rem', md: '10rem' },
          fontWeight: 700,
          lineHeight: 1,
          color: 'primary.main',
          mb: 2,
        }}
      >
        404
      </Typography>

      <Typography variant="h2" sx={{ mb: 1 }}>
        Страница не найдена
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 420 }}>
        Возможно, адрес указан неверно или страница была удалена.
      </Typography>

      <Button
        variant="contained"
        size="large"
        startIcon={<HomeOutlinedIcon />}
        component={RouterLink}
        to="/"
      >
        На главную
      </Button>
    </Box>
  );
}

export default NotFoundPage;
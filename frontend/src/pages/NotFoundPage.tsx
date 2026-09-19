import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function NotFoundPage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">404</Typography>
      <Typography>Страница не найдена.</Typography>
    </Stack>
  );
}

export default NotFoundPage;

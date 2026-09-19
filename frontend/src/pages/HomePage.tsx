import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function HomePage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">Comment Classifier</Typography>
      <Typography>Сервис для классификации комментариев по тональности.</Typography>
    </Stack>
  );
}

export default HomePage;

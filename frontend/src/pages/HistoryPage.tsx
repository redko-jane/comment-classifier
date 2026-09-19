import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function HistoryPage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">История запросов</Typography>
      <Typography>Здесь будет список сохранённых комментариев с фильтром по тональности.</Typography>
    </Stack>
  );
}

export default HistoryPage;

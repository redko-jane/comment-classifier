import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function RecordDetailPage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">Детали записи</Typography>
      <Typography>Здесь будет полный текст комментария, результат и время создания.</Typography>
    </Stack>
  );
}

export default RecordDetailPage;

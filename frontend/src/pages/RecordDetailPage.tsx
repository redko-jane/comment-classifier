import { Link as RouterLink, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { mockComments } from '../shared/mocks/comments';
import { formatDate } from '../shared/utils/formatDate';

function RecordDetailPage() {
  const { id } = useParams<{ id: string }>();
  const record = mockComments.find((r) => r.id === Number(id));

  if (!record) {
    return (
      <Box sx={{ maxWidth: 720, mx: 'auto' }}>
        <Typography variant="h1" sx={{ mb: 2 }}>
          Запись не найдена
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Возможно, она была удалена или вы перешли по неверной ссылке.
        </Typography>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          component={RouterLink}
          to="/history"
        >
          Вернуться к истории
        </Button>
      </Box>
    );
  }

  const isPositive = record.sentiment === 'positive';

  return (
    <Box sx={{ maxWidth: 720, mx: 'auto' }}>
      <Button
        startIcon={<ArrowBackIcon />}
        component={RouterLink}
        to="/history"
        sx={{ mb: 3 }}
      >
        Назад к истории
      </Button>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: 'divider', borderRadius: 2 }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ mb: 3, flexWrap: 'wrap' }}
        >
          {isPositive ? (
            <ThumbUpOutlinedIcon color="success" fontSize="large" />
          ) : (
            <ThumbDownOutlinedIcon color="error" fontSize="large" />
          )}
          <Typography variant="h2">
            {isPositive ? 'Положительный отзыв' : 'Отрицательный отзыв'}
          </Typography>
          <Chip
            label={`Уверенность ${(record.confidence * 100).toFixed(0)}%`}
            color={isPositive ? 'success' : 'error'}
            variant="outlined"
          />
        </Stack>

        <Divider sx={{ mb: 3 }} />

        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ mb: 1 }}
        >
          Комментарий
        </Typography>
        <Typography sx={{ mb: 3, whiteSpace: 'pre-wrap' }}>
          {record.text}
        </Typography>

        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ mb: 1 }}
        >
          Дата
        </Typography>
        <Typography>{formatDate(record.createdAt)}</Typography>
      </Paper>
    </Box>
  );
}

export default RecordDetailPage;
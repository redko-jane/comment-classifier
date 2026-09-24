import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

function ClassifyPage() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<null | {
    sentiment: 'positive' | 'negative';
    confidence: number;
  }>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!text.trim()) return;

    // Заглушка вместо реального запроса к API
    setResult({ sentiment: 'positive', confidence: 0.87 });
  };

  const handleReset = () => {
    setText('');
    setResult(null);
  };

  return (
    <Box sx={{ maxWidth: 720, mx: 'auto' }}>
      <Typography variant="h1" sx={{ mb: 1 }}>
        Классификатор
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Введите комментарий — определим его тональность.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 3, border: 1, borderColor: 'divider', borderRadius: 2 }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Stack spacing={3}>
          <TextField
            label="Комментарий"
            placeholder="Например: Отличный сервис, всё понравилось!"
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline
            minRows={5}
            fullWidth
            required
          />

          <Stack direction="row" spacing={2}>
            <Button type="submit" variant="contained" size="large">
              Классифицировать
            </Button>
            {result && (
              <Button variant="text" size="large" onClick={handleReset}>
                Очистить
              </Button>
            )}
          </Stack>
        </Stack>
      </Paper>

      {result && (
        <Paper
          elevation={0}
          sx={{
            mt: 3,
            p: 3,
            borderRadius: 2,
            border: 1,
            borderColor:
              result.sentiment === 'positive' ? 'success.main' : 'error.main',
            bgcolor:
              result.sentiment === 'positive' ? 'success.50' : 'error.50',
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <ThumbUpOutlinedIcon
              fontSize="large"
              color={result.sentiment === 'positive' ? 'success' : 'error'}
            />
            <Typography variant="h3">
              {result.sentiment === 'positive'
                ? 'Положительный отзыв'
                : 'Отрицательный отзыв'}
            </Typography>
            <Chip
              label={`Уверенность ${(result.confidence * 100).toFixed(0)}%`}
              color={result.sentiment === 'positive' ? 'success' : 'error'}
              variant="outlined"
            />
          </Stack>

          <Typography color="text.secondary">
            Результат сохранён в истории запросов.
          </Typography>
        </Paper>
      )}

      <Alert severity="info" sx={{ mt: 4 }}>
        Классификация доступна после входа в аккаунт. Результаты сохраняются
        в истории и привязаны к вашему профилю.
      </Alert>
    </Box>
  );
}

export default ClassifyPage;
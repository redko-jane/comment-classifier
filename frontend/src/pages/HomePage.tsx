import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import HistoryIcon from '@mui/icons-material/History';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const features = [
  {
    icon: <ChatBubbleOutlineIcon fontSize="large" color="primary" />,
    title: 'Классификация',
    text: 'Отправьте комментарий и сразу получите вердикт: положительный или отрицательный.',
  },
  {
    icon: <HistoryIcon fontSize="large" color="primary" />,
    title: 'История запросов',
    text: 'Все результаты сохраняются в личном кабинете с фильтром по тональности.',
  },
  {
    icon: <LockOutlinedIcon fontSize="large" color="primary" />,
    title: 'Личный аккаунт',
    text: 'Каждый пользователь видит только свои записи. Данные защищены авторизацией.',
  },
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: 3,
          textAlign: 'center',
          bgcolor: 'background.paper',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.25rem', md: '3.5rem' },
              mb: 3,
              lineHeight: 1.15,
            }}
          >
            Классификатор комментариев
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 5, fontWeight: 400 }}
          >
            Определяйте тональность отзывов за секунды. Отправьте текст —
            получите результат и сохраните его в истории.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/register')}
          >
            Начать работу
          </Button>
        </Container>
      </Box>

      {/* Возможности */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h2" sx={{ mb: 1, textAlign: 'center' }}>
          Что умеет приложение
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          Три ключевые возможности сервиса
        </Typography>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          {features.map((feature) => (
            <Card
              key={feature.title}
              elevation={0}
              sx={{
                flex: 1,
                border: 1,
                borderColor: 'divider',
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" sx={{ mb: 1.5 }}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">{feature.text}</Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default HomePage;
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import { mockUser } from '../shared/mocks/user';
import { formatDate } from '../shared/utils/formatDate';

function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Box sx={{ maxWidth: 560, mx: 'auto' }}>
      <Typography variant="h1" sx={{ mb: 1 }}>
        Профиль
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Данные вашего аккаунта.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: 'divider', borderRadius: 2 }}
      >
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          sx={{ mb: 3 }}
        >
          <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main' }}>
            {mockUser.email[0].toUpperCase()}
          </Avatar>
          <Box>
            <Typography variant="h3">{mockUser.email}</Typography>
            <Typography color="text.secondary" variant="body2">
              Зарегистрирован {formatDate(mockUser.registeredAt)}
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Stack spacing={2}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Email
            </Typography>
            <Typography>{mockUser.email}</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Дата регистрации
            </Typography>
            <Typography>{formatDate(mockUser.registeredAt)}</Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Button
          variant="outlined"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
        >
          Выйти из аккаунта
        </Button>
      </Paper>
    </Box>
  );
}

export default ProfilePage;
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Форма отправлена:', { email, password });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: { xs: 4, md: 8 } }}>
      <Paper
        elevation={2}
        sx={{ p: 4, maxWidth: 420, width: '100%' }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h2" sx={{ mb: 1 }}>
          Вход
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Войдите в аккаунт, чтобы продолжить работу.
        </Typography>

        <Stack spacing={3}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />

          <TextField
            label="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />

          <Button type="submit" variant="contained" size="large" fullWidth>
            Войти
          </Button>

          <Typography variant="body2" align="center" color="text.secondary">
            Нет аккаунта?{' '}
            <Link component={RouterLink} to="/register">
              Зарегистрироваться
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}

export default LoginPage;
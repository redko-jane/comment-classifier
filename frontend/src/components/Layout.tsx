import { Link as RouterLink, Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

const navItems = [
  { label: 'Классификатор', to: '/classify' },
  { label: 'История', to: '/history' },
  { label: 'Профиль', to: '/profile' },
];

function Layout() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Comment Classifier
          </Typography>

          <Stack direction="row" spacing={1}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                color="inherit"
                component={RouterLink}
                to={item.to}
              >
                {item.label}
              </Button>
            ))}
            <Button color="primary" variant="outlined" component={RouterLink} to="/login">
              Вход
            </Button>
            <Button color="primary" variant="contained" component={RouterLink} to="/register">
              Регистрация
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <Outlet />
      </Container>

      <Box
        component="footer"
        sx={{
          py: 2,
          textAlign: 'center',
          borderTop: 1,
          borderColor: 'divider',
          color: 'text.secondary',
          fontSize: 14,
        }}
      >
        Учебный проект, Fullstack, 1 семестр
      </Box>
    </Box>
  );
}

export default Layout;

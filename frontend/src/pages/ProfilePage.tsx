import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function ProfilePage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">Профиль</Typography>
      <Typography>Здесь будут данные пользователя и кнопка выхода.</Typography>
    </Stack>
  );
}

export default ProfilePage;

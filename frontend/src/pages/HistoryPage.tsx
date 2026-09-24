import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlineRounded';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { mockComments, type Sentiment } from '../shared/mocks/comments';
import { formatDate } from '../shared/utils/formatDate';

type Filter = 'all' | Sentiment;

function HistoryPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<Filter>('all');
  const [records, setRecords] = useState(mockComments);

  const visibleRecords = records.filter((record) =>
    filter === 'all' ? true : record.sentiment === filter,
  );

  const handleDelete = (id: number) => {
    setRecords((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <Box>
      <Typography variant="h1" sx={{ mb: 1 }}>
        История запросов
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Все ваши комментарии и результаты классификации.
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        sx={{ mb: 3, alignItems: 'center', flexWrap: 'wrap' }}
      >
        <Typography color="text.secondary">Фильтр:</Typography>
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={(_, value) => value && setFilter(value)}
          size="small"
        >
          <ToggleButton value="all">Все</ToggleButton>
          <ToggleButton value="positive">Положительные</ToggleButton>
          <ToggleButton value="negative">Отрицательные</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      {visibleRecords.length === 0 ? (
        <Paper
          elevation={0}
          sx={{
            p: 6,
            textAlign: 'center',
            border: 1,
            borderColor: 'divider',
            borderRadius: 2,
          }}
        >
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Пока нет записей с выбранным фильтром.
          </Typography>
          <Button variant="contained" onClick={() => navigate('/classify')}>
            Классифицировать комментарий
          </Button>
        </Paper>
      ) : (
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{ border: 1, borderColor: 'divider', borderRadius: 2 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Комментарий</TableCell>
                <TableCell>Тональность</TableCell>
                <TableCell>Дата</TableCell>
                <TableCell align="right">Действия</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRecords.map((record) => (
                <TableRow key={record.id} hover>
                  <TableCell sx={{ maxWidth: 380 }}>
                    <Typography
                      noWrap
                      sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                      {record.text}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={
                        record.sentiment === 'positive'
                          ? 'Положительный'
                          : 'Отрицательный'
                      }
                      color={
                        record.sentiment === 'positive' ? 'success' : 'error'
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{formatDate(record.createdAt)}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      size="small"
                      onClick={() => navigate(`/history/${record.id}`)}
                      aria-label="Открыть"
                    >
                      <OpenInNewIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleDelete(record.id)}
                      aria-label="Удалить"
                    >
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default HistoryPage;
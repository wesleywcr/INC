import AddIcon from '@mui/icons-material/Add';
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import * as React from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#f2f2f2',
  borderRadius: '5px',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function ModalForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54'),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        color="secondary"
        endIcon={<AddIcon />}
      >
        Adicionar Funcionários
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '20ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography
              gutterBottom
              variant="h1"
              component="h1"
              fontSize={20}
              textAlign="center"
              fontWeight={'bold'}
              color={'primary.main'}
            >
              Detalhes do funcionário
            </Typography>
            <TextField id="outlined-basic" label="Nome" variant="outlined" />
            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Telefone"
              variant="outlined"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Data de Nascimento"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <DesktopDatePicker
                label="Data de Contração"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </FormControl>
          </LocalizationProvider>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Salário</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              // value={values.amount}
              // onChange={handleChange('amount')}
              startAdornment={
                <InputAdornment position="start">R$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>

          <Stack direction="row" spacing={2} sx={{ m: 1 }}>
            <Button variant="contained" color="success">
              Concluido
            </Button>
            <Button variant="outlined" color="success">
              Voltar
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

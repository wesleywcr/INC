import {
  Button,
  FormControl,
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
import { Formik } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import { useEmployee } from '~/hooks/employee';
import { AddNewEmployeeShema } from '~/schemas/NewEmployee';
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
interface Props {
  dataEdit: any;
  dataEmployee: any;
  setNewEmployee: Dispatch<SetStateAction<never[]>> | any;
  setEmployeeEdit: Dispatch<SetStateAction<never[]>> | any;
  onOpen: boolean;
  onClose: () => void;
}
export function ModalForm({
  dataEmployee,
  setNewEmployee,
  dataEdit,
  setEmployeeEdit,
  onOpen,
  onClose,
}: Props) {
  const { employees, setEmployees } = useEmployee();

  const [value, setValue] = useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54'),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  async function createNewEmployee(data: any) {
    console.log('user', data);
    // console.log('Aqui', employees);
    // const newmEmployee = [...employees, data];
    // setEmployees(newmEmployee);

    if (Object.keys(dataEdit).length) {
      dataEmployee[dataEdit.index] = data;
    }
    const newDataArray = !Object.keys(dataEdit).length
      ? [...(dataEmployee ? dataEmployee : []), data]
      : [...(dataEmployee ? dataEmployee : [])];

    localStorage.setItem('Employee@Seven', JSON.stringify(newDataArray));
    console.log('newDataArray', newDataArray);

    setNewEmployee(newDataArray);
    setEmployeeEdit(data);
    onClose();
  }
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    dataHiring: Date(),
    dataBirth: Date(),
    salary: '',
  };

  return (
    <div>
      <Modal
        open={onOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={AddNewEmployeeShema}
            onSubmit={createNewEmployee}
          >
            {(formik) => {
              return (
                <form onSubmit={formik.handleSubmit}>
                  <Box
                    component="div"
                    sx={{
                      '& > :not(style)': { m: 1, width: '20ch' },
                    }}
                    // noValidate
                    // autoComplete="off"
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

                    <TextField
                      id="name"
                      name="name"
                      label="Nome"
                      variant="outlined"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                      id="email"
                      name="email"
                      type={'email'}
                      label="E-mail"
                      variant="outlined"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                      id="phone"
                      name="phone"
                      label="Telefone"
                      variant="outlined"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        label="Data de Nascimento"
                        inputFormat="MM/DD/YYYY"
                        value={formik.values.dataBirth}
                        onChange={(value) =>
                          formik.setFieldValue('date', value)
                        }
                        renderInput={(params) => (
                          <TextField
                            id="dataBirth"
                            name="dataBirth"
                            error={
                              formik.touched.dataBirth &&
                              Boolean(formik.errors.dataBirth)
                            }
                            helperText={
                              formik.touched.dataBirth &&
                              formik.errors.dataBirth
                            }
                            {...params}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <DesktopDatePicker
                        label="Data de Contração"
                        inputFormat="MM/DD/YYYY"
                        value={formik.values.dataHiring}
                        onChange={(value) =>
                          formik.setFieldValue('date', value)
                        }
                        renderInput={(params) => (
                          <TextField
                            id="dataHiring"
                            name="dataHiring"
                            error={
                              formik.touched.dataHiring &&
                              Boolean(formik.errors.dataHiring)
                            }
                            helperText={
                              formik.touched.dataHiring &&
                              formik.errors.dataHiring
                            }
                            {...params}
                          />
                        )}
                      />
                    </FormControl>
                  </LocalizationProvider>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                      id="salary"
                      name="salary"
                      type="string"
                      value={formik.values.salary}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.salary && Boolean(formik.errors.salary)
                      }
                      helperText={formik.touched.salary && formik.errors.salary}
                      label="Salário"
                    />
                  </FormControl>

                  <Stack direction="row" spacing={2} sx={{ m: 1 }}>
                    <Button variant="contained" color="primary" type="submit">
                      Concluido
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={onClose}
                    >
                      Voltar
                    </Button>
                  </Stack>
                </form>
              );
            }}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}

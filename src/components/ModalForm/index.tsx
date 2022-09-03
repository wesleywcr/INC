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
import { v4 as uuidv4 } from 'uuid';
import { IEmployee } from '~/Models/Employee';
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
  employeeEdit: boolean;
  onOpen: boolean;
  onClose: () => void;
}
export function ModalForm({
  dataEmployee,
  setNewEmployee,
  dataEdit,
  setEmployeeEdit,
  employeeEdit,
  onOpen,
  onClose,
}: Props) {
  const [datePicker, setDatePicker] = useState<Dayjs | null>(dayjs());

  async function editNewEmployee(data: any) {
    const newData = dataEmployee.filter((listEmployee: IEmployee) => {
      return listEmployee.id !== dataEdit?.id;
    });
    const dataform = [
      ...newData,
      {
        id: dataEdit.id,
        ...data,
      },
    ];

    await localStorage.setItem('Employee@Seven', JSON.stringify(dataform));
    setNewEmployee(dataform);
    onClose();
    window.location.reload();
  }
  async function createNewEmployee(data: any) {
    const dataform = {
      id: uuidv4(),
      ...data,
    };
    console.log('user', dataform);

    if (Object.keys(dataEdit).length) {
      dataEmployee[dataEdit.index] = dataform;
    }
    const newDataArray = !Object.keys(dataEdit).length
      ? [...(dataEmployee ? dataEmployee : []), dataform]
      : [...(dataEmployee ? dataEmployee : [])];

    await localStorage.setItem('Employee@Seven', JSON.stringify(newDataArray));
    console.log('newDataArray', newDataArray);

    setNewEmployee(newDataArray);
    setEmployeeEdit(data);
    onClose();
    window.location.reload();
  }
  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    profession: '',
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
            onSubmit={employeeEdit ? editNewEmployee : createNewEmployee}
          >
            {(formik) => {
              const editEmployee = () => {
                formik.setValues({
                  name: dataEdit.name,
                  lastName: dataEdit.lastName,
                  email: dataEdit.email,
                  phone: dataEdit.phone,
                  profession: dataEdit.profession,
                  dataHiring: Date(),
                  dataBirth: Date(),
                  salary: dataEdit.salary,
                });
              };

              return (
                <form onSubmit={formik.handleSubmit}>
                  <Box
                    component="div"
                    sx={{
                      '& > :not(style)': { m: 1, width: '20ch' },
                    }}
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
                      id="lastName"
                      name="lastName"
                      label="Sobrenome"
                      variant="outlined"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.lastName &&
                        Boolean(formik.errors.lastName)
                      }
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
                      }
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
                      type={'number'}
                      label="Telefone"
                      variant="outlined"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </Box>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                      id="profession"
                      name="profession"
                      label="Cargo"
                      variant="outlined"
                      value={formik.values.profession}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.profession &&
                        Boolean(formik.errors.profession)
                      }
                      helperText={
                        formik.touched.profession && formik.errors.profession
                      }
                    />
                  </FormControl>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <DesktopDatePicker
                        label="Data de Contração"
                        inputFormat="DD/MM/YYYY"
                        value={datePicker}
                        onChange={(newValue) => {
                          setDatePicker(newValue);
                        }}
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
                    {employeeEdit && (
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={editEmployee}
                      >
                        Editar
                      </Button>
                    )}
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

import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';

import { CardEmployee } from '~/components/CardEmployee';
import Header from '~/components/Header';
import { ModalForm } from '~/components/ModalForm';

import { IEmployee } from '~/Models/Employee';

export function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [employeeEdit, setEmployeeEdit] = useState({});
  const [newDataEmployee, setNewDataEmployee] = useState<IEmployee[]>([]);

  function handleDelete(id: string) {
    const newArray = newDataEmployee.filter((item) => item.id !== id);

    setNewDataEmployee(newArray);

    localStorage.setItem('Employee@Seven', JSON.stringify(newArray));
  }

  useEffect(() => {
    const storageEmployee = localStorage.getItem('Employee@Seven');
    const dbEmployee = storageEmployee ? JSON.parse(storageEmployee) : [];

    setNewDataEmployee(dbEmployee);
  }, [setNewDataEmployee]);
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: '#fefefe',
        width: '100%',
        height: '100vh',
      }}
    >
      <Header />

      <Stack direction="row" spacing={2} marginTop={10}>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<AddIcon />}
          onClick={() => [
            setIsOpenModal(true),
            setIsEdit(false),
            setEmployeeEdit({}),
          ]}
        >
          Adicionar Funcionários
        </Button>
        <ModalForm
          onOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          dataEdit={employeeEdit}
          dataEmployee={newDataEmployee}
          setNewEmployee={setNewDataEmployee}
          setEmployeeEdit={setEmployeeEdit}
          employeeEdit={isEdit}
        />
      </Stack>
      <Grid
        container
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        columnGap={9}
        marginLeft={1}
        marginTop={2}
      >
        {newDataEmployee.map((info) => {
          return (
            <CardEmployee
              key={info.id}
              name={info.name}
              lastName={info.lastName}
              email={info.email}
              dataHiring={info.dataHiring}
              phone={info.phone}
              profession={info.profession}
              salary={info.salary}
              OnDelete={() => handleDelete(info.id)}
              OnEdit={() => [
                setEmployeeEdit(info),
                setIsOpenModal(true),
                setIsEdit(true),
              ]}
            />
          );
        })}
      </Grid>
    </Box>
  );
}

import * as Yup from 'yup';
export const AddNewEmployeeShema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  lastName: Yup.string().required('Sobrenome é obrigatório'),
  email: Yup.string()
    .email('O campo deve conter um e-mail valido')
    .required('Email é uma campo obrigatório'),
  phone: Yup.string()
    .min(11, `O Telefone deve conter no mínimo 11 caracteres`)
    .required('Telefone é um campo obrigatório'),
  profession: Yup.string().required('Cargo é um campo obrigatório'),
  dataHiring: Yup.date()
    .required('Data de contratação é um campo obrigatório ').nullable(),
  salary: Yup.string()
    .required('Salário é um campo obrigatório')

})
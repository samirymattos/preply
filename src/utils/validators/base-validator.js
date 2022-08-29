import * as yup from 'yup';

export const validationSchema = yup.object({
  base: yup
    .string('Basic validation')
    .required('Required Field')
    .max(9, 'Maximum of 9 characters'),
})
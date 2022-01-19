import * as yup from 'yup';

const nameRegExp = RegExp(
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
);
const nameErrorMessage =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const phoneErrorMessage =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
const phoneRegExp = RegExp(
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
);

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegExp, nameErrorMessage)
    .required('Name is required'),
  number: yup
    .string()
    .matches(phoneRegExp, phoneErrorMessage)
    .required('A phone number is required'),
});

export default schema;

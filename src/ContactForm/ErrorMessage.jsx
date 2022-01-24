import { ErrorMessage } from 'formik';
import style from './ContactForm.module.css';

const Error = ({ name }) => (
  <ErrorMessage
    name={name}
    render={message => <p className={style.errorMessage}>{message}</p>}
  />
);

export default Error;

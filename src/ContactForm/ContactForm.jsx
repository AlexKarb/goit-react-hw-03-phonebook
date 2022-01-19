import Button from '../Utils/Button/Button';
import style from './ContactForm.module.css';
import PropTypes from 'prop-types';
import schema from '../helpers/validationForm';
import Error from './ErrorMessage';
import { Component } from 'react';
import { Formik, Field, Form } from 'formik';

const { phonebook, phonebook__label, phonebook__input } = style;

class ContactForm extends Component {
  findNameInPhonebook = (allContacts, ourContact) => {
    const normalizeName = ourContact.name.toLowerCase();
    return new Promise((resolve, reject) => {
      const haveContact = allContacts.find(
        ({ name }) => name.toLowerCase() === normalizeName,
      );

      if (haveContact) {
        reject(ourContact.name);
      } else {
        resolve(ourContact);
      }
    });
  };

  render() {
    const { allContacts, onSubmit } = this.props;
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={(value, { resetForm }) => {
          this.findNameInPhonebook(allContacts, value)
            .then(({ name, number }) => onSubmit(name, number))
            .catch(name => alert(`${name} is already in contacts`));

          resetForm();
        }}
      >
        <Form className={phonebook}>
          <label className={phonebook__label}>
            Name
            <Field className={phonebook__input} type="text" name="name" />
            <Error name="name" />
          </label>

          <label className={phonebook__label}>
            Number
            <Field className={phonebook__input} type="tel" name="number" />
            <Error name="number" />
          </label>
          <Button type="submit" styleFor="submit" text={'Add contact'} />
        </Form>
      </Formik>
    );
  }
}
export default ContactForm;

ContactForm.propTypes = {
  allContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  onSubmit: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import style from './Contact.module.css';
const { contact__photo, contact__container } = style;

const ContactData = ({ name, phone, photo }) => (
  <div className={contact__container}>
    <span className={contact__photo}>{photo}</span>
    {name} : {phone}
  </div>
);

export default ContactData;

ContactData.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  photo: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  // PropTypes.string - for future photo-links.
};

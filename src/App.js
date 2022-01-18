import { Component } from 'react';
import Section from './Utils/Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Title from './Utils/Title/Title';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  inputChange = e => {
    return this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  saveContact = (name, number) =>
    this.setState(prevState => ({
      contacts: [{ name, number, id: nanoid() }, ...prevState.contacts],
    }));

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        ({ id: contactId }) => contactId !== id,
      ),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const filterContact = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter),
    );

    return (
      <div className="container">
        <Section type="Phonebook">
          <Title title="Phonebook" />
          <ContactForm allContacts={contacts} onSubmit={this.saveContact} />
        </Section>
        <Section>
          <Title title="Contacts" />
          <ContactsList
            filter={filter}
            filterContact={filterContact}
            allContacts={contacts}
            onChange={this.inputChange}
            onDelete={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;

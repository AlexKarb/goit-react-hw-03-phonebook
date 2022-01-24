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

  componentDidMount() {
    const savedState = JSON.parse(localStorage.getItem('contacts'));

    if (savedState) {
      this.setState({ contacts: savedState });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  filterChange = e => this.setState({ filter: e.target.value });

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
    const contactsList = filterContact.length === 0 ? contacts : filterContact;

    return (
      <div className="container">
        <Section type="Phonebook">
          <Title title="Phonebook" />
          <ContactForm allContacts={contacts} onSubmit={this.saveContact} />
        </Section>
        <Section>
          <Title title="Contacts" />
          <ContactsList
            contactsList={contactsList}
            filter={filter}
            onChange={this.filterChange}
            onDelete={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;

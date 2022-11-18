import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import { Phonebook } from './Phonebook/Phonebook';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormSubmit = ({ name, number }) => {
    this.state.contacts.find(el => el.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState({
          contacts: [
            {
              id: nanoid(),
              name,
              number,
            },
            ...this.state.contacts,
          ],
        });
  };

  onFilterUpdate = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  onDeleteContact = event => {
    const filteredContacts = this.state.contacts.filter(
      contact => contact.id !== event.target.id
    );
    this.setState({ contacts: filteredContacts });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <Phonebook onSubmit={this.onFormSubmit} />
        <Filter value={filter} onChange={this.onFilterUpdate} />
        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <ContactsList
          contactsList={visibleContacts}
          onDelete={this.onDeleteContact}
        />
      </div>
    );
  }
}

import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import { ContactForm } from './Phonebook/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
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
        <ContactForm onSubmit={this.onFormSubmit} />
        {this.state.contacts.length !== 0 && (
          <div>
            <h2 style={{ textAlign: 'center' }}>Contacts</h2>
            <Filter value={filter} onChange={this.onFilterUpdate} />
            <ContactsList
              contactsList={visibleContacts}
              onDelete={this.onDeleteContact}
            />
          </div>
        )}
      </div>
    );
  }
}

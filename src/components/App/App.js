import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactsList from "../ContactsList/ContactsList";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    const storageContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storageContacts) {
      this.setState({
        contacts: storageContacts,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  addContact = (contact) => {
    if (this.state.contacts.every((el) => el.name !== contact.name)) {
      this.setState((prevState) => {
        return { contacts: [...prevState.contacts, contact] };
      });
    } else {
      alert(`${contact.name} is already in contacts.`);
    }
  };
  deleteContact = (contactId) => {
    this.setState({
      contacts: this.state.contacts.filter((el) => {
        return el.id !== contactId;
      }),
    });
  };
  filterChange = (filter) => {
    this.setState({ filter: filter });
  };
  filterContacts = () => {
    return this.state.contacts.filter((el) => {
      return el.name.toLowerCase().includes(this.state.filter);
    });
  };
  render() {
    return (
      <div className="wrapper">
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact} />
        <h2 className="contactsTitle">Contacts</h2>
        <Filter filterChange={this.filterChange} />
        <ContactsList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

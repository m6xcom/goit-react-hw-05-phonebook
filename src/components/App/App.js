import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactsList from "../ContactsList/ContactsList";
import "./App.css";

class App extends Component {
  // componentDidMount() {
  //   console.log(this.state.items);
  //   const storageContacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (storageContacts) {
  //     this.setState({
  //       contacts: storageContacts,
  //     });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }
  render() {
    return (
      <div className="wrapper">
        <h2>Phonebook</h2>
        <ContactForm />
        <h2 className="contactsTitle">Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
  }
}

export default App;

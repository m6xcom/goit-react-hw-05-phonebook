import React, { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import style from "./ContactForm.module.css";

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func,
  };
  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    let { addContact } = this.props;
    const nameInput = shortid.generate();
    const numberInput = shortid.generate();
    return (
      <form
        className={style.form}
        onSubmit={(e) => {
          e.preventDefault();
          addContact({
            id: shortid.generate(),
            name: this.state.name,
            number: this.state.number,
          });
          e.target.reset();
        }}
      >
        <label htmlFor={nameInput}>Name</label>
        <input
          id={nameInput}
          name="name"
          onChange={this.handleChange}
          type="text"
        ></input>
        <label htmlFor={numberInput}>Number</label>
        <input
          id={numberInput}
          name="number"
          onChange={this.handleChange}
          type="tel"
        ></input>
        <button className={style.addContactBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

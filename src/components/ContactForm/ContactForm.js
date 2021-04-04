import React from "react";
import { connect } from "react-redux";
import shortid from "shortid";
import PropTypes from "prop-types";
import { ADDCONTACT } from "../../redux/contacts/contacts-actions";
import style from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const nameInput = shortid.generate();
  const numberInput = shortid.generate();
  return (
    <form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
        addContact({
          id: shortid.generate(),
          name: e.target.children.name.value,
          number: e.target.children.number.value,
        });
        e.target.reset();
      }}
    >
      <label htmlFor={nameInput}>Name</label>
      <input id={nameInput} name="name" type="text"></input>
      <label htmlFor={numberInput}>Number</label>
      <input id={numberInput} name="number" type="tel"></input>
      <button className={style.addContactBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(ADDCONTACT(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  addContact: PropTypes.func,
};

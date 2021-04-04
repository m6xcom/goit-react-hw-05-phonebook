import React from "react";
import PropTypes from "prop-types";
import style from "./ContactsList.module.css";

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((el) => {
        return (
          <li className={style.contactsListItem} key={el.id}>
            <p>
              {el.name} : {el.number}
            </p>
            <button onClick={() => deleteContact(el.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  deleteContact: PropTypes.func,
};

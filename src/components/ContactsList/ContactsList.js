import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { DELETECONTACT } from "../../redux/contacts/contacts-actions";
import style from "./ContactsList.module.css";

const ContactsList = ({ contacts, filter, deleteContact }) => {
  return (
    <ul>
      {contacts
        .filter((el) => el.name.toLowerCase().includes(filter))
        .map((el) => {
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

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (contactId) => dispatch(DELETECONTACT(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};

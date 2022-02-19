import PropTypes from "prop-types";
import ContactItem from "../ContactItem/ContactsItem";
import s from "./ContactsList.module.css";

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={s.ContactsList}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
      >
        <button> удалить</button>
      </ContactItem>
    ))}
  </ul>
);
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

// function ContactList({contacts,onDeleteContact}) {
//    return (
//       <List>
//             {contacts.map(({ id, name, number }) =>
//             <ContactItem
//                key={id}
//                id={id}
//                name={name}
//                number={number}
//                onDeleteContact={onDeleteContact}

//             />
//            )}
//       </List>
//    )
// }

export default ContactsList;

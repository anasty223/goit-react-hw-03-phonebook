import s from "./ContactItem.module.css";

function ContactItem({ name, number, onDeleteContact, id }) {
  return (
    <li className={s.ContactItem}>
      {name}
      <p>( {number} )</p>
      <button
        className={s.button}
        type="submit"
        onClick={() => onDeleteContact(id)}
      >
        delete
      </button>
    </li>
  );
}
export default ContactItem;

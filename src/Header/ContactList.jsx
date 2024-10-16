import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

function ContactList({ contacts, deleteHandler }) {
    return (
        <div className={styles.contactList}>
            <h3>Contact List</h3>
            {contacts.length ? (
                <ul>
                    {contacts.map((contact) => (
                        <li key={contact.id} className={styles.contactItem}>
                            {contact.name} {contact.lastName}
                            <p>{contact.email}</p>
                            <p>{contact.number}</p>
                            <button onClick={() => deleteHandler(contact.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles.message}>No contacts!</p>
            )}
        </div>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    deleteHandler: PropTypes.func.isRequired,
};

export default ContactList;
import { useState } from "react";
import ContactList from "./ContactList";
import inputs from "../input/inputs";
import { v4 as uuidv4 } from "uuid";
import style from "./Contacts.module.css"

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [contact, setContact] = useState({
        id: "",
        name: "",
        lastName: "",
        email: "",
        number: "",
    });
    const [alert, setAlert] = useState("");

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) => ({ ...contact, [name]: value }));
    };

    const addHandler = () => {
        if (!contact.name || !contact.lastName || !contact.email || !contact.number) {
            setAlert("Please enter valid data!");
            return;
        }

        setAlert("");
        const newContact = { ...contact, id: uuidv4() };
        setContacts((contacts) => [...contacts, newContact]);
        setContact({
            id: "",
            name: "",
            lastName: "",
            email: "",
            number: "",
        });
    };

    const deleteHandler = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
    };

    return (
        <div className={style.container} >
            <div className={style.form}>
                {inputs.map((input, index) => (
                    <input
                        key={index}
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        value={contact[input.name]}
                        onChange={changeHandler}
                    />
                ))}
                <button onClick={addHandler}>Add Contact</button>
            </div>
            <div className={style.alert}>
                {alert && <p>{alert}</p>}
            </div>
            <ContactList contacts={contacts} deleteHandler={deleteHandler} />
        </div>
    );
}

export default Contacts;
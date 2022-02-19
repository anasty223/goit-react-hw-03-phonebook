import "./App.css";
import Form from "./components/Form/Form";
import React, { Component } from "react";
import ContactsList from "./components/ContactsList/ContactsList";
import { nanoid } from "nanoid";
import Filter from "./components/Filter/Filter";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    filter: "",
  };
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App componentDidUpdate");
    const nextContacts = this.state.contacts;
    const prevContatcs = prevState.contacts;
    if (nextContacts !== prevContatcs) {
      console.log("Обновилось поле todos, записываю todos в хранилище");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
    //закрытие модалки при добавление туду
    // if (this.state.todos.length > prevState.todos.length) {
    //   this.toggleModal();
    // }
  }

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const ReturnName = contacts.find((contact) => contact.name === name);
    if (ReturnName) {
      alert("This name is already in the phone book ");
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      console.log(contact);
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };
  deleteContact = (contactsId) => {
    console.log(contactsId);
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactsId
      ),
    }));
  };
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();
    return (
      <div className="App">
        <h1 className="phonebook">Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <Filter value={filter} onChange={this.changeFilter} />
        <h2>Contacts</h2>
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />

        {/* <ContactsList contacts={this.state.contacts} /> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import s from "./Form.module.css";
class Form extends Component {
  state = { name: "", number: "" };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });

    this.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
            className={s.input}
          />
        </label>
        <label>
          Tel.
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            className={s.input}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;

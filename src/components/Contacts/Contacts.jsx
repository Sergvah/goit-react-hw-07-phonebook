import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import css from 'components/Contacts/contacts.module.css';
import Notiflix from 'notiflix';
import { getContactsSelector, getIsLoadingSelector } from 'redux/selectors';

const Contacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const dispatch = useDispatch();
  const contacts = useSelector(getContactsSelector);
  // console.log(contacts);
  const isLoading = useSelector(getIsLoadingSelector);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const isAdded = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isAdded) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }
    const contactInfo = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    console.log(contactInfo);
    dispatch(addContact(contactInfo));
    form.reset();
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name"> </label>
      Name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleNameChange}
        id="name"
      />
      <label htmlFor="number">Number </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleNameChange}
        id="number"
      />
      <button type="submit" disabled={isLoading}>
        Add Contact
      </button>
    </form>
  );
};

export default Contacts;

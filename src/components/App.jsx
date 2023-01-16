import Contacts from './Contacts/Contacts';
import FilterSearch from './FilterSearch/FilterSearch';
import ContactsOfList from './ContactsOfList/ContactsOfList';
import { useSelector } from 'react-redux';
import { getIsLoadingSelector } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(getIsLoadingSelector);
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <Contacts />
      <h2>Contacts</h2>
      <FilterSearch />
      {isLoading}
      <ContactsOfList />
    </div>
  );
};

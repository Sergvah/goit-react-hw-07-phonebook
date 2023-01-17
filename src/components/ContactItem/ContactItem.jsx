import css from 'components/ContactItem/contactitem.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getIsLoadingSelector } from 'redux/selectors';

const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  const onDeleteCard = id => dispatch(deleteContact(id));
  const isLoading = useSelector(getIsLoadingSelector);
  return (
    <li className={css.item}>
      <p className={css.text}>{item.name}:</p>
      <p className={css.numb}>{item.number}</p>
      <button
        type="button"
        className={css.btn}
        onClick={() => onDeleteCard(item.id)}
        disabled={isLoading}
      >
        Delete
      </button>
    </li>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

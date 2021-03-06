import { useState } from 'react';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-actions';
// import PropTypes from 'prop-types';
// import actions from '../../redux/contacts/contacts-actions';
// import { connect } from 'react-redux';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleNameChange = ({ target }) => {
    setName(target.value.trimLeft());
  };
  const handleNumberChange = ({ target }) => {
    setNumber(target.value.trimLeft());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name === '') {
      alert('Name required');
      return;
    }
    if (number === '') {
      alert('Number required');
      return;
    }
    dispatch(addContact({ name, number }));
    // onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.title}>
        Name
        <input
          className={s.input}
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className={s.title}>
        Number
        <input
          className={s.input}
          type="text"
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// const mapStateToProps = () => ({});
// ;

// const mapDispatchToProps = dispatch => ({
//   onSubmit: data => dispatch(actions.addContact(data)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

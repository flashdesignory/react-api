import React from 'react';
import PropTypes from 'prop-types';

import User from './user';
import './list.scss';

import Preloader from './preloader';

const List = (props) => {
  const { users, deleteOne, updateOne } = props;
  const displayList = () => (
    <ul>
      { users.map(user => (
        <li key={user.id}>
          <User
            id={user.id}
            first={user.first_name}
            last={user.last_name}
            deleteOne={deleteOne}
            updateOne={updateOne}
          />
        </li>
      ))}
    </ul>
  );
  const displayPreloader = () => (
    <Preloader />
  );
  return (
    <div className="list-container">
      { users.length > 0 ? displayList() : displayPreloader() }
    </div>
  );
};

List.defaultProps = {
  users: [],
  deleteOne: () => {},
  updateOne: () => {},
};

List.propTypes = {
  users: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  deleteOne: PropTypes.func,
  updateOne: PropTypes.func,
};

export default List;

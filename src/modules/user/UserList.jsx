import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Preloader from '../preloader/Preloader';

const UserList = ({ users, deleteUser, updateUser }) => {
  const displayList = () => (
    <ul>
      {users.map(user => (
        // eslint-disable-next-line no-underscore-dangle
        <li key={user._id}>
          <User
            // eslint-disable-next-line no-underscore-dangle
            id={user._id}
            firstName={user.first_name}
            lastName={user.last_name}
            deleteUser={deleteUser}
            updateUser={updateUser}
          />
        </li>
      ))}
    </ul>
  );
  const displayPreloader = () => <Preloader />;
  return (
    <div className="module list">
      {users.length > 0 ? displayList() : displayPreloader()}
    </div>
  );
};

UserList.defaultProps = {
  users: [],
  deleteUser: () => {},
  updateUser: () => {},
};

UserList.propTypes = {
  users: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  deleteUser: PropTypes.func,
  updateUser: PropTypes.func,
};

export default UserList;

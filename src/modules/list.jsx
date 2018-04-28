import React from 'react';
import PropTypes from 'prop-types';

import User from './user';
import './list.scss';

const List = (props) => {
  return (
    <div className="list-container">
      <ul>
        { props.users.map(user => {
          return (
            <li key={user.id}>
              <User {...user} deleteOne={props.deleteOne} updateOne={props.updateOne}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

List.defaultProps = {
  users: [],
  deleteOne: () => {},
  updateOne: () => {}
}

List.propTypes = {
  users: PropTypes.array,
  deleteOne: PropTypes.func,
  updateOne: PropTypes.func
}

export default List;

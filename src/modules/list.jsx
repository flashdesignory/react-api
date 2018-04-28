import React from 'react';
import PropTypes from 'prop-types';

import User from './user';
import './list.scss';

import Preloader from './preloader';

const List = (props) => {
  const displayList = () => {
    return (
      <ul>
        { props.users.map(user => {
          return (
            <li key={user.id}>
              <User {...user}
                deleteOne={props.deleteOne}
                updateOne={props.updateOne}/>
            </li>
          )
        })}
      </ul>
    )
  }
  const displayPreloader = () => {
    return (
      <Preloader />
    )
  }
  return (
    <div className="list-container">
      { props.users.length > 0 ? displayList() : displayPreloader() }
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

import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';
import Preloader from '../preloader/Preloader';

const DogList = ({ dogs, deleteDog, updateDog }) => {
  const displayList = () => (
    <ul>
      {dogs.map(dog => (
        // eslint-disable-next-line no-underscore-dangle
        <li key={dog._id}>
          <Dog
            // eslint-disable-next-line no-underscore-dangle
            id={dog._id}
            name={dog.name}
            owner={dog.owner}
            deleteDog={deleteDog}
            updateDog={updateDog}
          />
        </li>
      ))}
    </ul>
  );
  const displayPreloader = () => <Preloader />;
  return (
    <div className="module list">
      {dogs.length > 0 ? displayList() : displayPreloader()}
    </div>
  );
};

DogList.defaultProps = {
  dogs: [],
  deleteDog: () => {},
  updateDog: () => {},
};

DogList.propTypes = {
  dogs: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  deleteDog: PropTypes.func,
  updateDog: PropTypes.func,
};

export default DogList;

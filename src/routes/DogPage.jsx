import React, { Component } from 'react';
import NewDog from '../modules/dog/NewDog';
import DogList from '../modules/dog/DogList';
import api from '../lib/api';
import './DogPage.scss';

const route = 'dog/';

class DogPage extends Component {
  state = {
    dogs: [],
  };

  componentDidMount() {
    this.getDogs();
  }

  getDogs = () => {
    api
      .getAll(route)
      .then((res) => {
        this.updateState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getDog = (id) => {
    api
      .getOne(route, id)
      .then((res) => {
        const currentDog = res.data[0];
        console.log(currentDog);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  createDog = (dog) => {
    const { dogs } = this.state;
    api
      .createOne(route, dog)
      .then((res) => {
        this.updateState([res.data, ...dogs]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateDog = (updatedDog) => {
    const { dogs } = this.state;
    api
      .updateOne(route, updatedDog)
      .then((res) => {
        console.log(res.data);
        dogs.map((dog) => {
          // eslint-disable-next-line no-underscore-dangle
          if (dog._id !== updatedDog._id) return dog;
          return Object.assign({}, dogs, updatedDog);
        });
        this.updateState(dogs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteDog = (id) => {
    const { dogs } = this.state;
    api
      .deleteOne(route, id)
      .then((res) => {
        console.log(res.data);
        // eslint-disable-next-line no-underscore-dangle
        this.updateState(dogs.filter(dog => dog._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateState(dogs) {
    this.setState({ dogs });
  }

  render() {
    const { dogs } = this.state;
    return (
      <div className="page dog">
        <div className="separator" />
        <NewDog createDog={this.createDog} />
        <div className="separator-bottom" />
        <DogList
          dogs={dogs}
          updateDog={this.updateDog}
          deleteDog={this.deleteDog}
          getDog={this.getDog}
        />
      </div>
    );
  }
}

export default DogPage;

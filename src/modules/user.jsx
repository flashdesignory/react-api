import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../fonts.scss';
import './user.scss';

class User extends Component{
  constructor(props){
    super(props);
    this.deleteOne = this.deleteOne.bind(this);
    this.updateOne = this.updateOne.bind(this);

    this.state = {
      firstName:"",
      lastName:""
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }
  handleLastNameChange(e){
    this.setState({
      lastName:e.target.value
    })
  }
  handleFirstNameChange(e){
    this.setState({
      firstName:e.target.value
    })
  }
  deleteOne(e){
    e.preventDefault();
    console.log("deleting");
    this.props.deleteOne(this.props.id);
  }
  updateOne(e){
    e.preventDefault();

    if(this.state.firstName === this.props.first_name && this.state.lastName === this.props.last_name){
      console.log("nothing changed");
      return;
    }

    console.log("submitting");

    this.props.updateOne({
      "id":this.props.id,
      "first_name": this.state.firstName,
      "last_name": this.state.lastName
    })
  }
  componentDidMount(){
    this.setState({
      firstName: this.props.first_name,
      lastName: this.props.last_name
    })
  }
  render(){
    return (
      <div className="user-container">
        <form className="user" onSubmit={ this.handleOnSubmit }>
          <input className="field first-name" type="text" placeholder="First Name" onChange={this.handleFirstNameChange} value={this.state.firstName}/>
          <input className="field last-name" type="text" placeholder="Last Name" onChange={this.handleLastNameChange} value={this.state.lastName}/>
          <button className="button update" type="submit" onClick={this.updateOne}><span className="icon-refresh"></span></button>
          <button className="button delete" onClick={this.deleteOne}><span className="icon-cancel"></span></button>
        </form>
      </div>
    )
  }
}

User.defaultProps = {
  deleteOne: () => {},
  updateOne: () => {},
  first_name: "",
  last_name: "",
  id: ""
}

User.propTypes = {
  updateOne: PropTypes.func,
  deleteOne: PropTypes.func,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  id: PropTypes.string
}

export default User;

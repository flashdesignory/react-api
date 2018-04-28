import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './newUser.scss';

class NewUser extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstName:"",
      lastName:""
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }
  handleOnSubmit(e){
    console.log("handleOnSubmit()");
    e.preventDefault();

    this.props.createOne({
      "first_name": this.state.firstName,
      "last_name": this.state.lastName
    })

    this.setState({
      firstName:"",
      lastName:""
    });
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
  render(){
    return (
      <div className="new-user-container">
        <form className="new-user" onSubmit={ this.handleOnSubmit }>
          <input className="input first-name" type="text" placeholder="First Name" onChange={this.handleFirstNameChange} value={this.state.firstName}/>
          <input className="input last-name" type="text" placeholder="Last Name" onChange={this.handleLastNameChange} value={this.state.lastName}/>
          <input className="button button-block" type="submit" value="Add User" onClick={this.handleOnSubmit}/>
        </form>
      </div>
    )
  }
}

NewUser.defaultProps = {
  createOne: () => {}
}

NewUser.propTypes = {
  createOne: PropTypes.func
}

export default NewUser;

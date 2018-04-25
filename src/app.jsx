import React, { Component } from 'react';
//import axios from 'axios';
import api from './lib/api';
import List from './modules/list';
import NewUser from './modules/newUser';
import './app.scss';

class App extends Component{
  constructor(){
    super();
    this.state = {
      users : [],
      currentUser : ''
    }
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.createOne = this.createOne.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.updateOne = this.updateOne.bind(this);
    //this.url = 'https://express-api-json.herokuapp.com/user/';
  }
  /*getAll(){
    axios.get(this.url)
      .then(res => {
        const users = res.data;
        console.log(users);
        this.setState({ users });
      })
      .catch(err => {
        console.log(err);
      });
  }
  getOne(id){
  //axios.get(`${this.url}${id}` )
    axios.get(`${this.url}`,{ params: { id }})
      .then(res => {
        const currentUser = res.data[0];
        console.log(currentUser);
        this.setState({ currentUser });
      })
      .catch(err => {
        console.log(err);
      });
  }
  createOne(user){
    axios.post(`${this.url}`, user)
    .then(res=>{
      const users = res.data;
      console.log(users);
      this.setState({ users });
    })
    .catch(err => {
      console.log(err);
    })
  }
  updateOne(user){
    axios.put(`${this.url}${user.id}`, user)
    .then(res=>{
      const users = res.data;
      console.log(users);
      this.setState({ users });
    })
    .catch(err => {
      console.log(err);
    })
  }
  deleteOne(id){
    axios.delete(`${this.url}${id}`)
      .then(res => {
        const users = res.data;
        console.log(users);
        this.setState({ users });
      })
      .catch(err => {
        console.log(err);
      });
  }*/
  getAll(){
    api.getAll().then(res => {
      this.updateUsers(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }
  getOne(id){
    api.getOne(id).then(res => {
      const currentUser = res.data[0];
      console.log(currentUser);
      this.setState({ currentUser });
    })
    .catch(err => {
      console.log(err);
    });
  }
  createOne(user){
    api.createOne(user).then(res => {
      this.updateUsers(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }
  updateOne(user){
    api.updateOne(user).then(res => {
      this.updateUsers(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }
  deleteOne(id){
    api.deleteOne(id).then(res => {
      this.updateUsers(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }
  updateUsers(users){
    this.setState({ users });
  }
  componentDidMount(e){
    this.getAll();
    //this.getOne("1");
    //this.deleteOne('811k7rwbx7n');
    //this.updateOne({id: 'e6nw54qq5tw', 'first_name':'frida'})
  }
  render(){
    return (
      <div className="container">
        <NewUser createOne={ this.createOne }/>
        <div className="separator"></div>
        <List users={ this.state.users } deleteOne={this.deleteOne} updateOne={this.updateOne}/>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import SomeNote from '../../components/someNote/SomeNote';


export default class HomePage extends Component {

  render() {
    return (
      <div className="app">
        <SomeNote />
        <buttom className="addbutton">Add new note...</buttom>
      </div>
    );
  }
}
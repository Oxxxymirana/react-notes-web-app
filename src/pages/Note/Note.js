import React, { Component } from 'react';
import sharedObj from '../../sharedData/recordObj'


export default class HomePage extends Component {

  render() {
    return (
      <div className="app">
          <h1> {sharedObj.name} </h1>
          <p> {sharedObj.hashtag.map(item=> { return `#${item} `})} </p>
          <p> {sharedObj.text} </p>
      </div>
    );
  }
}
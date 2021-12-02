import React, { Component } from 'react';
import sharedObj from '../../sharedData/recordObj'
import data from '../../sharedData/data.json';

import { Link } from 'react-router-dom';
export default class Note extends Component {

  constructor(props) {
    super(props);
    this.deleteThisNote = this.deleteThisNote.bind(this);
  }

  deleteThisNote() { 
    const corentId = --sharedObj.id;
    delete data[corentId];
  }

  render() {
    return (
      <div className="some-note-template">
          <h1> {sharedObj.name} </h1>
          <p className="note-hashtags"> {sharedObj.hashtag.map(item=> { return `#${item} `})} </p>
          <p className="note-text"> {sharedObj.text} </p>
          <button><Link to="../"  onClick={this.deleteThisNote}> Delete this note...  </Link> </button>
      </div>
    );
  }
}
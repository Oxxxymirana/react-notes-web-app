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
    const correntId = sharedObj.id;
    
    data.map( (item,i) => { 
      if (item.id == correntId) { 
        console.log(item.id)
        console.log(correntId)
      delete data[i];
      }
    });
  }

 
  render() {
    console.log(sharedObj);
    return (
      <div className="some-note-template">
          <h1> {sharedObj.name} </h1>
          <p className="note-hashtags"> {sharedObj.hashtag.map(item=> { return `#${item} `})} </p>
          <p className="note-text"> {sharedObj.text} </p>
          <button><Link to="../"  onClick={this.deleteThisNote}> Delete Note...  </Link> </button>
          <button><Link to="../edit/" > Edit Note...  </Link> </button>
          <button> <Link to='../'>back</Link></button>
      </div>
    );
  }
}
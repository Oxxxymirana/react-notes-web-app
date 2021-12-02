import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../../sharedData/data.json';
export default class AddNote extends Component {

  constructor(props) {
    super(props);
   
    this.state = { 
        name: '',
        tags : '',
        text : '',
    };

    this.updateTextValue = this.updateTextValue.bind(this); 
    this.updateTagsValue = this.updateTagsValue.bind(this); 
    this.updateNameValue = this.updateNameValue.bind(this); 
    this.getLastId = this.getLastId.bind(this);
  }

  

  updateTextValue(evt) { 
    this.setState ( {
        text : evt.target.value,
    })
  }

  updateTagsValue(evt) { 
      console.log(this.state.tags);
    this.setState ( {
        tags : evt.target.value,
    })
  
  }

  updateNameValue(evt) { 
    this.setState ( {
        name : evt.target.value,
    })
  }

  getLastId() { 
    return data.reverse()[0].id + 1;
  }




  render() {
    
    return (
      <div className="some-note-template new-note">
          <h1> Add new Note! </h1>
          <div>
          <h2 className="new-note-name">new note name:</h2>
          <input placeholder="Note name!"  value={this.state.nameValue} onChange={this.updateNameValue}></input>
          <h2 className="new-note-name" >new note tags:</h2>
          <input placeholder="Tegs separating by space!" name="tags" value={this.state.tags} onChange={this.updateTagsValue}></input> 
          <h2 className="new-note-name">new note text:</h2>
          <input placeholder="enter your note!" name="text" onChange={this.updateTextValue}></input>
          </div>
          <button> <Link to='../' onClick={() => {data.push( {
              id : this.getLastId,
              name : this.state.name,
              hashtag : this.state.tags.split(' '),
              text : this.state.text,
          } )}}>Add note </Link></button>
      </div>
    );
  }
}
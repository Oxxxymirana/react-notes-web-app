import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sharedObj from '../../sharedData/recordObj'
import data from '../../sharedData/data.json';
export default class EditNote extends Component {

  constructor(props) {
    super(props);
   
    this.state = { 
        name : sharedObj.name,
        tags : sharedObj.hashtag.join(' '),
        text : sharedObj.text,
    };

    this.updateTextValue = this.updateTextValue.bind(this); 
    this.updateTagsValue = this.updateTagsValue.bind(this); 
    this.updateNameValue = this.updateNameValue.bind(this); 
    this.editNote = this.editNote.bind(this);
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

  editNote() { 
    const correntId = sharedObj.id;

    data.map( (item,i) => { 
        if (item.id == correntId) { 
            data[i].name = this.state.name;
            data[i].hashtag = this.state.tags.split(' ');
            data[i].text = this.state.text;

            sharedObj.id = sharedObj.id;
            sharedObj.name = this.state.name;
            sharedObj.hashtag = this.state.tags.split(' ');
            sharedObj.text = this.state.text;
            }
        }   
    )
};


  render() {
    
    return (
      <div className="some-note-template new-note">
          <h1> Edit note! </h1>
          <div>
          <h2 className="new-note-name">note name:</h2>
          <input placeholder="Note name!"  value={this.state.name} onChange={this.updateNameValue}></input>
          <h2 className="new-note-name" >new note tags:</h2>
          <input placeholder="Tegs separating by space!" name="tags" value={this.state.tags} onChange={this.updateTagsValue}></input> 
          <h2 className="new-note-name">new note text:</h2>
          <input placeholder="enter your note!" value={this.state.text} name="text" onChange={this.updateTextValue}></input>
          </div>
          <button> <Link to='../note' onClick={this.editNote}>edit note </Link></button>
          <button> <Link to='../note'>back</Link></button>
      </div>
    );
  }
}
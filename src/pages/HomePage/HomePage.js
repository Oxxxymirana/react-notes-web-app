import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import SomeNote from '../../components/someNote/SomeNote';
import data from '../../sharedData/data.json';
import TagsBoard from '../../components/tagsBoard/TagsBoard'

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        searchValue : '',
        tags : false,
        searchItems: data,
    };
    this.removeTags = this.removeTags.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addHashtag = this.addHashtag.bind(this);
  }

  handleChange(e) {
    this.setState ( {
        searchValue : e.target.value,
    } )
  }

  removeTags() { 
    this.setState ( {
      tags : false,
  } )
  }
  
  addHashtag() {
    const searchValue = this.state.searchValue;
    const nowTags = this.state.tags ? this.state.tags : [  ]; 

 
    if(!nowTags.includes[searchValue]) {
      nowTags.push(searchValue);
      this.setState ( { 
      tags : nowTags,
      })
    }
  }

  render() {
    const tags = this.state.tags;
    const searchItems = this.state.searchItems;
    return (
      <div className="app">
        <div className="tags-search">
          <input type="text" onChange={this.handleChange} id="site-search-input" name="search" required placeholder="Add tag to search... "/>
          <button onClick={this.addHashtag}>Start Search</button>
          <button onClick={this.removeTags}>Remove Tags</button>
        </div>
          <TagsBoard byTags={tags} />
          <SomeNote searchItems={searchItems} byTags={tags}/>
          <buttom className="addbutton"><Link to="/add">Add new note!</Link></buttom>
      </div>
    );
  }
}
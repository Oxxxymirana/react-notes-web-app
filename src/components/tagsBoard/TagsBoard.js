import React, { Component } from 'react';

export default class tagsBoard extends Component {
    
    

  render() {
    const tags = this.props.byTags;

    if(tags) { 
    return (
        <div  className="tags-list">
        <h2>Searching by tags :</h2>
        {tags.map((item, i) => (<i>#{item} </i>))}   
        </div>
    );
    } else { 
        return (
            <div className="tags-list"> 
            <h2>You can add tags for search... </h2>
            </div>
        )
    }
  }
}
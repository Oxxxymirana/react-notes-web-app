import React, { Component } from 'react';
import SomeNote from '../../components/someNote/SomeNote';
import data from '../../sharedData/data.json';

export default class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
        searchValue : '',
        tags : [],
        searchItems: data,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addHashtag = this.addHashtag.bind(this);
    this.getNewList = this.getNewList.bind(this);
  }

  handleChange(e) {
    this.setState ( {
        searchValue : e.target.value,
    } )
  }

  addHashtag() {
    const searchValue = this.state.searchValue;
    const nowTags = this.state.tags; 
    if(!nowTags.includes[searchValue]) {
      this.setState ( { 
      tags : nowTags.push(searchValue),
      })
    }
  }

  getNewList() { 
    const searchValue = this.state.searchValue;
    const resultItems = data.map( item => {   
      return item.hashtag.includes(searchValue) ? item : false
  });

    
  if(this.state.searchValue) {
    this.setState( { 
      searchItems : resultItems,
    })
  } else { 
      this.setState ( { 
        searchItems: data,
      })
    }
  }

  // componentWillMount() {
  //   const tags = this.state.tags; 
  //   const searchItems = this.state.searchItems;
    

  //   const even = (element) => tags.includes(element);
  //   if (tags) { 
      
  //    const resultItems = searchItems.map(item => { 
  //       return item.hashtag.some(even) ? item : false;
  //     })

  //     if (resultItems[0]) { 
  //       console.log(resultItems);
  //       this.setState ( {
  //         searchItems : resultItems,
  //       })
  //     }
  //   }
  // }



  render() {
    return (
      <div className="app">
          <input type="text" onChange={this.handleChange} id="site-search-input" name="search" required placeholder="enter what are you want... "/>
          <button onClick={this.addHashtag}>Start Search</button>
                
          <SomeNote searchItems={this.state.searchItems}/>
          <buttom className="addbutton">Add new note...</buttom>
      </div>
    );
  }
}
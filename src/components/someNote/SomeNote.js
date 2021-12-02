import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import recordObj from '../../sharedData/recordObj'

export default class SomeNote extends Component {

    constructor(props) {

        super(props);
        this.getListByTag = this.getListByTag.bind(this);
      }

    getListByTag() {

        const tags = this.props.byTags;
        const items = this.props.searchItems;
        const newItemList = [];

        items.map((item, i) => { 
            const even = (element) => tags.includes(element);
            if (item.hashtag.some(even)) {
                newItemList.push(item);
            }
        })

        return newItemList;
    }

    render() {
        
        const items = this.props.searchItems;
        const tags = this.props.byTags;
        
        if(!tags) {
            return (
                <div class="note-template">
                    <ul className="some-template">
                        {items.map(item => (
                            <li key={item.id}>
                                <Link onClick={() => {
                                    recordObj.name = item.name;
                                    recordObj.hashtag = item.hashtag;
                                    recordObj.text = item.text;
                                    recordObj.id = item.id;
                                }} to="/note">
                                    <h2>{item.name}</h2>
                                    <p>{item.hashtag.map(item => { return `#${item} ` })}</p>
                                    <p>{item.text}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            const correctList = this.getListByTag ();
            return (
            <div class="note-template">
                <ul className="some-template">
                    {correctList.map(item => (
                        <li key={item.id}>
                            <Link onClick={() => {
                                recordObj.name = item.name;
                                recordObj.hashtag = item.hashtag;
                                recordObj.text = item.text;
                            }} to="/note">
                                <h2>{item.name}</h2>
                                <p>{item.hashtag.map(item => { return `#${item} ` })}</p>
                                <p>{item.text}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }} 
}
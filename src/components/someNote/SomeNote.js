import React, { Component } from 'react';
import data from '../../sharedData/data.json';
import { Link } from 'react-router-dom';
import recordObj from '../../sharedData/recordObj'
export default class SomeNote extends Component {

    render() {
        return (
            <div class="note-template">
                <ul className="some-template">
                    {data.map(item => (
                        <li key={item.id}>
                            <Link onClick={() => {
                                recordObj.name = item.name;
                                recordObj.hashtag = item.hashtag;
                                recordObj.text = item.text;
                            }} to="/note">
                                <h2>{item.name}</h2>
                                <p>{item.hashtag.map(item=> { return `#${item} `})}</p>
                                <p>{item.text}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
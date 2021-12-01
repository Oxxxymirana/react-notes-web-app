import React from 'react';


export default class SearchFromTheSite extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchItems: undefined,
        };
    }
    getSiteInfo = (e) => {
       
        getRequest(searchURL).then(
            (result) => {
                this.setState({
                    searchItems: result,
                });
            },
        )
    };

    render() {
        return (
            <div id="search-news">
                <form onSubmit={this.getSiteInfo} id="search-site">
                 
                 
                  
                </form>
              
            </div>
        );
    }
}
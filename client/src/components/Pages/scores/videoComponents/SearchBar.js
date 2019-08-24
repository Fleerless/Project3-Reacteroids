import React, { Component } from "react";



class SearchBar extends Component {
    state = {
        searchTerm: ""

    }

    handleInputChange = event => {
        
        this.setState({ searchTerm: event.target.value });
        
        this.props.searchYouTube(event.target.value);
    }

    render() {
        return (
            <form   className ="searchHolder" onSubmit={event => event.preventDefault() }>
                <label >
                   <p>Use the search field below to find videos on various Asteroids versions over the years:</p>
                   <ul>
                       <li>Asteroids Deluxe 1981 </li>
                       <li>Space Duel 1982 </li>
                       <li>Blasteroids 1987 </li>
                       <li>Asteroids 1979 </li>

                           </ul> 
                    <input
                  
                        type="text"
                        placeholder="SEARCH FIELD"
                        name="youtubeSearch"
                        id="youtubeSearch"
                        value={this.state.searchTerm}
                        onChange={this.handleInputChange}
                    />
                </label>
            </form>
        )
    }
}



export default SearchBar;
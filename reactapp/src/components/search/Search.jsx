import React, {Component} from 'react';

function Search() {
    return (
        <div class="container">
            <input type="text" class="searchas" placeholder="Who do you seek?"></input>
                <button class="submit" id="searching">Search</button>
        </div>
    );
}

export default Search;
import React from 'react';

import './search-box.style.css';

export const SearchBox = ( { placeholder, handleChange } ) => {
    return(
    <div className='searchbox-holder'>
    <input
        className ='search'
        type = 'search'
        placeholder = { placeholder }
        onChange = { handleChange }
    ></input>
    </div>
    );
}
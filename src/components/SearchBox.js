import React from 'react';

const SearchBox = ({ searchField, searchChange}) => {
    return (
        <div className='pa3'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                aria-label='Search Robots'
                type='search'
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
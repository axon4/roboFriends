import React from 'react';

interface ISearchBoxProps {
    searchChange(event:React.SyntheticEvent<HTMLInputElement>):void
};

const SearchBox = ({ searchChange }:ISearchBoxProps) => {
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
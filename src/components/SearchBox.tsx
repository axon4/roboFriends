import React from 'react';

interface ISearchBoxProps {
	searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
};

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
	return (
		<div className='pa3'>
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='Search Robots'
				onChange={searchChange}
				aria-label='Search Robots'
			/>
		</div>
	);
};

export default SearchBox;
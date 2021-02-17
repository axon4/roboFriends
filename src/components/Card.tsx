import React from 'react';

interface CardStateLessProps {
	ID: string;
	name: string;
	eMail: string;
};

const Card: React.SFC<CardStateLessProps> = ({ ID, name, eMail }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${ID}?size=200x200`} alt='Robots' />
			<div>
				<h2>{name}</h2>
				<p>{eMail}</p>
			</div>
		</div>
	);
};

export default Card;
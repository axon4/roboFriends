import React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App';

const CardList = ({ robots }: { robots: Array<IRobot> }) => {
	return (
		<div>
			{
				robots.map((user, i) => {
					return (
						<Card
							key={robots[i].ID}
							ID={robots[i].ID}
							name={robots[i].name}
							eMail={robots[i].eMail}
						/>
					);
				})
			}
		</div>
	);
};

export default CardList;
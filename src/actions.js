import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchField = text => ({
	type: CHANGE_SEARCH_FIELD,
	payLoad: text
});

export const requestRobots = () => dispatch => {
	dispatch({type: REQUEST_ROBOTS_PENDING});

	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {
			const payLoad = users.map(user => ({
				ID: user.id,
				name: user.name,
				userName: user.username,
				eMail: user.email
			}));

			dispatch({type: REQUEST_ROBOTS_SUCCESS, payLoad: payLoad});
		})
		.catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payLoad: error}));
};
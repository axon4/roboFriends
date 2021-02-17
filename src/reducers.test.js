import * as reducers from './reducers';
import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants';

describe('searchRobots', () => {
	it('return the initial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''});
	});

	const mockInitialStateSearch = {searchField: ''};

	it('change search field', () => {
		expect(reducers.searchRobots(mockInitialStateSearch, {
			type: CHANGE_SEARCH_FIELD,
			payLoad: 'Copper-CookWare'
		}))
			.toEqual({searchField: 'Copper-CookWare'});
	});
});

describe('requestRobots', () => {
	const mockInitialStateRobots = {
		robots: [],
		isPending: false,
		error: ''
	};

	it('return the initial state', () => {
		expect(reducers.requestRobots(undefined, {})).toEqual(mockInitialStateRobots);
	});

	it('handle pending robot requests', () => {
		expect(reducers.requestRobots(mockInitialStateRobots, {type: REQUEST_ROBOTS_PENDING}))
			.toEqual({
				robots: [],
				isPending: true,
				error: ''
			});
	});

	it('handle successful robot requests', () => {
		expect(reducers.requestRobots(mockInitialStateRobots, {
			type: REQUEST_ROBOTS_SUCCESS,
			payLoad: [{
				ID: 7,
				name: 'Jason',
				eMail: 'jas@gmail.com'
			}]
		}))
			.toEqual({
				robots: [{
					ID: 7,
					name: 'Jason',
					eMail: 'jas@gmail.com'
				}],
				isPending: false,
				error: ''
			});
	});

	it('handle failed robot requests', () => {
		expect(reducers.requestRobots(mockInitialStateRobots, {
			type: REQUEST_ROBOTS_FAILED,
			payLoad: 'FAILURE FETCHING ROBOTS'
		}))
			.toEqual({
				robots: [],
				isPending: false,
				error: 'FAILURE FETCHING ROBOTS'
			});
	});
});
import * as reducers from './reducers';
import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED 
} from './constants';

describe('searchRobots', () => {
    it('Returns the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''});
    });

    const mockInitialStateSearch = {searchField: ''};

    it('Changes search field', () => {
        expect(reducers.searchRobots(mockInitialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'Copper Cookware'
        }))
            .toEqual({searchField: 'Copper Cookware'});
    });
});

describe('requestRobots', () => {
    const mockInitialStateRobots = {
        robots: [],
        isPending: false,
        error: ''
    };

    it('Returns the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(mockInitialStateRobots);
    });

    it('Handles pending robot requests', () => {
        expect(reducers.requestRobots(mockInitialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        }))
            .toEqual({
                robots: [],
                isPending: true,
                error: ''
            });
    });

    it('Handles successful robot requests', () => {
        expect(reducers.requestRobots(mockInitialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: 7,
                name: 'Jason',
                email: 'jas@gmail.com'
            }]
        }))
            .toEqual({
                robots: [{
                    id: 7,
                    name: 'Jason',
                    email: 'jas@gmail.com'
                }],
                isPending: false,
                error: ''
            });
    });

    it('Handles failed robot requests', () => {
        expect(reducers.requestRobots(mockInitialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'FAILURE FETCHING ROBOTS'
        }))
            .toEqual({
                robots: [],
                isPending: false,
                error: 'FAILURE FETCHING ROBOTS'
            });
    });
});
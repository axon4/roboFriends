import thunkMiddleware from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as actions from './actions';
import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants';

const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField', () => {
	it('create action to search robots', () => {
		const mockInput = 'LOL';
		const expectedAction = {
			type: CHANGE_SEARCH_FIELD,
			payLoad: mockInput
		};

		expect(actions.setSearchField(mockInput)).toEqual(expectedAction);
	});
});

describe('requestRobots', () => {
	it('request robots from API', () => {
		const store = mockStore();

		store.dispatch(actions.requestRobots());

		const action = store.getActions();

		expect(action[0].requestRobots()).toEqual({type: 'REQUEST_ROBOTS_PENDING'});
	});
});
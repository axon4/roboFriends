import * as actions from './actions';
import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED 
} from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField', () => {
	it('Creates action to search robots', () => {
		const mockInput = 'LOL';
		const expectedAction = {
			type: CHANGE_SEARCH_FIELD,
			payload: mockInput
		};

		expect(actions.setSearchField(mockInput)).toEqual(expectedAction);
	});
});

describe('requestRobots', () => {
	it('Requests robots from API', () => {
		const store = mockStor();
		store.dispatch(actions.requestRobots());
		const action = store.getActions();
e
		expect(action[0].requestRobots()).toEqual({type: 'REQUEST_ROBOTS_PENDING'});
	});
});
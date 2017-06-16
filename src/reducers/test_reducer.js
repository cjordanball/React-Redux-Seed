import ActionTypes from '../actions/types';

const INITIAL_STATE = {
	property: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case ActionTypes.TEST_FUNCTION:
		return { ...state, property: action.payload };
	default:
		return state;
	}
};

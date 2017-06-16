import { combineReducers } from 'redux';
// uncomment if using redux-form;
// import { reducer as formReducer } from 'redux-form';
import TestReducer from './test_reducer';

const rootReducer = combineReducers({
	// form: formReducer,
	test: TestReducer,
});

export default rootReducer;

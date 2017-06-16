import axios from 'axios';
import ActionTypes from './types';

export function testFunc() {
	return (dispatch) => {
		axios.get(`${Config.API_PATH}/`)
			.then((res) => {
				dispatch({ type: ActionTypes.TEST_FUNCTION, payload: res.data.hi });
			})
			.catch((error) => {
				console.log('ERROR: ', error);
				dispatch(authError('Redux: Ok,  AJAX: Error'));
			});
	};
}

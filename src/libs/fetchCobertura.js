import { showSpinner, hideSpinner } from "../redux/api/actions";

export const fetchCobertura = (dispatch, url, successAction, errorAction) => {
	dispatch(showSpinner());
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			dispatch(hideSpinner());
			dispatch({
				type: successAction,
				payload: {
					send: 1,
					receive: json.value,
				},
			});
		})
		.catch((error) => {
			dispatch(hideSpinner());
			dispatch({
				type: errorAction,
			});
		});
};

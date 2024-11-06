import { showSpinner, hideSpinner } from "../redux/api/actions";

export const fetchCobertura = (dispatch, url, successAction, errorAction) => {
	dispatch(showSpinner());
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			var xUrl = new URL(url);
			var c = xUrl.searchParams.get("docu_nro");
			dispatch(hideSpinner());
			dispatch({
				type: successAction,
				payload: {
					send: 1,
					documento: c,
					receive: json,
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

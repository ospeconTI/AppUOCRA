import { GET_SUCCESS, GET_ERROR, GET_POR_DNI_SUCCESS, GET_POR_DNI_ERROR, PATCH_SUCCESS, PATCH_ERROR, UPDATE_SUCCESS, UPDATE_ERROR, ADD_SUCCESS, ADD_ERROR, ADD_DETALLE_ERROR, ADD_DETALLE_ACTUALIZAR_SUCCESS, ADD_DETALLE_ACTUALIZAR_ERROR, REMOVE_SUCCESS, REMOVE_ERROR, BLANK_GET_POR_DNI } from "./actions";

const initialState = {
	entities: null,
	timeStamp: null,
	removeTimeStamp: null,
	updateTimeStamp: null,
	addTimeStamp: null,
	errorTimeStamp: null,
	commandErrorTimeStamp: null,
	porDNI: {
		entities: null,
		timeStamp: null,
		errorTimeStamp: null,
	},
};

export const reducer = (state = initialState, action) => {
	const newState = {
		...state,
	};

	switch (action.type) {
		case GET_SUCCESS:
			newState.entities = action.payload.receive;
			newState.timeStamp = new Date().getTime();
			break;
		case GET_POR_DNI_SUCCESS:
			if (action.payload.receive && action.payload.receive.Activo) {
				newState.porDNI.entities = action.payload.receive;
			} else {
				newState.porDNI.entities = null;
			}
			newState.porDNI.timeStamp = new Date().getTime();
			break;
		case BLANK_GET_POR_DNI:
			newState.porDNI.entities = null;
			break;
		case UPDATE_SUCCESS:
			newState.updateTimeStamp = new Date().getTime();
			break;
		case PATCH_SUCCESS:
			newState.updateTimeStamp = new Date().getTime();
			break;
		case REMOVE_SUCCESS:
			newState.removeTimeStamp = new Date().getTime();
			break;
		case ADD_SUCCESS:
			newState.addTimeStamp = new Date().getTime();
			break;
		case GET_ERROR:
			newState.errorTimeStamp = new Date().getTime();
			break;
		case GET_POR_DNI_ERROR:
			newState.porDNI.entities = null;
			newState.porDNI.errorTimeStamp = new Date().getTime();
			break;
		case UPDATE_ERROR:
		case REMOVE_ERROR:
		case PATCH_ERROR:
		case ADD_ERROR:
			newState.commandErrorTimeStamp = new Date().getTime();
			break;
	}
	return newState;
};

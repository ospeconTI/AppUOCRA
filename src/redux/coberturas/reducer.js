import { GET_SUCCESS, GET_ERROR, PATCH_SUCCESS, PATCH_ERROR, UPDATE_SUCCESS, UPDATE_ERROR, ADD_SUCCESS, ADD_ERROR, REMOVE_SUCCESS, REMOVE_ERROR, EDIT, TIENE_COBERTURA, ACEPTA_CONDICIONES_COBERTURA } from "../coberturas/actions";
import { store } from "../store";

const initialState = {
	entities: null,
	timeStamp: null,
	removeTimeStamp: null,
	updateTimeStamp: null,
	addTimeStamp: null,
	errorTimeStamp: null,
	commandErrorTimeStamp: null,
	editTimeStamp: null,
	tieneCobertura: null,
	aceptaCondicionesCobertura: false,
};

export const reducer = (state = initialState, action) => {
	const newState = {
		...state,
	};

	switch (action.type) {
		case GET_SUCCESS:
			newState.entities = null;
			newState.timeStamp = new Date().getTime();
			if (action.payload.receive && action.payload.receive.length > 0) {
				newState.tieneCobertura = "N";
				var arr = [];
				for (var x = 0; x < action.payload.receive.length; x++) {
					if (action.payload.receive[x].baja_fecha == null) {
						arr.push(action.payload.receive[x]);
						if (action.payload.receive[x].docu_nro == action.payload.documento && action.payload.receive[x].Autorizado) {
							newState.tieneCobertura = "S";
						}
					}
				}
				if (arr.length > 0) {
					newState.entities = arr;
				}
			} else {
				newState.tieneCobertura = "N";
			}
			break;
		case EDIT:
			newState.editTimeStamp = new Date().getTime();
			newState.entities.currentItem = action.item;
			newState.modo = action.modo;
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
			newState.tieneCobertura = "E";
			break;
		case UPDATE_ERROR:
		case REMOVE_ERROR:
		case PATCH_ERROR:
		case ADD_ERROR:
			newState.commandErrorTimeStamp = new Date().getTime();
			break;
		case TIENE_COBERTURA:
			newState.tieneCobertura = action.tieneCobertura;
			break;
		case ACEPTA_CONDICIONES_COBERTURA:
			newState.aceptaCondicionesCobertura = action.acepta;
			break;
	}
	return newState;
};

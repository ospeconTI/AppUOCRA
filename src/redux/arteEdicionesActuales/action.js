export const GET = "[arteEdicionesActuales] GET";
export const ADD = "[arteEdicionesActuales] ADD";
export const PATCH = "[arteEdicionesActuales] PATCH";
export const UPDATE = "[arteEdicionesActuales] UPDATE";
export const REMOVE = "[arteEdicionesActuales] REMOVE";
export const EDIT = "[arteEdicionesActuales] EDIT";

export const GET_SUCCESS = "[arteEdicionesActuales] GET success";
export const ADD_SUCCESS = "[arteEdicionesActuales] ADD success";
export const PATCH_SUCCESS = "[arteEdicionesActuales] PATCH success";
export const UPDATE_SUCCESS = "[arteEdicionesActuales] UPDATE success";
export const REMOVE_SUCCESS = "[arteEdicionesActuales] REMOVE success";

export const GET_ERROR = "[arteEdicionesActuales] GET error";
export const ADD_ERROR = "[arteEdicionesActuales] ADD error";
export const PATCH_ERROR = "[arteEdicionesActuales] PATCH error";
export const UPDATE_ERROR = "[arteEdicionesActuales] UPDATE error";
export const REMOVE_ERROR = "[arteEdicionesActuales] REMOVE error";

export const get = (options) => ({
	type: GET,
	options: options,
});

export const add = (body, token) => ({
	type: ADD,
	body: body,
	token: token,
});

export const update = (id, body, token) => ({
	type: UPDATE,
	id: id,
	body: body,
	token: token,
});

export const patch = (id, body, token) => ({
	type: PATCH,
	id: id,
	body: body,
	token: token,
});

export const remove = (id, token) => ({
	type: REMOVE,
	id: id,
	token: token,
});

export const edit = (modo, item) => ({
	type: EDIT,
	item: item || {
		Descripcion: 0,
		Activo: 1,
	},
	modo: modo,
});

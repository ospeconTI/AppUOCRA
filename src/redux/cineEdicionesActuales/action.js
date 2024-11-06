export const GET = "[cineEdicionesActuales] GET";
export const ADD = "[cineEdicionesActuales] ADD";
export const PATCH = "[cineEdicionesActuales] PATCH";
export const UPDATE = "[cineEdicionesActuales] UPDATE";
export const REMOVE = "[cineEdicionesActuales] REMOVE";
export const EDIT = "[cineEdicionesActuales] EDIT";

export const GET_SUCCESS = "[cineEdicionesActuales] GET success";
export const ADD_SUCCESS = "[cineEdicionesActuales] ADD success";
export const PATCH_SUCCESS = "[cineEdicionesActuales] PATCH success";
export const UPDATE_SUCCESS = "[cineEdicionesActuales] UPDATE success";
export const REMOVE_SUCCESS = "[cineEdicionesActuales] REMOVE success";

export const GET_ERROR = "[cineEdicionesActuales] GET error";
export const ADD_ERROR = "[cineEdicionesActuales] ADD error";
export const PATCH_ERROR = "[cineEdicionesActuales] PATCH error";
export const UPDATE_ERROR = "[cineEdicionesActuales] UPDATE error";
export const REMOVE_ERROR = "[cineEdicionesActuales] REMOVE error";

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

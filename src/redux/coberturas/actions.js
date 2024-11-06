export const GET = "[coberturas] GET";
export const ADD = "[coberturas] ADD";
export const PATCH = "[coberturas] PATCH";
export const UPDATE = "[coberturas] UPDATE";
export const REMOVE = "[coberturas] REMOVE";
export const EDIT = "[coberturas] EDIT";
export const TIENE_COBERTURA = "[coberturas] TIENE_COBERTURA";
export const ACEPTA_CONDICIONES_COBERTURA = "[coberturas] ACEPTA_CONDICIONES_COBERTURA";

export const GET_SUCCESS = "[coberturas] GET success";
export const ADD_SUCCESS = "[coberturas] ADD success";
export const PATCH_SUCCESS = "[coberturas] PATCH success";
export const UPDATE_SUCCESS = "[coberturas] UPDATE success";
export const REMOVE_SUCCESS = "[coberturas] REMOVE success";

export const GET_ERROR = "[coberturas] GET error";
export const ADD_ERROR = "[coberturas] ADD error";
export const PATCH_ERROR = "[coberturas] PATCH error";
export const UPDATE_ERROR = "[coberturas] UPDATE error";
export const REMOVE_ERROR = "[coberturas] REMOVE error";

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

export const tieneCobertura = (cobertura) => ({
	type: TIENE_COBERTURA,
	cobertura: cobertura,
});

export const aceptaCondicionesCobertura = (acepta) => ({
	type: ACEPTA_CONDICIONES_COBERTURA,
	acepta: acepta,
});

export const GET = "[credencialDigital] GET";
export const GET_POR_DNI = "[credencialDigital] GET_POR_DNI";
export const BLANK_GET_POR_DNI = "[credencialDigital] BLANK_GET_POR_DNI";
export const ADD = "[credencialDigital] ADD";
export const PATCH = "[credencialDigital] PATCH";
export const UPDATE = "[credencialDigital] UPDATE";
export const REMOVE = "[credencialDigital] REMOVE";

export const GET_SUCCESS = "[credencialDigital] GET success";
export const GET_POR_DNI_SUCCESS = "[credencialDigital]GET_POR_DNI success";
export const ADD_SUCCESS = "[credencialDigital] ADD success";
export const PATCH_SUCCESS = "[credencialDigital] PATCH success";
export const UPDATE_SUCCESS = "[credencialDigital] UPDATE success";
export const REMOVE_SUCCESS = "[credencialDigital] REMOVE success";

export const GET_ERROR = "[credencialDigital] GET error";
export const GET_POR_DNI_ERROR = "[credencialDigital] GET_POR_DNI error";
export const ADD_ERROR = "[credencialDigital] ADD error";
export const PATCH_ERROR = "[credencialDigital] PATCH error";
export const UPDATE_ERROR = "[credencialDigital] UPDATE error";
export const REMOVE_ERROR = "[credencialDigital] REMOVE error";

export const get = (options) => ({
	type: GET,
	options: options,
});

export const get_por_dni = (dni) => ({
	type: GET_POR_DNI,
	dni: dni,
});

export const blank_get_por_dni = () => ({
	type: BLANK_GET_POR_DNI,
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

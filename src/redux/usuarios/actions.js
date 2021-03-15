export const GET = "[usuarios] GET";
export const ADD = "[usuarios] ADD";
export const PATCH = "[usuarios] PATCH";
export const UPDATE = "[usuarios] UPDATE";
export const REMOVE = "[usuarios] REMOVE";

export const GET_SUCCESS = "[usuarios] GET success";
export const ADD_SUCCESS = "[usuarios] ADD success";
export const PATCH_SUCCESS = "[usuarios] PATCH success";
export const UPDATE_SUCCESS = "[usuarios] UPDATE success";
export const REMOVE_SUCCESS = "[usuarios] REMOVE success";

export const GET_ERROR = "[usuarios] GET error";
export const ADD_ERROR = "[usuarios] ADD error";
export const PATCH_ERROR = "[usuarios] PATCH error";
export const UPDATE_ERROR = "[usuarios] UPDATE error";
export const REMOVE_ERROR = "[usuarios] REMOVE error";

export const USUARIO = "[usuarios] USUARIO error";

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

export const usuario = (registro) => ({
	type: USUARIO,
	registro: registro,
});
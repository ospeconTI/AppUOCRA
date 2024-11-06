export const GET = "[podcast] GET";
export const ADD = "[podcast] ADD";
export const PATCH = "[podcast] PATCH";
export const UPDATE = "[podcast] UPDATE";
export const REMOVE = "[podcast] REMOVE";
export const EDIT = "[podcast] EDIT";

export const GET_SUCCESS = "[podcast] GET success";
export const ADD_SUCCESS = "[podcast] ADD success";
export const PATCH_SUCCESS = "[podcast] PATCH success";
export const UPDATE_SUCCESS = "[podcast] UPDATE success";
export const REMOVE_SUCCESS = "[podcast] REMOVE success";

export const GET_ERROR = "[podcast] GET error";
export const ADD_ERROR = "[podcast] ADD error";
export const PATCH_ERROR = "[podcast] PATCH error";
export const UPDATE_ERROR = "[podcast] UPDATE error";
export const REMOVE_ERROR = "[podcast] REMOVE error";

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

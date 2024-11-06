export const GET = "[afiliacionSindical] GET";
export const ADD = "[afiliacionSindical] ADD";
export const PATCH = "[afiliacionSindical] PATCH";
export const UPDATE = "[afiliacionSindical] UPDATE";
export const REMOVE = "[afiliacionSindical] REMOVE";
export const EDIT = "[afiliacionSindical] EDIT";

export const GET_SUCCESS = "[afiliacionSindical] GET success";
export const ADD_SUCCESS = "[afiliacionSindical] ADD success";
export const PATCH_SUCCESS = "[afiliacionSindical] PATCH success";
export const UPDATE_SUCCESS = "[afiliacionSindical] UPDATE success";
export const REMOVE_SUCCESS = "[afiliacionSindical] REMOVE success";

export const GET_ERROR = "[afiliacionSindical] GET error";
export const ADD_ERROR = "[afiliacionSindical] ADD error";
export const PATCH_ERROR = "[afiliacionSindical] PATCH error";
export const UPDATE_ERROR = "[afiliacionSindical] UPDATE error";
export const REMOVE_ERROR = "[afiliacionSindical] REMOVE error";

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

export const GET = "[provincias] GET";
export const ADD = "[provincias] ADD";
export const PATCH = "[provincias] PATCH";
export const UPDATE = "[provincias] UPDATE";
export const REMOVE = "[provincias] REMOVE";
export const EDIT = "[provincias] EDIT"

export const GET_SUCCESS = "[provincias] GET success";
export const ADD_SUCCESS = "[provincias] ADD success";
export const PATCH_SUCCESS = "[provincias] PATCH success";
export const UPDATE_SUCCESS = "[provincias] UPDATE success";
export const REMOVE_SUCCESS = "[provincias] REMOVE success";

export const GET_ERROR = "[provincias] GET error";
export const ADD_ERROR = "[provincias] ADD error";
export const PATCH_ERROR = "[provincias] PATCH error";
export const UPDATE_ERROR = "[provincias] UPDATE error";
export const REMOVE_ERROR = "[provincias] REMOVE error";




export const get = (options) => ({
    type: GET,
    options: options
});

export const add = (body, token) => ({
    type: ADD,
    body: body,
    token: token
});

export const update = (id, body, token) => ({
    type: UPDATE,
    id: id,
    body: body,
    token: token
});

export const patch = (id, body, token) => ({
    type: PATCH,
    id: id,
    body: body,
    token: token
});

export const remove = (id, token) => ({
    type: REMOVE,
    id: id,
    token: token
});

export const edit = (modo, item) => ({
    type: EDIT,
    item: item || {
        Descripcion: 0,
        Activo: 1
    },
    modo: modo,
})
export const GET = "[servicios] GET";
export const ADD = "[servicios] ADD";
export const PATCH = "[servicios] PATCH";
export const UPDATE = "[servicios] UPDATE";
export const REMOVE = "[servicios] REMOVE";
export const EDIT = "[servicios] EDIT"

export const GET_SUCCESS = "[servicios] GET success";
export const ADD_SUCCESS = "[servicios] ADD success";
export const PATCH_SUCCESS = "[servicios] PATCH success";
export const UPDATE_SUCCESS = "[servicios] UPDATE success";
export const REMOVE_SUCCESS = "[servicios] REMOVE success";

export const GET_ERROR = "[servicios] GET error";
export const ADD_ERROR = "[servicios] ADD error";
export const PATCH_ERROR = "[servicios] PATCH error";
export const UPDATE_ERROR = "[servicios] UPDATE error";
export const REMOVE_ERROR = "[servicios] REMOVE error";




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
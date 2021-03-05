export const GET = "[convenios] GET";
export const ADD = "[convenios] ADD";
export const PATCH = "[convenios] PATCH";
export const UPDATE = "[convenios] UPDATE";
export const REMOVE = "[convenios] REMOVE";
export const EDIT = "[convenios] EDIT"

export const GET_SUCCESS = "[convenios] GET success";
export const ADD_SUCCESS = "[convenios] ADD success";
export const PATCH_SUCCESS = "[convenios] PATCH success";
export const UPDATE_SUCCESS = "[convenios] UPDATE success";
export const REMOVE_SUCCESS = "[convenios] REMOVE success";

export const GET_ERROR = "[convenios] GET error";
export const ADD_ERROR = "[convenios] ADD error";
export const PATCH_ERROR = "[convenios] PATCH error";
export const UPDATE_ERROR = "[convenios] UPDATE error";
export const REMOVE_ERROR = "[convenios] REMOVE error";




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
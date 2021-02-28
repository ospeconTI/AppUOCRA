export const GET = "[zonas] GET";
export const ADD = "[zonas] ADD";
export const PATCH = "[zonas] PATCH";
export const UPDATE = "[zonas] UPDATE";
export const REMOVE = "[zonas] REMOVE";
export const EDIT = "[zonas] EDIT"

export const GET_SUCCESS = "[zonas] GET success";
export const ADD_SUCCESS = "[zonas] ADD success";
export const PATCH_SUCCESS = "[zonas] PATCH success";
export const UPDATE_SUCCESS = "[zonas] UPDATE success";
export const REMOVE_SUCCESS = "[zonas] REMOVE success";

export const GET_ERROR = "[zonas] GET error";
export const ADD_ERROR = "[zonas] ADD error";
export const PATCH_ERROR = "[zonas] PATCH error";
export const UPDATE_ERROR = "[zonas] UPDATE error";
export const REMOVE_ERROR = "[zonas] REMOVE error";




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
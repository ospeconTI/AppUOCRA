export const GET = "[menues] GET";
export const ADD = "[menues] ADD";
export const PATCH = "[menues] PATCH";
export const UPDATE = "[menues] UPDATE";
export const REMOVE = "[menues] REMOVE";
export const EDIT = "[menues] EDIT"

export const GET_SUCCESS = "[menues] GET success";
export const ADD_SUCCESS = "[menues] ADD success";
export const PATCH_SUCCESS = "[menues] PATCH success";
export const UPDATE_SUCCESS = "[menues] UPDATE success";
export const REMOVE_SUCCESS = "[menues] REMOVE success";

export const GET_ERROR = "[menues] GET error";
export const ADD_ERROR = "[menues] ADD error";
export const PATCH_ERROR = "[menues] PATCH error";
export const UPDATE_ERROR = "[menues] UPDATE error";
export const REMOVE_ERROR = "[menues] REMOVE error";




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
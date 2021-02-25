export const GET = "[titulos] GET";
export const ADD = "[titulos] ADD";
export const PATCH = "[titulos] PATCH";
export const UPDATE = "[titulos] UPDATE";
export const REMOVE = "[titulos] REMOVE";
export const EDIT = "[titulos] EDIT"

export const GET_SUCCESS = "[titulos] GET success";
export const ADD_SUCCESS = "[titulos] ADD success";
export const PATCH_SUCCESS = "[titulos] PATCH success";
export const UPDATE_SUCCESS = "[titulos] UPDATE success";
export const REMOVE_SUCCESS = "[titulos] REMOVE success";

export const GET_ERROR = "[titulos] GET error";
export const ADD_ERROR = "[titulos] ADD error";
export const PATCH_ERROR = "[titulos] PATCH error";
export const UPDATE_ERROR = "[titulos] UPDATE error";
export const REMOVE_ERROR = "[titulos] REMOVE error";




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
export const GET = "[leyendas] GET";
export const ADD = "[leyendas] ADD";
export const PATCH = "[leyendas] PATCH";
export const UPDATE = "[leyendas] UPDATE";
export const REMOVE = "[leyendas] REMOVE";
export const EDIT = "[leyendas] EDIT"

export const GET_SUCCESS = "[leyendas] GET success";
export const ADD_SUCCESS = "[leyendas] ADD success";
export const PATCH_SUCCESS = "[leyendas] PATCH success";
export const UPDATE_SUCCESS = "[leyendas] UPDATE success";
export const REMOVE_SUCCESS = "[leyendas] REMOVE success";

export const GET_ERROR = "[leyendas] GET error";
export const ADD_ERROR = "[leyendas] ADD error";
export const PATCH_ERROR = "[leyendas] PATCH error";
export const UPDATE_ERROR = "[leyendas] UPDATE error";
export const REMOVE_ERROR = "[leyendas] REMOVE error";




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
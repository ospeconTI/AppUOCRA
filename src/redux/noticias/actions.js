export const GET = "[noticias] GET";
export const ADD = "[noticias] ADD";
export const PATCH = "[noticias] PATCH";
export const UPDATE = "[noticias] UPDATE";
export const REMOVE = "[noticias] REMOVE";
export const EDIT = "[noticias] EDIT"

export const GET_SUCCESS = "[noticias] GET success";
export const ADD_SUCCESS = "[noticias] ADD success";
export const PATCH_SUCCESS = "[noticias] PATCH success";
export const UPDATE_SUCCESS = "[noticias] UPDATE success";
export const REMOVE_SUCCESS = "[noticias] REMOVE success";

export const GET_ERROR = "[noticias] GET error";
export const ADD_ERROR = "[noticias] ADD error";
export const PATCH_ERROR = "[noticias] PATCH error";
export const UPDATE_ERROR = "[noticias] UPDATE error";
export const REMOVE_ERROR = "[noticias] REMOVE error";




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
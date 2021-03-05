export const GET = "[localidades] GET";
export const ADD = "[localidades] ADD";
export const PATCH = "[localidades] PATCH";
export const UPDATE = "[localidades] UPDATE";
export const REMOVE = "[localidades] REMOVE";
export const EDIT = "[localidades] EDIT"

export const GET_SUCCESS = "[localidades] GET success";
export const ADD_SUCCESS = "[localidades] ADD success";
export const PATCH_SUCCESS = "[localidades] PATCH success";
export const UPDATE_SUCCESS = "[localidades] UPDATE success";
export const REMOVE_SUCCESS = "[localidades] REMOVE success";

export const GET_ERROR = "[localidades] GET error";
export const ADD_ERROR = "[localidades] ADD error";
export const PATCH_ERROR = "[localidades] PATCH error";
export const UPDATE_ERROR = "[localidades] UPDATE error";
export const REMOVE_ERROR = "[localidades] REMOVE error";

export const SELECCION = "[localidades] SELECCION";


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

export const seleccion = (registro) => ({
    type: SELECCION,
    registro: registro
});
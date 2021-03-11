export const GET = "[hoteles] GET";
export const ADD = "[hoteles] ADD";
export const PATCH = "[hoteles] PATCH";
export const UPDATE = "[hoteles] UPDATE";
export const REMOVE = "[hoteles] REMOVE";
export const EDIT = "[hoteles] EDIT"
export const HOTEL = "[hoteles] HOTEL"

export const GET_SUCCESS = "[hoteles] GET success";
export const ADD_SUCCESS = "[hoteles] ADD success";
export const PATCH_SUCCESS = "[hoteles] PATCH success";
export const UPDATE_SUCCESS = "[hoteles] UPDATE success";
export const REMOVE_SUCCESS = "[hoteles] REMOVE success";

export const GET_ERROR = "[hoteles] GET error";
export const ADD_ERROR = "[hoteles] ADD error";
export const PATCH_ERROR = "[hoteles] PATCH error";
export const UPDATE_ERROR = "[hoteles] UPDATE error";
export const REMOVE_ERROR = "[hoteles] REMOVE error";




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

export const hotel = (registro) => ({
    type: HOTEL,
    registro: registro,
})
export const GET = "[teatroObras] GET";
export const ADD = "[teatroObras] ADD";
export const PATCH = "[teatroObras] PATCH";
export const UPDATE = "[teatroObras] UPDATE";
export const REMOVE = "[teatroObras] REMOVE";
export const EDIT = "[teatroObras] EDIT"
export const TEATROOBRA = "[teatroObras] HOTEL"

export const GET_SUCCESS = "[teatroObras] GET success";
export const ADD_SUCCESS = "[teatroObras] ADD success";
export const PATCH_SUCCESS = "[teatroObras] PATCH success";
export const UPDATE_SUCCESS = "[teatroObras] UPDATE success";
export const REMOVE_SUCCESS = "[teatroObras] REMOVE success";

export const GET_ERROR = "[teatroObras] GET error";
export const ADD_ERROR = "[teatroObras] ADD error";
export const PATCH_ERROR = "[teatroObras] PATCH error";
export const UPDATE_ERROR = "[teatroObras] UPDATE error";
export const REMOVE_ERROR = "[teatroObras] REMOVE error";




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

export const teatroObra = (registro) => ({
    type: TEATROOBRA,
    registro: registro,
})
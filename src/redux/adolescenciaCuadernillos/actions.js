export const GET = "[adolescenciaCuadernillos] GET";
export const ADD = "[adolescenciaCuadernillos] ADD";
export const PATCH = "[adolescenciaCuadernillos] PATCH";
export const UPDATE = "[adolescenciaCuadernillos] UPDATE";
export const REMOVE = "[adolescenciaCuadernillos] REMOVE";
export const EDIT = "[adolescenciaCuadernillos] EDIT"

export const GET_SUCCESS = "[adolescenciaCuadernillos] GET success";
export const ADD_SUCCESS = "[adolescenciaCuadernillos] ADD success";
export const PATCH_SUCCESS = "[adolescenciaCuadernillos] PATCH success";
export const UPDATE_SUCCESS = "[adolescenciaCuadernillos] UPDATE success";
export const REMOVE_SUCCESS = "[adolescenciaCuadernillos] REMOVE success";

export const GET_ERROR = "[adolescenciaCuadernillos] GET error";
export const ADD_ERROR = "[adolescenciaCuadernillos] ADD error";
export const PATCH_ERROR = "[adolescenciaCuadernillos] PATCH error";
export const UPDATE_ERROR = "[adolescenciaCuadernillos] UPDATE error";
export const REMOVE_ERROR = "[adolescenciaCuadernillos] REMOVE error";




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
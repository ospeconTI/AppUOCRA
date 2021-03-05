export const GET = "[edicionesAnteriores] GET";
export const ADD = "[edicionesAnteriores] ADD";
export const PATCH = "[edicionesAnteriores] PATCH";
export const UPDATE = "[edicionesAnteriores] UPDATE";
export const REMOVE = "[edicionesAnteriores] REMOVE";
export const EDIT = "[edicionesAnteriores] EDIT"

export const GET_SUCCESS = "[edicionesAnteriores] GET success";
export const ADD_SUCCESS = "[edicionesAnteriores] ADD success";
export const PATCH_SUCCESS = "[edicionesAnteriores] PATCH success";
export const UPDATE_SUCCESS = "[edicionesAnteriores] UPDATE success";
export const REMOVE_SUCCESS = "[edicionesAnteriores] REMOVE success";

export const GET_ERROR = "[edicionesAnteriores] GET error";
export const ADD_ERROR = "[edicionesAnteriores] ADD error";
export const PATCH_ERROR = "[edicionesAnteriores] PATCH error";
export const UPDATE_ERROR = "[edicionesAnteriores] UPDATE error";
export const REMOVE_ERROR = "[edicionesAnteriores] REMOVE error";




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
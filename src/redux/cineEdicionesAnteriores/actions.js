export const GET = "[cineEdicionesAnteriores] GET";
export const ADD = "[cineEdicionesAnteriores] ADD";
export const PATCH = "[cineEdicionesAnteriores] PATCH";
export const UPDATE = "[cineEdicionesAnteriores] UPDATE";
export const REMOVE = "[cineEdicionesAnteriores] REMOVE";
export const EDIT = "[cineEdicionesAnteriores] EDIT"

export const GET_SUCCESS = "[cineEdicionesAnteriores] GET success";
export const ADD_SUCCESS = "[cineEdicionesAnteriores] ADD success";
export const PATCH_SUCCESS = "[cineEdicionesAnteriores] PATCH success";
export const UPDATE_SUCCESS = "[cineEdicionesAnteriores] UPDATE success";
export const REMOVE_SUCCESS = "[cineEdicionesAnteriores] REMOVE success";

export const GET_ERROR = "[cineEdicionesAnteriores] GET error";
export const ADD_ERROR = "[cineEdicionesAnteriores] ADD error";
export const PATCH_ERROR = "[cineEdicionesAnteriores] PATCH error";
export const UPDATE_ERROR = "[cineEdicionesAnteriores] UPDATE error";
export const REMOVE_ERROR = "[cineEdicionesAnteriores] REMOVE error";


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
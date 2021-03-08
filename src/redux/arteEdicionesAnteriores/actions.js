export const GET = "[arteEdicionesAnteriores] GET";
export const ADD = "[arteEdicionesAnteriores] ADD";
export const PATCH = "[arteEdicionesAnteriores] PATCH";
export const UPDATE = "[arteEdicionesAnteriores] UPDATE";
export const REMOVE = "[arteEdicionesAnteriores] REMOVE";
export const EDIT = "[arteEdicionesAnteriores] EDIT"

export const GET_SUCCESS = "[arteEdicionesAnteriores] GET success";
export const ADD_SUCCESS = "[arteEdicionesAnteriores] ADD success";
export const PATCH_SUCCESS = "[arteEdicionesAnteriores] PATCH success";
export const UPDATE_SUCCESS = "[arteEdicionesAnteriores] UPDATE success";
export const REMOVE_SUCCESS = "[arteEdicionesAnteriores] REMOVE success";

export const GET_ERROR = "[arteEdicionesAnteriores] GET error";
export const ADD_ERROR = "[arteEdicionesAnteriores] ADD error";
export const PATCH_ERROR = "[arteEdicionesAnteriores] PATCH error";
export const UPDATE_ERROR = "[arteEdicionesAnteriores] UPDATE error";
export const REMOVE_ERROR = "[arteEdicionesAnteriores] REMOVE error";




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
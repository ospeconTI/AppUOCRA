export const GET = "[tvGrilla] GET";
export const ADD = "[tvGrilla] ADD";
export const PATCH = "[tvGrilla] PATCH";
export const UPDATE = "[tvGrilla] UPDATE";
export const REMOVE = "[tvGrilla] REMOVE";
export const EDIT = "[tvGrilla] EDIT"

export const GET_SUCCESS = "[tvGrilla] GET success";
export const ADD_SUCCESS = "[tvGrilla] ADD success";
export const PATCH_SUCCESS = "[tvGrilla] PATCH success";
export const UPDATE_SUCCESS = "[tvGrilla] UPDATE success";
export const REMOVE_SUCCESS = "[tvGrilla] REMOVE success";

export const GET_ERROR = "[tvGrilla] GET error";
export const ADD_ERROR = "[tvGrilla] ADD error";
export const PATCH_ERROR = "[tvGrilla] PATCH error";
export const UPDATE_ERROR = "[tvGrilla] UPDATE error";
export const REMOVE_ERROR = "[tvGrilla] REMOVE error";




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
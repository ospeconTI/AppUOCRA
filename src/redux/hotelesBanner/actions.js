export const GET = "[hotelesBanner] GET";
export const ADD = "[hotelesBanner] ADD";
export const PATCH = "[hotelesBanner] PATCH";
export const UPDATE = "[hotelesBanner] UPDATE";
export const REMOVE = "[hotelesBanner] REMOVE";
export const EDIT = "[hotelesBanner] EDIT"

export const GET_SUCCESS = "[hotelesBanner] GET success";
export const ADD_SUCCESS = "[hotelesBanner] ADD success";
export const PATCH_SUCCESS = "[hotelesBanner] PATCH success";
export const UPDATE_SUCCESS = "[hotelesBanner] UPDATE success";
export const REMOVE_SUCCESS = "[hotelesBanner] REMOVE success";

export const GET_ERROR = "[hotelesBanner] GET error";
export const ADD_ERROR = "[hotelesBanner] ADD error";
export const PATCH_ERROR = "[hotelesBanner] PATCH error";
export const UPDATE_ERROR = "[hotelesBanner] UPDATE error";
export const REMOVE_ERROR = "[hotelesBanner] REMOVE error";




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
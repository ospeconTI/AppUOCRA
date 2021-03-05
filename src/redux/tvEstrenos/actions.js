export const GET = "[tvEstrenos] GET";
export const ADD = "[tvEstrenos] ADD";
export const PATCH = "[tvEstrenos] PATCH";
export const UPDATE = "[tvEstrenos] UPDATE";
export const REMOVE = "[tvEstrenos] REMOVE";
export const EDIT = "[tvEstrenos] EDIT"

export const GET_SUCCESS = "[tvEstrenos] GET success";
export const ADD_SUCCESS = "[tvEstrenos] ADD success";
export const PATCH_SUCCESS = "[tvEstrenos] PATCH success";
export const UPDATE_SUCCESS = "[tvEstrenos] UPDATE success";
export const REMOVE_SUCCESS = "[tvEstrenos] REMOVE success";

export const GET_ERROR = "[tvEstrenos] GET error";
export const ADD_ERROR = "[tvEstrenos] ADD error";
export const PATCH_ERROR = "[tvEstrenos] PATCH error";
export const UPDATE_ERROR = "[tvEstrenos] UPDATE error";
export const REMOVE_ERROR = "[tvEstrenos] REMOVE error";




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
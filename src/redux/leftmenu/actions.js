export const GET = "[leftmenu] GET";
export const ADD = "[leftmenu] ADD";
export const PATCH = "[leftmenu] PATCH";
export const UPDATE = "[leftmenu] UPDATE";
export const REMOVE = "[leftmenu] REMOVE";
export const EDIT = "[leftmenu] EDIT"

export const GET_SUCCESS = "[leftmenu] GET success";
export const ADD_SUCCESS = "[leftmenu] ADD success";
export const PATCH_SUCCESS = "[leftmenu] PATCH success";
export const UPDATE_SUCCESS = "[leftmenu] UPDATE success";
export const REMOVE_SUCCESS = "[leftmenu] REMOVE success";

export const GET_ERROR = "[leftmenu] GET error";
export const ADD_ERROR = "[leftmenu] ADD error";
export const PATCH_ERROR = "[leftmenu] PATCH error";
export const UPDATE_ERROR = "[leftmenu] UPDATE error";
export const REMOVE_ERROR = "[leftmenu] REMOVE error";




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
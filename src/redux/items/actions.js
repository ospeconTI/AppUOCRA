export const GET = "[items] GET";
export const ADD = "[items] ADD";
export const PATCH = "[items] PATCH";
export const UPDATE = "[items] UPDATE";
export const REMOVE = "[items] REMOVE";
export const EDIT = "[items] EDIT"

export const GET_SUCCESS = "[items] GET success";
export const ADD_SUCCESS = "[items] ADD success";
export const PATCH_SUCCESS = "[items] PATCH success";
export const UPDATE_SUCCESS = "[items] UPDATE success";
export const REMOVE_SUCCESS = "[items] REMOVE success";

export const GET_ERROR = "[items] GET error";
export const ADD_ERROR = "[items] ADD error";
export const PATCH_ERROR = "[items] PATCH error";
export const UPDATE_ERROR = "[items] UPDATE error";
export const REMOVE_ERROR = "[items] REMOVE error";
export const BOTON_ITEM = "[items] BOTON_ITEM";




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

export const botonItem = (accion, parametro) => ({
    type: BOTON_ITEM,
    accion: accion,
    parametro: parametro,
})
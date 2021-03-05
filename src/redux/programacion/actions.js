export const GET = "[programacion] GET";
export const ADD = "[programacion] ADD";
export const PATCH = "[programacion] PATCH";
export const UPDATE = "[programacion] UPDATE";
export const REMOVE = "[programacion] REMOVE";
export const EDIT = "[programacion] EDIT"
export const RESERVA = "[programacion] RESERVA";

export const GET_SUCCESS = "[programacion] GET success";
export const ADD_SUCCESS = "[programacion] ADD success";
export const PATCH_SUCCESS = "[programacion] PATCH success";
export const UPDATE_SUCCESS = "[programacion] UPDATE success";
export const REMOVE_SUCCESS = "[programacion] REMOVE success";

export const GET_ERROR = "[programacion] GET error";
export const ADD_ERROR = "[programacion] ADD error";
export const PATCH_ERROR = "[programacion] PATCH error";
export const UPDATE_ERROR = "[programacion] UPDATE error";
export const REMOVE_ERROR = "[programacion] REMOVE error";

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

export const reserva = (registro) => ({
    type: RESERVA,
    registro: registro
});

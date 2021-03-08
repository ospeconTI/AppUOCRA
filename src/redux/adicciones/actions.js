export const GET = "[adicciones] GET";
export const ADD = "[adicciones] ADD";
export const PATCH = "[adicciones] PATCH";
export const UPDATE = "[adicciones] UPDATE";
export const REMOVE = "[adicciones] REMOVE";
export const EDIT = "[adicciones] EDIT"
export const RESERVA = "[adicciones] RESERVA";

export const GET_SUCCESS = "[adicciones] GET success";
export const ADD_SUCCESS = "[adicciones] ADD success";
export const PATCH_SUCCESS = "[adicciones] PATCH success";
export const UPDATE_SUCCESS = "[adicciones] UPDATE success";
export const REMOVE_SUCCESS = "[adicciones] REMOVE success";

export const GET_ERROR = "[adicciones] GET error";
export const ADD_ERROR = "[adicciones] ADD error";
export const PATCH_ERROR = "[adicciones] PATCH error";
export const UPDATE_ERROR = "[adicciones] UPDATE error";
export const REMOVE_ERROR = "[adicciones] REMOVE error";

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

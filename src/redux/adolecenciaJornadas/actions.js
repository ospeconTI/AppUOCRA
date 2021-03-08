export const GET = "[adolecenciaJornadas] GET";
export const ADD = "[adolecenciaJornadas] ADD";
export const PATCH = "[adolecenciaJornadas] PATCH";
export const UPDATE = "[adolecenciaJornadas] UPDATE";
export const REMOVE = "[adolecenciaJornadas] REMOVE";
export const EDIT = "[adolecenciaJornadas] EDIT"
export const RESERVA = "[adolecenciaJornadas] RESERVA";

export const GET_SUCCESS = "[adolecenciaJornadas] GET success";
export const ADD_SUCCESS = "[adolecenciaJornadas] ADD success";
export const PATCH_SUCCESS = "[adolecenciaJornadas] PATCH success";
export const UPDATE_SUCCESS = "[adolecenciaJornadas] UPDATE success";
export const REMOVE_SUCCESS = "[adolecenciaJornadas] REMOVE success";

export const GET_ERROR = "[adolecenciaJornadas] GET error";
export const ADD_ERROR = "[adolecenciaJornadas] ADD error";
export const PATCH_ERROR = "[adolecenciaJornadas] PATCH error";
export const UPDATE_ERROR = "[adolecenciaJornadas] UPDATE error";
export const REMOVE_ERROR = "[adolecenciaJornadas] REMOVE error";

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

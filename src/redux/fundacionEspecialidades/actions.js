export const GET = "[fundacionEspecialidades] GET";
export const ADD = "[fundacionEspecialidades] ADD";
export const PATCH = "[fundacionEspecialidades] PATCH";
export const UPDATE = "[fundacionEspecialidades] UPDATE";
export const REMOVE = "[fundacionEspecialidades] REMOVE";
export const EDIT = "[fundacionEspecialidades] EDIT"
export const FUNDACION_ESPECIALIDAD = "[fundacionEspecialidades] FUNDACION_ESPECIALIDAD"

export const GET_SUCCESS = "[fundacionEspecialidades] GET success";
export const ADD_SUCCESS = "[fundacionEspecialidades] ADD success";
export const PATCH_SUCCESS = "[fundacionEspecialidades] PATCH success";
export const UPDATE_SUCCESS = "[fundacionEspecialidades] UPDATE success";
export const REMOVE_SUCCESS = "[fundacionEspecialidades] REMOVE success";

export const GET_ERROR = "[fundacionEspecialidades] GET error";
export const ADD_ERROR = "[fundacionEspecialidades] ADD error";
export const PATCH_ERROR = "[fundacionEspecialidades] PATCH error";
export const UPDATE_ERROR = "[fundacionEspecialidades] UPDATE error";
export const REMOVE_ERROR = "[fundacionEspecialidades] REMOVE error";




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

export const fundacionEspecialidad = (registro) => ({
    type: FUNDACION_ESPECIALIDAD,
    registro: registro,
})
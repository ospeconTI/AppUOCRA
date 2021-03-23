export const GET = "[fundacionCentros] GET";
export const ADD = "[fundacionCentros] ADD";
export const PATCH = "[fundacionCentros] PATCH";
export const UPDATE = "[fundacionCentros] UPDATE";
export const REMOVE = "[fundacionCentros] REMOVE";
export const EDIT = "[fundacionCentros] EDIT"
export const FUNDACION_CENTRO = "[fundacionCentros] FUNDACION_CENTRO"
export const FUNDACION_CENTRO_MAPA = "[fundacionCentros] FUNDACION_CENTRO_MAPA"

export const GET_SUCCESS = "[fundacionCentros] GET success";
export const ADD_SUCCESS = "[fundacionCentros] ADD success";
export const PATCH_SUCCESS = "[fundacionCentros] PATCH success";
export const UPDATE_SUCCESS = "[fundacionCentros] UPDATE success";
export const REMOVE_SUCCESS = "[fundacionCentros] REMOVE success";
export const FUNDACION_CENTRO_MAPA_SUCCESS = "[fundacionCentros] FUNDACION_CENTRO_MAPA success";

export const GET_ERROR = "[fundacionCentros] GET error";
export const ADD_ERROR = "[fundacionCentros] ADD error";
export const PATCH_ERROR = "[fundacionCentros] PATCH error";
export const UPDATE_ERROR = "[fundacionCentros] UPDATE error";
export const REMOVE_ERROR = "[fundacionCentros] REMOVE error";
export const FUNDACION_CENTRO_MAPA_ERROR = "[fundacionCentros] FUNDACION_CENTRO_MAPA error";




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

export const fundacionCentro = (registro) => ({
    type: FUNDACION_CENTRO,
    registro: registro,
})

export const fundacionCentroMapa = (especialidad, provincia, localidad, duracion, tipoCurso) => ({
    type: FUNDACION_CENTRO_MAPA,
    especialidad: especialidad,
    provincia: provincia,
    localidad: localidad,
    duracion: duracion,
    tipoCurso: tipoCurso,
})
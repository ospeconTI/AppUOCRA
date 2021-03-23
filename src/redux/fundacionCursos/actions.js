export const GET = "[fundacionCursos] GET";
export const GETCONCENTROS = "[fundacionCursos] GETCONCENTROS";
export const ADD = "[fundacionCursos] ADD";
export const PATCH = "[fundacionCursos] PATCH";
export const UPDATE = "[fundacionCursos] UPDATE";
export const REMOVE = "[fundacionCursos] REMOVE";
export const EDIT = "[fundacionCursos] EDIT"
export const FUNDACION_CURSO = "[fundacionCursos] FUNDACION_CURSO"
export const SELECCION = "[fundacionCursos] SELECCION"

export const GET_SUCCESS = "[fundacionCursos] GET success";
export const ADD_SUCCESS = "[fundacionCursos] ADD success";
export const PATCH_SUCCESS = "[fundacionCursos] PATCH success";
export const UPDATE_SUCCESS = "[fundacionCursos] UPDATE success";
export const REMOVE_SUCCESS = "[fundacionCursos] REMOVE success";
export const GETCONCENTROS_SUCCESS = "[fundacionCursos] GETCONCENTROS success";

export const GET_ERROR = "[fundacionCursos] GET error";
export const ADD_ERROR = "[fundacionCursos] ADD error";
export const PATCH_ERROR = "[fundacionCursos] PATCH error";
export const UPDATE_ERROR = "[fundacionCursos] UPDATE error";
export const REMOVE_ERROR = "[fundacionCursos] REMOVE error";
export const GETCONCENTROS_ERROR = "[fundacionCursos] GETCONCENTROS error";




export const get = (options) => ({
    type: GET,
    options: options
});

export const getConCentros = (especialidad, provincia, localidad, duracion, tipo) => ({
    type: GETCONCENTROS,
    especialidad: especialidad,
    provincia: provincia,
    localidad: localidad,
    duracion: duracion,
    tipo: tipo,
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

export const fundacionCurso = (registro) => ({
    type: FUNDACION_CURSO,
    registro: registro,
})

export const seleccion = (especialidad, provincia, localidad, duracion, tipo) => ({
    type: SELECCION,
    especialidad: especialidad,
    provincia: provincia,
    localidad: localidad,
    duracion: duracion,
    tipo: tipo,
})
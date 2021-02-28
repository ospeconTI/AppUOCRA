export const GET = "[cemaps] GET";
export const ADD = "[cemaps] ADD";
export const PATCH = "[cemaps] PATCH";
export const UPDATE = "[cemaps] UPDATE";
export const REMOVE = "[cemaps] REMOVE";
export const EDIT = "[cemaps] EDIT"
export const GET_MAPA_LOCALIDAD = "[cemaps] GET_MAPA_LOCALIDAD"
export const GET_MAPA_PROVINCIA = "[cemaps] GET_MAPA_PROVINCIA"
export const GET_MAPA_TODOS = "[cemaps] GET_MAPA_TODOS"

export const GET_SUCCESS = "[cemaps] GET success";
export const ADD_SUCCESS = "[cemaps] ADD success";
export const PATCH_SUCCESS = "[cemaps] PATCH success";
export const UPDATE_SUCCESS = "[cemaps] UPDATE success";
export const REMOVE_SUCCESS = "[cemaps] REMOVE success";
export const GET_MAPA_SUCCESS = "[cemaps] GET_MAPA_LOCALIDAD success";

export const GET_ERROR = "[cemaps] GET error";
export const ADD_ERROR = "[cemaps] ADD error";
export const PATCH_ERROR = "[cemaps] PATCH error";
export const UPDATE_ERROR = "[cemaps] UPDATE error";
export const REMOVE_ERROR = "[cemaps] REMOVE error";
export const GET_MAPA_ERROR = "[cemaps] GET_MAPA_LOCALIDAD error";

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

export const getMapaLocalidad = (localidadId) => ({
    type: GET_MAPA_LOCALIDAD,
    localidadId: localidadId
});

export const getMapaProvincia = (provinciaId) => ({
    type: GET_MAPA_PROVINCIA,
    provinciaId: provinciaId
});

export const getMapaTodos = () => ({
    type: GET_MAPA_TODOS
});
export const GET = "[seccionales] GET";
export const ADD = "[seccionales] ADD";
export const PATCH = "[seccionales] PATCH";
export const UPDATE = "[seccionales] UPDATE";
export const REMOVE = "[seccionales] REMOVE";
export const EDIT = "[seccionales] EDIT"
export const GET_MAPA_ZONA = "[seccionales] GET_MAPA_LOCALIDAD"
export const GET_MAPA_TODOS = "[seccionales] GET_MAPA_TODOS"

export const GET_SUCCESS = "[seccionales] GET success";
export const ADD_SUCCESS = "[seccionales] ADD success";
export const PATCH_SUCCESS = "[seccionales] PATCH success";
export const UPDATE_SUCCESS = "[seccionales] UPDATE success";
export const REMOVE_SUCCESS = "[seccionales] REMOVE success";
export const GET_MAPA_SUCCESS = "[seccionales] GET_MAPA_LOCALIDAD success";

export const GET_ERROR = "[seccionales] GET error";
export const ADD_ERROR = "[seccionales] ADD error";
export const PATCH_ERROR = "[seccionales] PATCH error";
export const UPDATE_ERROR = "[seccionales] UPDATE error";
export const REMOVE_ERROR = "[seccionales] REMOVE error";
export const GET_MAPA_ERROR = "[seccionales] GET_MAPA_LOCALIDAD error";

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

export const getMapaZona = (zonaId) => ({
    type: GET_MAPA_ZONA,
    zonaId: zonaId
});

export const getMapaTodos = () => ({
    type: GET_MAPA_TODOS
});
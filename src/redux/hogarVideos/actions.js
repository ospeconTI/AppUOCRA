export const GET = "[hogarVideos] GET";
export const ADD = "[hogarVideos] ADD";
export const PATCH = "[hogarVideos] PATCH";
export const UPDATE = "[hogarVideos] UPDATE";
export const REMOVE = "[hogarVideos] REMOVE";
export const EDIT = "[hogarVideos] EDIT"

export const GET_SUCCESS = "[hogarVideos] GET success";
export const ADD_SUCCESS = "[hogarVideos] ADD success";
export const PATCH_SUCCESS = "[hogarVideos] PATCH success";
export const UPDATE_SUCCESS = "[hogarVideos] UPDATE success";
export const REMOVE_SUCCESS = "[hogarVideos] REMOVE success";

export const GET_ERROR = "[hogarVideos] GET error";
export const ADD_ERROR = "[hogarVideos] ADD error";
export const PATCH_ERROR = "[hogarVideos] PATCH error";
export const UPDATE_ERROR = "[hogarVideos] UPDATE error";
export const REMOVE_ERROR = "[hogarVideos] REMOVE error";




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
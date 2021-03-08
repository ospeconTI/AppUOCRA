export const GET = "[mujeresVideos] GET";
export const ADD = "[mujeresVideos] ADD";
export const PATCH = "[mujeresVideos] PATCH";
export const UPDATE = "[mujeresVideos] UPDATE";
export const REMOVE = "[mujeresVideos] REMOVE";
export const EDIT = "[mujeresVideos] EDIT"

export const GET_SUCCESS = "[mujeresVideos] GET success";
export const ADD_SUCCESS = "[mujeresVideos] ADD success";
export const PATCH_SUCCESS = "[mujeresVideos] PATCH success";
export const UPDATE_SUCCESS = "[mujeresVideos] UPDATE success";
export const REMOVE_SUCCESS = "[mujeresVideos] REMOVE success";

export const GET_ERROR = "[mujeresVideos] GET error";
export const ADD_ERROR = "[mujeresVideos] ADD error";
export const PATCH_ERROR = "[mujeresVideos] PATCH error";
export const UPDATE_ERROR = "[mujeresVideos] UPDATE error";
export const REMOVE_ERROR = "[mujeresVideos] REMOVE error";




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
export const GET = "[bannes] GET";
export const ADD = "[bannes] ADD";
export const PATCH = "[bannes] PATCH";
export const UPDATE = "[bannes] UPDATE";
export const REMOVE = "[bannes] REMOVE";
export const EDIT = "[bannes] EDIT"

export const GET_SUCCESS = "[bannes] GET success";
export const ADD_SUCCESS = "[bannes] ADD success";
export const PATCH_SUCCESS = "[bannes] PATCH success";
export const UPDATE_SUCCESS = "[bannes] UPDATE success";
export const REMOVE_SUCCESS = "[bannes] REMOVE success";

export const GET_ERROR = "[bannes] GET error";
export const ADD_ERROR = "[bannes] ADD error";
export const PATCH_ERROR = "[bannes] PATCH error";
export const UPDATE_ERROR = "[bannes] UPDATE error";
export const REMOVE_ERROR = "[bannes] REMOVE error";




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
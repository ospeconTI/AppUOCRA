import {
    GET,
    GET_SUCCESS,
    GET_ERROR,
    ADD,
    ADD_SUCCESS,
    ADD_ERROR,
    UPDATE,
    UPDATE_SUCCESS,
    UPDATE_ERROR,
    PATCH,
    PATCH_SUCCESS,
    PATCH_ERROR,
    REMOVE,
    REMOVE_SUCCESS,
    REMOVE_ERROR

} from "../arteEdicionesAnteriores/actions";

import {

} from "../fetchs"

import {
    RESTAdd,
    RESTDelete,
    RESTUpdate,
    RESTPatch
} from "../rest/actions"

import {
    apiRequest
} from "../api/actions"

export const get = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET) {
        let arteEdicionesAnteriores = [
            {id:1, nombre:"76ta EDICIÓN - 2020",descripcion:"Mujeres y Trabajo. Buenos Aires, Argentina.",imagen:"https://app.uocra.org/arteEdicionesAnteriores/edicion-6.gif",archivo:"https://construircine.com/pdf/catalogo_2020.pdf",activo: true},
            {id:2, nombre:"5ta EDICIÓN - 2019",descripcion:"El mundo del trabajo. Buenos Aires, Argentina.",imagen:"https://app.uocra.org/arteEdicionesAnteriores/edicion-5.gif",archivo:"https://construyendoarte.com.ar/edicion2019/pdf/libro_testimonial.pdf",activo: true},
            {id:3, nombre:"3ra y 4ta EDICIÓN - 2018/17",descripcion:"Contra el trabajo infantil y forzoso. Buenos Aires, Argentina.",imagen:"https://app.uocra.org/arteEdicionesAnteriores/edicion-3-4.gif",archivo:"https://construircine.com/pdf/catalogo-construir%20cine-2018-baja.pdf",activo: true},
        ]
    
        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: arteEdicionesAnteriores
            }
          })
        //dispatch(apiRequest(ikePuestosQuery, action.options, GET_SUCCESS, GET_ERROR))
    }
};

export const add = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === ADD) {
        //dispatch(RESTAdd(ikePuestos, action.body, ADD_SUCCESS, ADD_ERROR, action.token))
    }
};

export const update = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === UPDATE) {
        //dispatch(RESTUpdate(ikePuestos, action.id, action.body, UPDATE_SUCCESS, UPDATE_ERROR, action.token))
    }
};

export const patch = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === PATCH) {
        //dispatch(RESTPatch(ikePuestos, action.id, action.body, PATCH_SUCCESS, PATCH_ERROR, action.token))
    }
};

export const remove = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === REMOVE) {
        //dispatch(RESTDelete(ikePuestos, action.id, REMOVE_SUCCESS, REMOVE_ERROR, action.token))
    }
};


export const processGet = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET_SUCCESS) {

    }
};

export const processComand = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === ADD_SUCCESS || action.type === UPDATE_SUCCESS || action.type === REMOVE_SUCCESS || action.type === PATCH_SUCCESS) {

    }
};



export const processError = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET_ERROR || action.type === ADD_ERROR || action.type === UPDATE_ERROR || action.type === REMOVE_ERROR || action.type === PATCH_ERROR) {

    }
};

export const middleware = [get, add, update, patch, remove, processGet, processComand, processError];
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

} from "../edicionesAnteriores/actions";

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
        let edicionesAnteriores = [
            {id:1, nombre:"7ma EDICIÓN",descripcion:"Edición online, que tuvo lugar del 6 al 13 de Mayo 2020. Buenos Aires, Argentina.",imagen:"https://www.uocra.net/App/edicionesAnteriores/7edicion.gif",archivo:"https://construircine.com/pdf/catalogo_2020.pdf",activo: true},
            {id:2, nombre:"6ma EDICIÓN",descripcion:"Del 2 al 15 de Mayo 2019. Buenos Aires, Argentina.",imagen:"https://www.uocra.net/App/edicionesAnteriores/6edicion.gif",archivo:"https://construircine.com/pdf/CATALOGO-CONSTRUIR-CINE-2019.pdf",activo: true},
            {id:3, nombre:"5ma EDICIÓN",descripcion:"Del 10 al 16 de Mayo 2018. Buenos Aires, Argentina.",imagen:"https://www.uocra.net/App/edicionesAnteriores/5edicion.gif",archivo:"https://construircine.com/pdf/catalogo-construir%20cine-2018-baja.pdf",activo: true},
        ]
    
        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: edicionesAnteriores
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
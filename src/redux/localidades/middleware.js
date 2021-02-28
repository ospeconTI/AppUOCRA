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

} from "../localidades/actions";

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
        let localidades = [
            {id:1, provinciasId:1, nombre:"Belgrano",activo: true},
            {id:2, provinciasId:1, nombre:"Sanatorio Franchin",activo: true},
            {id:3, provinciasId:2, nombre:"Avellaneda",activo: true},
            {id:4, provinciasId:2, nombre:"Acassuso",activo: true},
            {id:5, provinciasId:2, nombre:"Moron",activo: true},
            {id:6, provinciasId:3, nombre:"Cordoba",activo: true},
            {id:7, provinciasId:3, nombre:"Villa Mercedez",activo: true},
            {id:8, provinciasId:4, nombre:"Entre Rios",activo: true},
            {id:9, provinciasId:5, nombre:"Santa Rosa",activo: true},
            {id:9, provinciasId:5, nombre:"General Pico",activo: true},
            {id:10, provinciasId:6, nombre:"Mendoza",activo: true},
            {id:11, provinciasId:7, nombre:"Santa Fe",activo: true}, 
            {id:12, provinciasId:7, nombre:"San Lorenzo",activo: true},   
        ]
    
        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: localidades
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
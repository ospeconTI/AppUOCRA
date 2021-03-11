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
    REMOVE_ERROR,
    GET_MAPA_ZONA,
    GET_MAPA_TODOS,
    GET_MAPA_SUCCESS,
    GET_MAPA_ERROR

} from "../seccionales/actions";

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
import {JSON} from "../../redux/json/seccionales";
export const get = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET) {
 
        let seccionales = JSON
 
        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: seccionales
            }
          })
        //dispatch(apiRequest(ikePuestosQuery, action.options, GET_SUCCESS, GET_ERROR))
    }
};

export const getMapaTodos = ({
    dispatch, getState
}) => next => action => {
    next(action);
    if (action.type === GET_MAPA_TODOS) {
        let seccionales = getState().seccionales.entities;       
        dispatch({
            type: GET_MAPA_SUCCESS,
            payload: {
                send: 1,
                receive: seccionales
            }
          })
        //dispatch(apiRequest(ikePuestosQuery, action.options, GET_SUCCESS, GET_ERROR))
    }
};
export const getMapaZona = ({
    dispatch, getState
}) => next => action => {
    next(action);
    if (action.type === GET_MAPA_ZONA) {
        let arr = getState().seccionales.entities;
        let seccionales = arr.filter(a => a.zonasId == action.zonaId);        
        dispatch({
            type: GET_MAPA_SUCCESS,
            payload: {
              send: 1,
              receive: seccionales
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

export const middleware = [get, getMapaTodos, getMapaZona ,add, update, patch, remove, processGet, processComand, processError];
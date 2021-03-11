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
    GET_MAPA_LOCALIDAD,
    GET_MAPA_PROVINCIA,
    GET_MAPA_TODOS,
    GET_MAPA_SUCCESS,
    GET_MAPA_ERROR

} from "../cemaps/actions";

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
import {JSON} from "../../redux/json/cemaps";

export const get = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET) {
        let cemaps = JSON
        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: cemaps
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
        let cemaps = getState().cemaps.entities;       
        dispatch({
            type: GET_MAPA_SUCCESS,
            payload: {
                send: 1,
                receive: cemaps
            }
          })
        //dispatch(apiRequest(ikePuestosQuery, action.options, GET_SUCCESS, GET_ERROR))
    }
};
export const getMapaProvincia = ({
    dispatch, getState
}) => next => action => {
    next(action);
    if (action.type === GET_MAPA_PROVINCIA) {
        let arr = getState().cemaps.entities;
        let cemaps = arr.filter(a => a.provinciasId == action.provinciaId);        
        dispatch({
            type: GET_MAPA_SUCCESS,
            payload: {
              send: 1,
              receive: cemaps
            }
          })
        //dispatch(apiRequest(ikePuestosQuery, action.options, GET_SUCCESS, GET_ERROR))
    }
};
export const getMapaLocalidad = ({
    dispatch, getState
}) => next => action => {
    next(action);
    if (action.type === GET_MAPA_LOCALIDAD) {
        let arr = getState().cemaps.entities;
        let cemaps = arr.filter(a => a.localidadesId == action.localidadId);        
        dispatch({
            type: GET_MAPA_SUCCESS,
            payload: {
                send: 1,
                receive: cemaps
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

export const middleware = [get, getMapaTodos, getMapaProvincia, getMapaLocalidad ,add, update, patch, remove, processGet, processComand, processError];
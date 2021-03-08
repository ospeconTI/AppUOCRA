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

} from "../titulos/actions";

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
        let titulos = [
            {id:1, tipo:"sindicato", titulo: "", activo: true},
            {id:2, tipo:"salud", titulo: "https://app.uocra.org/titulos/construirsalud.gif", activo: true},
            {id:3, tipo:"cultura", titulo: "https://app.uocra.org/titulos/cultura.gif", activo: true},
            {id:4, tipo:"tv", titulo: "https://app.uocra.org/titulos/tv1.gif", activo: true},
            {id:5, tipo:"moecra", titulo: "https://app.uocra.org/titulos/moecraAzulNegroLogo.png", activo: true},
            {id:6, tipo:"saludSeguridad", titulo: "https://app.uocra.org/titulos/saludSeguridad.gif", activo: true},
            {id:7, tipo:"ivt", titulo: "https://app.uocra.org/titulos/ivt.gif", activo: true},
            {id:8, tipo:"cine", titulo: "https://app.uocra.org/titulos/cine.gif", activo: true},
            {id:9, tipo:"adolecencia", titulo: "https://app.uocra.org/titulos/adolecencia.png", activo: true},
            {id:10, tipo:"adicciones", titulo: "https://app.uocra.org/titulos/adicciones.png", activo: true},
            {id:11, tipo:"hogar", titulo: "https://app.uocra.org/titulos/hogar.png", activo: true},
            {id:12, tipo:"mujeres", titulo: "https://app.uocra.org/titulos/mujeres.png", activo: true},
            {id:13, tipo:"arte", titulo: "https://app.uocra.org/titulos/arte.png", activo: true},
        ]
        
        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: titulos
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
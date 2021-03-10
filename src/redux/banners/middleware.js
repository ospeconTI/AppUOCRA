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

} from "../banners/actions";

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
        let bannes = [
            {id:1, tipo:"sindicato", banner:"https://app.uocra.org/banners/bannerSindicato.gif", orden: 1, activo: true},
            {id:2, tipo:"salud", banner:"", orden: 1, activo: true},
            {id:3, tipo:"cultura", banner:"https://app.uocra.org/banners/bannerCultura.gif", orden: 1, activo: true},
            {id:4, tipo:"tv", banner:"https://app.uocra.org/banners/bannerTv.gif", orden: 1, activo: true},
            {id:4, tipo:"tv", banner:"https://app.uocra.org/banners/bannerTv01.gif", orden: 1, activo: true},
            {id:4, tipo:"tv", banner:"https://app.uocra.org/banners/bannerTv02.gif", orden: 1, activo: true},
            {id:5, tipo:"moecra", banner:"https://app.uocra.org/banners/bannerMoecra.gif", orden: 1, activo: true},
            {id:6, tipo:"saludSeguridad", banner:"https://app.uocra.org/banners/bannerSaludSeguridad.gif", orden: 1, activo: true},
            {id:7, tipo:"ivt", banner:"https://app.uocra.org/banners/bannerIvt.gif", orden: 1, activo: true},
            {id:8, tipo:"cine", banner:"https://app.uocra.org/banners/bannerCine.gif", orden: 1, activo: true},
            {id:9, tipo:"adolecencia", banner:"https://app.uocra.org/banners/bannerAdolecencia.gif", orden: 1, activo: true},
            {id:10, tipo:"adicciones", banner:"https://app.uocra.org/banners/bannerAdicciones.gif", orden: 1, activo: true},
            {id:11, tipo:"hogar", banner:"", orden: 1, activo: true},
            {id:12, tipo:"mujeres", banner:"https://app.uocra.org/banners/bannerMujeres.gif", orden: 1, activo: true},
            {id:13, tipo:"arte", banner:"https://app.uocra.org/banners/bannerArte.gif", orden: 1, activo: true},
            {id:14, tipo:"deportes", banner:"https://app.uocra.org/banners/bannerDeportes.gif", orden: 1, activo: true},
        ]
        
        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: bannes
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
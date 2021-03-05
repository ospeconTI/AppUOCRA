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

} from "../noticias/actions";

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
        let noticias = [
            {id:1, imagen:"https://www.uocra.net/App/noticias/irupe.gif", copete:'UOCRA Cultura despide su temporada 2020 con un show en Streaming, 28 de noviembre a las 20 hs, no te pierdas a Irupé Tarragó Ros en concierto.",nota:"UOCRA Cultura despide su temporada 2020 con un show en Streaming, 28 de noviembre a las 20 hs, no te pierdas a Irupé Tarragó Ros en concierto.', orden: 1},
            {id:2, imagen:"https://www.uocra.net/App/noticias/gm.gif", copete:'Gerardo Martínez, presidente de UOCRA, firmo un acuerdo con el Banco Nación por créditos para la compra de motos.",nota:"Gerardo Martínez, presidente de UOCRA, firmo un acuerdo con el Banco Nación por créditos para la compra de motos.', orden: 2},
            {id:3, imagen:"https://www.uocra.net/App/noticias/maradona.gif", copete:'Construir TV presenta “60 veces Diego”, semana homenaje a Diego Maradona.",nota:"Construir TV presenta “60 veces Diego”, semana homenaje a Diego Maradona.', orden: 3},
            {id:4, imagen:"https://www.uocra.net/App/noticias/adicciones.gif", copete:'Prevención de Adicciones, finalizó su 4ta. Jornada Internacional sobre la Problemática de las Adicciones en el mundo laboral.",nota:"Prevención de Adicciones, finalizó su 4ta. Jornada Internacional sobre la Problemática de las Adicciones en el mundo laboral.', orden: 4},
        ]
    
        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: noticias
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
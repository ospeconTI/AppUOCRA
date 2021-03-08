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

} from "../adolecenciaJornadas/actions";

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
        let adolecenciaJornadas = [
            {id:1, nombre:"VIII Jornada en Adolescencia (2020)",ano: 2020,descripcion:"Deconstruirnos para garantizar Derechos e Identidades.", expositor: "Dr. Juan Carlos Escobar - Médico Pediatra. Dirección de Adolescencias y Juventudes, MSAL.", coordinador: "Dra. María Alejandra Martínez, Ginecóloga Infanto-Juvenil.Dra. Romina Espeche, Médica Pediatra, especialista en Adolescencia.", link:"https://www.youtube.com/embed/xoY26mGB_xA", link:"https://www.youtube.com/embed/xoY26mGB_xA",activo: true},
            {id:2, nombre:"IX Jornada en Adolescencia (2020)",ano: 2020,descripcion:"Adolescentes ¿enredados? Adolescencia. Reconstrucciones en tiempos de pandemia.", expositor: "Dr. Juan Carlos Escobar - Médico Pediatra. Dirección de Adolescencias y Juventudes, MSAL.", coordinador: "Dra. María Alejandra Martínez, Ginecóloga Infanto-Juvenil.Dra. Romina Espeche, Médica Pediatra, especialista en Adolescencia.", link:"https://www.youtube.com/embed/xoY26mGB_xA",activo: true},
            {id:1, nombre:"VIII Jornada en Adolescencia (2019)",ano: 2019,descripcion:"Deconstruirnos para garantizar Derechos e Identidades.", expositor: "", coordinador: "", link:"https://www.youtube.com/embed/MlnApkxMxcY",activo: true},
            {id:2, nombre:"IX Jornada en Adolescencia (2018)",ano: 2018,descripcion:"Adolescentes ¿enredados? Adolescencia. Reconstrucciones en tiempos de pandemia.", expositor: "", link:"https://www.youtube.com/embed/MlnApkxMxcY", coordinador: "",activo: true},
        ]    
        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: adolecenciaJornadas
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
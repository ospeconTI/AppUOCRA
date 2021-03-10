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

} from "../leftmenu/actions";

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
        let leftmenu = [
            {id:1,nombre:"MI SINDICATO",imagen: "MISINDICATO" ,accion:"sindicato"},
            {id:2,nombre:"SALUD",imagen: "SALUD" ,accion:"salud"},
            {id:3,nombre:"CAPACITACION",imagen: 'CURSOS' ,accion:""},
            {id:4,nombre:"TEATRO",imagen: 'TEATRO' ,accion:"cultura"},
            {id:5,nombre:"TELEVISION",imagen: 'TV',accion:"tv"},
            {id:6,nombre:"CINE",imagen: 'CINE' ,accion:"cine"},
            {id:7,nombre:"ARTE",imagen: 'ARTE' ,accion:"arte"},
            {id:8,nombre:"VIVIENDA",imagen: 'VIVIENDA' ,accion:"ivt"},
            {id:9,nombre:"DEPORTE",imagen: 'DEPORTE' ,accion:"deportes"},
            {id:10,nombre:"TURISMO",imagen: 'TURISMO' ,accion:""},
            {id:11,nombre:"BENEFICIO",imagen: 'BENEFICIO' ,accion:"beneficios"},
            {id:12,nombre:"SECCIONAL",imagen: 'SECCIONAL' ,accion:""},
            {id:13,nombre:"ADOLECENCIA",imagen: 'ADOLECENCIA' ,accion:"adolecencia"},
            {id:14,nombre:"ADICCIONES",imagen: 'ADICCIONES' ,accion:"adicciones"},
            {id:15,nombre:"HOGAR",imagen: 'HOGAR' ,accion:"hogar"},
            {id:16,nombre:"SEGURIDAD",imagen: 'SEGURIDAD' ,accion:"saludSeguridad"},
            {id:17,nombre:"MUJERES",imagen: 'MUJERES' ,accion:"mujeres"},
            {id:18,nombre:"JUVENTUD",imagen: 'JUVENTUDES' ,accion:"moecra"},
            {id:19,nombre:"COMPRAS",imagen: 'COMPRA' ,accion:"moecra"},
            {id:20,nombre:"MACRO",imagen: 'MACRO' ,accion:"macro"},
            {id:21,nombre:"EMPRESA",imagen: 'EMPRESA' ,accion:""},
            {id:22,nombre:"BOLSA TRABAJO",imagen: 'BOLSATRABAJO' ,accion:""},
            {id:23,nombre:"DENUNCIA",imagen: 'DENUNCIA' ,accion:"denunciasFormulario"},

        ]      
        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: leftmenu
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
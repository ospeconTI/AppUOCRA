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

} from "../tvGrilla/actions";

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
        let tvGrilla = [
            {id:1,dia:0,hora:"01:00",nombre:"Desafios 4.0 domingo", episodio:"01 - Novedades",imagen:"https://app.uocra.org/tvGrilla/desafio4-1.gif",activo:true},
            {id:1,dia:0,hora:"02:00",nombre:"Desafios 4.0 domingo", episodio:"02 - Actualidad",imagen:"https://app.uocra.org/tvGrilla/desafio4-2.gif",activo:true},
            {id:1,dia:0,hora:"03:00",nombre:"Desafios 4.0 domingo", episodio:"03 - Energia Renovable",imagen:"https://app.uocra.org/tvGrilla/desafio4-3.gif",activo:true},
            {id:1,dia:0,hora:"04:00",nombre:"Desafios 4.0 domingo", episodio:"04 - Novedades",imagen:"https://app.uocra.org/tvGrilla/desafio4-1.gif",activo:true},
            {id:1,dia:0,hora:"05:00",nombre:"Desafios 4.0 domingo", episodio:"05 - Actualidad",imagen:"https://app.uocra.org/tvGrilla/desafio4-2.gif",activo:true},
            {id:1,dia:0,hora:"06:00",nombre:"Desafios 4.0 domingo", episodio:"06 - Energia Renovable",imagen:"https://app.uocra.org/tvGrilla/desafio4-3.gif",activo:true},
            {id:1,dia:1,hora:"01:00",nombre:"Desafios 4.0 Lunes", episodio:"01 - Novedades",imagen:"https://app.uocra.org/tvGrilla/desafio4-1.gif",activo:true},
            {id:1,dia:1,hora:"02:00",nombre:"Desafios 4.0 Lunes", episodio:"02 - Actualidad",imagen:"https://app.uocra.org/tvGrilla/desafio4-2.gif",activo:true},
            {id:1,dia:1,hora:"03:00",nombre:"Desafios 4.0 Lunes", episodio:"03 - Energia Renovable",imagen:"https://app.uocra.org/tvGrilla/desafio4-3.gif",activo:true},
            {id:1,dia:2,hora:"01:00",nombre:"Desafios 4.0 Martes", episodio:"01 - Novedades",imagen:"https://app.uocra.org/tvGrilla/desafio4-1.gif",activo:true},
            {id:1,dia:2,hora:"02:00",nombre:"Desafios 4.0 Martes", episodio:"02 - Actualidad",imagen:"https://app.uocra.org/tvGrilla/desafio4-2.gif",activo:true},
            {id:1,dia:2,hora:"03:00",nombre:"Desafios 4.0 Martes", episodio:"03 - Energia Renovable",imagen:"https://app.uocra.org/tvGrilla/desafio4-3.gif",activo:true},
            {id:1,dia:3,hora:"01:00",nombre:"Desafios 4.0 Miercoles", episodio:"01 - Novedades",imagen:"https://app.uocra.org/tvGrilla/desafio4-1.gif",activo:true},
            {id:1,dia:3,hora:"02:00",nombre:"Desafios 4.0 Miercoles", episodio:"02 - Actualidad",imagen:"https://app.uocra.org/tvGrilla/desafio4-2.gif",activo:true},
            {id:1,dia:3,hora:"03:00",nombre:"Desafios 4.0 Miercoles", episodio:"03 - Energia Renovable",imagen:"https://app.uocra.org/tvGrilla/desafio4-3.gif",activo:true},
            {id:1,dia:3,hora:"04:00",nombre:"Desafios 4.0 Miercoles", episodio:"04 - Novedades",imagen:"https://app.uocra.org/tvGrilla/desafio4-1.gif",activo:true},
            {id:1,dia:3,hora:"05:00",nombre:"Desafios 4.0 Miercoles", episodio:"05 - Actualidad",imagen:"https://app.uocra.org/tvGrilla/desafio4-2.gif",activo:true},
            {id:1,dia:3,hora:"06:00",nombre:"Desafios 4.0 Miercoles", episodio:"06 - Energia Renovable",imagen:"https://app.uocra.org/tvGrilla/desafio4-3.gif",activo:true},
            {id:1,dia:4,hora:"01:00",nombre:"Desafios 4.0 Jueves", episodio:"01 - Novedades",imagen:"https://app.uocra.org/tvGrilla/desafio4-1.gif",activo:true},
            {id:1,dia:4,hora:"02:00",nombre:"Desafios 4.0 Jueves", episodio:"02 - Actualidad",imagen:"https://app.uocra.org/tvGrilla/desafio4-2.gif",activo:true},
            {id:1,dia:4,hora:"03:00",nombre:"Desafios 4.0 Jueves", episodio:"03 - Energia Renovable",imagen:"https://app.uocra.org/tvGrilla/desafio4-3.gif",activo:true},
            {id:1,dia:5,hora:"01:00",nombre:"Desafios 4.0 Viernes", episodio:"01 - Novedades",imagen:"https://app.uocra.org/tvGrilla/desafio4-1.gif",activo:true},
            {id:1,dia:5,hora:"02:00",nombre:"Desafios 4.0 Viernes", episodio:"02 - Actualidad",imagen:"https://app.uocra.org/tvGrilla/desafio4-2.gif",activo:true},
            {id:1,dia:5,hora:"03:00",nombre:"Desafios 4.0 Viernes", episodio:"03 - Energia Renovable",imagen:"https://app.uocra.org/tvGrilla/desafio4-3.gif",activo:true},
            {id:1,dia:6,hora:"01:00",nombre:"Desafios 4.0 Sabado", episodio:"01 - Novedades",imagen:"https://app.uocra.org/tvGrilla/desafio4-1.gif",activo:true},
            {id:1,dia:6,hora:"02:00",nombre:"Desafios 4.0 Sabado", episodio:"02 - Actualidad",imagen:"https://app.uocra.org/tvGrilla/desafio4-2.gif",activo:true},
            {id:1,dia:6,hora:"03:00",nombre:"Desafios 4.0 Sabado", episodio:"03 - Energia Renovable",imagen:"https://app.uocra.org/tvGrilla/desafio4-3.gif",activo:true},
            {id:1,dia:6,hora:"04:00",nombre:"Desafios 4.0 Sabado", episodio:"04 - Novedades",imagen:"https://app.uocra.org/tvGrilla/desafio4-1.gif",activo:true},
            {id:1,dia:6,hora:"05:00",nombre:"Desafios 4.0 Sabado", episodio:"05 - Actualidad",imagen:"https://app.uocra.org/tvGrilla/desafio4-2.gif",activo:true},
            {id:1,dia:6,hora:"06:00",nombre:"Desafios 4.0 Sabado", episodio:"06 - Energia Renovable",imagen:"https://app.uocra.org/tvGrilla/desafio4-3.gif",activo:true},
        ]
    
        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: tvGrilla
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
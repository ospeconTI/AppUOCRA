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

} from "../menues/actions";

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
        let menues = [
            {id:1, tipo:"salud", nombre:"CARTILLA MÉDICA",imagen:"CARTILLA", clase:"opc1 blanco fondoVerde",goto:"cartilla"},
            {id:2, tipo:"salud", nombre:"TURNOS",imagen:"TURNOS", clase:"opc2 blanco fondoGris",goto:"turnos"},
            {id:3, tipo:"salud", nombre:"SANATORIO FRANCHIN",imagen:"CENTROMEDICO", clase:"opc2 blanco fondoAmarillo",goto:"franchin"},
            {id:4, tipo:"salud", nombre:"URGENCIAS",imagen:"URGENCIAS", clase:"opc3 blanco fondoPrimario",goto:"emergencias"},
            {id:1, tipo:"cultura", nombre:"OBRAS TEATRALES",imagen:"OBRASTEATRAL", clase:"opc1 blanco fondoPrimario",goto:"cemapsMapa"},
            {id:2, tipo:"cultura", nombre:"OBRAS INFANTILES",imagen:"OBRASINFANTILES", clase:"opc2 blanco fondoVerde",goto:"cemapsMapa"},
            {id:3, tipo:"cultura", nombre:"MUSICA EN VIVO",imagen:"MUSICA", clase:"opc2 blanco fondoGris",goto:"cemapsMapa"},
            {id:4, tipo:"cultura", nombre:"BOLETERIA",imagen:"BOLETRERIA", clase:"opc3 blanco fondoAmarillo",goto:"cemapsMapa"},
            {id:1, tipo:"tv", nombre:"GRILLA",imagen:"GRILLA", clase:"opc1 blanco fondoPrimario",goto:"cemapsMapa"},
            {id:2, tipo:"tv", nombre:"ESTRENOS",imagen:"ESTRENOS", clase:"opc2 blanco fondoVerde",goto:"cemapsMapa"},
            {id:3, tipo:"tv", nombre:"DÓNDE VERNOS",imagen:"DONDEVERNOS", clase:"opc2 blanco fondoGris",goto:"cemapsMapa"},
            {id:4, tipo:"tv", nombre:"COMUNIDAD",imagen:"COMUNIDAD", clase:"opc3 blanco fondoAmarillo",goto:"cemapsMapa"},
            {id:1, tipo:"moecra", nombre:"MOTOS",imagen:"MOTOS", clase:"opc1 blanco fondoPrimario",goto:"cemapsMapa"},
            {id:2, tipo:"moecra", nombre:"DESCUENTOS",imagen:"DESCUENTOS", clase:"opc2 blanco fondoVerde",goto:"cemapsMapa"},
            {id:3, tipo:"moecra", nombre:"ALIMENTOS",imagen:"ALIMENTOS", clase:"opc2 blanco fondoGris",goto:"cemapsMapa"},
            {id:4, tipo:"moecra", nombre:"HERRAMIENTAS",imagen:"HERRAMIENTAS", clase:"opc3 blanco fondoAmarillo",goto:"cemapsMapa"},
        ]
    
        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: menues
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
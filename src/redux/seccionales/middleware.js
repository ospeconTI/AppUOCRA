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

export const get = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET) {
        let seccionales = [
        {id:1,zonasId:1,longitud:-58.416510,latitud:-34.609363, nombre:"Córdoba",direccion:"Bartolomé Mitre 3545",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://app.uocra.org/seccionales/cordoba.gif"},
        {id:1,zonasId:4,longitud:-58.50494533152994,latitud:-34.482248148166086,nombre:"Rio Cuarto",direccion:"Av.Santa Fe 1086",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://app.uocra.org/seccionales/rioCuarto.gif"},
        {id:1,zonasId:3,longitud:-58.355346773852155,latitud:-34.66656645127035,nombre:"Rio Tercero",direccion:"Estanislao Zeballos 1674",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://app.uocra.org/seccionales/rioTercero.gif"},
        {id:1,zonasId:100,longitud:-62.26237063137208,latitud:-38.7201042402835,nombre:"Rosario",direccion:"Las Heras 39",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://app.uocra.org/seccionales/rosario.gif"},
        {id:1,zonasId:1,longitud:-58.392774 ,latitud:-34.614011,nombre:"Santa Fé",direccion:"Av. Belgrano 1864",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://app.uocra.org/seccionales/santaFe.gif"}, 
        {id:1,zonasId:100,longitud:-58.95768306037708,latitud:-34.157349650331625,nombre:"Villa María",direccion:"Dellepiane 769",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://app.uocra.org/seccionales/villaMaria.gif"},
        ]    
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
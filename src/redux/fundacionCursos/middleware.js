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
    GETCONCENTROS,
    GETCONCENTROS_SUCCESS,
    GETCONCENTROS_ERROR,

} from "../fundacionCursos/actions";

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
import {JSON} from "../../redux/json/fundacionCursos";
import {JSON as JSONCENTROS} from "../../redux/json/fundacionCentros";

export const get = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET) {
        let fundacionCursos = JSON
        fundacionCursos.sort(function(a,b){return a["nombre"] > b["nombre"] ? 1 : -1});

        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: fundacionCursos
            }
          })
        //dispatch(apiRequest(ikePuestosQuery, action.options, GET_SUCCESS, GET_ERROR))
    }
};

export const getConCentros = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GETCONCENTROS) {
        let fundacionCursos = JSON
        let centros = JSONCENTROS
        var nuevo=[]
        fundacionCursos.sort(function(a,b){return a["nombre"] > b["nombre"] ? 1 : -1});
        fundacionCursos.forEach(function(item){
            var rr = centros.filter(function (c) { return c.id == item.fundacionCentrosId });
            if (rr){
                item.idCentro = rr[0].id
                item.nombreCentro = rr[0].nombre
                item.direccionCentro = rr[0].direccion
                item.localidadCentro = rr[0].localidad
                item.provinciaCentro = rr[0].provincia
                item.latitudCentro = rr[0].latitud
                item.longitudCentro = rr[0].longitud
                item.telefonoCentro = rr[0].telefono
                item.mailCentro = rr[0].mail
            }
            nuevo.push(item)
        });
        if(action.especialidad!=-1 || action.provincia!="" || action.localidad!="" || action.duracion!="" || action.tipo!=-1){
            nuevo=nuevo.filter(function (c) { return (action.especialidad!=-1 ? c.fundacionEspecialidadesId==action.especialidad : true) &&
                (action.provincia!="" ? c.provinciaCentro.toUpperCase()==action.provincia.toUpperCase() : true) &&
                (action.localidad!="" ? c.localidadCentro.toUpperCase()==action.localidad.toUpperCase() : true) &&
                (action.duracion!="" ? c.duracion.toUpperCase()==action.duracion.toUpperCase() : true) &&
                (action.tipo!=-1 ? c.tipo==action.tipo : true) 
            })
        }
        dispatch({
            type: GETCONCENTROS_SUCCESS,
            payload: {
              send: 1,
              receive: nuevo
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
    if (action.type === ADD_SUCCESS || action.type === UPDATE_SUCCESS || action.type === REMOVE_SUCCESS || action.type === PATCH_SUCCESS || action.type === GETCONCENTROS_SUCCESS) {

    }
};



export const processError = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET_ERROR || action.type === ADD_ERROR || action.type === UPDATE_ERROR || action.type === REMOVE_ERROR || action.type === PATCH_ERROR || action.type === GETCONCENTROS_ERROR) {

    }
};

export const middleware = [get, add, update, patch, remove, processGet, processComand, processError, getConCentros];
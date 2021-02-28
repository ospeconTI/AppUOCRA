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

} from "../items/actions";

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
        let items = [
            {Id:"1", tipo:"cultura", titulo:"QUIENES SOMOS?", cuerpo: "<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"2", tipo:"cultura", titulo:"NUESTRA SALA", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"3", tipo:"tv", titulo:"QUIENES SOMOS?", cuerpo: "<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"4", tipo:"tv", titulo:"PUBLICITÁ EN CONSTRUIR TV", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"5", tipo:"moecra", titulo:"QUIENES SOMOS?", cuerpo: "<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"6", tipo:"moecra", titulo:"COMO COMPRAR?", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"7", tipo:"salud", titulo:"MODELO DE ATENCIÓN", cuerpo: "<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"8", tipo:"salud", titulo:"PLAN MATERNO INFANTIL", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"9", tipo:"salud", titulo:"AFILIACIONES", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"10", tipo:"salud", titulo:"SANATORIO FRANCHÍN", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"11", tipo:"sindicato", titulo:"ASUNTOS LABORALES", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"12", tipo:"sindicato", titulo:"JUBILACIONES", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
        ]
        
        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: items
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
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
            {id:1, tipo:"sindicato", nombre:"SECCIONALES",imagen:"SECCIONALES", div: "datos", clase:"opc1 blanco fondoPrimario",goto:"gremioZonas"},
            {id:2, tipo:"sindicato", nombre:"CONVENIOS",imagen:"CONVENIOS", div: "datos", clase:"opc2 blanco fondoGris",goto:"gremioConvenio"},
            {id:3, tipo:"sindicato", nombre:"JUVENTUD",imagen:"JUVENTUD", div: "datos", clase:"opc2 blanco fondoAmarillo",goto:"gremioJuventud"},
            {id:4, tipo:"sindicato", nombre:"TARJETA IERIC",imagen:"TARJETAIERIC", div: "datos", clase:"opc3 blanco fondoVerde",goto:"gremioTarjetaIeric"},
            {id:1, tipo:"salud", nombre:"CARTILLA MÉDICA",imagen:"CARTILLA", div: "datos", clase:"opc1 blanco fondoVerde",goto:"cartilla"},
            {id:2, tipo:"salud", nombre:"TURNOS",imagen:"TURNOS", div: "datos", clase:"opc2 blanco fondoGris",goto:"turnos"},
            {id:3, tipo:"salud", nombre:"SANATORIO FRANCHIN",imagen:"CENTROMEDICO", div: "datos", clase:"opc2 blanco fondoAmarillo",goto:"franchin"},
            {id:4, tipo:"salud", nombre:"URGENCIAS",imagen:"URGENCIAS", div: "datos", clase:"opc3 blanco fondoPrimario",goto:"emergencias"},
            {id:1, tipo:"cultura", nombre:"PROGRAMACION",imagen:"PROGRAMACION", div: "datos", clase:"opc1 blanco fondoPrimario",goto:"teatroProgramacion"},
            {id:2, tipo:"cultura", nombre:"EN EL TEATRO",imagen:"OBRASINFANTILES", div: "datos", clase:"opc2 blanco fondoGris",goto:"cemapsMapa"},
            {id:3, tipo:"cultura", nombre:"SHOW ON LINE",imagen:"YOUTUBE", div: "datos", clase:"opc2 blanco fondoAmarillo",goto:"HTTPS://www.youtube.com/UOCRACultura"},
            {id:4, tipo:"cultura", nombre:"BOLETERIA",imagen:"BOLETRERIA", div: "datos", clase:"opc3 blanco fondoVerde",goto:"teatroBoleteria"},
            {id:1, tipo:"tv", nombre:"GRILLA",imagen:"GRILLA", div: "datos", clase:"opc1 blanco fondoPrimario",goto:"tvGrilla"},
            {id:2, tipo:"tv", nombre:"ESTRENOS",imagen:"ESTRENOS", div: "datos", clase:"opc2 blanco fondoVerde",goto:"tvEstrenos"},
            {id:3, tipo:"tv", nombre:"DÓNDE VERNOS",imagen:"DONDEVERNOS", div: "datos", clase:"opc2 blanco fondoGris",goto:"tvCanales"},
            {id:4, tipo:"tv", nombre:"PROGRAMAS ONLINE",imagen:"YOUTUBE", div: "datos", clase:"opc3 blanco fondoAmarillo",goto:"https://www.youtube.com/construirtv"},
            {id:1, tipo:"moecra", nombre:"MOTOS",imagen:"MOTOS", div: "datos", clase:"opc1 blanco fondoPrimario",goto:"cemapsMapa"},
            {id:2, tipo:"moecra", nombre:"DESCUENTOS",imagen:"DESCUENTOS", div: "datos", clase:"opc2 blanco fondoVerde",goto:"cemapsMapa"},
            {id:3, tipo:"moecra", nombre:"ALIMENTOS",imagen:"ALIMENTOS", div: "datos", clase:"opc2 blanco fondoGris",goto:"cemapsMapa"},
            {id:4, tipo:"moecra", nombre:"HERRAMIENTAS",imagen:"HERRAMIENTAS", div:"datos", clase:"opc3 blanco fondoAmarillo",goto:"cemapsMapa"},
            {id:1, tipo:"saludSeguridad", nombre:"CONSULTAS",imagen:"", div:"datos2", clase:"opc21 blanco fondoPrimario",goto:"saludSeguridadConsultas"},
            {id:2, tipo:"saludSeguridad", nombre:"DENUNCIAS",imagen:"", div:"datos2", clase:"opc22 blanco fondoVerde",goto:"saludSeguridadDenuncia"},
            {id:1, tipo:"ivt", nombre:"",imagen:"", div:"", clase:"",goto:""},
            {id:1, tipo:"cine", nombre:"SOBRE NOSOTROS",imagen:"CINE", div: "datos", clase:"opc1 blanco fondoVerde",goto:"cineNosotros"},
            {id:2, tipo:"cine", nombre:"EDICION 2021",imagen:"CINECARTON", div: "datos", clase:"opc2 blanco fondoGris",goto:"cineEdicion"},
            {id:3, tipo:"cine", nombre:"TEMÁTICAS",imagen:"CAMARA", div: "datos", clase:"opc2 blanco fondoAmarillo",goto:"cineTematicas"},
            {id:4, tipo:"cine", nombre:"EDICIONES ANTERIORES",imagen:"CINEROLLO", div: "datos", clase:"opc3 blanco fondoPrimario",goto:"cineEdicionesAnteriores"},
            {id:1, tipo:"adolecencia", nombre:"JORNADA 2020",imagen:"", div:"datos2", clase:"opc21 blanco fondoPrimario",goto:"adolecencia2020"},
            {id:2, tipo:"adolecencia", nombre:"OTRAS JORNADAS",imagen:"", div:"datos2", clase:"opc22 blanco fondoVerde",goto:"adolecenciaOtras"},
            {id:1, tipo:"adicciones", nombre:"JORNADA 2020",imagen:"", div:"datos2", clase:"opc21 blanco fondoPrimario",goto:"adicciones2020"},
            {id:2, tipo:"adicciones", nombre:"OTRAS JORNADAS",imagen:"", div:"datos2", clase:"opc22 blanco fondoVerde",goto:"adiccionesOtras"},
            {id:1, tipo:"hogar", nombre:"INSTITUCIONAL",imagen:"HOGARCORAZON", div: "datos", clase:"opc1 blanco fondoVerde",goto:"hogarInstitucional"},
            {id:4, tipo:"hogar", nombre:"COLABORÁ",imagen:"COLABORA", div: "datos", clase:"opc2 blanco fondoGris",goto:"hogarColabora"},
            {id:3, tipo:"hogar", nombre:"VIDEOTECA",imagen:"YOUTUBE", div: "datos", clase:"opc2 blanco fondoAmarillo",goto:"hogarVideoteca"},
            {id:2, tipo:"hogar", nombre:"HOGAR PELDAÑO",imagen:"HOGARPELDANO", div: "datos", clase:"opc3 blanco fondoPrimario",goto:"hogarDescripcion"},
            {id:1, tipo:"mujeres", nombre:"NOSOTRAS CONSTRUIMOS",imagen:"", div:"datos2", clase:"opc21 blanco fondoPrimario",goto:"mujeresConstruccion"},
            {id:2, tipo:"mujeres", nombre:"FORMACIÓN",imagen:"", div:"datos2", clase:"opc22 blanco fondoVerde",goto:"mujeresFormacion"},
            {id:1, tipo:"arte", nombre:"SOBRE NOSOTROS",imagen:"LAPIZLLAVE", div: "datos", clase:"opc1 blanco fondoVerde",goto:"arteNosotros"},
            {id:4, tipo:"arte", nombre:"EDICIÓN 2021",imagen:"CUADRO", div: "datos", clase:"opc2 blanco fondoGris",goto:"arteEdicion"},
            {id:3, tipo:"arte", nombre:"TIPOS DE CONCURSOS",imagen:"PINCELES", div: "datos", clase:"opc2 blanco fondoAmarillo",goto:"arteConcursos"},
            {id:2, tipo:"arte", nombre:"EDICIONES ANTERIORES",imagen:"ESTATUA", div: "datos", clase:"opc3 blanco fondoPrimario",goto:"arteEdicionesAnteriores"},
         
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
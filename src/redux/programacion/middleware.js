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

} from "../programacion/actions";

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
        let programacion = [
            {id:1, nombre:"Tierra Hembra",protagonistas:"Anabella Zoch", genero: "Musica Popular", fecha: "2021-04-10T18:25:43.511Z", valor:0, imagen:"https://www.uocra.net/App/programacionTeatro/tierraHembra.gif", textoFolleto:"Escrita junto a Peteco Carabajal,  es eso, el mensaje de la tierra como mujer al hombre, al ser humano, a su pareja amorosa.  Tierra Hembra es el tiempo que vivimos hoy. Rugen tiempos nuevos, de revolución, de cambio. Cada mañana buscamos renacer la esperanza por sobre todo y creer en nosotros más que nunca. Es el tiempo de la mujer, también el tiempo de la madre tierra, única, maltratada.", imagenFolleto:"https://www.uocra.net/App/programacionTeatro/tierraHembraFolleto.gif",activo: true},
            {id:2, nombre:"Un canto a Latinoamerica",protagonistas:"La Charo", genero: "Música Popular Latinoamericana", fecha: "2021-04-11T19:25:43.511Z", valor:0, imagen:"https://www.uocra.net/App/programacionTeatro/unCantoALatinoamerica.gif", textoFolleto:"Escrita junto a Peteco Carabajal,  es eso, el mensaje de la tierra como mujer al hombre, al ser humano, a su pareja amorosa.  Tierra Hembra es el tiempo que vivimos hoy. Rugen tiempos nuevos, de revolución, de cambio. Cada mañana buscamos renacer la esperanza por sobre todo y creer en nosotros más que nunca. Es el tiempo de la mujer, también el tiempo de la madre tierra, única, maltratada.", imagenFolleto:"https://www.uocra.net/App/programacionTeatro/tierraHembraFolleto.gif",activo: true},
            {id:3, nombre:"De Pampa y Puna",protagonistas:"Adelina Villanueva y Lucía Ceresani", genero: "Folklore", fecha: "2021-04-12T20:25:43.511Z", valor:0, imagen:"https://www.uocra.net/App/programacionTeatro/dePampaYPuna.gif", textoFolleto:"Escrita junto a Peteco Carabajal,  es eso, el mensaje de la tierra como mujer al hombre, al ser humano, a su pareja amorosa.  Tierra Hembra es el tiempo que vivimos hoy. Rugen tiempos nuevos, de revolución, de cambio. Cada mañana buscamos renacer la esperanza por sobre todo y creer en nosotros más que nunca. Es el tiempo de la mujer, también el tiempo de la madre tierra, única, maltratada.", imagenFolleto:"https://www.uocra.net/App/programacionTeatro/tierraHembraFolleto.gif",activo: true},
            {id:4, nombre:"Recopilación",protagonistas:"Liliana Vitale", genero: "Musica Popular", fecha: "2021-04-13T21:25:43.511Z", valor:120.50, imagen:"https://www.uocra.net/App/programacionTeatro/recopilacion.gif", textoFolleto:"Escrita junto a Peteco Carabajal,  es eso, el mensaje de la tierra como mujer al hombre, al ser humano, a su pareja amorosa.  Tierra Hembra es el tiempo que vivimos hoy. Rugen tiempos nuevos, de revolución, de cambio. Cada mañana buscamos renacer la esperanza por sobre todo y creer en nosotros más que nunca. Es el tiempo de la mujer, también el tiempo de la madre tierra, única, maltratada.", imagenFolleto:"https://www.uocra.net/App/programacionTeatro/tierraHembraFolleto.gif",activo: true},
            {id:5, nombre:"La kermese de los malditos",protagonistas:"", genero: "Teatro", fecha: "2021-04-14T22:25:43.511Z", valor:0, imagen:"https://www.uocra.net/App/programacionTeatro/laKermeseDeLosMalditos.gif", textoFolleto:"Escrita junto a Peteco Carabajal,  es eso, el mensaje de la tierra como mujer al hombre, al ser humano, a su pareja amorosa.  Tierra Hembra es el tiempo que vivimos hoy. Rugen tiempos nuevos, de revolución, de cambio. Cada mañana buscamos renacer la esperanza por sobre todo y creer en nosotros más que nunca. Es el tiempo de la mujer, también el tiempo de la madre tierra, única, maltratada.", imagenFolleto:"https://www.uocra.net/App/programacionTeatro/tierraHembraFolleto.gif",activo: true},
        ]    
        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: programacion
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
/** @format */

import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    RECUPERO_SUCCESS,
    RECUPERO_ERROR,
    RENOVACION_SUCCESS,
    RENOVACION_ERROR,
    LOGON_ERROR,
    LOGON_SUCCESS,
    UPDATE_PROFILE_ERROR,
    UPDATE_PROFILE_SUCCESS,
    LOGOUT,
    LOGIN_SUCCESS_AUTO,
    ACTIVAR,
    ACTIVAR_SUCCESS,
    ACTIVAR_ERROR,
} from "./actions";
import { store } from "../store";
const initialState = {
    usuario: null,
    loginTimeStamp: null,
    logoutTimeStamp: null,
    recuperoTimeStamp: null,
    recuperoErrorTimeStamp: null,
    renovacionTimeStamp: null,
    logonTimeStamp: null,
    updateProfileTimeStamp: null,
    commandErrorTimeStamp: null,
    logonMessage: "",
    recuperoMessage: "",
    activarTimeStamp: null,
    activarErrorTimeStamp: null,
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
    };

    switch (action.type) {
        case LOGIN_SUCCESS_AUTO:
        case LOGIN_SUCCESS:
            newState.usuario = action.payload.receive;
            newState.loginTimeStamp = new Date().getTime();
            break;
        case LOGOUT:
            newState.logoutTimeStamp = new Date().getTime();
            newState.usuario = null;
            break;
        case RENOVACION_SUCCESS:
            newState.renovacionTimeStamp = new Date().getTime();
            break;
        case RECUPERO_SUCCESS:
            if (action.payload.receive.status) {
                newState.recuperoErrorTimeStamp = new Date().getTime();
            } else {
                newState.recuperoTimeStamp = new Date().getTime();
                newState.recuperoMessage = action.payload.receive;
            }
            break;
        case LOGON_SUCCESS:
            newState.logonTimeStamp = new Date().getTime();
            newState.logonMessage = action.payload.receive;
            break;
        case UPDATE_PROFILE_SUCCESS:
            newState.usuario.nombre = action.payload.receive.nombre;
            newState.usuario.apellido = action.payload.receive.apellido;
            newState.usuario.documento = action.payload.receive.documento;
            newState.usuario.tipoDocumento = action.payload.receive.tipoDocumento;
            newState.usuario.telefono = action.payload.receive.telefono;
            newState.updateProfileTimeStamp = new Date().getTime();
            break;
        case UPDATE_PROFILE_ERROR:
            newState.commandErrorTimeStamp = new Date().getTime();
            break;
        case LOGIN_ERROR || RECUPERO_ERROR || RENOVACION_ERROR || LOGON_ERROR:
            newState.commandErrorTimeStamp = new Date().getTime();
            break;
        case ACTIVAR_SUCCESS:
            if (action.payload.receive.status) {
                newState.activarErrorTimeStamp = new Date().getTime();
            } else {
                newState.activarTimeStamp = new Date().getTime();
            }

            break;
        case ACTIVAR_ERROR:
            newState.activarErrorTimeStamp = new Date().getTime();
            break;
    }
    return newState;
};

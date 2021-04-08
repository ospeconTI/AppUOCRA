/** @format */
import { LOGIN, RECUPERO, RENOVACION, LOGON, UPDATE_PROFILE, LOGIN_SUCCESS, RECUPERO_SUCCESS, RENOVACION_SUCCESS, LOGON_SUCCESS, UPDATE_PROFILE_SUCCESS, LOGIN_ERROR, RECUPERO_ERROR, RENOVACION_ERROR, LOGON_ERROR, UPDATE_PROFILE_ERROR, LOGIN_SUCCESS_AUTO, LOGOUT, DATOS_PERSONALES } from "./actions";

import { RESTAdd, RESTPatch, REST_ADD } from "../rest/actions";
import { goTo } from "../routing/actions";

import { apiRequest, apiAction, apiFunction } from "../../redux/api/actions";
import { loginFetch, logonFetch, recuperoFetch, renovacionFetch, updateProfileFetch } from "../fetchs";
import { showWarning } from "../ui/actions";

export const login = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === LOGIN) {
		const success = action.auto ? action.loginSuccessAuto : action.loginSuccess;
		dispatch(RESTAdd(loginFetch, { email: action.email.toLowerCase(), password: action.password }, success, action.loginError, "", ""));
	}
};

export const logout = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === LOGOUT) {
		dispatch(goTo("sesion"));
	}
};

export const recupero = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === RECUPERO) {
		dispatch(RESTAdd(recuperoFetch, action.email.toLowerCase(), RECUPERO_SUCCESS, RECUPERO_ERROR));
	}
};

export const renovacion = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === RENOVACION) {
		dispatch(RESTAdd(renovacionFetch, { ticket: action.ticket, password: action.password }, RENOVACION_SUCCESS, RENOVACION_ERROR));
	}
};

export const logon = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === LOGON) {
		dispatch(RESTAdd(logonFetch, action.body, LOGON_SUCCESS, LOGON_ERROR));
	}
};

export const updateProfile = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === UPDATE_PROFILE || action.type === DATOS_PERSONALES) {
		const body = { ...action };
		delete body.type;
		// dispatch(RESTPatch(updateProfileFetch, "", body, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_ERROR));
		dispatch(RESTAdd(updateProfileFetch, body, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_ERROR, action.token));
	}
};

export const processLogin = ({ dispatch, getState }) => (next) => (action) => {
	next(action);
	if (action.type === LOGIN_SUCCESS || action.type === LOGIN_SUCCESS_AUTO) {
		if (!action.payload.receive || action.payload.receive.message) {
			dispatch(showWarning("Erroneos", "Usuario o Password incorrecta, intente nuevamente", "fondoAmarillo", 4000));
		} else {
			//viewMode("main");
			dispatch(goTo("main"));
		}
	}
};

export const processRecupero = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === RECUPERO_SUCCESS) {
		dispatch(goTo("claveRecuperarMensaje"));
	}
};

export const processRenovado = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === RENOVACION_SUCCESS) {
		dispatch(goTo("sesion"));
	}
};

export const processCommand = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === LOGON_SUCCESS || action.type === UPDATE_PROFILE_SUCCESS || action.type === DATOS_PERSONALES) {
		if (action.type == LOGON_SUCCESS) {
			dispatch(goTo("registroMensaje"));
		}
		if (action.type === DATOS_PERSONALES) {
			dispatch(goTo("infoAdicional"));
		}
	}
};

export const processError = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === LOGIN_ERROR || action.type === RENOVACION_ERROR || action.type === RECUPERO_ERROR || action.type == LOGON_ERROR || action.type == UPDATE_PROFILE_ERROR) {
	}
};

export const middleware = [login, logout, recupero, renovacion, logon, updateProfile, processLogin, processRecupero, processRenovado, processCommand, processError];

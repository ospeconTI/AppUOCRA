import { GET, GET_SUCCESS, GET_ERROR, GET_POR_DNI, GET_POR_DNI_SUCCESS, GET_POR_DNI_ERROR, ADD, ADD_SUCCESS, ADD_ERROR, UPDATE, UPDATE_SUCCESS, UPDATE_ERROR, PATCH, PATCH_SUCCESS, PATCH_ERROR, REMOVE, REMOVE_SUCCESS, REMOVE_ERROR } from "./actions";

import { RESTAdd, RESTDelete, RESTUpdate, RESTPatch } from "../rest/actions";

import { apiRequest, apiAction } from "../api/actions";
import { RESTRequest } from "../rest/actions";

import { credencialSindicalFetch } from "../fetchs";

export const get =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET) {
			//dispatch(apiRequest(EncuestasOdataCabeceraDetalle, action.options, GET_SUCCESS, GET_ERROR));
		}
	};

export const get_por_dni =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_POR_DNI) {
			dispatch(RESTRequest(credencialSindicalFetch, "?documento=" + action.dni, GET_POR_DNI_SUCCESS, GET_POR_DNI_ERROR, ""));
		}
	};

export const add =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === ADD) {
			//			dispatch(RESTAdd(EncuestasOdataCabeceraDetalle, action.body, ADD_SUCCESS, ADD_ERROR, action.token));
			//dispatch(apiAction(EncuestasOdataCabeceraDetalle, action.body, null, null, ADD_SUCCESS, ADD_ERROR));
		}
	};

export const update =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === UPDATE) {
			//dispatch(RESTUpdate(EncuestasOdataCabeceraDetalle, action.id, action.body, UPADTE_SUCCESS, UPDATE_ERROR, action.token));
		}
	};

export const patch =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === PATCH) {
			//dispatch(RESTPatch(EncuestasOdataCabeceraDetalle, action.id, action.body, PATCH_SUCCESS, PATCH_ERROR, action.token));
		}
	};

export const remove =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === REMOVE) {
			//dispatch(RESTDelete(EncuestasOdataCabeceraDetalle, action.id, REMOVE_SUCCESS, REMOVE_ERROR, action.token));
		}
	};

export const processGet =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_SUCCESS || action.type === GET_POR_DNI_SUCCESS) {
		}
	};

export const processComand =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === ADD_SUCCESS || action.type === UPDATE_SUCCESS || action.type === REMOVE_SUCCESS || action.type === PATCH_SUCCESS) {
		}
	};

export const processError =
	({ dispatch }) =>
	(next) =>
	(action) => {
		next(action);
		if (action.type === GET_ERROR || action.type === GET_POR_DNI_ERROR || action.type === ADD_ERROR || action.type === UPDATE_ERROR || action.type === REMOVE_ERROR || action.type === PATCH_ERROR) {
		}
	};

export const middleware = [get, get_por_dni, add, update, patch, remove, processGet, processComand, processError];

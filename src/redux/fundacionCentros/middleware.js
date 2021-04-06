import { GET, GET_SUCCESS, GET_ERROR, ADD, ADD_SUCCESS, ADD_ERROR, UPDATE, UPDATE_SUCCESS, UPDATE_ERROR, PATCH, PATCH_SUCCESS, PATCH_ERROR, REMOVE, REMOVE_SUCCESS, REMOVE_ERROR, FUNDACION_CENTRO_MAPA, FUNDACION_CENTRO_MAPA_SUCCESS, FUNDACION_CENTRO_MAPA_ERROR } from "../fundacionCentros/actions";

import { RESTAdd, RESTDelete, RESTUpdate, RESTPatch } from "../rest/actions";

import { apiRequest, showSpinner, hideSpinner } from "../api/actions";
import { fetchJSON } from "../../libs/fetchJSON";

export const get = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === GET) {
		// let fundacionCentros = JSON
		// fundacionCentros.sort(function(a,b){return a["nombre"] > b["nombre"] ? 1 : -1});
		// dispatch({
		//     type: GET_SUCCESS,
		//     payload: {
		//       send: 1,
		//       receive: fundacionCentros
		//     }
		//   })
		fetchJSON(dispatch, "fundacionCentros.json", GET_SUCCESS, GET_ERROR);
	}
};

export const fundacionCentroMapa = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === FUNDACION_CENTRO_MAPA) {
		let jsonCentros = null;
		let jsonCursos = null;

		dispatch(showSpinner());
		fetch("/json/fundacionCentros.json")
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				jsonCentros = json;
				fetch("/json/fundacionCursos.json")
					.then((response) => {
						return response.json();
					})
					.then((json) => {
						dispatch(hideSpinner());
						jsonCursos = json;
						var cursos = jsonCursos.filter((a) => (action.tipoCurso != -1 ? a.tipo == action.tipoCurso : true) && (action.fundacionEspecialidadesId != -1 ? a.fundacionEspecialidadesId == action.especialidad : true) && (action.duracion != "" ? a.duracion == action.duracion : true));
						// Centros para la especialidad elegida
						var centros = jsonCentros.filter((centro) => {
							return cursos.some((curso) => {
								return centro.id == curso.fundacionCentrosId && (action.provincia != "" ? centro.provincia == action.provincia : true) && (action.localidad != "" ? centro.localidad == action.localidad : true);
							});
						});
						dispatch({
							type: FUNDACION_CENTRO_MAPA_SUCCESS,
							payload: {
								send: 1,
								receive: centros,
							},
						});
					})
					.catch((error) => {
						dispatch(hideSpinner());
						dispatch({
							type: FUNDACION_CENTRO_MAPA_ERROR,
						});
					});
			})
			.catch((error) => {
				dispatch(hideSpinner());
				dispatch({
					type: FUNDACION_CENTRO_MAPA_ERROR,
				});
			});

		// let jsonCentros = JSON;
		// let jsonCursos = JSONCURSOS;

		// var cursos = jsonCursos.filter((a) => (action.tipoCurso != -1 ? a.tipo == action.tipoCurso : true) && (action.fundacionEspecialidadesId != -1 ? a.fundacionEspecialidadesId == action.especialidad : true) && (action.duracion != "" ? a.duracion == action.duracion : true));
		// // Centros para la especialidad elegida
		// var centros = jsonCentros.filter((centro) => {
		// 	return cursos.some((curso) => {
		// 		return centro.id == curso.fundacionCentrosId && (action.provincia != "" ? centro.provincia == action.provincia : true) && (action.localidad != "" ? centro.localidad == action.localidad : true);
		// 	});
		// });
		// dispatch({
		// 	type: FUNDACION_CENTRO_MAPA_SUCCESS,
		// 	payload: {
		// 		send: 1,
		// 		receive: centros,
		// 	},
		// });
	}
};

export const add = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === ADD) {
		//dispatch(RESTAdd(ikePuestos, action.body, ADD_SUCCESS, ADD_ERROR, action.token))
	}
};

export const update = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === UPDATE) {
		//dispatch(RESTUpdate(ikePuestos, action.id, action.body, UPDATE_SUCCESS, UPDATE_ERROR, action.token))
	}
};

export const patch = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === PATCH) {
		//dispatch(RESTPatch(ikePuestos, action.id, action.body, PATCH_SUCCESS, PATCH_ERROR, action.token))
	}
};

export const remove = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === REMOVE) {
		//dispatch(RESTDelete(ikePuestos, action.id, REMOVE_SUCCESS, REMOVE_ERROR, action.token))
	}
};

export const processGet = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === GET_SUCCESS) {
	}
};

export const processComand = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === ADD_SUCCESS || action.type === UPDATE_SUCCESS || action.type === REMOVE_SUCCESS || action.type === PATCH_SUCCESS) {
	}
};

export const processError = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === GET_ERROR || action.type === ADD_ERROR || action.type === UPDATE_ERROR || action.type === REMOVE_ERROR || action.type === PATCH_ERROR) {
	}
};

export const middleware = [get, add, update, patch, remove, processGet, processComand, processError, fundacionCentroMapa];

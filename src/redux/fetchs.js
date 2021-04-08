/** @format */

import { ODataEntity, ODataFetchFactory } from "@brunomon/odata-fetch-factory";
import { fetchFactory } from "../libs/fetchFactory";

let webApiLogin = SERVICE_URL_LOGIN + "/api/Autorizacion";

const webApiUsuariosOdata = SERVICE_URL_LOGIN;

const usuarioOdata = ODataFetchFactory({
	fetch: fetch,
	domain: webApiUsuariosOdata,
});

export const loginFetch = fetchFactory(webApiLogin, "login");
export const logonFetch = fetchFactory(webApiLogin, "logon");
export const recuperoFetch = fetchFactory(webApiLogin, "recupero");
export const renovacionFetch = fetchFactory(webApiLogin, "renovacion");
export const updateProfileFetch = fetchFactory(webApiLogin, "updateProfile");
export const usuarioOdataFetch = ODataEntity(usuarioOdata, "UsuarioQuery");

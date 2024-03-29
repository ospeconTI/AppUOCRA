/** @format */

export const LOGIN = "[autorizacion] LOGIN";
export const LOGOUT = "[autorizacion] LOGOUT";
export const RECUPERO = "[autorizacion] RECUPERO";
export const RENOVACION = "[autorizacion] RENOVACION";
export const LOGON = "[autorizacion] LOGON";
export const UPDATE_PROFILE = "[autorizacion] UUPDATE_PROFILE";

export const LOGIN_SUCCESS = "[autorizacion] LOGIN success";
export const LOGIN_SUCCESS_AUTO = "[autorizacion] LOGIN success auto";
export const RECUPERO_SUCCESS = "[autorizacion] RECUPERO success";
export const RENOVACION_SUCCESS = "[autorizacion] RENOVACION success";
export const LOGON_SUCCESS = "[autorizacion] LOGON_SUCCESS";
export const UPDATE_PROFILE_SUCCESS = "[autorizacion] UUPDATE_PROFILE_SUCCESS";

export const LOGIN_ERROR = "[autorizacion] LOGIN error";
export const RECUPERO_ERROR = "[autorizacion] RECUPERO error";
export const RENOVACION_ERROR = "[autorizacion] RENOVACION error";
export const LOGON_ERROR = "[autorizacion] LOGON_ERROR";
export const UPDATE_PROFILE_ERROR = "[autorizacion] UUPDATE_PROFILE_ERROR";
export const DATOS_PERSONALES = "[autorizacion] DATOS_PERSONALES";

export const ACTIVAR = "[autorizacion] ACTIVAR";
export const ACTIVAR_SUCCESS = "[autorizacion] ACTIVAR SUCCESS";
export const ACTIVAR_ERROR = "[autorizacion] ACTIVAR ERROR";

export const login = (email, password, auto = false, loginSuccess = LOGIN_SUCCESS, loginSuccessAuto = LOGIN_SUCCESS_AUTO, loginError = LOGIN_ERROR) => ({
    type: LOGIN,
    email: email,
    password: password,
    auto: auto,
    loginSuccess: loginSuccess,
    loginSuccessAuto: loginSuccessAuto,
    loginError: loginError,
});

export const logout = () => ({
    type: LOGOUT,
});

export const recupero = (email, password) => ({
    type: RECUPERO,
    password: password,
    email: email,
});

export const renovacion = (ticket, password) => ({
    type: RENOVACION,
    ticket: ticket,
    password: password,
});
export const activar = (codigo) => ({
    type: ACTIVAR,
    codigo: codigo,
});

export const logon = (nombre, apellido, email, documento, tipoDocumento, telefono, password) => ({
    type: LOGON,
    body: { Apellido: apellido, Nombre: nombre, Email: email, Documento: documento, TipoDocumento: tipoDocumento, Telefono: telefono, Password: password },
});

export const updateProfile = (nombre, apellido, documento, tipoDocumento, telefono, foto, sexo, fechaNacimiento, lugar, token) => ({
    type: UPDATE_PROFILE,
    foto: foto,
    nombre: nombre,
    apellido: apellido,
    documento: documento,
    tipoDocumento: tipoDocumento,
    telefono: telefono,
    sexo: sexo,
    fechaNacimiento: fechaNacimiento,
    lugar: lugar,
    token: token,
});

export const datosPersonales = (foto, sexo, telefono, fechaNacimiento, lugar, token) => ({
    type: DATOS_PERSONALES,
    Foto: foto,
    Sexo: sexo,
    Telefono: telefono,
    FechaNacimiento: fechaNacimiento,
    LugarResidencia: lugar,
    token: token,
});

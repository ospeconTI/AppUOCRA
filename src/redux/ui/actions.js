//Oculta o muestra spinner
export const SHOW_SPINNER = "[ui] show spinner";
export const HIDE_SPINNER = "[ui] hide spinner";

//oculta o muestra ventana de error
export const SHOW_ERROR = "[ui] show error";
export const HIDE_ERROR = "[ui] hide error";

//define el tamaño,forma orientacion de la UI
export const CAPTURE_MEDIA = "[ui] capture media";
export const SET_MEDIA = "[ui] set media";
export const SET_MEDIA_ORIENTATION = "[ui] set media orientation";

export const SELECTION = "[ui] selection";

export const VELO = "[ui] velo";

export const VER_PANTALLA_LOGIN = "[ui] ver pantalla login";
export const VER_PANTALLA_MIEMBRO = "[ui] ver pantalla miembro";
export const VER_PANTALLA_CAMBIO_CLAVE = "[ui] ver pantalla cambio clave";
export const VER_PANTALLA_PASES = "[ui] ver pantalla pases";
export const VER_PANTALLA_CAMBIO_ADMINISTRADOR = "[ui] ver pantalla cambio administrador";
export const VER_PANTALLA_CAMBIO_NOMBRE_CUENTA = "[ui] ver pantalla cambio nombre cuenta";
export const VER_PANTALLA_USUARIO_ASIGNAR = "[ui] ver pantalla usuario asignar";
//oculta o muestra ventana de error
export const SHOW_WARNING = "[ui] show warning";
export const HIDE_WARNING = "[ui] hide warning";

export const SHOW_CONFIRMACION = "[ui] show confirmacion";
export const HIDE_CONFIRMACION = "[ui] hide confirmacion";
export const CONFIRMACION_OK = "[ui] confirmacion ok";
export const CONFIRMACION_CANCEL = "[ui] confirmacion cancel";

export const MAPA_CLICK = "[ui] mapa click";

export const IDIOMA = "[ui] IDIOMA";

export const URLS = "[ui] urls";

export const MENU_ACTIVAR = "[ui] menu activar";

export const VIDEO = "[ui] video";

export const showSpinner = () => ({
	type: SHOW_SPINNER,
});
export const hideSpinner = () => ({
	type: HIDE_SPINNER,
});

export const showError = (message) => ({
	type: SHOW_ERROR,
	message: message,
});
export const hideError = () => ({
	type: HIDE_ERROR,
});

export const showConfirmacion = (message, okCallBack, cancelCallBack) => ({
	type: SHOW_CONFIRMACION,
	message: message,
	okCallBack: okCallBack,
	cancelCallBack: cancelCallBack,
});
export const hideConfirmacion = () => ({
	type: HIDE_CONFIRMACION,
});
export const confirmacionOK = () => ({
	type: CONFIRMACION_OK,
});
export const confirmacionCancel = () => ({
	type: CONFIRMACION_CANCEL,
});

export const showWarning = (titulo = "", subTitulo = "", backgroundColor = "fondoInformacion", timeOut = 1500) => ({
	type: SHOW_WARNING,
	titulo: titulo,
	subTitulo: subTitulo,
	backgroundColor: backgroundColor,
	timeOut: timeOut,
});
export const hideWarning = () => ({
	type: HIDE_WARNING,
});

export const captureMedia = () => ({
	type: CAPTURE_MEDIA,
});
export const setMedia = (size) => ({
	type: SET_MEDIA,
	size: size,
});

export const setMediaOrientation = (orientation) => ({
	type: SET_MEDIA_ORIENTATION,
	orientation: orientation,
});

export const selection = (option) => ({
	type: SELECTION,
	option: option,
});

export const velo = (option) => ({
	type: VELO,
	option: option,
});

export const verPantallaLogin = (option) => ({
	type: VER_PANTALLA_LOGIN,
	option: option,
});

export const verPantallaMiembro = (option) => ({
	type: VER_PANTALLA_MIEMBRO,
	option: option,
});

export const verPantallaCambioClave = (option) => ({
	type: VER_PANTALLA_CAMBIO_CLAVE,
	option: option,
});

export const verPantallaPases = (option) => ({
	type: VER_PANTALLA_PASES,
	option: option,
});

export const verPantallaCambioAdministrador = (option, cuentaId, cuentaNombre, cuentaMail, administradorNombre) => ({
	type: VER_PANTALLA_CAMBIO_ADMINISTRADOR,
	option: option,
	cuentaId: cuentaId,
	cuentaNombre: cuentaNombre,
	cuentaMail: cuentaMail,
	administradorNombre: administradorNombre,
});

export const verPantallaCambioNombreCuenta = (option, cuentaId, cuentaNombre, cuentaMail, administradorNombre) => ({
	type: VER_PANTALLA_CAMBIO_NOMBRE_CUENTA,
	option: option,
	cuentaId: cuentaId,
	cuentaNombre: cuentaNombre,
	cuentaMail: cuentaMail,
	administradorNombre: administradorNombre,
});

export const verPantallaUsuarioAsignar = (option, cuentaId, cuentaNombre, cuentaMail, administradorNombre, creditos) => ({
	type: VER_PANTALLA_USUARIO_ASIGNAR,
	option: option,
	cuentaId: cuentaId,
	cuentaNombre: cuentaNombre,
	cuentaMail: cuentaMail,
	administradorNombre: administradorNombre,
	creditos: creditos,
});

export const mapaClick = (feature, event) => ({
	type: MAPA_CLICK,
	feature: feature,
	event: event,
});

export const idioma = () => ({
	type: IDIOMA,
});

export const urls = (servidor, imagenes) => ({
	type: URLS,
	servidor: servidor,
	imagenes: imagenes,
});

export const menuActivar = () => ({
	type: MENU_ACTIVAR,
});

export const video = (link) => ({
	type: VIDEO,
	link: link,
});

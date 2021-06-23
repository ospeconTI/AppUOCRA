import {
    SHOW_SPINNER,
    HIDE_SPINNER,
    SHOW_ERROR,
    HIDE_ERROR,
    SET_MEDIA,
    SET_MEDIA_ORIENTATION,
    SELECTION,
    VELO,
    VER_PANTALLA_LOGIN,
    VER_PANTALLA_MIEMBRO,
    VER_PANTALLA_CAMBIO_CLAVE,
    VER_PANTALLA_PASES,
    VER_PANTALLA_CAMBIO_ADMINISTRADOR,
    VER_PANTALLA_CAMBIO_NOMBRE_CUENTA,
    VER_PANTALLA_USUARIO_ASIGNAR,
    SHOW_WARNING,
    HIDE_WARNING,
    MAPA_CLICK,
    IDIOMA,
    URLS,
    MENU_ACTIVAR,
    VIDEO,
    SHOW_CONFIRMACION,
    HIDE_CONFIRMACION,
} from "./actions";

const initialState = {
    spinner: {
        loading: 0,
    },
    error: {
        message: "",
        timestamp: null,
    },
    media: {
        size: "large",
        orientation: "landscape",
        timeStamp: null,
    },
    menu: {
        timeStamp: null,
        option: "",
    },
    velo: false,
    verPantalla: {
        login: false,
        miembro: false,
        cambioClave: false,
        pases: false,
        cambioAdministrador: false,
        cambioAdministradorCuenta: {
            cuentaId: 0,
            cuentaNombre: "",
            cuentaMail: "",
            administradorNombre: "",
        },
        cambioNombreCuenta: false,
        cambioNombreCuentaCuenta: {
            cuentaId: 0,
            cuentaNombre: "",
            cuentaMail: "",
            administradorNombre: "",
        },
        usuarioAsignar: false,
        usuarioAsignarCuenta: {
            cuentaId: 0,
            cuentaNombre: "",
            cuentaMail: "",
            administradorNombre: "",
            creditos: 0,
        },
    },
    warning: {
        titulo: "",
        subTitulo: "",
        backgroundColor: "fondoInformacion",
        timeStamp: null,
        hidden: true,
        tineOut: 1500,
    },
    loginOk: false,
    mapa: {
        feature: null,
        event: null,
        timeStamp: null,
    },
    urls: {
        servidor: null,
        imagenes: null,
    },
    idioma: "ES",
    menuActivar: null,
    video: null,
    confirmacion: {
        showTimeStamp: null,
        hideTimeStamp: null,
        okCallBack: null,
        cancelCallBack: null,
        message: null,
    },
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
    };

    switch (action.type) {
        case SHOW_SPINNER:
            newState.spinner.loading += 1;
            break;
        case HIDE_SPINNER:
            newState.spinner.loading -= 1;
            break;
        case SHOW_CONFIRMACION:
            newState.confirmacion.showTimeStamp = new Date().getTime();
            newState.confirmacion.message = action.message || "Sin pregunta definida";
            newState.confirmacion.okCallBack = action.okCallBack || null;
            newState.confirmacion.cancelCallBack = action.cancelCallBack || null;
            break;
        case HIDE_CONFIRMACION:
            newState.confirmacion.hideTimeStamp = new Date().getTime();
            break;
        case SHOW_ERROR:
            newState.error.timeStamp = new Date().getTime();
            newState.error.messages = action.message;
            break;
        case HIDE_ERROR:
            newState.error.timeStamp = new Date().getTime();
            newState.error.messages = null;
            break;
        case SET_MEDIA:
            newState.media.size = action.size;
            newState.media.timeStamp = new Date().getTime();
            break;
        case SET_MEDIA_ORIENTATION:
            newState.media.orientation = action.orientation;
            newState.media.timeStamp = new Date().getTime();
            break;
        case SELECTION:
            newState.menu.timeStamp = new Date().getTime();
            newState.menu.option = action.option;
            break;
        case VELO:
            newState.velo = action.option;
            break;
        case VER_PANTALLA_LOGIN:
            newState.verPantalla.login = action.option;
            break;
        case VER_PANTALLA_MIEMBRO:
            newState.verPantalla.miembro = action.option;
            break;
        case VER_PANTALLA_CAMBIO_CLAVE:
            newState.verPantalla.cambioClave = action.option;
            break;
        case VER_PANTALLA_PASES:
            newState.verPantalla.pases = action.option;
            break;
        case VER_PANTALLA_CAMBIO_ADMINISTRADOR:
            newState.verPantalla.cambioAdministrador = action.option;
            newState.verPantalla.cambioAdministradorCuenta.cuentaId = action.cuentaId;
            newState.verPantalla.cambioAdministradorCuenta.cuentaNombre = action.cuentaNombre;
            newState.verPantalla.cambioAdministradorCuenta.cuentaMail = action.cuentaMail;
            newState.verPantalla.cambioAdministradorCuenta.administradorNombre = action.administradorNombre;
            break;
        case VER_PANTALLA_CAMBIO_NOMBRE_CUENTA:
            newState.verPantalla.cambioNombreCuenta = action.option;
            newState.verPantalla.cambioNombreCuentaCuenta.cuentaId = action.cuentaId;
            newState.verPantalla.cambioNombreCuentaCuenta.cuentaNombre = action.cuentaNombre;
            newState.verPantalla.cambioNombreCuentaCuenta.cuentaMail = action.cuentaMail;
            newState.verPantalla.cambioNombreCuentaCuenta.administradorNombre = action.administradorNombre;
            break;
        case VER_PANTALLA_USUARIO_ASIGNAR:
            newState.verPantalla.usuarioAsignar = action.option;
            newState.verPantalla.usuarioAsignarCuenta.cuentaId = action.cuentaId;
            newState.verPantalla.usuarioAsignarCuenta.cuentaNombre = action.cuentaNombre;
            newState.verPantalla.usuarioAsignarCuenta.cuentaMail = action.cuentaMail;
            newState.verPantalla.usuarioAsignarCuenta.administradorNombre = action.administradorNombre;
            newState.verPantalla.usuarioAsignarCuenta.creditos = action.creditos;
            break;
        case SHOW_WARNING:
            newState.warning.timeStamp = new Date().getTime();
            newState.warning.titulo = action.titulo;
            newState.warning.subTitulo = action.subTitulo;
            newState.warning.backgroundColor = action.backgroundColor;
            newState.warning.hidden = false;
            newState.warning.timeOut = action.timeOut;
            break;
        case HIDE_WARNING:
            newState.warning.timeStamp = new Date().getTime();
            newState.warning.titulo = "";
            newState.warning.subTitulo = "";
            newState.warning.hidden = true;
            newState.warning.timeOut = 1500;
            break;
        case MAPA_CLICK:
            newState.mapa.feature = action.feature;
            newState.mapa.event = action.event;
            newState.mapa.timeStamp = new Date().getTime();
            break;
        case IDIOMA:
            let myIdioma = (navigator.language || navigator.userLanguage).split("-")[0].toUpperCase();
            if (myIdioma != "ES") myIdioma = "ES";
            newState.idioma = myIdioma;
            break;
        case URLS:
            newState.urls.servidor = action.servidor;
            newState.urls.imagenes = action.imagenes;
            break;
        case MENU_ACTIVAR:
            newState.menuActivar = new Date().getTime();
            break;
        case VIDEO:
            newState.video = action.link;
            break;
    }
    return newState;
};

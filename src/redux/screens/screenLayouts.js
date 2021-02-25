/** @format */

import { ALL_BODY, HEADER_BODY_FOOT, BODY_FOOT, HEADER_BODY, SLIDER_HEADER_BODY } from "./layouts";

export const screenLayuts = {
    splash: {
        small: ALL_BODY,
        medium: ALL_BODY,
        large: ALL_BODY,
    },
    sesion: {
        small: ALL_BODY,
        medium: ALL_BODY,
        large: ALL_BODY,
    },
    claveRecuperar: {
        small: ALL_BODY,
        medium: ALL_BODY,
        large: ALL_BODY,
    },
    claveRecuperarMensaje: {
        small: ALL_BODY,
        medium: ALL_BODY,
        large: ALL_BODY,
    },
    claveCambio: {
        small: ALL_BODY,
        medium: ALL_BODY,
        large: ALL_BODY,
    },
    claveCambioMensaje: {
        small: ALL_BODY,
        medium: ALL_BODY,
        large: ALL_BODY,
    },
    registro: {
        small: ALL_BODY,
        medium: ALL_BODY,
        large: ALL_BODY,
    },
    registroMensaje: {
        small: ALL_BODY,
        medium: ALL_BODY,
        large: ALL_BODY,
    },
    main: {
        small: HEADER_BODY_FOOT,
        medium: HEADER_BODY_FOOT,
        large: HEADER_BODY_FOOT,
    },
    salud: {
        small: HEADER_BODY_FOOT,
        medium: HEADER_BODY_FOOT,
        large: HEADER_BODY_FOOT,
    },
    compras: {
        small: HEADER_BODY_FOOT,
        medium: HEADER_BODY_FOOT,
        large: HEADER_BODY_FOOT,
    },
    cultura: {
        small: HEADER_BODY_FOOT,
        medium: HEADER_BODY_FOOT,
        large: HEADER_BODY_FOOT,
    },
    tv: {
        small: HEADER_BODY_FOOT,
        medium: HEADER_BODY_FOOT,
        large: HEADER_BODY_FOOT,
    },
    moecra: {
        small: HEADER_BODY_FOOT,
        medium: HEADER_BODY_FOOT,
        large: HEADER_BODY_FOOT,
    },
    cemapsMapa: {
        small: HEADER_BODY_FOOT,
        medium: HEADER_BODY_FOOT,
        large: HEADER_BODY_FOOT,
    },
    notificaciones: {
        small: HEADER_BODY_FOOT,
        medium: HEADER_BODY_FOOT,
        large: HEADER_BODY_FOOT,
    },
    cartilla: {
        small: HEADER_BODY_FOOT,
        medium: HEADER_BODY_FOOT,
        large: HEADER_BODY_FOOT,
    },
    cartillaDetalle: {
        small: HEADER_BODY_FOOT,
        medium: HEADER_BODY_FOOT,
        large: HEADER_BODY_FOOT,
    },
    turnos: {
        small: HEADER_BODY_FOOT,
        medium: HEADER_BODY_FOOT,
        large: HEADER_BODY_FOOT,
    },
    franchin: {
        small: HEADER_BODY_FOOT,
        medium: HEADER_BODY_FOOT,
        large: HEADER_BODY_FOOT,
    },
    emergencias: {
        small: HEADER_BODY_FOOT,
        medium: HEADER_BODY_FOOT,
        large: HEADER_BODY_FOOT,
    },
    bonos: {
        small: HEADER_BODY,
        medium: HEADER_BODY,
        large: HEADER_BODY,
    },
};

export const getLayout = (state) => {
    if (!state.screen.layouts[state.ui.media.size]) throw "no hay un layout definido en el state para media-size:" + state.ui.media.size;
    let layout = state.screen.layouts[state.ui.media.size];
    if (state.screen.layouts[state.ui.media.size][state.ui.media.orientation]) {
        layout = state.screen.layouts[state.ui.media.size][state.ui.media.orientation];
    }
    return layout;
};

export const isInLayout = (state, area) => {
    return getLayout(state).areas.find((a) => a == area);
};

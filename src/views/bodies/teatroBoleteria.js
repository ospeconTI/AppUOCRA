/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goHistoryPrev, goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showConfirmacion, showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { OLComponent } from "../componentes/ol-map";
import { Overlay } from "ol/Overlay";
import { reserva, get as getProgramacion } from "../../redux/programacion/actions";
import { SVGS } from "../../../assets/icons/svgs";

export const featureListener = function (event) {
    console.log("featureListenerCalled");
};

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const PROGRAMACION_DATOS = "programacion.timeStamp";
const PROGRAMACION_ERROR = "programacion.errorTimeStamp";

export class teatroBoleteriaScreen extends connect(store, PROGRAMACION_ERROR, PROGRAMACION_DATOS, MEDIA_CHANGE, SCREEN)(LitElement) {
    constructor() {
        super();
        this.hidden = true;
        this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
        this.gremioBoleteria = require("../../../assets/idiomas/teatroBoleteria.json");
        this.idiomaGenerico = require("../../../assets/idiomas/generic.json");
        this.programacion = null;
    }

    static get styles() {
        return css`
            ${gridLayout}
            ${button}
			${input}

			:host {
                display: grid;
                position: relative;
                background-color: var(--color-blanco);
                overflow: hidden;
                padding: 0 !important;
            }
            :host([hidden]) {
                display: none;
            }
            #cuerpo {
                display: grid;
                height: 100%;
                grid-auto-flow: row;
                background-color: var(--color-blanco);
            }
            #titulo {
                padding: 0.8vh 0 0.8vh 0;
                text-align: center;
                font-size: 3vh;
                background-color: var(--color-verde-claro);
                color: var(--color-blanco);
            }
            svg {
                height: 2vh;
                width: 2vh;
                stroke: var(--color-amarillo);
                fill: var(--color-blanco);
            }
            .panel {
                display: grid;
                height: 75vh;
                grid-auto-flow: row;
                grid-gap: 0.2rem;
                align-content: start;
                overflow-x: hidden;
                overflow-y: auto;
            }
            .notas {
                width: 95vw;
                justify-self: center;
                grid-template-columns: auto 1fr;
                padding: 0 !important;
                grid-gap: 0 !important;
            }
            .notaDetImg {
                width: 36vw;
                height: 24vw;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                justify-self: center;
                border-radius: 0.4rem;
                cursor: pointer;
            }
            .notaTitTxt {
                color: var(--primary-color);
                justify-self: left;
                font-size: var(--font-header-h1-size);
            }
            .notaNomTxt {
                color: var(--color-negro);
                justify-self: left;
                font-size: var(--font-header-h1-menos-size);
                font-weight: 900;
            }
            .notaDetTxt {
                color: var(--color-gris-oscuro);
                justify-self: left;
                font-size: var(--font-header-h2-size);
            }
            :host([media-size="small"]) .notaDetTxt {
                font-size: var(--font-label-size);
            }
            *[hidden] {
                display: none;
            }
        `;
    }
    render() {
        if (this.programacion) {
            return html`
                <div id="cuerpo">
                    <div id="titulo">${this.gremioBoleteria[this.idioma].titulo}</div>
                    <div class="panel">
                        <div style="padding:0.5rem"></div>
                        ${this.programacion.map((item, index) => {
                            return html`
                                <div ?hidden="${index == 0}">
                                    <hr id="linea" />
                                </div>
                                <div class="grid notas" style="align-items: stretch;">
                                    <div class="notaDetImg" style="background-image: url('${item.imagen}')" .item="${item}" @click=${this.detalle}></div>
                                    <div class="grid row" style="grid-gap:0">
                                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr">
                                            <div id="bullet">${SVGS["BULLET"]}</div>
                                            <div class="notaTitTxt">${this.idiomaGenerico[this.idioma].diasLargo[new Date(item.fecha).getDay()] + " " + new Date(item.fecha).getDate()}</div>
                                        </div>
                                        <div class="notaNomTxt" style="font-weight:900">${item.protagonistas}</div>
                                        <div class="notaDetTxt">"${item.nombre}"</div>
                                        <div class="notaDetTxt" style="font-style:italic">${item.genero}</div>
                                        <div class="notaDetTxt">
                                            ${new Date(item.fecha).getHours() +
                                            ":" +
                                            new Date(item.fecha).getMinutes() +
                                            "hs. - " +
                                            (item.valor == 0 ? this.gremioBoleteria[this.idioma].entradaLibre : this.gremioBoleteria[this.idioma].entradaPaga + item.valor)}
                                        </div>
                                    </div>
                                </div>
                                <div style="padding:.5rem"></div>
                                <button btn1 @click=${this.reserva} .item="${item}" style="width:10rem;justify-self: center;background-color:var(--color-amarillo);">RESERVAR</button>
                            `;
                        })}
                        <div style="padding-top:2rem"></div>
                    </div>
                </div>
            `;
        } else {
            if (this.current == "teatroBoleteria" && this.programacion == 0) {
                return html`<msgnoconeccion-component @click="${this.atras}" texto="Haga click volver" style="cursor:pointer"></msgnoconeccion-component>; `;
            }
        }
    }
    reserva(e) {
        let usu = store.getState().autorizacion.usuario;
        if (!usu) {
            store.dispatch(
                showConfirmacion(
                    "Debe estar logueado para realizar esta operacion, ¿ quiere loguearse ahora ?",
                    () => {
                        store.dispatch(goTo("sesion"));
                    },
                    null
                )
            );
        } else {
            store.dispatch(reserva(e.currentTarget.item));
            store.dispatch(goTo("teatroReserva"));
        }

        // let item = e.currentTarget.item;
        // var usu = store.getState().autorizacion.usuario;
        // var body = "<br><b>DATOS DE LA RESERVA</b>";
        // body = body + "<br>Fecha: " + this.idiomaGenerico[this.idioma].diasLargo[new Date(item.fecha).getDay()] + " " + new Date(item.fecha).getDate() + " de " + this.idiomaGenerico[this.idioma].mesLargo[new Date(item.fecha).getMonth()] + ".";
        // body = body + "<br>Hora: " + new Date(item.fecha).getHours() + ":" + new Date(item.fecha).getMinutes() + "hs.";
        // body = body + "<br>Función: " + item.protagonistas + ", " + item.nombre;
        // body = body + "<br>Género: " + item.genero;
        // body = body + "<br><hr><b>DATOS DE REGISTRO DE LA APP</b>";
        // body = body + "<br>Nombre: " + usu.nombre + "<br>Apellido: " + usu.apellido + "<br>Documento: " + usu.documento + "<br>E-Mail: " + usu.email + "<br>Teléfono: " + usu.telefono;
        // store.dispatch(sendMail("Reserva teatro", body, "appuocra@gmail.com"));
    }
    atras() {
        store.dispatch(goHistoryPrev());
    }
    detalle(e) {
        store.dispatch(reserva(e.currentTarget.item));
        store.dispatch(goTo("teatroProgramacionDetalle"));
    }
    closer() {
        var closer = this.shadowRoot.querySelector("#popup");
        if (!closer.hasAttribute("hidden")) {
            closer.setAttribute("hidden", "");
        }
    }

    stateChanged(state, name) {
        if (name == SCREEN || name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size;
            this.hidden = true;
            this.current = state.screen.name;
            const haveBodyArea = isInLayout(state, this.area);
            const SeMuestraEnUnasDeEstasPantallas = "-teatroBoleteria-".indexOf("-" + state.screen.name + "-") != -1;
            if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
                this.hidden = false;
                if (state.programacion.entities) {
                    this.update();
                } else {
                    store.dispatch(getProgramacion());
                }
            }
        }

        if (name == PROGRAMACION_DATOS) {
            this.programacion = state.programacion.entities.filter((a) => a.activo == 1);
            this.update();
        }
        if (name == PROGRAMACION_ERROR) {
            this.programacion = 0;
            this.update();
        }
    }

    volver() {
        store.dispatch(goTo("inicial"));
    }

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true,
                attribute: "media-size",
            },
            layout: {
                type: String,
                reflect: true,
            },
            hidden: {
                type: Boolean,
                reflect: true,
            },
            area: {
                type: String,
            },
            current: {
                type: String,
                reflect: true,
            },
        };
    }
}
window.customElements.define("teatroboleteria-screen", teatroBoleteriaScreen);

/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goHistoryPrev, goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { usuario as setUsuario } from "../../redux/usuarios/actions";
import { login, activar } from "../../redux/autorizacion/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const ACTIVAR = "autorizacion.activarTimeStamp";
const ACTIVAR_ERROR = "autorizacion.activarErrorTimeStamp";

export class activacionScreen extends connect(store, MEDIA_CHANGE, SCREEN, ACTIVAR, ACTIVAR_ERROR)(LitElement) {
    constructor() {
        super();
        this.hidden = true;
        this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
        this.activacion = require("../../../assets/idiomas/activacion.json");
    }

    static get styles() {
        return css`
            ${gridLayout}
            ${button}
			${input}

			:host {
                display: grid;
                position: relative;
                background-image: linear-gradient(var(--color-azul-oscuro), var(--primary-color));
                overflow: hidden;
                justify-content: center;
                align-items: center;
                height: 100vh;
                width: 100vw;
                padding: 0 !important;
                display: grid;
            }
            :host([hidden]) {
                display: none;
            }
            #cuerpo {
                display: grid;
                height: 100%;
                width: 90vw;
                grid-gap: 0rem;
                grid-template-rows: 25% 25% 50%;
                border-radius: 2rem;
                background-color: transparent;
                align-self: center;
            }
            :host([media-size="large"]) #cuerpo {
                width: 80vw;
            }
            #titulo {
                height: 100%;
                width: 100%;
                background-image: url("https://app.uocra.org/images/titulo_red_social.png");
                background-repeat: no-repeat;
                background-position: center;
                background-size: auto 10vh;
            }
            #datos {
                width: 100%;
                justify-self: center;
            }
            :host(:not([media-size="small"])) #datos {
                width: 50%;
            }
            #linea {
                color: var(--color-blanco);
                width: 80%;
            }
            .texto {
                font-size: 3vh !important;
                font-weight: var(--font-label-weight);
                text-align: center;
                font-style: italic;
            }
            :host([media-size="large"]) .texto {
                font-size: 1.5vw;
            }
            .miBoton {
                background-color: var(--color-amarillo) !important;
                height: 7vh;
                align-self: center;
            }
            .cartel h3 {
                color: white;
                text-align: center;
            }
        `;
    }
    render() {
        return html`
            <div id="cuerpo">
                <div id="titulo"></div>
                <div class="grid cartel row center">
                    <hr id="linea" />
                    <h3>PARA ACTIVAR TU CUENTA INGRESA EL CODIGO DE ACTIVACION QUE LLEGO A TU CUENTA DE MAIL</h3>
                    <hr id="linea" />
                </div>

                <div id="datos" class="grid row">
                    <div class="input">
                        <label class="texto" style="color:var(--color-blanco)">${this.activacion[this.idioma].codigo}</label>
                        <input type="text" id="codigo" autocomplete="off" value="" />
                        <div>Debe cargar el código recibido por el Email</div>
                    </div>
                    <button btn1 class="miBoton" @click="${this.activar}">${this.activacion[this.idioma].activar}</button>
                    <button btn2 class="btnVolver" @click="${this.volver}">${this.activacion[this.idioma].volver}</button>
                </div>
            </div>
        `;
    }
    stateChanged(state, name) {
        if (name == SCREEN || name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size;
            this.hidden = true;
            this.current = state.screen.name;
            const haveBodyArea = isInLayout(state, this.area);
            const SeMuestraEnUnasDeEstasPantallas = "-activacion-".indexOf("-" + state.screen.name + "-") != -1;
            if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
                this.hidden = false;
                if (this.shadowRoot.querySelector("#codigo")) {
                    this.shadowRoot.querySelector("#codigo").value = "";
                }
            }
            this.update();
        }
        if (name == ACTIVAR) {
            store.dispatch(goTo("registroMensaje"));
        }
        if (name == ACTIVAR_ERROR) {
            store.dispatch(showWarning("Error", "No se pudo activar la cuenta, verifique su código de activación", "fondoAmarillo", 4000));
        }
    }

    activar() {
        [].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
            element.removeAttribute("error");
        });
        let codigo = this.shadowRoot.querySelector("#codigo");
        var ok = true;
        if (codigo.value == "") {
            ok = false;
            codigo.setAttribute("error", "");
        }
        if (ok) {
            store.dispatch(activar(codigo.value));
        }
    }
    volver(e) {
        store.dispatch(goHistoryPrev());
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
window.customElements.define("activacion-screen", activacionScreen);

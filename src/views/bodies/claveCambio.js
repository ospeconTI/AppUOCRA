/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo, goHistoryPrev } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { recupero, renovacion } from "../../redux/autorizacion/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class claveCambioScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
    constructor() {
        super();
        this.hidden = true;
        this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
        this.claveCambio = require("../../../assets/idiomas/claveCambio.json");
    }

    static get styles() {
        return css`
            ${gridLayout}
            ${button}
			${input}

			:host {
                display: grid;
                justify-content: center;
                align-items: center;
                position: relative;
                height: 100vh;
                width: 100vw;
                background-image: linear-gradient(var(--color-azul-oscuro), var(--primary-color));
                padding: 0 !important;
            }
            :host([hidden]) {
                display: none;
            }
            #cuerpo {
                display: grid;
                height: 95%;
                width: 90vw;
                grid-gap: 0rem;
                grid-template-rows: 25vh auto auto;
                border-radius: 2rem;
                background-color: transparent;
                align-self: center;
                overflow-x: hidden;
                overflow-y: auto;
            }
            :host([media-size="large"]) #cuerpo {
                width: 60vw;
            }
            #titulo {
                height: 100%;
                width: 100%;
                background-image: url("https://app.uocra.org/images/titulo_red_social.png");
                background-repeat: no-repeat;
                background-position: center;
                background-size: auto 10vh;
            }
            #linea {
                color: var(--color-blanco);
                width: 80%;
            }
            .texto {
                color: var(--color-gris-claro);
                font-size: 3vh !important;
                font-weight: var(--font-label-weight);
                text-align: center;
                font-style: italic;
            }
            .textoMsj {
                color: var(--color-gris-claro);
                font-size: 2.5vh !important;
                font-weight: var(--font-label-weight);
                text-align: center;
            }
            :host([media-size="large"]) .texto {
                font-size: 1.5vw;
            }
            .miBoton {
                height: 7vh;
                align-self: center;
            }
        `;
    }
    render() {
        return html`
            <div id="cuerpo">
                <div id="titulo"></div>
                <div>
                    <hr id="linea" />
                </div>
                <div id="datos" class="grid fit" style="align-items: stretch;">
                    <div class="grid row">
                        <div class="input">
                            <label class="texto" style="color:var(--color-blanco)">${this.claveCambio[this.idioma].email}</label>
                            <input type="email" id="email" autocomplete="off" " />
                        </div>
                        <div class="input">
                            <label class="texto" style="color:var(--color-blanco)">${this.claveCambio[this.idioma].password}</label>
                            <input type="password" id="password" autocomplete="off" " />
                        </div>
                        <div class="input">
                            <label class="texto" style="color:var(--color-blanco)">${this.claveCambio[this.idioma].passwordRepetir}</label>
                            <input type="password" id="password1" autocomplete="off" " />
                        </div>
                        <button btn3 class="miBoton" @click="${this.enviar}">${this.claveCambio[this.idioma].enviar}</button>
                        <button btn2 class="miBoton" @click="${this.volver}">${this.claveCambio[this.idioma].volver}</button>
                    </div>
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
            const SeMuestraEnUnasDeEstasPantallas = "-claveCambio-".indexOf("-" + state.screen.name + "-") != -1;
            if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
                this.hidden = false;
            }
            this.update();
        }
    }

    volver() {
        store.dispatch(goHistoryPrev());
    }

    enviar() {
        //store.dispatch(goTo("claveCambioMensaje"));
        const email = this.shadowRoot.querySelector("#email").value;
        const pass = this.shadowRoot.querySelector("#password").value;
        const pass1 = this.shadowRoot.querySelector("#password1").value;

        if (email == "") {
            store.dispatch(showWarning("Datos erroneos", "Debe ingresar un E-mail válido", "fondoAmarillo", 4000));
            return false;
        }
        if (pass == "" || pass1 == "") {
            store.dispatch(showWarning("Datos erroneos", "Password inexistente, intente nuevamente", "fondoAmarillo", 4000));
            return false;
        }
        if (pass1.length < 8) {
            store.dispatch(showWarning("Datos erroneos", "Password menor de 8 digitos, intente nuevamente", "fondoAmarillo", 4000));
            return false;
        }
        if (pass != pass1) {
            store.dispatch(showWarning("Datos erroneos", "Password Distintas, intente nuevamente", "fondoAmarillo", 4000));
            return false;
        }

        store.dispatch(recupero(email, pass));
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
window.customElements.define("clavecambio-screen", claveCambioScreen);

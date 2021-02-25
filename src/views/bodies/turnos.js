/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning} from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import {SVGS} from "../../../assets/icons/svgs";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class turnosScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
	}

	static get styles() {
		return css`
			${gridLayout}
			${button}
			${select}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
                justify-content: center;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 90vw;
				grid-gap: 1rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
            }
            #subTitulo {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-label-size);
                justify-self: center;
            }
            #botones{
                padding: 1rem 0 1rem 0;
                justify-self: center;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa svg{
                height:2rem;
            }
            #bullet{
                fill: var(--color-blanco);
            }
		`;
	}
	render() {
        if (true) {
            return html`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Solicitar Turno:</div>
                    </div>
                    <div id="subTitulo">
                    Solicitá tu turno llamando al Centro Medico - CEMAP más cercano:
                    </div>
                    <div id="botones">
                        <button btn1 class="btnVerMapa" @click=${this.cemap}>
                            <div class="grid column">
                                <div>
                                    ${SVGS["CENTROMEDICO"]}                        
                                </div>
                                <div>
                                    CENTROS MEDICOS
                                </div>
                            </div>
                        </button>                    
                    </div>
                    <div id="titulo" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Primera Consulta:</div>
                    </div>
                    <div id="subTitulo">
                        Una vez obtenido el turno, presentate 15 minutos antes del horario pactado en el sector administrativo. Allí realizarás la derivacón con el Médico de Familia, quien realizará la apertura de tu Historia Clínica.
                        <p>Finalizada la consulta, podés acercarte al sector administrativo para recibir asesoramiento sobre:
                        </p>
                        <li>Retiro de estudios y documentación.</li>
                        <li>Autorizaciones.</li>
                        <li>Medicamentos y materiales.</li>
                        <li>Prestaciones por discapacidad.</li>
                        <li>Otras.</li>
                    </div>
                </div>
            `;
        }
	}
    listados(){

    }
    cemap(){
        store.dispatch(goTo("cemapsMapa"));
    }
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-turnos-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}


	}
    salud(){
        store.dispatch(goTo("salud"));
    }
    cultura(){
        store.dispatch(goTo("cultura"));
    }
	volver() {
		store.dispatch(goTo("inicial"));
    }
    claveRecuperar() {
		store.dispatch(goTo("claveRecuperar"));
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
window.customElements.define("turnos-screen", turnosScreen);

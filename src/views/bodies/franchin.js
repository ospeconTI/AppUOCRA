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

export class franchinScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
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
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: 1rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://app.uocra.org/images/emergencias.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: 1rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-label-size);
                justify-self: center;
                padding-bottom: 1rem;
            }
            .miselect{
                width:60%;
                height:3rem; 
                justify-self: center;
                text-align: center;
            }
            .elselect{
                height:2.5rem; 
            }
            #botones{
                width:90%;
                justify-self: center;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
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
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`;
	}
	render() {
        if (true) {
            return html`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="subTituloTexto">
                    El <b>Sanatorio Franchín</b> nació con el fin de brindarle al Trabajador Constructor un Sistema de Salud según sus necesidades. Es un sanatorio de excelencia, líder en la defensa de la salud y equipado con la más moderna tecnológica.
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Servicios y Especialidades</div>
                    </div>
                    <div id="subTituloTexto">
                        <li>Laboratorio de Análisis Clínicos Automatizado</li>
                        <li>Servicio de Anatomopatología</li>
                        <li>Centro de Diagnóstico por Imágenes</li>
                        <li>Tomógrafo Multislice 64 cortes</li>
                        <li>Servicio de Medicina Nuclear</li>
                        <li>Medicina Cardiovascular Intervencionista</li>
                        <li>Unidad de Terapia Intensiva de Adultos</li>
                        <li>Unidad de Cuidados Intensivos Coronarios</li>
                        <li>Área Quirúrgica</li>
                        <li>Central de Esterilización</li>
                        <li>Servicios de Hemoterapia</li>
                        <li>Guardia Médica y de Atención de Emergencias</li>
                        <li>Guardia de Obstetricia y Ginecología</li>
                        <li>Guardia de Pediatría</li>
                        <li>Centro Neonatológico de Alta Complejidad</li>
                        <li>Servicio de Pediatría</li>
                        <li>Unidad de Terapia Intensiva Pediátrica</li>
                        <li>Unidad de Terapia Intermedia Pediátrica</li>                   
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
			const SeMuestraEnUnasDeEstasPantallas = "-franchin-".indexOf("-" + state.screen.name + "-") != -1;
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
window.customElements.define("franchin-screen", franchinScreen);

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

export class hogarDescripcionScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
        this.provincia = null
        this.localidad = null
        this.servicio = null
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
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://app.uocra.org/images/hogar.gif");
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
                font-size: var(--font-header-h2-size);
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
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">OBJETIVOS</div>
                    </div>
                    <div id="subTituloTexto">
                    <p>Proporcionar a los niños, niñas y adolescentes en situación de vulnerabilidad de derechos, un espacio de alojamiento y atención integral; promoviendo el restablecimiento de los mismos, el fortalecimiento de sus vínculos familiares y/o afectivos, reparando las consecuencias de los daños sufridos y favoreciendo el egreso en el menor tiempo posible.</p>
                    <p>Fortalecer el sostenimiento y la inclusión de niños/as y adolescentes en el sistema educativo.</p>
                    <p>Fomentar el aprendizaje de conocimientos específicos que posibiliten en los adolescentes el ingreso al sistema laboral.</p>
                    <p>Garantizar en el Hogar una dinámica grupal de funcionamiento que promueva vínculos solidarios, participación en actividades cotidianas, ámbitos de reflexión y toma de decisiones en aspectos convivenciales acorde a etapas evolutivas.</p>
                    <p>Fomentar la integración espontánea a la comunidad a través de contactos con las instituciones públicas y privadas de la zona (escuelas, clubes, parques, asociaciones civiles, de fomento, etc.).</p>
                    <p>Incorporar la perspectiva de género en la atención a los niños/as y adolescentes y a sus referentes familiares, con el fin de promover la igualdad de oportunidades entre varones y mujeres y las relaciones libres de violencia.</p>
                    <p>Evaluar y desarrollar acciones donde se contemplen otras alternativas de convivencia y crianza en un núcleo familiar, en aquellos casos en los que se considere inviable o desfavorable temporalmente el retorno con la familia de origen o referente afectivo y/o comunitario.</p>
                </div>
                    <div style="padding-top:2rem"></div>
                </div>
            `;
        }
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-hogarDescripcion-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
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
window.customElements.define("hogardescripcion-screen", hogarDescripcionScreen);

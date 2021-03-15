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

export class gremioTarjetaIericScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
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
                background-image: url("https://app.uocra.org/images/gremioTarjetaIeric.gif");
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
                stroke: var(--color-verde-claro);
            }
            #btnSvg svg{
                width:2rem;
                height:2rem;
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
                        <div id="solicitud">Una tarjeta inteligente</div>
                    </div>
                    <div id="subTituloTexto">
                        La <b>Tarjeta Inteligente "Soy Constructor"</b> es una iniciativa de la UOCRA y conforma una herramienta de vanguardia a nivel mundial en materia de registración laboral formal, puesto que es una tarjeta que:
                        <li>Genera mayor transparencia.</li>
                        <li>Permite la consulta instantánea sobre la registración realizada.</li>
                        <li>Genera una historia Laboral Certificada por Organismo de Contralor (IERIC).</li>
                        <li>Realiza una actualización permanente de categoría y especialidad del trabajador/a.</li>
                        <li>Registra la información sobre los cursos realizados y certificaciones de competencia obtenidas.</li>
                        <li>Jerarquiza a los trabajadores y trabajadoras de la industria.</li>
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Obtene tu tarjeta</div>
                    </div>
                    <div id="subTituloTexto">
                        <b>La primera Tarjeta debe ser gestionada por la empresa contratante</b>, la cual debe enviar al IERIC todos los datos del trabajador o trabajadora para que proceda a la emisión de la tarjeta. Así lo establece la Ley 22.250 (en su artículo 13, último párrafo).
                        <p><b>Si tenés Libreta o necesitás reemplazar la tarjeta por pérdida, robo o deterioro,</b> podés gestionarla en la delegación del IERIC o la Seccional de UOCRA más cercana a tu domicilio, presentando DNI y constancia de CUIL.</p>                    
                    </div>
                    <div id="botones">
                        <button btn1 class="btnVerMapa" @click=${this.seccionales}>
                            <div class="grid column">
                                <div id="btnSvg">
                                    ${SVGS["MISINDICATO"]}                        
                                </div>
                                <div>
                                    SECCIONALES
                                </div>
                            </div>
                        </button>                    
                    </div>
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
			const SeMuestraEnUnasDeEstasPantallas = "-gremioTarjetaIeric-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
	}
    seccionales(){
        store.dispatch(goTo("gremioZonas"));
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
window.customElements.define("gremiotarjetaieric-screen", gremioTarjetaIericScreen);

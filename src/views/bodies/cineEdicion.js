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

export class cineEdicionScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
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
                background-image: url("https://app.uocra.org/images/cineEdicion.gif");
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
                padding-bottom: .6rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h1-menos-size);
                justify-self: center;
                padding-bottom: .2rem;
            }
            #subsubTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h2-size);
                justify-self: center;
                padding-bottom: 0rem;
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
                align-self: flex-start;
            }
            #bullet1{
                align-self: flex-start;
                
            }
            #bullet1 svg{
                width:1rem;
                height:1rem;
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
                    <div style="padding-top:1rem"></div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet">${SVGS["BULLET"]}</div>
                            <div>
                            En esta <b>8va Edición</b>, abrimos la convocatoria a las siguientes categorías de nuestras competencias oficiales:
                                <p><li><b>Competencia Internacional de Largometrajes de Ficción:</b> largometrajes de ficción de duración igual o mayor a 45 minutos cualquiera sea el país de origen.</li></p>
                                <p><li><b>Competencia Internacional de Largometrajes Documentales:</b> largometrajes documentales de duración igual o mayor a 45 minutos cualquiera sea el país de origen.</li></p>
                                <p><li><b>Competencia Nacional de Largometrajes:</b> largometrajes documentales o de ficción cuyo director sea de nacionalidad argentina y los mismos hayan sido rodados íntegramente en la Argentina, de duración igual o mayor a 45 minutos.</li></p>                            
                                <p><li><b>Competencia Internacional de Cortometrajes de Ficción:</b></li>cortos de ficción de hasta 26 minutos de duración cualquiera sea el país de origen.</p>                            
                                <p><li><b>Competencia Internacional de Cortometrajes Documentales:</b></li>cortos documentales de hasta 26 minutos de duración cualquiera sea el país de origen. Temas como solidaridad, conciencia ecológica, sustentabilidad y cuidado del planeta en que vivimos, derechos fundamentales en el lugar de trabajo, igualdad de género, inclusión, trabajo infantil, trabajo forzoso, trabajo migrante, discapacidad y trabajo, protección social, avances tecnológicos entre otros temas, son temáticas válidas para postularse.</p>                            
                                <p><li><b>INSCRIPCIÓN LIBRE Y GRATUITA</b></li>para los largos y cortometrajes realizados por directores argentinos y la misma estará abierta hasta el 28 de febrero de 2021.</p>                            
                                <button btn1 @click=${this.inscripcion}>INSCRIBITE</button>                           
                            </div>                       
                        </div> 
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
			const SeMuestraEnUnasDeEstasPantallas = "-cineEdicion-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
	}

    inscripcion(){
        window.open("https://construircine.com/?s=inscribite&lang=esp", "_blank")
        //location.href = "https://construircine.com/?s=inscribite&lang=esp"
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
window.customElements.define("cineedicion-screen", cineEdicionScreen);

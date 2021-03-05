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
const PROVINCIA_TIMESTAMP = "provincias.timeStamp";
const LOCALIDAD_TIMESTAMP = "localidades.timeStamp";
const SERVICIO_TIMESTAMP = "servicios.timeStamp";

export class emergenciasScreen extends connect(store, PROVINCIA_TIMESTAMP, LOCALIDAD_TIMESTAMP, SERVICIO_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
        this.emergencia = require('../../../assets/idiomas/emergencias.json');
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
				grid-gap: 0rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://www.uocra.net/App/images/emergencias.gif");
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
                font-size: var(--font-bajada-size);
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
        if (this.provincia && store.getState().localidades.entities) {
            return html`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Atención por Emergencias</div>
                    </div>
                    <div id="subTituloTexto">
                    Acercate al Centro de Atención Primaria - CEMAP más cercano a tu domicilio.
                    </div>
                    <div id="selectProvincias" class="grid row miselect" >
                        <select id="txtProvincias" class="elselect" @change="${this.cambioProvincia}">
                            <option value="0">Provincias</option>
                            ${this.provincia.map((item, index) => {
                                return html `
                                    <option value="${item.id}">${item.nombre}</option>
                                `
                            })}
                        </select>
				    </div>
                    <div id="selectLocalidades" class="grid row miselect" >
                        <select id="txtLocalidades" class="elselect" @click="${this.clickLocalidad}">
                            <option value="0">Localidades</option>
                            ${this.localidad.map((item, index) => {
                                return html `
                                    <option value="${item.id}">${item.nombre}</option>
                                `
                            })}
                        </select>
				    </div>
                    <div id="subTituloTexto">
                    Si vivís en la Ciudad Autónoma de Buenos Aires, dirigite a la Guardia del Sanatorio Franchin.
                    </div>
                    <div id="botones" class="grid">
				        <button btn1 class="btnVerMapa" @click=${this.telefono}>
                            <div class="grid column">
                                <div>
                                    ${SVGS["TELEFONO"]}                        
                                </div>
                                <div>${this.emergencia[this.idioma].boton}</div>
                            </div>
                        </button>
                    </div>
                </div>
            `;
        }
	}
    telefono(){
        document.location.href = 'tel:0800-345-7700';
    }
    cambioProvincia(e){
        let arr = store.getState().localidades.entities;
        this.localidad = arr.filter(a => a.provinciasId == e.currentTarget.value);  
        this.update()      
    }
    clickLocalidad(e){
        const txtProvincia = this.shadowRoot.querySelector("#txtProvincias");
        const txtLocalidad = this.shadowRoot.querySelector("#txtLocalidades");
        if(txtProvincia.value == 0){
			store.dispatch(showWarning(this.emergencia[this.idioma].warning[0].titulo, this.emergencia[this.idioma].warning[0].subTitulo, "fondoError", 2000));
            txtLocalidad.blur()
        }
    }
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-emergencias-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
        if (name == PROVINCIA_TIMESTAMP){
            this.provincia = state.provincias.entities
        }
        if (name == LOCALIDAD_TIMESTAMP){
            this.localidad = state.localidades.entities
        }
        if (name == PROVINCIA_TIMESTAMP){
            //this.servicio = state.servicios.entities
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
window.customElements.define("emergencias-screen", emergenciasScreen);

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

export class cartillaScreen extends connect(store, PROVINCIA_TIMESTAMP, LOCALIDAD_TIMESTAMP, SERVICIO_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
        this.provincia = null
        this.localidad = null
        this.servicio = null
        this.idioma = store.getState().ui.idioma;
        this.cartilla = require('../../../assets/idiomas/cartilla.json');
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
                background-image: url("https://www.uocra.net/App/images/cartilla.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            .miselect{
                width:60%;
                height:3.5rem; 
                justify-self: center;
                grid-gap: 0 !important;
            }
            .elselect{
                height:2.5rem; 
            }
            .lblSelect{
                font-size: var(--font-label-size);
            }
            #botones{
                width:90%;
                justify-self: center;
                grid-template-columns: 1fr 1fr;
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
		`;
	}
	render() {
        if (this.provincia && store.getState().localidades.entities && this.servicio) {
            return html`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
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
                    <div id="selectLocalidades" class="grid row miselect">
                        <select id="txtLocalidades" class="elselect" @click="${this.clickLocalidad}">
                            <option value="0">Localidades</option>
                            ${this.localidad ? this.localidad.map((item, index) => {
                                return html `
                                    <option value="${item.id}">${item.nombre}</option>
                                `
                            }) : null}
                        </select>
				    </div>
                    <div id="selectServicios" class="grid row miselect" >
                        <select id="txtServicios" class="elselect">
                            <option value="0">Servicios</option>
                            ${this.servicio.map((item, index) => {
                                return html `
                                    <option value="${item.id}">${item.nombre}</option>
                                `
                            })}
                        </select>
				    </div>
                    <div id="botones" class="grid">
                        <button btn1 class="btnListado" @click=${this.listados}>
                            <div class="grid column">
                                <div>
                                    ${SVGS["LISTADO"]}                        
                                </div>
                                <div>
                                    ${this.cartilla[this.idioma].listado}
                               </div>
                            </div>
                        </button>
				        <button btn1 class="btnVerMapa" @click=${this.cemap}>
                            <div class="grid column">
                                <div>
                                    ${SVGS["VERMAPA"]}                        
                                </div>
                                <div>
                                    ${this.cartilla[this.idioma].verMapa}
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            `;
        }
	}
    listados(){
        const txtProvincia = this.shadowRoot.querySelector("#txtProvincias").value;
        const txtLocalidad = this.shadowRoot.querySelector("#txtLocalidades").value;
        const txtServicio = this.shadowRoot.querySelector("#txtServicios").value;
        if(txtProvincia == 0 || txtLocalidad == 0 || txtServicio == 0){
			store.dispatch(showWarning(this.cartilla[this.idioma].warning[1].titulo, this.cartilla[this.idioma].warning[1].subTitulo, "fondoError", 2000));
        }else{
            store.dispatch(goTo("cartillaDetalle"));
        }
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
			const SeMuestraEnUnasDeEstasPantallas = "-cartilla-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
        if (name == PROVINCIA_TIMESTAMP){
            this.provincia = state.provincias.entities
        }
        if (name == LOCALIDAD_TIMESTAMP){
            //this.localidad = state.localidades.entities
        }
        if (name == PROVINCIA_TIMESTAMP){
            this.servicio = state.servicios.entities
        }

	}
    cambioProvincia(e){
        let arr = store.getState().localidades.entities;
        this.localidad = arr.filter(a => a.provinciasId == e.currentTarget.value);  
        this.update()      
    }
    clickLocalidad(e){
        const txtProvincia = this.shadowRoot.querySelector("#txtProvincias").value;
        const txtLocalidad = this.shadowRoot.querySelector("#txtLocalidades");
        if(txtProvincia == 0){
			store.dispatch(showWarning(this.cartilla[this.idioma].warning[0].titulo, this.cartilla[this.idioma].warning[0].subTitulo, "fondoError", 2000));
            txtLocalidad.blur()
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
window.customElements.define("cartilla-screen", cartillaScreen);

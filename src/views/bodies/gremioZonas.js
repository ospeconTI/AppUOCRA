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
import {getMapaTodos, getMapaZona} from "../../redux/seccionales/actions"

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const ZONA_TIMESTAMP = "zonas.timeStamp";
const SECCIONALES_DATOS = "seccionales.MapaTimeStamp";

export class gremioZonasScreen extends connect(store, SECCIONALES_DATOS, ZONA_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
        this.zona = null
        this.idioma = store.getState().ui.idioma;
        this.zonas = require('../../../assets/idiomas/gremioZonas.json');
        this.paginaSiguiente = ""
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
                background-image: url("https://app.uocra.org/images/gremioZonas.gif");
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
                padding-top: 5vh;
                padding-bottom: 20vh;
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
        if (this.zona) {
            return html`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="selectZonas" class="grid row miselect" >
                        <select id="txtZonas" class="elselect" @change="${this.cambioZona}">
                            <option value="0">Zonas</option>
                            ${this.zona.map((item, index) => {
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
                                    ${this.zonas[this.idioma].listado}
                               </div>
                            </div>
                        </button>
				        <button btn1 class="btnVerMapa" @click=${this.seccionales}>
                            <div class="grid column">
                                <div>
                                    ${SVGS["VERMAPA"]}                        
                                </div>
                                <div>
                                    ${this.zonas[this.idioma].verMapa}
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            `;
        }
	}
    listados(){
        this.paginaSiguiente = "gremioLista"
        const txtZona = this.shadowRoot.querySelector("#txtZonas").value;
        if(txtZona == 0){
            store.dispatch(getMapaTodos())
        }else{
            store.dispatch(getMapaZona(parseInt(txtZona)))
        }
    }
    seccionales(){
        this.paginaSiguiente = "gremioMapa"
        const txtZona = this.shadowRoot.querySelector("#txtZonas").value;
        if(txtZona == 0 ){
            store.dispatch(getMapaTodos())
        }else{
            store.dispatch(getMapaZona(parseInt(txtZona)))
        }
    }
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-gremioZonas-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
        if (name == ZONA_TIMESTAMP){
            this.zona = state.zonas.entities
        }
        if (name == SECCIONALES_DATOS){
            store.dispatch(goTo(this.paginaSiguiente));
        }

	}
    cambioZona(e){
        let arr = store.getState().zonas.entities;
        this.update()      
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
window.customElements.define("gremiozonas-screen", gremioZonasScreen);

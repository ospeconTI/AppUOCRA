/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning} from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { OLComponent } from "../componentes/ol-map";
import {Overlay} from 'ol/Overlay';
import {reserva} from '../../redux/programacion/actions'
import {SVGS} from "../../../assets/icons/svgs";

export const featureListener = function ( event ) {
    console.log("featureListenerCalled");
}; 

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const PROGRAMACION_DATOS = "programacion.timeStamp";

export class teatroProgramacionScreen extends connect(store, PROGRAMACION_DATOS, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma ;
		this.gremioLista = require('../../../assets/idiomas/teatroProgramacion.json');
		this.idiomaGenerico = require('../../../assets/idiomas/generic.json');
        this.programacion = null
    }

	static get styles() {
		return css`
			${gridLayout}
			${button}
			${input}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco);
                overflow: hidden;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                display: grid;
                height:100%;
				grid-auto-flow: row;
                background-color: var(--color-blanco);
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                padding: .8vh 0 .8vh 0;
                text-align: center;
                font-size: 3vh;
                background-color: var(--color-verde-claro);
                color: var(--color-blanco);
            }
            svg{
                height:2vh;
                width:2vh;
                stroke: var(--color-amarillo);
                fill: var(--color-blanco);
            }
            .panel {
                display: grid;
                height: 89vh;
                grid-auto-flow: row;
                grid-gap: .2rem;
                align-content: start;
            }
            .notas{
                width:95vw;
                justify-self: center;
                grid-template-columns: auto 1fr;
                padding: 0 !important;
                grid-gap: 0 !important;          
            }
            .notaDetImg{
                width: 36vw;
                height: 24vw;
				background-repeat: no-repeat;
				background-position: center;
                background-size: cover ;
                justify-self: center;
                border-radius: .4rem;
                cursor: pointer;
            }
            .notaTitTxt{
				color: var(--primary-color);
                justify-self: left;
                font-size: var(--font-header-h1-size) ;
            }
            .notaNomTxt{
				color: var(--color-negro);
                justify-self: left;
                font-size: var(--font-header-h1-menos-size) ;
                font-weight: 900;
            }
            .notaDetTxt{
				color: var(--color-gris-oscuro);
                justify-self: left;
                font-size: var(--font-header-h2-size) ;
            }
            :host([media-size="small"]) .notaDetTxt{
                font-size: var(--font-label-size);
            }
		`;
	}
	render() {
		if (this.programacion) { return html`
			<div id="cuerpo">
				<div id="titulo">
                    ${this.gremioLista[this.idioma].titulo}
                </div>
				<div class="panel">
                ${this.programacion.map((item, index) => {
                            return html` 
                                <div>
                                    <hr id="linea" />
                                </div>
                                <div class="grid notas" style="align-items: stretch;">
                                    <div class="notaDetImg" style="background-image: url('${item.imagen}')" .item="${item}" @click=${this.detalle}></div>
                                    <div class="grid row" style="grid-gap:0">
                                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                                            <div id="bullet">${SVGS["BULLET"]}</div>
                                            <div class="notaTitTxt">${this.idiomaGenerico[this.idioma].diasLargo[(new Date(item.fecha)).getDay()] + " " + (new Date(item.fecha)).getDate()}</div>                       
                                        </div>
                                        <div class="notaNomTxt" style="font-weight:900">${item.protagonistas}</div>                       
                                        <div class="notaDetTxt">"${item.nombre}"</div>                       
                                        <div class="notaDetTxt" style="font-style:italic" >${item.genero}</div>                    
                                        <div class="notaDetTxt">${(new Date(item.fecha)).getHours() + ":" + (new Date(item.fecha)).getMinutes() + "hs. - " + (item.valor==0 ? this.gremioLista[this.idioma].entradaLibre : this.gremioLista[this.idioma].entradaPaga + item.valor)}</div>                                            
                                    </div>
                                </div>
                            `
                        })}
                </div>
                
            </div>

		`;
        }
    }

 
    detalle(e){
        store.dispatch(reserva(e.currentTarget.item))
        store.dispatch(goTo("teatroProgramacionDetalle"));
    }
    closer() {
        var closer = this.shadowRoot.querySelector('#popup');
        if (!closer.hasAttribute("hidden")){
            closer.setAttribute("hidden","")
        }
    };
    
    stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-teatroProgramacion-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
 				this.hidden = false;
                this.update();
            }
        }

        if (name == PROGRAMACION_DATOS){
            this.programacion = state.programacion.entities
        }
    }

	volver() {
		store.dispatch(goTo("inicial"));
        
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
window.customElements.define("teatroprogramacion-screen", teatroProgramacionScreen);

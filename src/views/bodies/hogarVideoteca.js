/** @format */

import { html, LitElement, css } from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

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
import {getDistance} from "../../libs/funciones";

export const featureListener = function ( event ) {
    console.log("featureListenerCalled");
}; 

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const HOGARVIDEOS_DATOS = "hogarVideos.timeStamp";

export class hogarVideotecaScreen extends connect(store, HOGARVIDEOS_DATOS, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma ;
		this.idiomaLista = require('../../../assets/idiomas/adicciones.json');
        this.registros = null

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
                display: inline-block;
                height:100%;
				grid-auto-flow: row;
                background-color: var(--color-blanco);
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                height:4vh;
                padding: 1.5vh 0 0 0;
                text-align: center;
                font-size: 3vh;
                background-color: var(--color-gris);
                color: var(--color-blanco);
            }
            svg{
                height:8vh;
                width:8vh;
            }
            .panel {
                display: grid;
                height: auto;
                grid-auto-flow: row;
                grid-gap: .2rem;
                align-content: start;
            }
            .notas{
                width:85vw;
                justify-self: center;
                grid-template-rows: auto 1fr;
                padding: 0 !important;
                grid-gap: .5rem !important;          
            }
            .notaDetImg{
                width: 82vw;
                height: auto;
                justify-self: center;
            }
            .notaTitTxt{
				color: var(--primary-color);
                justify-self: left;
                font-size: var(--font-header-h1-size) ;
            }
            .notaDetTxt{
				color: var(--color-gris-oscuro);
                justify-self: left;
                font-size: var(--font-header-h2-size) ;
            }
            .notaDetTxtMenor{
				color: var(--color-gris-oscuro);
                justify-self: left;
                font-size: var(--font-label-size) ;
            }
            :host([media-size="small"]) .notaDetTxt{
                font-size: var(--font-h2-size);
            }
            *[hidden] {
				display: none;
			}
		`;
	}
	render() {
		if (this.registros) { return html`
			<div id="cuerpo">
				<div class="panel">
                    ${this.registros.map((item, index) => {
                            return html` 
                                <div ?hidden="${index==0}">
                                    <hr id="linea" />
                                </div>
                                <div class="grid notas" style="align-items: stretch;">
                                    <div class="grid row" >
                                        <div class="notaTitTxt">${item.titulo}</div>                       
                                     </div>                                    
                                    <div class="notaDetImg">
                                        <iframe width="100%" height="auto" src=${item.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
  
                            `
                    })}
                    <div style="padding:.5rem"></div>
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
			const SeMuestraEnUnasDeEstasPantallas = "-hogarVideoteca-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) { 
 				this.hidden = false;
                this.update();
            }
        }

        if (name == HOGARVIDEOS_DATOS){
            this.registros = state.hogarVideos.entities
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
window.customElements.define("hogarvideoteca-screen", hogarVideotecaScreen);

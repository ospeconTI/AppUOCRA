/** @format */

import { html, LitElement, css } from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo, goHistoryPrev } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning} from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { OLComponent } from "../componentes/ol-map";
import {Overlay} from 'ol/Overlay';
import {getDistance} from "../../libs/funciones";
import {SVGS} from "../../../assets/icons/svgs";
import {get as getAdicciones} from "../../redux/adicciones/actions"

export const featureListener = function ( event ) {
    console.log("featureListenerCalled");
}; 

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const ADICCIONES_DATOS = "adicciones.timeStamp";
const ADICCIONES_ERROR = "adicciones.errorTimeStamp";

export class adiccionesScreen extends connect(store, ADICCIONES_ERROR, ADICCIONES_DATOS, MEDIA_CHANGE, SCREEN)(LitElement) {
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
                display:grid;
                position: relative;
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
            .play{
                display: inline-block;
                position: absolute;
                top: calc(50% - 27px);
                left: calc(50% - 27px);
                width: 55px;
                height: 55px;
                border-radius: 50%;
                background-color: var(--color-blanco);
                opacity:.6;
                cursor: pointer;
            }
            .play svg{
                width: 56px;
                height:56px;
            }		
        `;
	}
	render() {
		if (this.registros) { return html`
			<div id="cuerpo">
                <div id="titulo">
                    ${this.current=="adicciones2020" ?
                        this.idiomaLista[this.idioma].titulo + " " + (parseInt((new Date()).getFullYear())-1)
                        :
                        this.idiomaLista[this.idioma].titulo1
                    }
                </div>
				<div class="panel">
                    ${this.registros.filter(item => { return this.current=="adicciones2020" ? item.ano == parseInt((new Date()).getFullYear())-1 : item.ano < parseInt((new Date()).getFullYear())-1 }).map((item, index) => {
                            return html` 
                                <div ?hidden="${index==0}">
                                    <hr id="linea" />
                                </div>
                                <div class="grid notas" style="align-items: stretch;">
                                    <div class="grid row" >
                                        <div class="notaTitTxt">${item.nombre}</div>                       
                                        <div class="notaDetTxt">${item.descripcion}</div>                       
                                     </div>                                    
                                    <div class="notaDetImg">
                                        <img width="100%" height="auto" src="https://img.youtube.com/vi/${item.link}/0.jpg">
                                        <div class="play" .item=${item} @click=${this.ver}>${SVGS["PLAY"]}</div>
                                    </div>
                                    <div class="notaDetTxtMenor">${unsafeHTML(item.contenido)}</div>                       
                                </div>
  
                            `
                    })}
                    <div style="padding:.5rem"></div>
                </div>
            </div>

		`;
        }else{
            if (this.current=="adicciones2020" || this.current=="adiccionesOtras"){
                return html` 
                    <div class="grid row" style="color:white;align-content: center;text-align: center;border:1px solid white;cursor:point" @click=${this.atras}>
                        <div style="font-size:6vw;font-weight: 900;">Error de comexíon</div>
                        <div style="font-size:4vw;">Verifique su conección de datos</div>
                        <div style="font-size:3vw;">Click para continuar</div>
                    </div>
                `
            }
        }
    }
    atras(){
        store.dispatch(goHistoryPrev())
    }
    ver(e){
        //window.open("https://www.youtube.com/watch?v=" + e.currentTarget.item.link, "_blank")
        location.href = "https://www.youtube.com/watch?v=" + e.currentTarget.item.link
    }
    stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-adicciones2020-adiccionesOtras-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) { 
 				this.hidden = false;
                store.dispatch(getAdicciones())
            }
        }

        if (name == ADICCIONES_DATOS){
            this.registros = state.adicciones.entities
            this.update();
        }
        if (name == ADICCIONES_ERROR){
            this.registros = null
            this.registros = null
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
window.customElements.define("adicciones-screen", adiccionesScreen);

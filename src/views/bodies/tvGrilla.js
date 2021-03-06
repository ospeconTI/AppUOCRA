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

export const featureListener = function ( event ) {
    console.log("featureListenerCalled");
}; 

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const TVGRILLA_DATOS = "tvGrilla.timeStamp";

export class tvGrillaScreen extends connect(store, TVGRILLA_DATOS, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma ;
		this.idiomaGeneric = require('../../../assets/idiomas/generic.json');
		this.idiomaLista = require('../../../assets/idiomas/tvEstrenos.json');
        this.grilla = null
        this.dias = []
        this.seleccion = -1

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
			}
			#titulo {
                height:8vh;
                background-color: var(--color-gris);
                color: var(--color-blanco);
                grid-gap: 0rem;
                justify-content: left;
                align-items: end;
                padding:0 0 0 0.3rem;
            }
            svg{
                height:8vh;
                width:8vh;
            }
            .panel {
                display: grid;
                height: 76vh;
                grid-auto-flow: row;
                grid-gap: .2rem;
                align-content: start;
                overflow-x: hidden;
                overflow-y: auto;
            }
            .notas{
                width:95vw;
                justify-self: center;
                grid-template-columns: auto 1fr;
                padding: 0 ;
                grid-gap: .5rem;       
  
            }
            .datos{
                align-content: flex-start;
            }
            .notaDetImg{
                width: 36vw;
                height: 24vw;
				background-repeat: no-repeat;
				background-position: center;
                background-size: cover ;
                justify-self: center;
                border-radius: .4rem;
            }
            .notaTitTxt{
				color: var(--primary-color);
                justify-self: left;
                font-size: var(--font-header-h1-menos-size) ;
            }
            .notaDetTxt{
				color: var(--color-gris-oscuro);
                justify-self: left;
                font-size: var(--font-header-h2-size) ;
            }
            :host([media-size="small"]) .notaDetTxt{
                font-size: var(--font-label-size);
            }
            .eldia{
                display:grid;
                font-size: var(--font-header-h1-menos-size);
                border-radius: .5rem .5rem 0 0;
                border-top: 1px solid var(--color-gris-oscuro);
                border-left: 1px solid var(--color-gris-oscuro);
                border-right: 1px solid var(--color-gris-oscuro);
                color: var(--color-gris-oscuro);
                align-content: center;
                text-align: center;
            }
            .eldia[activo]{                                                                                                                                                                                                                                                                                               
                width: 16vw;
                height: 7vh;
                border-bottom: 0px solid var(--color-gris-oscuro);
                background-color: var(--color-blanco);
                font-weight: 900;
                cursor: default;
            }
            .eldia{
                width:13vw;
                height:6vh;
                border-bottom: 1px solid var(--color-gris-oscuro);
                background-color: var(--color-gris-claro);
                font-weight: normal;
                cursor: pointer;
            }
		`;
	}
	render() {
		return html`
			<div id="cuerpo">
                <div id="titulo" class="grid column">
                ${this.dias.map((item, index) => {
                    return html`
                        <div  @click='${this.cambiar}' class="eldia" ?activo="${this.seleccion==item.diaSemana}" .item=${item}>
                            <div>
                                ${this.idiomaGeneric[this.idioma].diasCorto[item.diaSemana]}
                            </div>
                            <div >
                                ${item.diaMes}
                            </div>

                        </div>
                    `
                    })}
                </div>
                <div class="panel">
                    <div style="padding:.5rem"></div>
                        ${this.grilla.filter(item => { return item.dia == this.seleccion}).map((item, index) => {
                            return html` 
                                <div ?hidden="${index==0}">
                                    <hr id="linea" />
                                </div>
                                <div class="grid notas">
                                    <div class="notaDetImg" style="background-image:url('${item.imagen}')"></div>
                                    <div class="grid row datos" >
                                        <div class="notaDetTxt">${item.hora + ' hs.'}</div>
                                        <div class="notaTitTxt">${item.nombre}</div>
                                        <div class="notaDetTxt">${item.episodio}</div>
                                    </div>
                                </div>
                        `
                    })}
                    <div style="padding:1rem"></div>
                </div>
            </div>
		`;
        
    }
    cambiar(e){
        this.seleccion = e.currentTarget.item.diaSemana;
        this.update()
    }
    stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-tvGrilla-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) { 
                this.hidden = false;
                if (this.seleccion == -1){
                    for (var i = 0; i < 7; i++) {
                        var x = new Date()
                        x.setDate(x.getDate() + i)
                        this.dias.push({diaSemana: x.getDay() , diaMes: x.getDate()});
                    }
                    this.seleccion = (new Date()).getDay()
                }
                this.update();
            }
        }

        if (name == TVGRILLA_DATOS){
            this.grilla = state.tvGrilla.entities
            this.update()
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
window.customElements.define("tvgrilla-screen", tvGrillaScreen);

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
import {SVGS} from "../../../assets/icons/svgs";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const NOTICIAS_TIMESTAMP = "noticias.timeStamp";

export class principalScreen extends connect(store, NOTICIAS_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
		this.aplicacion = require('../../../assets/idiomas/aplicacion.json');
		this.principal = require('../../../assets/idiomas/principal.json');
        this.noticia = null
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
                width: 100vw;
				grid-gap: 0rem;
				grid-template-rows: 18% 82%;
				background-color: var(--color-blanco);
			}
			#titulo {
				height: 10vh;
                width: 100vw;
                grid-gap: 2vw !important;
                justify-content: center;
                padding: 0 !important;
                align-self: center;
            }
            .icBoton{
                height:2.8rem;
                width:15vw;
                padding:.4vw;
                background-image: linear-gradient(to right, var(--color-azul-oscuro), var(--primary-color), var(--color-azul-oscuro));
                border-radius: .5rem;
                color: var(--color-blanco);
                font-size:.5rem;
                grid-gap: 0 !important;
                justify-items: center;  
                cursor: pointer;             
            }
            #icGremio{
                background-image: linear-gradient(to right, var(--color-azul-oscuro), var(--primary-color), var(--color-azul-oscuro));
            }
            #icSalud{
                background-image: linear-gradient(to right, var(--color-verde-oscuro), var(--color-verde-claro), var(--color-verde-oscuro));
            }
            #icCursos{
                background-image: linear-gradient(to right, var(--color-amarillo-oscuro), var(--color-amarillo-claro), var(--color-amarillo-oscuro));
            }
            #icMas{
                background-image: linear-gradient(to right, var(--color-gris-oscuro), var(--color-gris), var(--color-gris-oscuro));
                }

            svg{
                height:1.8rem;
                width:1.8rem;
                fill: white;
            }
			#linea {
				color: var(--color-blanco);
				width: 90%;
			}
            #datos{
                height:60vh;
                overflow-x: hidden;
                overflow-y: auto;
            }
            .notaCabImg{
                width: 100%;
                height: 42vw;
				background-repeat: no-repeat;
				background-position: center;
                background-size: cover ;
                justify-self: center;
                border-radius: .4rem;
            }
            .notaCabTxt{               
				color: var(--color-gris-oscuro);
				font-size: 1.6vh !important;
                font-style: italic;
                justify-self: center;
            }
            .verMas{
                color: var(--color-gris-oscuro);
				font-size: 1.4vh !important;
                font-style: italic; 
                font-weight: bolder;  
                cursor: pointer; 
            }
            .notas{
                justify-self: center;
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
            }
            .notaDetTxt{
				color: var(--color-gris-oscuro);
                justify-self: center;
                font-size: var(--font-header-h2-size) ;
            }
            :host([media-size="small"]) .notaDetTxt{
                font-size: var(--font-label-size);
            }
		`;
	}
	render() {
        if (this.noticia) {
            return html`
                <div id="cuerpo">
                    <div id="titulo" class="grid column">
                        <div id="icGremio" class="grid row icBoton">
                            <div >${SVGS["MISINDICATO"]}</div>
                            <div >${this.aplicacion[this.idioma].sindicato}</div>
                        </div>
                        <div id="icSalud" class="grid row icBoton" @click="${this.salud}">
                            <div >${SVGS["SALUD"]}</div>
                            <div >${this.aplicacion[this.idioma].salud}</div>
                        </div>
                        <div id="icCursos" class="grid row icBoton">
                            <div >${SVGS["CURSOS"]}</div>
                            <div >${this.aplicacion[this.idioma].capacitcion}</div>
                        </div>
                        <div id="icGremio" class="grid row icBoton" @click="${this.cultura}">
                            <div >${SVGS["TEATRO"]}</div>
                            <div >${this.aplicacion[this.idioma].teatro}</div>
                        </div>
                        <div id="icMas" class="grid row icBoton">
                            <div >${SVGS["MASUOCRA"]}</div>
                            <div >${this.aplicacion[this.idioma].masuocra}</div>
                        </div>
                    </div>

                    <div id="datos" class="grid row" style="align-items: stretch;">
                        ${this.noticia.map((item, index) => {
                            if (index==0){
                                return html` 
                                    <div class="grid row" >
                                        <div class="notaCabImg" style="background-image: url('${item.imagen}')"></div>
                                        <div class="notaCabTxt">${item.copete}</div>                       
                                        <div class="verMas">${this.principal[this.idioma].verMas}</div>
                                    </div>
                                `
                            }else{
                                return html` 
                                    <div>
                                        <hr id="linea" />
                                    </div>
                                    <div class="grid column notas">
                                        <div class="notaDetImg" style="background-image: url('${item.imagen}')"></div>
                                        <div class="grid row" >
                                            <div class="notaDetTxt">${item.copete}</div>                       
                                            <div id="verMas" class="verMas">${this.principal[this.idioma].verMas}</div>
                                        </div>
                                    </div>
                                `
                            }

                        })}
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
			const SeMuestraEnUnasDeEstasPantallas = "-main-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
        if (name == NOTICIAS_TIMESTAMP){
            this.noticia = state.noticias.entities
            let rr = 0
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
window.customElements.define("principal-screen", principalScreen);

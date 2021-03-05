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
const RESERVA_TIMESTAMP = "programacion.reservaTimeStamp";

export class teatroProgramacionDetalleScreen extends connect(store, RESERVA_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
        this.reserva = null
		this.gremioLista = require('../../../assets/idiomas/teatroProgramacion.json');
		this.idiomaGenerico = require('../../../assets/idiomas/generic.json');

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
            #subNombreTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-titulo-h1-menos-size);
                justify-self: center;
                padding-bottom: .4rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-titulo-h2-size);
                justify-self: center;
                padding-bottom: .4rem;
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
                stroke: var(--color-amarillo);
            }
            #bullet1 svg{
                width:1rem;
                height:1rem;
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
            #textoFolleto{
                
            }
		`;
	}
	render() {
        if (this.reserva) {
            return html`
                <div id="cuerpo" class="grid row" style="grid-gap:0rem">
                    <div id="titulo" class="grid column" style="background-image:url('${this.reserva.imagenFolleto}')">
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud" style="color:var(--primary-color)">${this.idiomaGenerico[this.idioma].diasLargo[(new Date(this.reserva.fecha)).getDay()] + " " + (new Date(this.reserva.fecha)).getDate() + " de " + this.idiomaGenerico[this.idioma].mesLargo[(new Date(this.reserva.fecha)).getMonth()] + ' - ' + (new Date(this.reserva.fecha)).getHours() + ":" + (new Date(this.reserva.fecha)).getMinutes() + "hs." }</div>
                    </div>
                    <div id="subNombreTexto" class="grid" style="font-weight:900" >
                       <div id="solicitud">${this.reserva.protagonistas}</div>
                    </div>
                    <div id="subTituloTexto">
                        Presenta: "${this.reserva.nombre}"
                    </div>
                    <div id="subTituloTexto" style="font-style:italic">
                        ${this.reserva.genero}
                    </div>
                    <div id="subTituloTexto">
                        ${(this.reserva.valor==0 ? this.gremioLista[this.idioma].entradaLibre : this.gremioLista[this.idioma].entradaPaga + item.valor)}
                    </div>
                    <div id="subTituloTexto" class="grid" style="padding:0; grid-template-columns:auto 1fr; grid-gap:.2rem;">
                        <div id="bullet1">${SVGS["BULLET"]}</div>
                        <div id="textoFolleto" style="font-weight:900">"${this.reserva.nombre}"</div>
                        <div></div>
                        <div id="textoFolleto">${this.reserva.textoFolleto}</div>
                    </div>
                    <div style="padding:1rem"></div>
                    <button btn1 @click=${this.reserva} style="width:10rem;justify-self: center;background-color:var(--color-amarillo);">
                        RESERVAR
                    </button>
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
			const SeMuestraEnUnasDeEstasPantallas = "-teatroProgramacionDetalle-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
                this.update();
                if (this.reserva && this.shadowRoot.querySelector("#textoFolleto")){
                    //this.shadowRoot.querySelector("#textoFolleto").outerHTML = this.reserva.textoFolleto;
                }
				this.hidden = false;
			}
			this.update();
		}
        if (name == RESERVA_TIMESTAMP) {
            this.reserva = state.programacion.reserva
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
window.customElements.define("teatroprogramaciondetalle-screen", teatroProgramacionDetalleScreen);

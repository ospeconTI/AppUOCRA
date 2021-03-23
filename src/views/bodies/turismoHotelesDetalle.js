/** @format */

import { html, LitElement, css } from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning} from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import {SVGS} from "../../../assets/icons/svgs";
import {get as getHotelesBanner} from "../../redux/hotelesBanner/actions"
import { mySliderScreen } from "../componentes/mySlider";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const HOTEL_TIMESTAMP = "hoteles.hotelTimeStamp";
const HOTELESBANNER_DATOS = "hotelesBanner.timeStamp";
const HOTELESBANNER_DATOS_ERROR = "hotelesBanner.errorTimeStamp";
const CURRENT_TIMESTAMP = "screen.timeStamp";

export class turismoHotelesDetalleScreen extends connect(store, CURRENT_TIMESTAMP, HOTELESBANNER_DATOS, HOTELESBANNER_DATOS_ERROR, HOTEL_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
        this.reserva = null
        this.banner = null
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
            #mybanner{
                width:100%;
                height:56vw;
            }
		`;
	}
	render() {
        if (this.reserva && this.banner) {
            return html`
                <div id="cuerpo" class="grid row" style="grid-gap:0rem">
                    <myslider-screen id="mybanner" ?hidden="${!this.banner[0] || this.banner[0].banner == ''}" pagina="turismoHotelesDetalle" .banners=${this.banner} current=${this.current}></myslider-screen>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud" style="color:var(--primary-color)">${this.reserva.nombre}</div>
                    </div>
                    <div id="subNombreTexto" class="grid" style="font-weight:900" >
                       <div id="solicitud">${"Estrellas: " + this.reserva.estrellas}</div>
                    </div>
                    <div id="subTituloTexto">
                        ${this.reserva.direccion}
                    </div>
                    <div id="subTituloTexto" style="font-style:italic">
                        ${this.reserva.localidad}
                    </div>
                    <div id="subTituloTexto" class="grid" style="padding:0; grid-template-columns:auto 1fr; grid-gap:.2rem;">
                        <div id="bullet1" style="align-self: self-start;">${SVGS["BULLET"]}</div>
                        <div id="textoFolleto">${unsafeHTML(this.reserva.detalle)}</div>
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
			const SeMuestraEnUnasDeEstasPantallas = "-turismoHotelesDetalle-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
                store.dispatch(getHotelesBanner())
 				this.hidden = false;
			}
		}
        if (name == HOTEL_TIMESTAMP) {
            this.reserva = state.hoteles.hotel
            if (state.hotelesBanner.entities){
                this.banner = state.hotelesBanner.entities.filter(a => a.hotelesId == this.reserva.id);        
                this.update();
            }
        }
        if (name == HOTELESBANNER_DATOS){
            this.banner = state.hotelesBanner.entities
            if (this.reserva){
                this.banner = this.banner.filter(a => a.hotelesId == this.reserva.id);        
                this.update();
            }
        }
        if (name == HOTELESBANNER_DATOS_ERROR){
            this.banner = null
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
window.customElements.define("turismohotelesdetalle-screen", turismoHotelesDetalleScreen);

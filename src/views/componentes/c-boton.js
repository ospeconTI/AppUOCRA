/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { gridLayout } from "../css/gridLayout";
import {SVGS} from "../../../assets/icons/svgs";
import {botonItem} from "../../redux/items/actions"

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const CURRENT_TIMESTAMP = "screen.timeStamp";

export class botonComponent extends connect(store, CURRENT_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
        this.current = "";
        this.texto = "";
        this.svg = "";
        this.colorTexto = "";
        this.colorFondo = "";
        this.style = "";
        this.accion = ""
        this.parametro = ""

	}

	static get styles() {
		return css`
			${gridLayout}
			:host {
				display: grid;
				position: relative;
                background-color: transparent !important;
			}
            #boton{
                padding:0rem 1.5rem 0rem 1.5rem;
                border-radius: .5rem;                
                background-color: var(--primary-color);
                color: var(--color-blanco);             
            }
            #boton[color-fondo]{  
                background-color: color-fondo;           
            }
            #cuerpo{
                justify-content: center;
                font-size: var(--font-header-h1-size)
            }
            #cuerpo[whatsapp]{
                padding:0;
            }
            svg{
                width: 2rem;
                height: 2rem;
                fill: white;
                stroke: white;
            }
            #svgs[whatsapp] svg{
                width: 3rem !important;
                height: 3rem !important;
            }
		`;
	}
	render() {
        return html` 
        <style>
            #boton{
                ${this.style};
            }
            #boton[color-texto]{
                color: ${this.colorTexto};
            }
            #boton[color-fondo]{
                color: ${this.colorFondo};
            }
        </style>
        <button id="boton" ?color-texto="${this.colorTexto!=''}" ?color-fondo="${this.colorFondo!=''}" @click='${this.click}'>
            <div id="cuerpo" class="grid column" ?whatsapp="${this.svg=='WHATSAPP'}">
                <div id="svgs" ?whatsapp="${this.svg=='WHATSAPP'}">${SVGS[this.svg]}</div>
                <div>${this.texto}</div>
            </div>
        </button>
        `;
 	}
    click(){
        if (this.accion!=""){
            store.dispatch(botonItem(this.accion, this.parametro))
        }
    }
	static get properties() {
		return {
			mediaSize: {
				type: String,
				reflect: true,
				attribute: "media-size",
			},
			current: {
				type: String,
				reflect: true,
			},
            texto: {
				type: String,
				reflect: true,
			},
            svg: {
				type: String,
				reflect: true,
			},
            colorFondo: {
				type: String,
				reflect: true,
			},
            colorTexto: {
				type: String,
				reflect: true,
			},
            style: {
				type: String,
				reflect: true,
			},
            accion: {
				type: String,
				reflect: true,
			},
            parametro: {
				type: String,
				reflect: true,
			},
		};
	}
}
window.customElements.define("c-boton", botonComponent);

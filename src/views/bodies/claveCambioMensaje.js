/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";import { showWarning} from "../../redux/ui/actions";
import { gridLayout } from "../css/gridLayout";


const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class claveCambioMensajeScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
        this.idioma = store.getState().ui.idioma;
		this.claveCambioMensaje = require('../../../assets/idiomas/claveCambioMensaje.json');
	}

	static get styles() {
		return css`
			${gridLayout}

		:host{
			display: grid;
			position: relative;
            background-image: linear-gradient(var(--color-azul-oscuro), var(--primary-color));
			overflow: hidden;
            justify-items:center;
			color: var(--color-blanco);
        }
        :host([hidden]){
            display: none;  
        }
        #x{
            position: absolute;
            top: .5rem;
            right: .5rem;
            width: 1.5rem;
            height: 1.5rem;
            cursor: pointer;
        }
        #titulo{
            position:relative;
            display:flex;
            padding-bottom:2rem;
            align-items: flex-end;
            justify-content:center;
            text-align:center;
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
        }
        #subtitulo{
            width: 100%;
    		justify-items: center;
			text-align: center;
            font-size: var(--font-header-h1-menos-size);
            font-weight: var(--font-header-h1-menos-weight);
         }
        #leyenda{
            position:relative;
            display:flex;
            align-items: flex-start;
            justify-content:center;
            text-align:center;
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
        }
        #detalle{
            position:relative;
            display:flex;
            align-items: flex-start;
            justify-content:center;
            text-align:center;
            font-size: var(--font-label-size);
            font-weight: var(--font-label-weight);
            padding-top:1rem;
        }
        `
    }
    render() {
        return html `
            <div id="x" @click=${this.sesion}>X
            </div>               
            <div id="titulo">
            ${this.claveCambioMensaje[this.idioma].titulo1}
            </div>
            <div id="subtitulo">
            <label id="leyenda">
            ${this.claveCambioMensaje[this.idioma].titulo2}
            </label>
            <label id="detalle">
            ${this.claveCambioMensaje[this.idioma].titulo3}
            </label>
            </div>
        `
    }
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-claveCambioMensaje-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}

	}

	sesion() {
		store.dispatch(goTo("sesion"));
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
window.customElements.define("clavecambiomensaje-screen", claveCambioMensajeScreen);

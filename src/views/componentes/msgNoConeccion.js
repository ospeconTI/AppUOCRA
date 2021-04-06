/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";
import { botonItem } from "../../redux/items/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const CURRENT_TIMESTAMP = "screen.timeStamp";

export class msgNoConeccionComponent extends connect(store, CURRENT_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.texto = "";
	}

	static get styles() {
		return css`
			${gridLayout}
			:host {
				display: grid;
				position: absolute;
				background-color: transparent !important;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				width: fit-content;
			}
			#cuerpo {
				background-color: var(--primary-color);
				color: white;
				align-content: center;
				text-align: center;
				border: 1px solid white;
				border-radius: 0.5rem;
			}
			*[hidden] {
				display: none;
			}
		`;
	}
	render() {
		return html`
			<div class="grid row" id="cuerpo" @click=${this.atras}>
				<div style="font-size:6vw;font-weight: 900;">Error de comexíon</div>
				<div style="font-size:4vw;">Verifique su conección de datos</div>
				<div style="font-size:3vw;">No se pudo cargar la información</div>
				<div style="font-size:4vw;" ?hidden="${this.texto == ""}">${this.texto}</div>
			</div>
		`;
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
		};
	}
}
window.customElements.define("msgnoconeccion-component", msgNoConeccionComponent);

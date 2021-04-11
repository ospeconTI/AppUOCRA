/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";
import { button } from "../css/button";
import { goHistoryPrev } from "../../redux/routing/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const CURRENT_TIMESTAMP = "screen.timeStamp";

export class msgSinCoberturaComponent extends connect(store, CURRENT_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.texto = "";
	}

	static get styles() {
		return css`
			${gridLayout}
			${button}
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
			#linea {
				color: var(--color-gris-claro);
				width: 95%;
			}
			#botones {
				width: 80%;
				height: 2rem;
				justify-self: center;
			}
			.btnTelefono {
				background-color: var(--color-gris-medio) !important;
				border-radius: 1rem !important;
				fill: var(--color-blanco) !important;
				stroke: var(--color-blanco) !important;
				color: var(--color-blanco) !important;
				font-size: var(--font-header-h1-size) !important;
				grid-gap: 0 !important;
				justify-content: center;
				padding: 0 !important;
			}
			.btnAtras {
				background-color: var(--color-verde-oscuro) !important;
				border-radius: 1rem !important;
				fill: var(--color-blanco) !important;
				stroke: var(--color-blanco) !important;
				color: var(--color-blanco) !important;
				font-size: var(--font-header-h1-size) !important;
				grid-gap: 0 !important;
				justify-content: center;
				padding: 0 !important;
			}
			svg {
				width: 1.4rem;
				height: 1.4rem;
			}
		`;
	}
	render() {
		return html`
			<div class="grid row" id="cuerpo">
				<div style="font-size:6vw;font-weight: 900;">Datos de Cobertura</div>
				<div style="font-size:4vw;">${"Su documento " + store.getState().autorizacion.usuario.documento + ", no registra cobertura"}</div>
				<div style="font-size:3vw;">Por favor comunicarse al</div>
				<div id="botones" class="grid">
					<button btn1 class="btnTelefono" @click=${this.telefono}>
						<div class="grid column">
							<div>${SVGS["TELEFONO"]}</div>
							<div style="font-size: var(--font-bajada-size)">0800-345-7700</div>
						</div>
					</button>
				</div>
				<div>
					<hr id="linea" />
				</div>
				<div id="botones" class="grid" ?hidden="${this.texto == ""}">
					<button btn1 class="btnAtras" @click=${this.atras}>
						<div class="grid column">
							<div>${SVGS["ATRAS"]}</div>
							<div style="font-size: var(--font-bajada-size)">${this.texto}</div>
						</div>
					</button>
				</div>
				<div style="padding:.5rem"></div>
			</div>
		`;
	}
	telefono() {
		document.location.href = "tel:0800-345-7700";
	}
	atras() {
		store.dispatch(goHistoryPrev());
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
window.customElements.define("msgsincobertura-component", msgSinCoberturaComponent);

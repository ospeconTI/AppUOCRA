/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo, goHistoryPrev } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";
import { get as getConvenios } from "../../redux/convenios/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const DATOS_CONVENIO = "convenios.timeStamp";
const ERROR_CONVENIO = "convenios.errorTimeStamp";

export class saludCredencialScreen extends connect(store, DATOS_CONVENIO, ERROR_CONVENIO, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.convenios = null;
	}

	static get styles() {
		return css`
			${gridLayout}
			${button}
			${select}

			:host {
				display: grid;
				position: relative;
				overflow-x: hidden;
				overflow-y: auto;
				padding: 0 !important;
				background-image: url("https://app.uocra.org/images/credencialFondo.gif");
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				width: 100vw;
				grid-gap: 0.5rem;
				background-color: rgba(255 255 255 255) !important;
				padding: 0 !important;
				place-self: flex-start;
				overflow-x: hidden;
				overflow-y: auto;

				justify-self: center;
			}
			#tituloTexto {
				background-color: rgba(0, 0, 0, 0.4) !important;
				align-self: self-start;
				font-size: var(--font-header-h1-size);
				font-weight: 900;
				grid-template-columns: auto 1fr;
				padding-bottom: 1rem;
				color: var(--color-blanco);
			}
			#subTituloTexto {
				width: 80%;
				align-self: self-start;
				font-size: var(--font-header-h1-size);
				justify-self: center;
				grid-template-columns: auto 1fr;
				padding-bottom: 1rem;
				color: var(--color-blanco);
			}
			#bullet {
				fill: var(--color-blanco);
				stroke: var(--color-verde-claro);
			}
			#bullet1 svg {
				fill: var(--color-blanco);
				stroke: var(--color-verde-claro);
				height: 1.2rem;
				width: 1.2em;
			}
			.convenios {
				grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
				justify-items: center;
				grid-gap: 1rem;
			}
			.detalle {
				background-color: var(--color-rojo);
				width: 10rem;
				height: 10rem;
				border-radius: 1rem;
				justify-items: center;
				align-content: center;
				font-size: var(--font-header-h1-menos-size);
				text-align: center;
			}
			.imagen {
				cursor: pointer;
			}
			.imagen svg {
				width: 3rem;
				height: 3rem;
			}
			#credencial {
				width: 85vw;
				height: 65vw;
				background-image: url("https://app.uocra.org/credencial/fondoCredencialDigital.svg");
				background-repeat: no-repeat;
				background-position: center center;
				background-size: contain;
				justify-self: center;
				grid-gap: 0 !important;
			}
			#logo {
				width: 40vw;
				height: 18vw;
				background-image: url("https://app.uocra.org/credencial/logo.png");
				background-repeat: no-repeat;
				background-position: bottom center;
				background-size: contain;
				justify-self: center;
			}
			.txtTarjeta {
				color: white;
				font-size: 5vw;
			}
		`;
	}
	render() {
		if (this.convenios) {
			return html`
				<div id="cuerpo" class="grid row">
					<div id="tituloTexto" class="grid">
						<div id="bullet">${SVGS["BULLET"]}</div>
						<div id="solicitud">Credencial Digital</div>
					</div>
					<div style="padding:2rem"></div>
					<div id="credencial" class="grid row">
						<div id="logo"></div>
						<div><hr /></div>
						<div class="txtTarjeta" style="padding:0 0 0 4vw;">${store.getState().usuarios.usuario ? store.getState().usuarios.usuario.apellido + " " + store.getState().usuarios.usuario.nombre : ""}</div>
						<div class="txtTarjeta" style="padding:0 0 0 4vw;">${store.getState().usuarios.usuario ? store.getState().usuarios.usuario.documento : ""}</div>
						<div><hr /></div>
						<div class="txtTarjeta" style="padding:2vw 0 4vw 4vw;">Generada: ${new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear()}</div>
					</div>
					<div id="subTituloTexto" class="grid">
						<div id="bullet1">${SVGS["BULLET"]}</div>
						<div id="solicitud">Se debe presentar DNI.</div>
					</div>
					<div id="subTituloTexto" class="grid">
						<div id="bullet1">${SVGS["BULLET"]}</div>
						<div id="solicitud">Presentar último tres recibo de sueldo.</div>
					</div>
				</div>
			`;
		} else {
			if (this.current == "saludCredencial" && this.convenios == 0) {
				return html`<msgnoconeccion-component @click="${this.atras}" texto="Haga click volver" style="cursor:pointer"></msgnoconeccion-component>; `;
			}
		}
	}
	pdf(e) {
		let archivo = e.currentTarget.item;
		window.open(archivo, "_blank");
		//location.href = archivo
	}
	atras() {
		store.dispatch(goHistoryPrev());
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-saludCredencial-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				store.dispatch(getConvenios());
			}
		}
		if (name == DATOS_CONVENIO) {
			this.convenios = state.convenios.entities;
			this.update();
		}
		if (name == ERROR_CONVENIO) {
			this.convenios = 0;
			this.update();
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
window.customElements.define("saludcredencial-screen", saludCredencialScreen);

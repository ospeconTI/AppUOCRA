/** @format */

import { html, LitElement, css } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";
import { get as getEdiciones } from "../../redux/arteEdicionesActuales/action";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const ARTEEDICIONES_DATOS = "arteEdicionesActuales.timeStamp";
const ARTEEDICIONES_ERROR = "arteEdicionesActuales.errorTimeStamp";
export class arteEdicionScreen extends connect(store, MEDIA_CHANGE, SCREEN, ARTEEDICIONES_DATOS, ARTEEDICIONES_ERROR)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.provincia = null;
		this.localidad = null;
		this.servicio = null;
		this.registros = null;
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
				grid-gap: 0.5rem;
				background-color: var(--color-blanco);
				padding: 0 !important;
				place-self: flex-start;
				overflow-x: hidden;
				overflow-y: auto;
			}
			#titulo {
				width: 100%;
				height: 52vw;
				/*
				background-image: url("https://app.uocra.org/images/arte2021_1.gif");
				*/
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
				align-self: self-start;
				border-bottom-left-radius: 0.5rem;
				border-bottom-right-radius: 0.5rem;
				padding: 0;
			}
			#tituloTexto {
				align-self: self-start;
				font-size: var(--font-header-h1-menos-size);
				font-weight: 900;
				grid-template-columns: auto 1fr;
				padding-bottom: 0.6rem;
			}
			#subTituloTexto {
				width: 80%;
				align-self: self-start;
				font-size: var(--font-header-h1-menos-size);
				justify-self: center;
				padding-bottom: 0.2rem;
			}
			#subsubTituloTexto {
				width: 80%;
				align-self: self-start;
				font-size: var(--font-header-h2-size);
				justify-self: center;
				padding-bottom: 0rem;
			}
			.miselect {
				width: 60%;
				height: 3rem;
				justify-self: center;
				text-align: center;
			}
			.elselect {
				height: 2.5rem;
			}
			#botones {
				width: 90%;
				justify-self: center;
			}
			.btnListado {
				background-color: var(--color-amarillo) !important;
				border-radius: 1rem !important;
				fill: var(--color-blanco) !important;
				stroke: var(--color-blanco) !important;
				color: var(--color-blanco) !important;
				font-size: var(--font-bajada-size) !important;
				grid-gap: 0 !important;
			}
			.btnVerMapa {
				background-color: var(--primary-color) !important;
				border-radius: 1rem !important;
				fill: var(--color-blanco) !important;
				stroke: var(--color-blanco) !important;
				color: var(--color-blanco) !important;
				font-size: var(--font-bajada-size) !important;
				grid-gap: 0 !important;
			}
			#bullet {
				fill: var(--color-blanco);
				stroke: var(--color-verde-claro);
			}
			#bullet1 {
				align-self: flex-start;
			}
			#bullet1 svg {
				width: 1rem;
				height: 1rem;
				fill: var(--color-blanco);
				stroke: var(--color-verde-claro);
			}
		`;
	}
	render() {
		if (this.registros) {
			return html`
				<div id="cuerpo" class="grid row">
					<div id="titulo" class="grid column" style="background-image:url('${this.registros[0].imagen}')"></div>
					<div id="subTituloTexto">${this.registros[0].titulo}</div>
					<div id="subTituloTexto">${unsafeHTML(this.registros[0].descripcion)}</div>
					<!--<div id="tituloTexto" class="grid">
						<div id="bullet">${SVGS["BULLET"]}</div>
						<div id="solicitud">ABIERTA LA INSCRIPCIÓN</div>
					</div>
					<div id="tituloTexto" class="grid">
						<div id="bullet">${SVGS["BULLET"]}</div>
						<div id="solicitud">Podés participar en las siguiente CATEGORÍAS del concurso:</div>
					</div>
					<div id="subsubTituloTexto">
						<div class="grid column" style="padding:0; grid-template-columns:auto 1fr">
							<div id="bullet1">${SVGS["BULLET"]}</div>
							<div>1 - Fotograía con Cámara o Celular.</div>
						</div>
					</div>
					<div id="subsubTituloTexto">
						<div class="grid column" style="padding:0; grid-template-columns:auto 1fr">
							<div id="bullet1">${SVGS["BULLET"]}</div>
							<div>2 - Composición Fotográfica Digital.</div>
						</div>
					</div>
					<div id="tituloTexto" class="grid">
						<div id="bullet">${SVGS["BULLET"]}</div>
						<div id="solicitud">Hay más de $120 mil en premios!</div>
					</div>
					<div id="tituloTexto" class="grid">
						<div id="bullet">${SVGS["BULLET"]}</div>
						<div id="solicitud">Tenés tiempo hasta el 12 de Mayo</div>
					</div>
					<div id="tituloTexto" class="grid">
						<div id="bullet">${SVGS["BULLET"]}</div>
						<div id="solicitud">Conocé las bases del concurso en <a target="_blank" href="https://www.construyendoarte.com.ar" rel="noopener">www.construyendoarte.com.ar</a></div>
					</div>
					-->
					<div style="padding-top:2rem"></div>
				</div>
			`;
		} else {
		}
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-arteEdicion-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				store.dispatch(getEdiciones());
			}
		}
		if (name == ARTEEDICIONES_DATOS) {
			this.registros = state.arteEdicionesActuales.entities;
			this.update();
		}
		if (name == ARTEEDICIONES_ERROR) {
			this.registros = null;
			this.update();
		}
	}
	salud() {
		store.dispatch(goTo("salud"));
	}
	cultura() {
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
window.customElements.define("arteedicion-screen", arteEdicionScreen);

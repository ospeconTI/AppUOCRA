/** @format */

import { html, LitElement, css } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo, goHistoryPrev } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { menuActivar, showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";
import { get as getNoticias, noticia as setNoticia } from "../../redux/noticias/actions";
import { msgNoConeccionComponent } from "../componentes/msgNoConeccion";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const NOTICIAS_TIMESTAMP = "noticias.timeStamp";
const NOTICIAS_ERRORTIMESTAMP = "noticias.errorTimeStamp";

export class principalScreen extends connect(store, NOTICIAS_TIMESTAMP, NOTICIAS_ERRORTIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.aplicacion = require("../../../assets/idiomas/aplicacion.json");
		this.principal = require("../../../assets/idiomas/principal.json");
		this.noticia = null;
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
				grid-template-rows: 14% 86%;
				background-color: var(--color-blanco);
			}
			#titulo {
				width: 100vw;
				grid-gap: 2vw !important;
				justify-content: center;
				padding: 0 !important;
				align-self: center;
				background-color: var(--color-gris-fondo);
			}
			.icBoton {
				height: 2.8rem;
				width: 15vw;
				padding: 0.4vw;
				border-radius: 0.5rem;
				color: var(--color-blanco);
				font-size: 0.5rem;
				grid-gap: 0 !important;
				justify-items: center;
				cursor: pointer;
			}
			#icGremio {
				background-color: var(--primary-color);
			}
			#icSalud {
				background-color: var(--color-verde-claro);
			}
			#icCursos {
				background-color: var(--color-amarillo);
			}
			#icTeatro {
				background-color: var(--color-azul-oscuro);
			}
			#icMas {
				background-color: var(--color-gris-oscuro);
			}

			svg {
				height: 1.8rem;
				width: 1.8rem;
				fill: white;
			}
			#masuocra svg {
				height: 1.3rem;
				width: 1.3rem;
			}
			#linea {
				color: var(--color-blanco);
				width: 90%;
			}
			#datos {
				height: 69vh;
				width: 90vw;
				overflow-x: hidden;
				overflow-y: auto;
				grid-gap: 0.3rem;
				background-color: var(--color-blanco);
				justify-self: center;
			}
			#datos::-webkit-scrollbar {
				display: none;
			}
			.notaCabImg {
				width: 100%;
				height: 42vw;
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
				justify-self: center;
				border-radius: 0.4rem;
			}
			.notaCabTxt {
				color: var(--color-gris-oscuro);
				font-size: var(--font-label-size);
				font-style: italic;
				justify-self: center;
				-webkit-line-clamp: 4;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				text-align: justify;
				word-wrap: break-word;
			}
			.verMas {
				color: var(--color-gris-oscuro);
				font-size: 1.4vh !important;
				font-style: italic;
				font-weight: bolder;
				cursor: pointer;
				text-align: right;
				align-self: self-end;
				padding-right: 1.5rem;
			}
			.notas {
				display: grid;
				grid-template-columns: auto 1fr;
				justify-self: center;
				padding: 0 !important;
				grid-gap: 0.5rem !important;
			}
			.notaDetImg {
				width: 29vw;
				height: 18vw;
				background-repeat: no-repeat;
				background-position: center;
				background-size: contain;
				justify-self: center;
				border-radius: 0.8rem;
			}
			.notaDetTxt {
				color: var(--color-gris-oscuro);
				justify-self: center;
				font-size: calc(var(--font-header-h1-menos-size) + 0.05rem);
				font-weight: 900;
				word-wrap: break-word;
				padding-right: 1.5rem;
			}
			.txtNota {
				display: grid;
				grid-template-rows: auto 1fr;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		`;
	}
	render() {
		if (this.noticia) {
			return html`
				<div id="cuerpo">
					<div id="titulo" class="grid column">
						<div id="icGremio" class="grid row icBoton" @click="${this.sindicato}">
							<div>${SVGS["MISINDICATO"]}</div>
							<div>${this.aplicacion[this.idioma].sindicato}</div>
						</div>
						<div id="icSalud" class="grid row icBoton" @click="${this.salud}">
							<div>${SVGS["SALUD"]}</div>
							<div>${this.aplicacion[this.idioma].salud}</div>
						</div>
						<div id="icCursos" class="grid row icBoton" @click="${this.fundacion}">
							<div>${SVGS["CURSOS"]}</div>
							<div>${this.aplicacion[this.idioma].capacitcion}</div>
						</div>
						<div id="icTeatro" class="grid row icBoton" @click="${this.cultura}">
							<div>${SVGS["TEATRO"]}</div>
							<div>${this.aplicacion[this.idioma].teatro}</div>
						</div>
						<div id="icMas" class="grid row icBoton" @click="${this.masUOCRA}">
							<div id="masuocra">${SVGS["MASUOCRA"]}</div>
							<div>${this.aplicacion[this.idioma].masuocra}</div>
						</div>
					</div>

					<div id="datos" class="grid row" style="align-items: stretch;">
						${this.noticia.map((item, index) => {
							if (index == 0) {
								return html`
									<div class="grid row">
										<div class="notaCabImg" style="background-image: url('${item.imagen}')"></div>
										<div class="notaCabTxt">${unsafeHTML("<b style='font-size:.8rem;'>" + item.copete + "</b> " + item.detalle)}</div>
										<div class="verMas" .item=${item} @click="${this.verMas}">${this.principal[this.idioma].verMas}</div>
									</div>
								`;
							} else {
								return html`
									<div>
										<hr id="linea" />
									</div>
									<div class="notas">
										<div class="notaDetImg" style="background-image: url('${item.imagen}')"></div>
										<div class="txtNota">
											<div class="notaDetTxt">${unsafeHTML(item.copete)}</div>
											<div id="verMas" class="verMas" .item=${item} @click="${this.verMas}">${this.principal[this.idioma].verMas}</div>
										</div>
									</div>
								`;
							}
						})}
						<div style="padding:2rem;"></div>
					</div>
				</div>
			`;
		} else {
			if (this.current == "main" && this.noticia == 0) {
				return html`<msgnoconeccion-component @click="${this.refresh}" texto="Haga click para refrescar" style="cursor:pointer"></msgnoconeccion-component>; `;
			}
		}
	}
	refresh() {
		store.dispatch(goTo("main"));
	}
	removeTags(txt) {
		var rex = /(<([^>]+)>)/gi;
		txt = txt.replace(rex, "");
		return txt;
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
				store.dispatch(getNoticias());
			}
		}
		if (name == NOTICIAS_TIMESTAMP) {
			this.noticia = state.noticias.entities.filter((a) => a.activo == 1);
			this.noticia = this.noticia.sort(function (a, b) {
				return a["orden"] > b["orden"] ? 1 : -1;
			});
			this.update();
		}
		if (name == NOTICIAS_ERRORTIMESTAMP) {
			this.noticia = 0;
			this.update();
		}
	}
	sindicato() {
		store.dispatch(goTo("sindicato"));
	}
	salud() {
		store.dispatch(goTo("salud"));
	}
	fundacion() {
		store.dispatch(goTo("fundacion"));
	}
	cultura() {
		store.dispatch(goTo("cultura"));
	}
	verMas(e) {
		store.dispatch(setNoticia(e.currentTarget.item));
		store.dispatch(goTo("noticiaDetalle"));
	}
	masUOCRA() {
		store.dispatch(menuActivar());
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

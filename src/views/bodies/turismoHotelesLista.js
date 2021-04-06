/** @format */

import { html, LitElement, css } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo, goHistoryPrev } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { OLComponent } from "../componentes/ol-map";
import { Overlay } from "ol/Overlay";
import { SVGS } from "../../../assets/icons/svgs";
import { get as getHoteles, hotel } from "../../redux/hoteles/actions";
import TileSource from "ol/source/Tile";

export const featureListener = function (event) {
	console.log("featureListenerCalled");
};

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const HOTELES_DATOS = "hoteles.timeStamp";
const HOTELES_DATOS_ERROR = "hoteles.errorTimeStamp";

export class turismoHotelesListaScreen extends connect(store, HOTELES_DATOS, HOTELES_DATOS_ERROR, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.programacion = null;
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
				height: 100%;
				grid-auto-flow: row;
				background-color: var(--color-blanco);
				overflow-x: hidden;
				overflow-y: auto;
			}
			#titulo {
				padding: 0.8vh 0 0.8vh 0;
				text-align: center;
				font-size: 3vh;
				background-color: var(--color-verde-claro);
				color: var(--color-blanco);
			}
			svg {
				height: 2vh;
				width: 2vh;
				stroke: var(--primary-color);
				fill: var(--color-blanco);
			}
			.panel {
				display: grid;
				height: 89vh;
				grid-auto-flow: row;
				grid-gap: 0.2rem;
				align-content: start;
			}
			.notas {
				width: 95vw;
				justify-self: center;
				grid-template-columns: auto 1fr;
				padding: 0 !important;
				grid-gap: 0 !important;
			}
			.notaDetImg {
				width: 36vw;
				height: 24vw;
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
				justify-self: center;
				border-radius: 0.4rem;
				cursor: pointer;
			}
			.notaTitTxt {
				color: var(--primary-color);
				justify-self: left;
				font-size: var(--font-header-h1-size);
			}
			.notaNomTxt {
				color: var(--color-negro);
				justify-self: left;
				font-size: var(--font-header-h1-menos-size);
				font-weight: 900;
			}
			.notaDetTxt {
				color: var(--color-gris-oscuro);
				justify-self: left;
				font-size: var(--font-header-h2-size);
			}
			:host([media-size="small"]) .notaDetTxt {
				font-size: var(--font-label-size);
			}
			*[hidden] {
				display: none;
			}
		`;
	}
	render() {
		if (this.programacion) {
			return html`
				<div id="cuerpo">
					<div id="titulo">HOTELES</div>
					<div class="panel">
						${this.programacion.map((item, index) => {
							return html`
								<div ?hidden="${this.imprime(index, "linea")}">
									<hr id="linea" />
								</div>
								<div style="padding:.3rem" ?hidden="${!this.imprime(index, "linea")}"></div>
								<div class="notaTitTxt" ?hidden="${this.imprime(index, "titulo")}" style="font-weight:900;justify-self: center;">${"Hoteles " + item.lugar}</div>
								<div class="grid notas" style="align-items: stretch;">
									<div class="notaDetImg" style="background-image: url('${item.imagen}')" .item="${item}" @click=${this.detalle}></div>
									<div class="grid row" style="grid-gap:0">
										<div class="grid column" style="padding:0; grid-template-columns:auto 1fr">
											<div id="bullet">${SVGS["BULLET"]}</div>
											<div class="notaTitTxt" style="font-size:var(--font-head-h2-size)">${item.nombre}</div>
										</div>
										<div class="notaNomTxt" style="font-weight:400;font-style:italic">${"Estrellas: " + item.estrellas}</div>
										<div class="notaDetTxt">${item.direccion}</div>
										<div class="notaDetTxt" style="font-style:italic">${item.localidad}</div>
									</div>
								</div>
							`;
						})}
						<div style="padding:1rem;"></div>
					</div>
				</div>
			`;
		} else {
			if (this.current == "teatroProgramacion" && this.programacion == 0) {
				return html`<msgnoconeccion-component @click="${this.atras}" texto="Haga click volver" style="cursor:pointer"></msgnoconeccion-component>; `;
			}
		}
	}
	imprime(index, tipo) {
		if (index == 0) {
			return tipo == "linea" ? true : false;
		} else {
			if (this.programacion[index].lugar == this.programacion[index - 1].lugar) {
				return true;
			} else {
				return false;
			}
		}
	}
	atras() {
		store.dispatch(goHistoryPrev());
	}
	detalle(e) {
		store.dispatch(hotel(e.currentTarget.item));
		store.dispatch(goTo("turismoHotelesDetalle"));
	}
	closer() {
		var closer = this.shadowRoot.querySelector("#popup");
		if (!closer.hasAttribute("hidden")) {
			closer.setAttribute("hidden", "");
		}
	}

	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-turismoHotelesLista-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				store.dispatch(getHoteles());
				this.hidden = false;
			}
		}

		if (name == HOTELES_DATOS) {
			this.programacion = state.hoteles.entities.sort(function (a, b) {
				return a["lugar"] > b["lugar"] ? 1 : -1;
			});
			this.update();
		}
		if (name == HOTELES_DATOS_ERROR) {
			this.programacion = 0;
			this.update();
		}
	}

	volver() {
		store.dispatch(goTo("inicial"));
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
window.customElements.define("turismohoteleslista-screen", turismoHotelesListaScreen);

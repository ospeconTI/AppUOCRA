/** @format */

import { html, LitElement, css } from "lit-element";
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
import { getDistance } from "../../libs/funciones";
import { get as getEstrenos } from "../../redux/tvEstrenos/actions";

export const featureListener = function (event) {
	console.log("featureListenerCalled");
};

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const TVESTRENOS_DATOS = "tvEstrenos.timeStamp";
const TVESTRENOS_ERROR = "tvEstrenos.errorTimeStamp";

export class tvEstrenosScreen extends connect(store, TVESTRENOS_DATOS, TVESTRENOS_ERROR, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.idiomaLista = require("../../../assets/idiomas/tvEstrenos.json");
		this.estrenos = null;
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
				display: inline-block;
				height: 100%;
				grid-auto-flow: row;
				background-color: var(--color-blanco);
				overflow-x: hidden;
				overflow-y: auto;
			}
			#titulo {
				height: 8vh;
				padding: 3vh 0 0 0;
				text-align: center;
				font-size: 3vh;
				background-color: var(--color-gris);
				color: var(--color-blanco);
			}
			svg {
				height: 8vh;
				width: 8vh;
			}
			.panel {
				display: grid;
				height: auto;
				grid-auto-flow: row;
				grid-gap: 0.2rem;
				align-content: start;
			}
			.notas {
				width: 85vw;
				justify-self: center;
				grid-template-rows: auto 1fr;
				padding: 0 !important;
				grid-gap: 0.5rem !important;
			}
			.notaDetImg {
				width: 60vw;
				height: 40vw;
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
				justify-self: center;
				border-radius: 0.4rem;
			}
			.notaTitTxt {
				color: var(--primary-color);
				justify-self: left;
				font-size: var(--font-header-h1-size);
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
			.miBoton {
				width: 6rem !important;
				background-color: var(--color-verde-claro) !important;
				font-size: var(--font-bajada-size) !important;
				border-radius: 1rem !important;
				color: var(--color-blanco) !important;
			}
		`;
	}
	render() {
		if (this.estrenos) {
			return html`
				<div id="cuerpo">
					<div id="titulo">${this.idiomaLista[this.idioma].titulo}</div>
					<div class="panel">
						${this.estrenos.map((item, index) => {
							return html`
								<div ?hidden="${index == 0}">
									<hr id="linea" />
								</div>
								<div class="grid notas" style="align-items: stretch;">
									<div class="grid row">
										<div class="notaTitTxt">${item.nombre}</div>
										<div class="notaDetTxt">${item.descripcion}</div>
									</div>
									<div class="notaDetImg" style="background-image: url(${item.imagen})"></div>
									<button btn1 .item="${item.link}" @click=${this.ver} class="miBoton">${this.idiomaLista[this.idioma].boton}</button>
								</div>
							`;
						})}
						<div style="padding:.5rem"></div>
					</div>
				</div>
			`;
		} else {
			if (this.current == "tvEstrenos" && this.estrenos == 0) {
				return html`<msgnoconeccion-component @click="${this.atras}" texto="Haga click volver" style="cursor:pointer"></msgnoconeccion-component>; `;
			}
		}
	}
	ver(e) {
		window.open(e.currentTarget.item, "_blank");
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
			const SeMuestraEnUnasDeEstasPantallas = "-tvEstrenos-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				store.dispatch(getEstrenos());
			}
		}

		if (name == TVESTRENOS_DATOS) {
			this.estrenos = state.tvEstrenos.entities;
			this.update();
		}
		if (name == TVESTRENOS_ERROR) {
			this.estrenos = 0;
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
window.customElements.define("tvestrenos-screen", tvEstrenosScreen);

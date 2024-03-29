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
import { get as getCineEdicionesAnteriores } from "../../redux/cineEdicionesAnteriores/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const CINEEDICIONESANTERIORES_DATOS = "cineEdicionesAnteriores.timeStamp";
const CINEEDICIONESANTERIORES_ERROR = "cineEdicionesAnteriores.errorTimeStamp";

export class cineEdicionesAnterioresScreen extends connect(store, CINEEDICIONESANTERIORES_DATOS, CINEEDICIONESANTERIORES_ERROR, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.ediciones = null;
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
			}
			.panel {
				display: grid;
				grid-auto-flow: row;
				grid-gap: 0.8rem;
				align-content: start;
			}
			.notas {
				width: 95vw;
				justify-self: center;
				grid-template-columns: auto 1fr;
				padding: 0.2rem 0 0.2rem 0;
				grid-gap: 0 !important;
				box-shadow: var(--shadow-elevation-2-box);
			}
			.notaDetImg {
				width: 24vw;
				height: 36vw;
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
				justify-self: center;
				border-radius: 0.4rem;
				cursor: pointer;
			}
			#tituloTexto {
				align-self: self-start;
				font-size: var(--font-header-h1-size);
				font-weight: 900;
				grid-template-columns: auto 1fr;
				padding-bottom: 0.6rem;
			}
			.notaTitTxt {
				color: var(--color-negro);
				font-weight: 900;
				justify-self: left;
				font-size: var(--font-header-h1-menos-size);
			}
			.notaNomTxt {
				color: var(--color-gris-oscuro);
				justify-self: left;
				font-size: var(--font-header-h2-size);
			}
			.btnVerMapa {
				background-color: var(--color-blanco) !important;
				border-radius: 1rem !important;
				border: 1px solid var(--color-gris) !important;
				color: var(--color-gris-oscuro) !important;
				font-size: var(--font-label-size) !important;
				grid-gap: 0 !important;
				width: 12rem;
				justify-self: center;
			}
			#bullet {
				fill: var(--color-blanco);
				stroke: var(--color-verde-claro);
			}
		`;
	}
	render() {
		if (this.ediciones) {
			return html`
				<div id="cuerpo" class="grid row">
					<div style="padding-top:1rem"></div>
					<div id="tituloTexto" class="grid">
						<div id="bullet">${SVGS["BULLET"]}</div>
						<div id="solicitud">Ediciones Anteriores</div>
					</div>

					<div class="panel">
						${this.ediciones.map((item, index) => {
							return html`
								<div class="grid notas" style="align-items: stretch;">
									<div class="notaDetImg" style="background-image: url('${item.imagen}')"></div>
									<div class="grid row" style="grid-gap:0">
										<div class="notaTitTxt">${item.nombre}</div>
										<div class="notaNomTxt">${item.descripcion}</div>
										<button btn3 @click=${this.pdf} .item="${item}" class="btnVerMapa">VER CATALOGO</button>
									</div>
								</div>
							`;
						})}
					</div>
					<div style="padding-top:2rem"></div>
				</div>
			`;
		} else {
			if (this.current == "cineEdicionesAnteriores" && this.ediciones == 0) {
				return html`<msgnoconeccion-component @click="${this.atras}" texto="Haga click volver" style="cursor:pointer"></msgnoconeccion-component>; `;
			}
		}
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
			const SeMuestraEnUnasDeEstasPantallas = "-cineEdicionesAnteriores-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				store.dispatch(getCineEdicionesAnteriores());
				this.hidden = false;
			}
		}
		if (name == CINEEDICIONESANTERIORES_DATOS) {
			this.ediciones = state.cineEdicionesAnteriores.entities;
			this.update();
		}
		if (name == CINEEDICIONESANTERIORES_ERROR) {
			this.ediciones = 0;
			this.update();
		}
	}
	pdf(e) {
		let archivo = e.currentTarget.item.archivo;
		window.open(archivo, "_blank");
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
window.customElements.define("cineedicionesanteriores-screen", cineEdicionesAnterioresScreen);

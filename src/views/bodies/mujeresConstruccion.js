/** @format */

import { html, LitElement, css } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo, goHistoryPrev } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning, video } from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { OLComponent } from "../componentes/ol-map";
import { Overlay } from "ol/Overlay";
import { getDistance } from "../../libs/funciones";
import { SVGS } from "../../../assets/icons/svgs";
import { get as getPoscast } from "../../redux/podcast/actions";

export const featureListener = function (event) {
	console.log("featureListenerCalled");
};

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const PODCAST_DATOS = "podcast.timeStamp";
const PODCAST_eRROR = "podcast.errorTimeStamp";

export class mujeresConstruccionScreen extends connect(store, PODCAST_DATOS, PODCAST_eRROR, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.idiomaLista = require("../../../assets/idiomas/mujeresConstruccion.json");
		this.registros = null;
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
				height: 4vh;
				padding: 1.5vh 0 0 0;
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
				grid-template-rows: auto auto 1fr auto;
				padding: 0 !important;
				grid-gap: 0.5rem !important;
			}
			.notaDetImg {
				display: grid;
				position: relative;
				width: 82vw;
				height: auto;
				justify-self: center;
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
			.notaDetTxtMenor {
				color: var(--color-gris-oscuro);
				justify-self: left;
				font-size: var(--font-label-size);
			}
			:host([media-size="small"]) .notaDetTxt {
				font-size: var(--font-h2-size);
			}
			*[hidden] {
				display: none;
			}
			.play {
				display: inline-block;
				position: absolute;
				top: calc(50% - 27px);
				left: calc(50% - 27px);
				width: 55px;
				height: 55px;
				border-radius: 50%;
				background-color: var(--color-blanco);
				opacity: 0.6;
				cursor: pointer;
			}
			.play svg {
				width: 56px;
				height: 56px;
			}
			#audioTag {
				justify-self: center;
				width: -webkit-fill-available;
			}
		`;
	}
	render() {
		if (this.registros) {
			return html`
				<div id="cuerpo">
					<div id="titulo">${this.idiomaLista[this.idioma].titulo}</div>
					<div class="notaDetTxt" style="padding: 1vh 4vw 0 4vw;">${unsafeHTML(this.idiomaLista[this.idioma].descripcion)}</div>
					<div class="panel">
						${this.registros.map((item, index) => {
							return html`
								<div style="padding:.5rem"></div>
								<div ?hidden="${index == 0}">
									<hr id="linea" />
								</div>
								<div class="grid notas" style="align-items: stretch;">
									<div class="notaDetImg">
										<img width="100%" height="auto" src="${item.imagen}" />
									</div>
									<div class="notaTitTxt">${unsafeHTML(item.nombre)}</div>
									<div class="notaDetTxt">${unsafeHTML(item.descripcion)}</div>
									<audio id="audioTag" controls>
										<source src="${item.archivo}" type="audio/mp3" />
									</audio>
								</div>
							`;
						})}
						<div style="padding:.5rem"></div>
					</div>
				</div>
			`;
		} else {
			if (this.current == "mujeresConstruccion" && this.registros == 0) {
				return html`<msgnoconeccion-component @click="${this.atras}" texto="Haga click volver" style="cursor:pointer"></msgnoconeccion-component>; `;
			}
		}
	}

	atras() {
		store.dispatch(goHistoryPrev());
	}
	ver(e) {
		//window.open("https://www.youtube.com/watch?v=" + e.currentTarget.item.link, "_blank");
		//location.href = "https://www.youtube.com/watch?v=" + e.currentTarget.item.link
		store.dispatch(video(e.currentTarget.item.archivo));
		store.dispatch(goTo("verVideo"));
	}

	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-mujeresConstruccion-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				store.dispatch(getPoscast());
			}
		}

		if (name == PODCAST_DATOS) {
			this.registros = state.podcast.entities
				.sort(function (a, b) {
					return a["orden"] > b["orden"] ? 1 : -1;
				})
				.filter((a) => a.activo == 1);
			this.update();
		}
		if (name == PODCAST_eRROR) {
			this.registros = 0;
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
window.customElements.define("mujeresconstruccion-screen", mujeresConstruccionScreen);

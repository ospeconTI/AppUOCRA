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
import { SVGS } from "../../../assets/icons/svgs";
import { get as getAdolecenciaJornadas } from "../../redux/adolecenciaJornadas/actions";

export const featureListener = function (event) {
	console.log("featureListenerCalled");
};

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const ADOLECENCIAJORNADAS_DATOS = "adolecenciaJornadas.timeStamp";
const ADOLECENCIAJORNADAS_ERROR = "adolecenciaJornadas.errorTimeStamp";

export class adolecencia2020Screen extends connect(store, ADOLECENCIAJORNADAS_DATOS, ADOLECENCIAJORNADAS_ERROR, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.idiomaLista = require("../../../assets/idiomas/adolecencia2020.json");
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
				grid-template-rows: auto 1fr;
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
		`;
	}
	render() {
		if (this.registros) {
			return html`
				<div id="cuerpo">
					<div id="titulo">${this.idiomaLista[this.idioma].titulo + " " + (parseInt(new Date().getFullYear()) - 1)}</div>
					<div class="panel">
						${this.registros.map((item, index) => {
							return html`
								<div ?hidden="${index == 0}">
									<hr id="linea" />
								</div>
								<div class="grid notas" style="align-items: stretch;">
									<div class="grid row">
										<div class="notaTitTxt">${item.nombre}</div>
										<div class="notaDetTxt">${item.descripcion}</div>
									</div>
									<div class="notaDetImg">
										<img width="100%" height="auto" src="https://img.youtube.com/vi/${item.link}/default.jpg" />
										<div class="play" .item=${item} @click=${this.ver}>${SVGS["PLAY"]}</div>
									</div>
									<div class="notaDetTxtMenor" ?hidden="${item.expositor.length == 0}"><b>${this.idiomaLista[this.idioma].expositor}</b>${item.expositor}</div>
									<div class="notaDetTxtMenor" ?hidden="${item.coordinador.length == 0}"><b>${this.idiomaLista[this.idioma].coordinador}</b>${item.coordinador}</div>
								</div>
							`;
						})}
						<div style="padding:.5rem"></div>
					</div>
				</div>
			`;
		} else {
			if (this.current == "adolecencia2020" && this.registros == 0) {
				return html`<msgnoconeccion-component @click="${this.atras}" texto="Haga click volver" style="cursor:pointer"></msgnoconeccion-component>; `;
			}
		}
	}
	atras() {
		store.dispatch(goHistoryPrev());
	}
	ver(e) {
		window.open("https://www.youtube.com/watch?v=" + e.currentTarget.item.link, "_blank");
		//location.href = "https://www.youtube.com/watch?v=" + e.currentTarget.item.link
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-adolecencia2020-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				store.dispatch(getAdolecenciaJornadas());
			}
		}

		if (name == ADOLECENCIAJORNADAS_DATOS) {
			this.registros = state.adolecenciaJornadas.entities.filter((a) => a.activo == 1);
			this.registros.sort(function (a, b) {
				return a["orden"] > b["orden"] ? 1 : -1;
			});

			this.update();
		}
		if (name == ADOLECENCIAJORNADAS_ERROR) {
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
window.customElements.define("adolecencia2020-screen", adolecencia2020Screen);

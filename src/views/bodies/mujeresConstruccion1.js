/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class mujeresConstruccion1Screen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
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
				position: relative;
				width: 100vw;
				height: auto;
				display: grid;
				padding: 0;
			}
			#titulo iframe {
				display: grid;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
			#tituloTexto {
				align-self: self-start;
				font-size: var(--font-header-h1-size);
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
				align-self: flex-start;
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
		if (this.current == "mujeresConstruccion") {
			return html`
				<div id="cuerpo" class="grid row">
					<div id="titulo" class="grid column">
						<img width="100%" height="auto" src="https://img.youtube.com/vi/CfhxRDj5Wb4/0.jpg" />
						<div class="play" @click=${this.ver}>${SVGS["PLAY"]}</div>
					</div>
					<div style="padding-top:1rem"></div>
					<div id="subTituloTexto" class="grid" style="padding:0; grid-template-columns:auto 1fr">
						<div id="bullet">${SVGS["BULLET"]}</div>
						<div id="solicitud">
							<p><b>#NosotrasConstruimos</b></p>
							<p>Visibilizar el rol que desempeñan las mujeres en la mejora de las condiciones socio-económicas y políticas de las sociedades, el trabajo en distintos ámbitos y la superación de determinadas barreras impuestas, es uno de los principales aspectos que hay que mejorar en la sociedad.</p>
							<p>Desde UOCRA Mujeres conmemoramos este 8 de Marzo visibilizando diferentes modos en que las mujeres construyen un mundo mejor, con más igualdad de género y respeto por la diversidad.</p>
							<p>Porque es posible un mundo más igualitario #NosotrasConstruimos.</p>
						</div>
					</div>
					<div style="padding-top:2rem"></div>
				</div>
			`;
		}
	}
	ver(e) {
		window.open("https://www.youtube.com/watch?v=CfhxRDj5Wb4");
		//location.href = "https://www.youtube.com/watch?v=CfhxRDj5Wb4"
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
			}
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
window.customElements.define("mujeresconstruccion1-screen", mujeresConstruccion1Screen);

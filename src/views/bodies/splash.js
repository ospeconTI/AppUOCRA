/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goNext, goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { SVGS } from "../../../assets/icons/svgs";

import { get_por_dni } from "../../redux/credencialSindical/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
export class splashScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.timeOut = 0;
	}

	static get styles() {
		return css`
			:host {
				display: grid;
				justify-content: center;
				align-items: center;
				position: absolute;
				top: 0rem;
				left: 0rem;
				height: 100%;
				width: 100%;
				background-image: linear-gradient(var(--color-azul-oscuro), var(--primary-color));
				padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				height: 100%;
				width: 100vw;
				display: grid;
				place-content: center;
				justify-items: center;
			}
			#imagen {
				width: 100%;
				height: 30vh;
			}
			#version {
				display: grid;
				position: absolute;
				top: 3vh;
				left: 3vw;
				color: var(--color-blanco);
				font-size: var(--font-header-h2-size);
				font-weight: var(--font-header-h2-weight);
			}
		`;
	}
	render() {
		return html`
			<div id="cuerpo" @click=${this.proximo}>
				<div id="imagen">${SVGS["LOGO"]}</div>
				<div id="version">v.:${__VERSION__}</div>
			</div>
			<!-- <msgaceptacobertura-component texto="Volver"></msgaceptacobertura-component> -->
		`;
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;

			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-splash-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;

				//store.dispatch(get_por_dni(28491226));

				this.timeOut = setTimeout(() => {
					//store.dispatch(goTo("gremioCredencial"));
					store.dispatch(goTo("onBoarding"));
				}, 4000);
			}
			this.update();
		}
	}

	proximo() {
		clearTimeout(this.timeOut);
		//store.dispatch(goTo("gremioCredencial"));
		store.dispatch(goTo("onBoarding"));
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
		};
	}
}
window.customElements.define("splash-screen", splashScreen);

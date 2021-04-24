import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { SVGS } from "../../../assets/icons/svgs";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
export class pantallaHorizontalScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
	}

	static get styles() {
		return css`
			:host {
				position: fixed;
				display: grid;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background-color: var(--color-negro) !important;
				z-index: 10000;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				height: 100vh;
				width: 100vw;
				grid-gap: 1rem;
				grid-template-rows: 20% 25% 15% 40%;
				background-color: var(--color-negro) !important;
			}
			#uno {
				justify-self: center;
			}
			#dos {
				background-image: var(--imagen-splash2);
				background-repeat: no-repeat;
				background-position: center;
				background-size: contain;
			}
			#tres {
				font-size: 5vh;
				font-weight: var(--font-header-h1-weight);
				color: var(--color-blanco);
				justify-self: center;
			}
		`;
	}
	render() {
		return html`
			<div id="cuerpo">
				<div style="padding: 1vh 0 0 2vw">v.2.2</div>
				<div id="uno">${SVGS["LOGO"]}</div>
				<div id="dos"></div>
				<div id="tres">Solo en modo vertical</div>
			</div>
		`;
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.orientation = state.ui.media.orientation;
			this.hidden = true;
			if (this.orientation == "landscape" && (navigator.userAgent.search("iPad") != -1 || navigator.userAgent.search("iPhone") != -1 || navigator.userAgent.search("Android") != -1) && (typeof window.orientation !== "undefined" || navigator.userAgent.indexOf("IEMobile") !== -1)) {
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
			orientation: {
				type: String,
				reflect: true,
			},
		};
	}
}
window.customElements.define("pantallahorizontal-screen", pantallaHorizontalScreen);

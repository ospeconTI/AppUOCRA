import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { hideWarning } from "../../redux/ui/actions";
import { goHistoryPrev, goTo } from "../../redux/routing/actions";
import { button } from "../css/button";
import { gridLayout } from "../css/gridLayout";
import { xhr } from "ol/featureloader";

const SCREEN = "screen.timeStamp";
const MEDIA_CHANGE = "ui.media.timeStamp";
export class verVideoScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.area = "body";
		this.hidden = true;
		this.idioma = "ES";
		this.current = "";
		this.video = null;
	}

	static get styles() {
		return css`
			${gridLayout}
			${button}
			:host {
				position: fixed;
				display: grid;
				top: 0rem;
				left: 0rem;
				bottom: 0rem;
				right: 0rem;
				height: 100vh;
				width: 100vw;
				z-index: 100000;
				background-color: rgba(0, 0, 0, 0.8);
			}
			:host([hidden]) {
				display: none;
			}
			.iframe {
				grid-template-rows: auto 1fr;
				position: absolute;
				top: 50%;
				left: 50%;
				width: 95%;
				height: 80%;
				transform: translate(-50%, -50%);
				border: none;
				background-color: var(--color-negro);
			}

			#videoTag {
				justify-self: stretch;
				align-self: stretch;
				max-width: 95vw;
				max-height: 70vh;
				outline: none;
			}
		`;
	}
	render() {
		if (true) {
			return html`
				<div class="iframe grid">
					<button btn1 id="cerrar" @click="${this.cerrarVideo}">Cerrar</button>
					<video id="videoTag" controls>
						<source src="${this.video}" type="video/mp4" />
					</video>
				</div>
			`;
		}
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-verVideo-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				this.video = state.ui.video;
				const videoControl = this.shadowRoot.querySelector("#videoTag");
				if (videoControl.currentSrc != this.video || videoControl.readyState == 0) {
					videoControl.load();
				}
				videoControl.play();
				this.update();
			}
		}
	}
	cerrarVideo(e) {
		const videoControl = this.shadowRoot.querySelector("#videoTag");
		videoControl.pause();
		store.dispatch(goHistoryPrev());
	}
	firstUpdated() {}

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

window.customElements.define("vervideo-screen", verVideoScreen);

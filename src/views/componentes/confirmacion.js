/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { gridLayout } from "../css/gridLayout";
import { button } from "../css/button";
import { SVGS } from "../../../assets/icons/svgs";
import { botonItem } from "../../redux/items/actions";
import { confirmacionCancel, confirmacionOK } from "../../redux/ui/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const CONFIRMACION_SHOW = "ui.confirmacion.showTimeStamp";
const CONFIRMACION_HIDE = "ui.confirmacion.hideTimeStamp";

export class confirmacionComponent extends connect(store, CONFIRMACION_SHOW, CONFIRMACION_HIDE, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.message = "";
		this.hidden = true;
	}

	static get styles() {
		return css`
			${button}
			${gridLayout}
            :host {
				display: grid;
				position: absolute;
				background-color: white;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				padding: 2rem;
				box-shadow: var(--shadow-elevation-6-box);
				border-radius: 1.5rem;
			}

			:host([hidden]) {
				display: none;
			}
			button[btn2] {
				color: black;
			}
		`;
	}
	render() {
		return html`
			<div class="grid row" id="cuerpo" @click=${this.atras}>
				<div>${this.message}</div>
				<div class="grid fit">
					<button btn2 @click="${this.ok}">OK</button>
					<button btn2 @click="${this.cancel}">CANCELAR</button>
				</div>
			</div>
		`;
	}
	stateChanged(state, name) {
		if (name == CONFIRMACION_SHOW) {
			this.message = state.ui.confirmacion.message;
			this.hidden = false;
			this.update();
		}
		if (name == CONFIRMACION_HIDE) {
			this.hidden = true;
			this.update();
		}
	}

	ok() {
		store.dispatch(confirmacionOK());
		this.hidden = true;
		this.update();
	}
	cancel() {
		store.dispatch(confirmacionCancel());
		this.hidden = true;
		this.update();
	}

	static get properties() {
		return {
			mediaSize: {
				type: String,
				reflect: true,
				attribute: "media-size",
			},
			hidden: {
				type: Boolean,
				reflect: true,
			},
		};
	}
}
window.customElements.define("confirmacion-component", confirmacionComponent);

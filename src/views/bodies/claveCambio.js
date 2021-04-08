/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { renovacion } from "../../redux/autorizacion/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class claveCambioScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.claveCambio = require("../../../assets/idiomas/claveCambio.json");
	}

	static get styles() {
		return css`
			${gridLayout}
			${button}
			${input}

			:host {
				display: grid;
				position: relative;
				background-image: linear-gradient(var(--color-azul-oscuro), var(--primary-color));
				overflow: hidden;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				height: 95%;
				width: 100%;
				grid-gap: 0rem;
				grid-template-rows: 35% 2% 63%;
				border-radius: 2rem;
				background-color: transparent;
				align-self: center;
			}
			#titulo {
				height: 100%;
				width: 100%;
				background-image: url("https://app.uocra.org/images/titulo_red_social.png");
				background-repeat: no-repeat;
				background-position: center;
				background-size: auto 10vh;
			}
			#linea {
				color: var(--color-blanco);
				width: 80%;
			}
			.texto {
				color: var(--color-gris-claro);
				font-size: 3vh !important;
				font-weight: var(--font-label-weight);
				text-align: center;
				font-style: italic;
			}
			.textoMsj {
				color: var(--color-gris-claro);
				font-size: 2.5vh !important;
				font-weight: var(--font-label-weight);
				text-align: center;
			}
			:host([media-size="large"]) .texto {
				font-size: 1.5vw;
			}
			.miBoton {
				height: 7vh;
				align-self: center;
			}
		`;
	}
	render() {
		return html`
			<div id="cuerpo">
				<div id="titulo"></div>
				<div>
					<hr id="linea" />
				</div>
				<div id="datos" class="grid fit" style="align-items: stretch;">
					<div class="grid row">
						<div class="input">
							<label class="texto" style="color:var(--color-blanco)">${this.claveCambio[this.idioma].password}</label>
							<input type="password" id="password" autocomplete="off" " />
						</div>
						<div class="input">
							<label class="texto" style="color:var(--color-blanco)">${this.claveCambio[this.idioma].passwordRepetir}</label>
							<input type="password" id="password1" autocomplete="off" " />
						</div>
						<button btn3 class="miBoton" @click="${this.enviar}">${this.claveCambio[this.idioma].enviar}</button>
					</div>
				</div>
			</div>
		`;
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-claveCambio-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
	}

	enviar() {
		//store.dispatch(goTo("claveCambioMensaje"));
		const pass = this.shadowRoot.querySelector("#password").value;
		const pass1 = this.shadowRoot.querySelector("#password1").value;
		if (pass1 == "" || pass1 == "") {
			alert("Claves Vacias");
			store.dispatch(showWarning("Datos erroneos", "Password inexistente, intente nuevamente", "fondoAmarillo", 4000));
			return false;
		}
		if (pass != pass1) {
			store.dispatch(showWarning("Datos erroneos", "Password Distintas, intente nuevamente", "fondoAmarillo", 4000));
			return false;
		} else {
			//store.dispatch(goTo("datosPersonales"));
			const queryString = window.location.search;
			const urlParams = new URLSearchParams(queryString);

			const ticket = urlParams.get("ticket");
			store.dispatch(renovacion(ticket, pass));
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
window.customElements.define("clavecambio-screen", claveCambioScreen);

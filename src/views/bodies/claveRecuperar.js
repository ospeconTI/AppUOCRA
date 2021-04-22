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
import { recupero } from "../../redux/autorizacion/actions";
import { validaMail } from "../../libs/funciones";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class claveRecuperarScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.claveRecuperar = require("../../../assets/idiomas/claveRecuperar.json");
	}

	static get styles() {
		return css`
			${gridLayout}
			${button}
			${input}

			:host {
				display: grid;
				justify-content: center;
				align-items: center;
				position: relative;
				height: 100vh;
				width: 100vw;
				background-image: linear-gradient(var(--color-azul-oscuro), var(--primary-color));
				padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				height: 95%;
				width: 90vw;
				grid-gap: 0rem;
				grid-template-rows: 20% 2% 51% 2% 10% 15%;
				border-radius: 2rem;
				background-color: transparent;
				align-self: center;
				overflow-x: hidden;
				overflow-y: auto;
			}
			:host([media-size="large"]) #cuerpo {
				width: 60vw;
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
							<label class="texto" style="color:var(--color-blanco)">${this.claveRecuperar[this.idioma].password}</label>
							<input type="text" id="mail" autocomplete="off" " />
							<div>Email incorrecto</div>
						</div>
						<button btn3 class="miBoton" @click="${this.enviar}">${this.claveRecuperar[this.idioma].enviar}</button>
						<label class="textoMsj">${this.claveRecuperar[this.idioma].mensaje}</label>
					</div>
				</div>
				<div>
					<hr id="linea" />
				</div>
				<div class="grid fit">
					<button btn2 class="miBoton" @click="${this.volver}">${this.claveRecuperar[this.idioma].volver}</button>
				</div>
				<div></div>
			</div>
		`;
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-claveRecuperar-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
	}

	enviar() {
		[].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
			element.removeAttribute("error");
		});
		let mail = this.shadowRoot.querySelector("#mail");
		var ok = true;
		if (mail.value == "" || !validaMail(mail.value)) {
			ok = false;
			mail.setAttribute("error", "");
		}
		if (ok) {
			store.dispatch(recupero(mail.value));
		} else {
			store.dispatch(showWarning("Datos erroneos", "Email mal cargado, intente nuevamente", "fondoAmarillo", 4000));
		}
		//store.dispatch(goTo("claveRecuperarMensaje"));
	}
	volver() {
		store.dispatch(goTo("sesion"));
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
window.customElements.define("claverecuperar-screen", claveRecuperarScreen);

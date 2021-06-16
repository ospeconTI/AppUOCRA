/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goHistoryPrev, goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { usuario as setUsuario } from "../../redux/usuarios/actions";
import { login } from "../../redux/autorizacion/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class sesionScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.sesion = require("../../../assets/idiomas/sesion.json");
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
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
				padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				height: 100%;
				width: 90vw;
				grid-gap: 0rem;
				grid-template-rows: 25% 2% 56% 2% 15%;
				border-radius: 2rem;
				background-color: transparent;
				align-self: center;
			}
			:host([media-size="large"]) #cuerpo {
				width: 80vw;
			}
			#titulo {
				height: 100%;
				width: 100%;
				background-image: url("https://app.uocra.org/images/titulo_red_social.png");
				background-repeat: no-repeat;
				background-position: center;
				background-size: auto 10vh;
			}
			#datos {
				width: 100%;
				justify-self: center;
			}
			:host(:not([media-size="small"])) #datos {
				width: 50%;
			}
			#linea {
				color: var(--color-blanco);
				width: 80%;
			}
			.texto {
				font-size: 3vh !important;
				font-weight: var(--font-label-weight);
				text-align: center;
				font-style: italic;
			}
			:host([media-size="large"]) .texto {
				font-size: 1.5vw;
			}
			.miBoton {
				background-color: var(--color-amarillo) !important;
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
				<div id="datos" class="grid row">
					<div class="input">
						<label class="texto" style="color:var(--color-blanco)">${this.sesion[this.idioma].correo}</label>
						<input type="text" id="usuario" autocomplete="off" value="" />
						<div>Debe cargar correo electronico</div>
					</div>
					<div class="input">
						<label class="texto" style="color:var(--color-blanco)">${this.sesion[this.idioma].password}</label>
						<input type="password" id="clave" autocomplete="off" placeholder="" value="" />
						<div>Debe cargar contraseña</div>
					</div>
					<button btn1 class="miBoton" @click="${this.iniciar}">${this.sesion[this.idioma].inicio}</button>
					<button btn2 class="btnVolver" @click="${this.crear}">${this.sesion[this.idioma].crear}</button>
				</div>
				<div>
					<hr id="linea" />
				</div>
				<div class="grid fit">
					<button btn2 class="btnOlvido" @click="${this.claveRecuperar}">${this.sesion[this.idioma].recupero}</button>
					<button btn2 @click="${this.volver}">${this.sesion[this.idioma].volver}</button>
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
			const SeMuestraEnUnasDeEstasPantallas = "-sesion-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				if (this.shadowRoot.querySelector("#usuario") && window.localStorage.getItem("user")) {
					this.shadowRoot.querySelector("#usuario").value = window.localStorage.getItem("user");
				}
				if (this.shadowRoot.querySelector("#clave")) {
					this.shadowRoot.querySelector("#clave").value = "";
				}
			}
			this.update();
		}
	}

	crear() {
		store.dispatch(goTo("registro"));
	}

	claveRecuperar() {
		store.dispatch(goTo("claveRecuperar"));
	}
	iniciar() {
		[].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
			element.removeAttribute("error");
		});
		let usuario = this.shadowRoot.querySelector("#usuario");
		let clave = this.shadowRoot.querySelector("#clave");
		var ok = true;
		if (usuario.value == "") {
			ok = false;
			usuario.setAttribute("error", "");
		}
		if (clave.value == "") {
			ok = false;
			clave.setAttribute("error", "");
		}
		if (ok) {
			window.localStorage.setItem("user", usuario.value);
			store.dispatch(login(usuario.value, clave.value));
		} else {
			store.dispatch(showWarning("Datos erroneos", "Usuario o Password inexistente, intente nuevamente", "fondoAmarillo", 4000));
		}
	}
	volver(e){
		store.dispatch(goHistoryPrev())
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
window.customElements.define("sesion-screen", sesionScreen);

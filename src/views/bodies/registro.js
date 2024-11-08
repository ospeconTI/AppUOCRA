/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goHistoryPrev, goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import { logon } from "../../redux/autorizacion/actions";
import { validaMail } from "../../libs/funciones";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class registroScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.registro = require("../../../assets/idiomas/registro.json");
	}

	static get styles() {
		return css`
			${gridLayout}
			${button}
			${input}
			${select}

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
				height: 100vh;
				width: 100vw;
				grid-gap: 0rem;
				grid-template-rows: 16% 2% 8% 2% 72%;
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
			.txt {
				height: 2vh !important;
			}
			:host([media-size="large"]) .texto {
				font-size: 1.5vw;
			}
			.miBoton {
				background-color: var(--color-amarillo) !important;
				height: 7vh;
				align-self: center;
			}
			.myImput {
				grid-template-rows: 1fr auto 0.4fr !important;
			}
			#datos {
				padding: 0 2vh 0 2vh;
				width: 90%;
				height: 75vh;
				overflow-y: auto;
				overflow-x: hidden;
				justify-self: center;
			}
			:host(:not([media-size="small"])) #datos {
				width: 80%;
			}
			#datos::-webkit-scrollbar {
				display: none;
			}
			.leyenda {
				justify-self: center;
				align-self: center;
				width: 80%;
				font-size: 2.2vh !important;
				font-weight: var(--font-label-weight);
				text-align: center;
				color: var(--color-blanco);
			}
			.miselect {
				height: 4.5rem;
				width: 100%;
				justify-self: center;
				grid-gap: 0 !important;
				padding: 0 !important;
				align-content: flex-start;
			}
			.elselect {
				height: 2.7rem;
			}
			.lblSelect {
				font-size: var(--font-label-size);
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
				<label class="leyenda">${this.registro[this.idioma].titulo}</label>
				<div>
					<hr id="linea" />
				</div>
				<div id="datos" class="grid row">
					<div class="grid row" style="align-self: stretch;">
						<div class="input myImput">
							<label class="texto" style="color:var(--color-blanco)">${this.registro[this.idioma].correo}</label>
							<input id="mail" class="txt" type="email" autocomplete="off" placeholder="${this.registro[this.idioma].correo_ph}" />
							<div>Debe cargar mail</div>
						</div>
						<div class="input myImput">
							<label class="texto" style="color:var(--color-blanco)">${this.registro[this.idioma].nombre}</label>
							<input id="nombre" class="txt" type="text" autocomplete="off" placeholder="${this.registro[this.idioma].nombre_ph}" />
							<div>Debe cargar nombre</div>
						</div>
						<div class="input myImput">
							<label class="texto" style="color:var(--color-blanco)">${this.registro[this.idioma].apellido}</label>
							<input class="txt" type="text" id="apellido" autocomplete="off" placeholder="${this.registro[this.idioma].apellido_ph}" />
							<div>Debe cargar apellido</div>
						</div>

						<div id="selecTipoDocumento" class="grid row miselect">
							<label class="texto" style="color:var(--color-blanco)">${this.registro[this.idioma].tipoDocumento}</label>
							<select id="txtTipoDocumento" class="elselect">
								<option value="DN" selected>D. N. I.</option>
								<option value="CI">Cedula de identidad</option>
								<option value="LC">Libreta cívica</option>
								<option value="LE">Libreta de enrolamiento</option>
							</select>
						</div>
						<div class="input myImput">
							<label class="texto" style="color:var(--color-blanco)">${this.registro[this.idioma].documento}</label>
							<input id="documento" class="txt" type="number" autocomplete="off" />
							<div>Debe cargar documento</div>
						</div>
						<div class="input myImput">
							<label class="texto" style="color:var(--color-blanco)">${this.registro[this.idioma].telefono}</label>
							<input id="telefono" class="txt" type="number" autocomplete="off" placeholder="${this.registro[this.idioma].telefono_ph}" />
							<div>Debe cargar telefono</div>
						</div>
						<div class="input myImput">
							<label class="texto" style="color:var(--color-blanco)">${this.registro[this.idioma].cargaPassword}</label>
							<input id="password1" class="txt" type="password" autocomplete="off" />
							<div>debe tener al menos 8 caracteres</div>
						</div>
						<div class="input myImput">
							<label class="texto" style="color:var(--color-blanco)">${this.registro[this.idioma].repitePassword}</label>
							<input id="password2" class="txt" type="password" autocomplete="off" />
							<div>Debe repetir la password</div>
						</div>
						<div class="grid row" style="align-self: stretch;">
							<button btn1 class="miBoton" @click="${this.grabar}">${this.registro[this.idioma].enviar}</button>
							<button btn2 @click="${this.volver}">${this.registro[this.idioma].volver}</button>
						</div>

						<div style="height:2rem"></div>
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
			const SeMuestraEnUnasDeEstasPantallas = "-registro-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
	}

	volver() {
		store.dispatch(goHistoryPrev());
	}
	grabar() {
		[].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
			element.removeAttribute("error");
		});
		let mail = this.shadowRoot.querySelector("#mail");
		let nombre = this.shadowRoot.querySelector("#nombre");
		let apellido = this.shadowRoot.querySelector("#apellido");
		let documento = this.shadowRoot.querySelector("#documento");
		let tipoDocumento = this.shadowRoot.querySelector("#txtTipoDocumento");
		let telefono = this.shadowRoot.querySelector("#telefono");
		let password1 = this.shadowRoot.querySelector("#password1");
		let password2 = this.shadowRoot.querySelector("#password2");
		var ok = true;

		if (password1.value.length < 8) {
			ok = false;
			password1.setAttribute("error", "");
		}
		if (password2.value != password1.value) {
			ok = false;
			password2.setAttribute("error", "");
		}
		if (mail.value == "" || !validaMail(mail.value)) {
			ok = false;
			mail.setAttribute("error", "");
		}
		if (nombre.value == "") {
			ok = false;
			nombre.setAttribute("error", "");
		}
		if (apellido.value == "") {
			ok = false;
			apellido.setAttribute("error", "");
		}
		if (documento.value == "" || parseInt(documento.value, 10) == null || parseInt(documento.value) < 99999 || parseInt(documento.value) > 99999999) {
			ok = false;
			documento.setAttribute("error", "");
		}
		if (telefono.value == "" || parseInt(telefono.value, 10) == null || parseInt(telefono.value) < 99999999) {
			ok = false;
			telefono.setAttribute("error", "");
		}
		if (ok) {
			store.dispatch(logon(nombre.value, apellido.value, mail.value, documento.value, tipoDocumento.value, telefono.value, password1.value));
		} else {
			store.dispatch(showWarning("Atencion!", "Falta cargar campos.", "fondoError", 3000));
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
window.customElements.define("registro-screen", registroScreen);

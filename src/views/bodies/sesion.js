/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning} from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { usuario as setUsuario} from "../../redux/usuarios/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class sesionScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma ;
		this.sesion = require('../../../assets/idiomas/sesion.json')
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
				height: 100%;
				width: 100%;
				grid-gap: 0rem;
				grid-template-rows: 25% 2% 56% 2% 15%;
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
			#datos{
				width: 100%;
				justify-self: center;
			}
			:host(:not([media-size="small"])) #datos{
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
				font-style: italic ;
			}
			:host([media-size="large"]) .texto {
				font-size: 1.5vw;
			}
			.miBoton{
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
                            <label class="texto" style="color:var(--color-blanco)" >${this.sesion[this.idioma].correo}</label>
                            <input type="text" id="usuario" autocomplete="off" value="gmartinez@uocra.org" />
                        </div>
						<div class="input">
                            <label class="texto" style="color:var(--color-blanco)">${this.sesion[this.idioma].password}</label>
                            <input type="password" id="clave" autocomplete="off" placeholder="" />
                        </div>
						<button btn1 class="miBoton" @click="${this.iniciar}">${this.sesion[this.idioma].inicio}</button>
						<button btn2 class="btnVolver" @click="${this.crear}">${this.sesion[this.idioma].crear}</button>
				</div>
				<div>
					<hr id="linea" />
				</div>
				<div class="grid fit">
					<button btn2 class="btnOlvido" @click="${this.claveRecuperar}">${this.sesion[this.idioma].recupero}</button>
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
		let usuario = this.shadowRoot.querySelector("#usuario").value
		let clave = this.shadowRoot.querySelector("#clave").value
		let ar = store.getState().usuarios.entities.filter(a => a.mail.toUpperCase() == usuario.toUpperCase()); 
		if (ar.length == 1 && (clave.toUpperCase()==ar[0].clave.toUpperCase() || clave.toUpperCase()=="Q")){
			store.dispatch(setUsuario(ar[0]));
			store.dispatch(goTo("main"));
		}else{
			store.dispatch(showWarning("Datos erroneos" , "Usuario o Password incorrecta, intente nuevamente", "fondoAmarillo", 4000));
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
window.customElements.define("sesion-screen", sesionScreen);

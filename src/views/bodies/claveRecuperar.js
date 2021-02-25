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


const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class claveRecuperarScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma ;
		this.claveRecuperar = require('../../../assets/idiomas/claveRecuperar.json');

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
				grid-template-rows: 25% 2% 56% 2% 15%;
				border-radius: 2rem;
				background-color: transparent;
				align-self: center;
			}
			#titulo {
				height: 100%;
				width: 100%;
				background-image: url("https://www.uocra.net/App/images/titulo_red_social.png");
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
			.textoMsj{
				color: var(--color-gris-claro);
				font-size: 2.5vh !important;
				font-weight: var(--font-label-weight);
				text-align: center;
			}
			:host([media-size="large"]) .texto {
				font-size: 1.5vw;
			}
			.miBoton{
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
					<div class="grid row" >
                         <div class="input">
                            <label class="texto">${this.claveRecuperar[this.idioma].password}</label>
                            <input type="text" id="tallerDescripcion" autocomplete="off" " />
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
		store.dispatch(goTo("claveRecuperarMensaje"));
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

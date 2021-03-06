/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";


const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class inicialScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
	}

	static get styles() {
        return css`
        	${button}
			:host {
				display: grid;
				position: relative;
                background-image: linear-gradient(0deg, rgba(2,0,36,1) 10%, rgba(0,87,161,1) 100%);
				overflow: hidden;
				padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				height: 100%;
				width: 100%;
				grid-gap: 0rem;
				grid-template-rows: 30% 70%;
				border-radius: 2rem;
				background-color: transparent;
				align-self: center;
			}
			#divVersion {
				position: absolute;
				top: 2px;
				right: 4px;
				font-size: 2vh;
				color: var(--color-gris);
			}
			#titulo {
				height: 100%;
				width: 100%;
				background-image: url("https://app.uocra.org/images/titulo_red_social.png");
				background-repeat: no-repeat;
				background-position: center;
				background-size: auto 14vh;
			}
			#contenido {
				display: grid;
				position: relative;
				height: 100%;
				width: 100%;
				grid-template-columns: 100%;
                grid-template-rows: 10% 10% 10% 70%;
                grid-gap: 2vh;
                align-self: center;
			}
			:host([media-size="large"]) #contenido {
				grid-template-columns: 100%;
                grid-template-rows: 10% 10% 10% 70%;
			}
			#imagen{
                background-image: url("https://app.uocra.org/images/bandera1.gif");
				background-repeat: no-repeat;
				background-position: bottom;
				background-size: contain;
			}
			.texto {
				font-size: var(--font-header-h1-size);
				font-weight: normal ;
				color: var(--color-blanco);
				justify-self: center;
            }
			:host([media-size="large"]) .texto {
				font-size: 1.5vw;
			}
            .miBoton {
				font-size: var(--font-bajada-size);
				font-weight: var(--font-label-weight);
                justify-self: center;
                width: 60%;
				height: 6vh;
			}			
			:host([media-size="large"]) .miBoton {
                width: 40%;
			}


		`;
	}
	render() {
		return html`
			<div id="cuerpo">
				<div id="divVersion">v.:${__VERSION__}</div>
				<div id="titulo"></div>
				<div id="contenido">
                    <div class="texto">TE DAMOS LA BIENVENIDA</div>
                    <button btn1 class="miBoton" @click="${this.sesion}">INICIAR SESION</button>
                    <button btn1 class="miBoton" @click="${this.registro}">REGISTRARSE</button>

                    <div id="imagen"></div>
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
			const SeMuestraEnUnasDeEstasPantallas = "-inicial-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;

			}
			this.update();
		}


	}

	sesion() {
		store.dispatch(goTo("sesion"));
	}
	registro() {
		store.dispatch(goTo("registro"));
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
window.customElements.define("inicial-screen", inicialScreen);

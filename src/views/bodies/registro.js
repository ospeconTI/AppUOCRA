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

export class registroScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.registro = require('../../../assets/idiomas/registro.json');
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
				grid-template-rows: 16% 2% 8% 2% 72%;
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
				font-size: 3vh !important;
				font-weight: var(--font-label-weight);
				text-align: center;
                font-style: italic ;
             }
             .txt{
                height: 2vh !important;
             }
			:host([media-size="large"]) .texto {
				font-size: 1.5vw;
			}
			.miBoton{
                background-color: var(--color-amarillo) !important;
				height: 7vh;
				align-self: center;
            }
            .myImput{
                grid-template-rows: 1fr auto .4fr !important;
            }
            #datos{
                padding: 0 2vh 0 2vh;
				width: 90%;
                overflow-y: auto;
                overflow-x: hidden;
				justify-self: center;
            }
			:host(:not([media-size="small"])) #datos{
				width: 50%;
			}
            .leyenda{
                justify-self: center;
                align-self: center;
                width: 80%;
                font-size: 2.2vh !important;
				font-weight: var(--font-label-weight);
				text-align: center;
                color: var(--color-blanco) ; 
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
                            <input class="txt" type="email" id="tallerDescripcion" autocomplete="off" placeholder="${this.registro[this.idioma].correo_ph}" />
                        </div>
						<div class="input myImput" >
                            <label class="texto" style="color:var(--color-blanco)">${this.registro[this.idioma].nombre}</label>
                            <input class="txt" type="text" id="tallerDescripcion" autocomplete="off" placeholder="${this.registro[this.idioma].correo_ph}"  />
                        </div>
                        <div class="input myImput">
                            <label class="texto" style="color:var(--color-blanco)">${this.registro[this.idioma].documento}</label>
                            <input class="txt" type="number" id="tallerDescripcion" autocomplete="off"  />
                        </div>
                    </div>
                    <div class="grid row" style="align-self: stretch;">
						<button btn1 class="miBoton" @click="${this.grabar}">${this.registro[this.idioma].enviar}</button>
						<button btn2 @click="${this.volver}">${this.registro[this.idioma].volver}</button>
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
		store.dispatch(goTo("sesion"));
	}
	grabar() {
		store.dispatch(goTo("registroMensaje"));
	}
	sesion() {
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
window.customElements.define("registro-screen", registroScreen);

/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo, goHistoryPrev } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning} from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import {SVGS} from "../../../assets/icons/svgs";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class compartirScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
        this.convenios = null
	}

	static get styles() {
		return css`
			${gridLayout}
			${button}
			${select}

			:host {
				display: grid;
				position: relative;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: 1rem;
                background-color: rgba(255 255 255 255) !important;
                padding: 0 !important;
                overflow-x: hidden;
                overflow-y: auto;

                justify-self: center;
			}
            #tituloTexto {
                background-color: rgba(0,0,0,.4) !important;
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: 1rem;
                color: var(--color-blanco);
           }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h2-size);
                justify-self: center;
                grid-template-columns: auto 1fr;
                color: var(--color-blanco);
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
            #bullet1 svg{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
                height: 1.2rem;
                width: 1.2em;
            }
            .convenios{
                grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
                justify-items: center;
                grid-gap: 1rem;
            }
            .detalle{
                background-color: var(--color-rojo);
                width:10rem;
                height: 10rem;
                border-radius: 1rem;
                justify-items: center;
                align-content: center;
                font-size: var(--font-header-h1-menos-size);
                text-align: center;
            }
            .imagen{
                cursor: pointer;
            }
            .imagen svg{
                width:3rem;
                height:3rem;
            }
            #credencial{
                width:85vw;
                height:65vw;
                background-image: url("https://app.uocra.org/qr/barcode.png");
                background-repeat: no-repeat;
				background-position: center center ;
                background-size: contain;
                justify-self: center;
                grid-gap:0 !important;
                align-self: center;
            }

            .txtTarjeta{
                color:white;
                font-size: 5vw;
            }
            #boton{
                width: max-content;
                justify-self: center;       
                padding: 0 1rem 0 .5rem;
            }
            svg{
                width:3rem;
                height:3rem;
            }
		`;
	}
	render() {
        if (true) {
            return html`
                <div id="cuerpo" class="grid row">
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Compartí App U.O.C.R.A.</div>
                    </div>
                    <div id="subTituloTexto" class="grid">
                        <div id="bullet1">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Qué tu amigo lea con su cámara el código QR y automaticamente sel e instalará APPUOCRAA</div>
                    </div>
                    <div id="credencial" class="grid row"></div>
                    <button id="boton" btn1 @click=${this.compartir}>
                        <div class="grid column" style="padding:0;">
                            <div>
                                ${SVGS["WHATSAPP"]}
                            </div>
                            <div>
                                Envia por WhatsApp la invitación
                            </div>
                        </div>                            
                    </button>
                </div>
            `;
        }
	}
    compartir(e){
        location.href = "https://api.whatsapp.com/send/?text=Hace+click+en+app.uocra.org+para+instalar+appUOCRA&app_absent=0";
        //https://api.whatsapp.com/send/?text=Me+interesa+in+el+auto+que+vendeshttps://api.whatsapp.com/send/?text=Me+interesa+in+el+auto+que+vendes&app_absent=0
         //location.href = archivo
    }
    atras(){
        store.dispatch(goHistoryPrev())
    }
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-compartir-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
                this.update()
			}
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
window.customElements.define("compartir-screen", compartirScreen);

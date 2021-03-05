/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning} from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import {SVGS} from "../../../assets/icons/svgs";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class tvCanalesScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
	}

	static get styles() {
		return css`
			${gridLayout}
			${button}
			${select}
			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://www.uocra.net/App/images/tvCanales.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: .6rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h1-menos-size);
                justify-self: center;
                padding-bottom: .2rem;
            }
            #subsubTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h2-size);
                justify-self: center;
                padding-bottom: 0rem;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
            #bullet1{
                align-self: flex-start;
            }
            #bullet1 svg{
                width:1rem;
                height:1rem;
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`;
	}
	render() {
        if (true) {
            return html`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Mirá Construir TV por</div>
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${SVGS["BULLET"]}</div>
                            <div><b>DIRECTV:</b> Canal 729 14.30-18.30hs.</div>                       
                        </div> 
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${SVGS["BULLET"]}</div>
                            <div><b>SUPERCANAL:</b> Canal 25</div>                       
                        </div> 
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${SVGS["BULLET"]}</div>
                            <div><b>TELECENTRO:</b> Canal 514</div>                       
                        </div> 
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${SVGS["BULLET"]}</div>
                            <div><b>TELERED:</b> Canal 25</div>                       
                        </div> 
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${SVGS["BULLET"]}</div>
                            <div><b>TDA:</b> Canal 23.03</div>                       
                        </div> 
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${SVGS["BULLET"]}</div>
                            <div><b>TODA LA RED COLSECOR</b></div>                       
                        </div> 
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${SVGS["BULLET"]}</div>
                            <div><b>CABLEOPERADORES</b> independientes de todo el país.</div>                       
                        </div> 
                    </div>
                    <div style="padding-top:2rem"></div>
                </div>
            `;
        }
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-tvCanales-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
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
window.customElements.define("tvcanales-screen", tvCanalesScreen);

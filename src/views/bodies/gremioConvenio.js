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
const DATOS_CONVENIO = "convenios.timeStamp";

export class gremioConvenioScreen extends connect(store, DATOS_CONVENIO, MEDIA_CHANGE, SCREEN)(LitElement) {
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
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
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
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: 1rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h1-menos-size);
                justify-self: center;
                padding-bottom: 1rem;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
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
		`;
	}
	render() {
        if (this.convenios) {
            return html`
                <div id="cuerpo" class="grid row">
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Descarga los convenios</div>
                    </div>
                    <div id="subTituloTexto">
                        Descargá los <b>Convenios Colectivos de Trabajo</b> vigentes en el ámbito de la industria de la construcción.                   
                    </div>
                    <div class="grid convenios">
                        ${this.convenios.map((item, index) => {
                                return html `
                                    <div class="grid row detalle">
                                        <div .item=${item.archivo} class="imagen" @click="${this.pdf}">${SVGS["CONVENIOS"]}</div>
                                        <div>${item.nombre}</div>
                                    </div>
                                `
                        })}

                    </div>
                </div>
            `;
        }
	}
    pdf(e){
        let archivo = e.currentTarget.item
        window.open(archivo,'_blank');
    }

	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-gremioConvenio-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
        if (name == DATOS_CONVENIO) {
            this.convenios = state.convenios.entities
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
window.customElements.define("gremioconvenio-screen", gremioConvenioScreen);

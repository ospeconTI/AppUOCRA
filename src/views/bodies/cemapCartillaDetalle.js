/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goHistoryPrev, goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";
import { getMapaLocalidad } from "../../redux/cemaps/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const LOCALIDAD_SELECCION = "localidades.seleccion";
const SERVICIO_SELECCION = "servicios.seleccion";

export class cemapCartillaDetalleScreen extends connect(store, LOCALIDAD_SELECCION, SERVICIO_SELECCION, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.localidad = null;
		this.servicio = null;
		this.cemap = null;
		this.imagenTitulo = null;
		this.imagenContenido = null;
		this.tipo = 0;
		this.telefono = "";
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
				grid-gap: 1rem;
				background-color: var(--color-blanco);
				padding: 0 !important;
				place-self: flex-start;
			}
			#titulo {
				width: 100%;
				height: 52vw;
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
				align-self: self-start;
			}
			#contenido {
				position: relative;
				width: 80%;
				height: auto;
				justify-self: center;
				padding: 0;
				margin: 0;
			}
			#imagen {
				width: 100%;
			}
			.botonFlotante {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 40px;
				width: 40px;
				padding: 0;
				margin: 0;
				position: absolute;
				border-radius: 20px;
				box-shadow: var(--shadow-elevation-2-box);
				cursor: pointer;
			}
			#telefono {
				bottom: 80px;
				right: 10px;
				background-color: var(--color-verde-claro);
				cursor: pointer;
			}
			#posicion {
				bottom: 20px;
				right: 10px;
				background-color: var(--color-verde-oscuro);
				cursor: pointer;
			}
			.botonFlotante svg {
				height: 25px;
				width: 25px;
				fill: var(--color-blanco);
			}
			*[hidden] {
				display: none;
			}
		`;
	}
	render() {
		if (this.imagenTitulo && this.imagenContenido) {
			return html`
				<div id="cuerpo" class="grid row">
					<div id="titulo" class="grid column" style="background-image:url('${this.imagenTitulo}')"></div>
					<div id="contenido" class="grid column">
						<img id="imagen" src="${this.imagenContenido}" />
					</div>
					<div id="telefono" class="botonFlotante" ?hidden="${this.tipo != 1}" @click=${this.llamar}>${SVGS["SALUD"]}</div>
					<div id="posicion" class="botonFlotante" ?hidden="${this.tipo != 1}" @click=${this.posicion}>${SVGS["POSICION"]}</div>
				</div>
			`;
		} else {
			if (this.current == "cemapCartillaDetalle") {
				return html`<msgnoconeccion-component @click="${this.atras}" texto="Haga click volver" style="cursor:pointer"></msgnoconeccion-component>; `;
			}
		}
	}
	atras() {
		store.dispatch(goHistoryPrev());
	}
	llamar() {
		//window.open("tel:" + this.telefono, "_blank");
		//window.open("https://api.whatsapp.com/send?phone=+5491136623055&text=Centro%20Medico");
		window.open("https://construirsalud.com.ar/", "_blank");
	}
	posicion() {
		store.dispatch(getMapaLocalidad(store.getState().localidades.seleccion[0].id));
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-cemapCartillaDetalle-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
		if (name == LOCALIDAD_SELECCION) {
			this.localidad = state.localidades.entities;
			if (this.servicio) this.cambiar();
		}
		if (name == SERVICIO_SELECCION) {
			this.servicio = state.servicios.entities;
			if (this.localidad) this.cambiar();
		}
	}
	cambiar() {
		let arr = store.getState().cemaps.entities;
		this.cemap = arr.filter((a) => a.localidadesId == store.getState().localidades.seleccion[0].id);
		this.imagenTitulo = this.cemap[0].imagen;
		this.telefono = this.cemap[0].telefono;
		this.tipo = store.getState().servicios.seleccion[0].id;
		switch (store.getState().servicios.seleccion[0].id) {
			case 1:
				this.imagenContenido = this.cemap[0].cartilla;
				break;
			case 2:
				this.imagenContenido = this.cemap[0].farmacia;
				break;
			case 5:
				this.imagenContenido = this.cemap[0].optica;
				break;
			default:
				this.imagenContenido = this.cemap[0].urgencia;
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
window.customElements.define("cemapcartilladetalle-screen", cemapCartillaDetalleScreen);

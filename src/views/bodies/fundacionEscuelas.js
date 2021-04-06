/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";
import { getMapaLocalidad, getMapaProvincia, getMapaTodos } from "../../redux/cemaps/actions";
import { seleccion as selLocalidad } from "../../redux/localidades/actions";
import { seleccion as selServicio } from "../../redux/servicios/actions";
import { get as getFundacionCursos, seleccion } from "../../redux/fundacionCursos/actions";
import { get as getFundacionCentros, fundacionCentroMapa } from "../../redux/fundacionCentros/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const PROVINCIA_TIMESTAMP = "provincias.timeStamp";
const LOCALIDAD_TIMESTAMP = "localidades.timeStamp";
const SERVICIO_TIMESTAMP = "servicios.timeStamp";
const CEMAPS_DATOS = "cemaps.MapaTimeStamp";

export class fundacionEscuelasScreen extends connect(store, CEMAPS_DATOS, PROVINCIA_TIMESTAMP, LOCALIDAD_TIMESTAMP, SERVICIO_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.provincia = null;
		this.localidad = null;
		this.servicio = null;
		this.idioma = store.getState().ui.idioma;
		this.cartilla = require("../../../assets/idiomas/cartilla.json");
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
				grid-gap: 0rem;
				background-color: var(--color-blanco);
				padding: 0 !important;
				place-self: flex-start;
				overflow-x: hidden;
				overflow-y: auto;
			}
			#titulo {
				width: 100%;
				height: 52vw;
				background-image: url("https://app.uocra.org/images/fundacionEscuelas.gif");
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
				align-self: self-start;
			}
			.miselect {
				width: 60%;
				height: 3.5rem;
				justify-self: center;
				grid-gap: 0 !important;
			}
			.elselect {
				height: 2.5rem;
			}
			.lblSelect {
				font-size: var(--font-label-size);
			}
			#botones {
				width: 90%;
				justify-self: center;
				grid-template-columns: 1fr 1fr;
			}
			.btnListado {
				background-color: var(--color-amarillo) !important;
				border-radius: 1rem !important;
				fill: var(--color-blanco) !important;
				stroke: var(--color-blanco) !important;
				color: var(--color-blanco) !important;
				font-size: var(--font-bajada-size) !important;
				grid-gap: 0 !important;
			}
			.btnVerMapa {
				background-color: var(--primary-color) !important;
				border-radius: 1rem !important;
				fill: var(--color-blanco) !important;
				stroke: var(--color-blanco) !important;
				color: var(--color-blanco) !important;
				font-size: var(--font-bajada-size) !important;
				grid-gap: 0 !important;
			}
		`;
	}
	render() {
		return html`
			<div id="cuerpo" class="grid row">
				<div id="titulo" class="grid column"></div>
				<div id="selectNivel" class="grid row miselect">
					<select id="txtNivel" class="elselect">
						<option value="-1">Nivel Educativo</option>
						<option value="31">Primaria</option>
						<option value="30">Secundaria</option>
					</select>
				</div>
				<div id="botones" class="grid">
					<button btn1 class="btnListado" @click="${this.listado}">
						<div class="grid column">
							<div>${SVGS["LISTADO"]}</div>
							<div>LISTADO</div>
						</div>
					</button>
					<button btn1 class="btnVerMapa" @click="${this.mapa}">
						<div class="grid column">
							<div>${SVGS["VERMAPA"]}</div>
							<div>VER MAPA</div>
						</div>
					</button>
				</div>
			</div>
		`;
	}
	listado() {
		const txtNivel = this.shadowRoot.querySelector("#txtNivel").value;
		if (txtNivel == -1) {
			store.dispatch(showWarning("Atencion!", "Falta seleccionar Nivel Educativo", "fondoError", 4000));
		} else {
			store.dispatch(seleccion(txtNivel, "", "", "", 2));
			store.dispatch(goTo("fundacionCursosLista"));
		}
	}
	mapa() {
		const txtNivel = this.shadowRoot.querySelector("#txtNivel").value;
		if (txtNivel == -1) {
			store.dispatch(showWarning("Atencion!", "Falta seleccionar Nivel Educativo", "fondoError", 4000));
		} else {
			store.dispatch(seleccion(txtNivel, "", "", "", 2));
			store.dispatch(goTo("fundacionMapa"));
		}
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-fundacionEscuelas-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
		if (name == PROVINCIA_TIMESTAMP) {
			this.provincia = state.provincias.entities;
		}
		if (name == LOCALIDAD_TIMESTAMP) {
			//this.localidad = state.localidades.entities
		}
		if (name == SERVICIO_TIMESTAMP) {
			this.servicio = state.servicios.entities;
		}
		if (name == CEMAPS_DATOS) {
			store.dispatch(goTo("cemapsMapa"));
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
window.customElements.define("fundacionescuelas-screen", fundacionEscuelasScreen);

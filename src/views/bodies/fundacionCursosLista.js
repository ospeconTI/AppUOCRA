/** @format */

import { html, LitElement, css } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo, goHistoryPrev } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { OLComponent } from "../componentes/ol-map";
import { Overlay } from "ol/Overlay";
import { getDistance } from "../../libs/funciones";
import { SVGS } from "../../../assets/icons/svgs";
import { getConCentros } from "../../redux/fundacionCursos/actions";

export const featureListener = function (event) {
	console.log("featureListenerCalled");
};

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const CURSOS_DATOS = "fundacionCursos.conCentrosTimeStamp";
const CURSOS_ERROR = "fundacionCursos.conCentrosErrorTimeStamp";

export class fundacionCursosListaScreen extends connect(store, CURSOS_DATOS, CURSOS_ERROR, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.idiomaLista = require("../../../assets/idiomas/adicciones.json");
		this.registros = null;
		this.PAGINA = "fundacionCursosLista";
	}

	static get styles() {
		return css`
			${gridLayout}
			${button}
			${input}

			:host {
				display: grid;
				position: relative;
				background-color: var(--color-blanco);
				overflow: hidden;
				padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				height: 100%;
				grid-auto-flow: row;
				background-color: var(--color-blanco);
				overflow-x: hidden;
				overflow-y: auto;
				align-content: flex-start;
			}
			#titulo {
				height: 4vh;
				padding: 1.5vh 0 0 0;
				text-align: center;
				font-size: 3vh;
				background-color: var(--color-gris);
				color: var(--color-blanco);
			}
			#mapa svg {
				height: 4vh;
				width: 4vh;
			}
			#telefono svg {
				height: 4vh;
				width: 4vh;
			}
			.panel {
				display: grid;
				height: auto;
				width: 95vw;
				grid-auto-flow: row;
				justify-self: center;
				padding: 0 !important;
				grid-gap: 1rem !important;
			}
			.notas {
				width: 85vw;
				justify-self: center;
				grid-template-rows: auto 1fr;
				padding: 0 !important;
				grid-gap: 0.5rem !important;
			}
			.notaDetImg {
				display: grid;
				position: relative;
				width: 82vw;
				height: auto;
				justify-self: center;
			}
			.notaTitTxt {
				color: var(--primary-color);
				justify-self: left;
				font-size: var(--font-header-h1-size);
			}
			.notaDetTxt {
				color: var(--color-gris-oscuro);
				justify-self: left;
				font-size: var(--font-header-h1-menos-size);
			}
			.notaDetTxtMenor {
				color: var(--color-gris-oscuro);
				justify-self: left;
				font-size: var(--font-label-size);
			}
			:host([media-size="small"]) .notaDetTxt {
				font-size: var(--font-header-h2-size);
			}
			*[hidden] {
				display: none;
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
				font-size: var(--font-label-size) !important;
				grid-gap: 0 !important;
				padding: 0 !important;
				justify-content: center;
			}
			.btnVerMapa {
				background-color: var(--primary-color) !important;
				border-radius: 1rem !important;
				fill: var(--color-blanco) !important;
				stroke: var(--color-blanco) !important;
				color: var(--color-blanco) !important;
				font-size: var(--font-label-size) !important;
				grid-gap: 0 !important;
				padding: 0 !important;
				justify-content: center;
			}
			#btnEnviar {
				border: 1px solid var(--color-gris);
				color: var(--color-gris-oscuro);
				width: fit-content;
			}
			#btnEnviar:hover {
				color: var(--color-gris);
			}
			#etiqueta {
				padding: 0.5rem;
				grid-gap: 0;
				background-color: var(--color-gris-medio-claro);
				border-radius: 1rem;
				box-shadow: var(--shadow-elevation-2-box);
			}
		`;
	}
	render() {
		if (this.registros) {
			return html`
				<div id="cuerpo">
					<div id="titulo">CURSOS</div>
					<div class="panel">
						<div style="padding:.2rem"></div>
						${this.registros.map((item, index) => {
							return html`
								<div ?hidden="${index == 0 || true}">
									<hr id="linea" />
								</div>
								<div id="etiqueta" class="grid row">
									<div class="notaTitTxt">${item.nombre}</div>
									<div class="notaDetTxt" style="font-size: var(--font-header-h1-menos-size)">${item.nombreCentro}</div>
									<div class="notaDetTxt">${item.direccionCentro + ", " + item.localidadCentro + ", " + item.provinciaCentro}</div>
									<div class="notaDetTxt" style="font-style:italic;font-size: var(--font-header-h1-menos-size)">${item.duracion}</div>
									<div id="botones" class="grid">
										<button btn1 class="btnListado" .item=${item.telefonoCentro} @click="${this.llamar}">
											<div class="grid column">
												<div id="telefono">${SVGS["TELEFONO"]}</div>
												<div>LLAMAR</div>
											</div>
										</button>
										<button btn1 class="btnVerMapa" .item=${item} @click="${this.mapa}">
											<div class="grid column">
												<div id="mapa">${SVGS["VERMAPA"]}</div>
												<div>VER MAPA</div>
											</div>
										</button>
									</div>
									<div class="notaDetTxt">Enviia tu consulta</div>
									<div class="input">
										<label id="lblMensaje">Mensaje y obra en la que trabaja</label>
										<textarea id="txtMensage${item.id}" type="text" rows="4" style="margin:.5rem"></textarea>
										<div>Debe cargar mensaje</div>
									</div>
									<button id="btnEnviar" btn3 .item=${item} @click=${this.enviar}>Enviar</button>
								</div>
							`;
						})}
						<div style="padding:.5rem"></div>
					</div>
				</div>
			`;
		} else {
			if (this.current == this.PAGINA && this.registros == 0) {
				return html`<msgnoconeccion-component @click="${this.atras}" texto="Haga click volver" style="cursor:pointer"></msgnoconeccion-component>; `;
			}
		}
	}
	atras() {
		store.dispatch(goHistoryPrev());
	}
	enviar(e) {
		[].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
			element.removeAttribute("error");
		});
		let item = e.currentTarget.item;
		let mensaje = this.shadowRoot.querySelector("#txtMensage" + item.id);
		var ok = true;
		if (mensaje.value == "") {
			ok = false;
			mensaje.setAttribute("error", "");
		}
		if (ok) {
			let usu = store.getState().usuarios.usuario;
			mensaje.value = mensaje.value.replace('"', "'");
			let msg = "Nombre: " + usu.nombre + ".%0D%0A" + "Apellido: " + usu.apellido + ". %0D%0ADocumento: " + usu.documento + ". %0D%0ACurso: " + item.nombre + ". %0D%0ACentro: " + item.nombreCentro + ". %0D%0AMensaje: " + mensaje.value;
			location.href = "mailto:appuocra@gmail.com?cc=&subject=Consulta%20de%20curso&body=" + msg;
		} else {
			store.dispatch(showWarning("Atencion!", "Falta cargar campos.", "fondoError", 3000));
		}

		//document.location.href = 'tel:0800-222-3871';
	}
	llamar(e) {
		window.open("tel:" + e.currentTarget.telefonoCentro, "_blank");
		//location.href = "https://www.youtube.com/watch?v=" + e.currentTarget.item.link
	}
	mapa() {
		//store.dispatch(seleccion(txtEspecialidad, txtProvincia, txtLocalidad, txtDuracion, 1));
		store.dispatch(goTo("fundacionMapa"));
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = ("-" + this.PAGINA + "-").indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				let dato = state.fundacionCursos.seleccion;
				store.dispatch(getConCentros(dato.especialidad, dato.provincia, dato.localidad, dato.duracion, dato.tipo));
			}
		}

		if (name == CURSOS_DATOS) {
			this.registros = state.fundacionCursos.entityConCentros;
			this.update();
		}
		if (name == CURSOS_ERROR) {
			this.registros = 0;
			this.update();
		}
	}

	volver() {
		store.dispatch(goTo("inicial"));
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
window.customElements.define("fundacioncursoslista-screen", fundacionCursosListaScreen);

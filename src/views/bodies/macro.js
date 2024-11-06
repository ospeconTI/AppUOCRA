/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showConfirmacion, showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class macroScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.provincia = null;
		this.localidad = null;
		this.servicio = null;
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
				grid-gap: 0.5rem;
				background-color: var(--color-blanco);
				padding: 0 !important;
				place-self: flex-start;
				overflow-x: hidden;
				overflow-y: auto;
			}
			#titulo {
				width: 100%;
				height: 52vw;
				background-image: url("https://app.uocra.org/images/macro.gif");
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
				align-self: self-start;
				border-bottom-left-radius: 0.5rem;
				border-bottom-right-radius: 0.5rem;
				padding: 0;
			}
			#tituloTexto {
				align-self: self-start;
				font-size: var(--font-header-h1-size);
				font-weight: 900;
				grid-template-columns: auto 1fr;
				padding-bottom: 0.6rem;
			}
			#subTituloTexto {
				width: 80%;
				align-self: self-start;
				font-size: var(--font-header-h1-menos-size);
				justify-self: center;
				padding-bottom: 0.2rem;
			}
			#subsubTituloTexto {
				width: 80%;
				align-self: self-start;
				font-size: var(--font-header-h2-size);
				justify-self: center;
				padding-bottom: 0rem;
			}
			.miselect {
				width: 60%;
				height: 3rem;
				justify-self: center;
				text-align: center;
			}
			.elselect {
				height: 2.5rem;
			}
			#botones {
				width: 90%;
				justify-self: center;
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
			#bullet {
				fill: var(--color-blanco);
				stroke: var(--color-verde-claro);
			}
			#bullet1 {
				align-self: flex-start;
			}
			#bullet1 svg {
				width: 1rem;
				height: 1rem;
				fill: var(--color-blanco);
				stroke: var(--color-verde-claro);
			}
		`;
	}
	render() {
		if (true) {
			return html`
				<div id="cuerpo" class="grid row">
					<div id="titulo" class="grid column"></div>
					<div id="tituloTexto" class="grid">
						<div id="bullet">${SVGS["BULLET"]}</div>
						<div id="solicitud">Tu Tarjeta de Crédito</div>
					</div>
					<div id="subTituloTexto">Tu sindicato pone a tu alcance la nueva Tarjeta de Credito UOCRA - Visa - Macro para todos los trabajadores y las trabajadoras vinculados/as a la industria de la construcción y la Red Social UOCRA</div>
					<div id="subsubTituloTexto">
						<div class="grid column" style="padding:0; grid-template-columns:auto 1fr">
							<div id="bullet1">${SVGS["BULLET"]}</div>
							<div>Mínimos requisitos para su otorgamiento</div>
						</div>
					</div>
					<div id="subsubTituloTexto">
						<div class="grid column" style="padding:0; grid-template-columns:auto 1fr">
							<div id="bullet1">${SVGS["BULLET"]}</div>
							<div>Emisión y renovación sin cargo</div>
						</div>
					</div>
					<div id="subsubTituloTexto">
						<div class="grid column" style="padding:0; grid-template-columns:auto 1fr">
							<div id="bullet1">${SVGS["BULLET"]}</div>
							<div>Atención preferencial</div>
						</div>
					</div>
					<div id="subsubTituloTexto">
						<div class="grid column" style="padding:0; grid-template-columns:auto 1fr">
							<div id="bullet1">${SVGS["BULLET"]}</div>
							<div>Beneficios y descuentos en compras</div>
						</div>
					</div>
					<div id="subTituloTexto" style="font-weight:900">Otro logro que jerarquiza al trabajador constructor</div>
					<div id="tituloTexto" class="grid">
						<div id="bullet">${SVGS["BULLET"]}</div>
						<div id="solicitud">Solicitala acá</div>
					</div>
					<button btn1 @click=${this.solicitar} style="width:10rem;justify-self: center;background-color:var(--color-amarillo);">SOLICITAR</button>
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
			const SeMuestraEnUnasDeEstasPantallas = "-macro-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
	}
	solicitar() {
		let usu = store.getState().autorizacion.usuario;
		if (!usu) {
			store.dispatch(
				showConfirmacion(
					"Debe estar logueado para realizar esta operacion, ¿ quiere loguearse ahora ?",
					() => {
						store.dispatch(goTo("sesion"));
					},
					null
				)
			);
		} else {
			let msg = "Nombre: " + usu.nombre + ".%0D%0A" + "Apellido: " + usu.apellido + ". %0D%0ADocumento: " + usu.documento;
			//app.uocra.org@gmail.com
			location.href = "mailto:Info@equipoele.com?cc=&subject=UOCRA%20Solicitud%20,tarjeta%20de%20credito&body=" + msg;
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
window.customElements.define("macro-screen", macroScreen);

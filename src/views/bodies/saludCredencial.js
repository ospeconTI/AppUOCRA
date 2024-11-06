/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo, goHistoryPrev } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showConfirmacion, showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";
import { get as getCobertura, aceptaCondicionesCobertura } from "../../redux/coberturas/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const DATOS_COBERTURA = "coberturas.timeStamp";
const ERROR_COBERTURA = "coberturas.errorTimeStamp";
const ACEPTA_CONDICIONES_COBERTURA = "coberturas.aceptaCondicionesCobertura";

export class saludCredencialScreen extends connect(store, ACEPTA_CONDICIONES_COBERTURA, DATOS_COBERTURA, ERROR_COBERTURA, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.cobertura = null;
		this.familia = null;
		this.documento = 0;
		this.ApeNom = "";
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
				background-image: url("https://app.uocra.org/images/credencialFondo.gif");
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				width: 100vw;
				grid-gap: 0.5rem;
				background-color: rgba(255 255 255 255) !important;
				padding: 0 !important;
				place-self: flex-start;
				overflow-x: hidden;
				overflow-y: auto;

				justify-self: center;
			}
			#tituloTexto {
				background-color: rgba(0, 0, 0, 0.4) !important;
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
				font-size: var(--font-header-h1-menos-size);
				justify-self: center;
				grid-template-rows: 0.8rem 0.8rem;
				padding-bottom: 0rem;
				color: var(--color-blanco);
			}
			#bullet {
				fill: var(--color-blanco);
				stroke: var(--color-verde-claro);
			}
			#bullet1 svg {
				fill: var(--color-blanco);
				stroke: var(--color-verde-claro);
				height: 1.2rem;
				width: 1.2em;
			}
			.detalle {
				background-color: var(--color-rojo);
				width: 10rem;
				height: 10rem;
				border-radius: 1rem;
				justify-items: center;
				align-content: center;
				font-size: var(--font-header-h1-menos-size);
				text-align: center;
			}
			.imagen {
				cursor: pointer;
			}
			.imagen svg {
				width: 3rem;
				height: 3rem;
			}
			#credencial {
				width: 85vw;
				/*height: 65vw;*/
				background-image: url("https://app.uocra.org/credencial/fondoCredencialDigital.svg");
				background-repeat: no-repeat;
				background-position: center center;
				background-size: contain;
				justify-self: center;
				grid-gap: 0 !important;
			}
			#logo {
				width: 40vw;
				height: 18vw;
				background-image: url("https://app.uocra.org/credencial/logo.png");
				background-repeat: no-repeat;
				background-position: bottom center;
				background-size: contain;
				justify-self: center;
			}
			.txtTarjetaNombre {
				color: white;
				font-size: 4vw;
				height: 5vw;
			}
			.txtTarjeta {
				color: white;
				font-size: 5vw;
			}
			.panel {
				width: 80%;
				align-self: self-start;
				justify-self: center;
				grid-auto-rows: 1rem;
				padding-top: 1rem;
				color: var(--color-blanco);
			}
			.titFamilia {
				padding: 0.8rem;
				background-color: rgba(0, 0, 0, 0.4);
				font-size: var(--font-header-h1-menos-size);
				border: 1px solid white;
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
			}
			.detFamilia {
				padding: 0.4rem;
				font-size: var(--font-header-h1-menos-size);
				border-left: 1px solid white;
				border-right: 1px solid white;
				border-bottom: 1px solid white;
			}
		`;
	}
	render() {
		if (store.getState().coberturas.tieneCobertura == "S") {
			//if (!store.getState().coberturas.aceptaCondicionesCobertura && (this.cobertura[0].docu_nro == 41559781 || this.cobertura[0].docu_nro == 11251283 || this.cobertura[0].docu_nro == 26272460)) {
			if (!store.getState().coberturas.aceptaCondicionesCobertura ) {
				return html`<msgaceptacobertura-component texto="Volver"></msgaceptacobertura-component>; `;
			} else {
				return html`
					<div id="cuerpo" class="grid row">
						<div id="tituloTexto" class="grid">
							<div id="bullet">${SVGS["BULLET"]}</div>
							<div id="solicitud">Credencial Digital</div>
						</div>
						<div style="padding:0.5rem"></div>
						<div id="credencial" class="grid row">
							<div id="logo"></div>
							<div><hr /></div>
							<div class="txtTarjetaNombre" style="padding:0 0 0 4vw;">${this.cobertura ? this.cobertura[0].apenom.substring(0, 31) : ""}</div>
							<div class="txtTarjeta" style="padding:0 0 0 4vw;">${this.cobertura ? this.cobertura[0].docu_nro : ""}</div>
							<div><hr /></div>
							<div class="txtTarjeta" style="padding:2vw 0 4vw 4vw;">Generada: ${new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear()}</div>
						</div>
						<div id="subTituloTexto" class="grid">
							<div id="solicitud">Se debe presentar DNI.</div>
							<div id="solicitud">Presentar último recibo de sueldo.</div>
						</div>

						<div class="panel">
							${this.familia
								? this.familia.map((item, index) => {
										if (index == 0) {
											return html`
												<div class="titFamilia">GRUPO FAMILIAR</div>
												<div class="detFamilia" .item=${item} @click="${this.credencial}">${item.apenom}</div>
											`;
										} else {
											return html` <div class="detFamilia" .item=${item} @click="${this.credencial}">${item.apenom}</div> `;
										}
								  })
								: ""}
						</div>
					</div>
				`;
			}
		} else {
			if (store.getState().coberturas.tieneCobertura == "N") {
				return html`<msgsincobertura-component texto="Volver"></msgsincobertura-component>; `;
			}
			if (store.getState().coberturas.tieneCobertura == "E") {
				return html`<msgnoconeccion-component @click="${this.atras}" texto="Haga click volver" style="cursor:pointer"></msgnoconeccion-component>; `;
			}
		}
	}
	pdf(e) {
		let archivo = e.currentTarget.item;
		window.open(archivo, "_blank");
		//location.href = archivo
	}
	credencial(e) {
		let reg = e.currentTarget.item;
		this.documento = reg.docu_nro;
		if (this.cobertura && this.familia) {
			this.familia.push(this.cobertura[0]);
			this.cobertura = [];
			for (var x = 0; x < this.familia.length; x++) {
				if (this.familia[x].docu_nro == this.documento) {
					this.cobertura.push(this.familia[x]);
					this.familia.splice(x, 1);
				}
			}
		}
		this.update();
	}
	atras() {
		store.dispatch(goHistoryPrev());
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-saludCredencial-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				let usu = store.getState().autorizacion.usuario;
				if (usu) {
					store.dispatch(getCobertura({ tipo: state.autorizacion.usuario.tipoDocumento, documento: state.autorizacion.usuario.documento }));
				} else {
					store.dispatch(
						showConfirmacion(
							"Debe estar logueado para realizar esta operacion, ¿ quiere loguearse ahora ?",
							() => {
								store.dispatch(goTo("sesion"));
							},
							() => {
								store.dispatch(goHistoryPrev());
							}
						)
					);
				}
			}
		}
		if (name == DATOS_COBERTURA) {
			store.dispatch(aceptaCondicionesCobertura(false));
			this.cobertura = null;
			this.familia = null;
			var arr = [];
			var fam = [];
			if (state.coberturas.entities) {
				for (var x = 0; x < state.coberturas.entities.length; x++) {
					if (state.coberturas.entities[x].Autorizado) {
						if (state.coberturas.entities[x].docu_nro == state.autorizacion.usuario.documento) {
							arr.push(state.coberturas.entities[x]);
						} else {
							fam.push(state.coberturas.entities[x]);
						}
					}
				}
			}
			if (arr.length > 0) {
				this.cobertura = arr;
				if (fam.length > 0) {
					this.familia = fam;
				}
			} else {
				state.coberturas.tieneCobertura == "N";
			}
			this.update();
		}
		if (name == ERROR_COBERTURA) {
			this.cobertura = 0;
			this.update();
		}
		if (name == ACEPTA_CONDICIONES_COBERTURA) {
			if (state.coberturas.aceptaCondicionesCobertura) {
				this.update();
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
window.customElements.define("saludcredencial-screen", saludCredencialScreen);

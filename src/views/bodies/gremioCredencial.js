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

import qr from "qr-image";
//const qr = require("qr-image");

//import {} from "qr-image"

//import { QRCode } from "../componentes/qrcode";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class gremioCredencialScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
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
				background-color: white !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				width: 100vw;
				grid-template-rows: 12.15vmin 29.7vmin 31.05vmin 16.2vmin 10vmin 16vmin 19.9vmin;
				grid-gap: 0rem;
				background-image: url("https://app.uocra.org/images/fondoCredencialSindical.png");
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
				background-color: white;
				padding: 0 !important;
				place-self: center;
				justify-self: center;
				height: 135vmin;
				width: 90vmin;
			}
			#linea1 {
				font-size: 5vmin;
				place-self: center;
				text-align: center;
				color: var(--color-verde-oscuro);
			}
			#linea2 {
				display: grid;
				grid-template-columns: 40% 60%;
			}
			#linea2-foto-div {
				display: grid;
			}
			#linea2-foto {
				background-color: white;
				width: 26vmin;
				height: 26vmin;
				border-radius: 50%;
				place-self: center;
				box-shadow: 3px 3px 0px 0px rgb(219, 208, 4);
				background-image: url("https://app.uocra.org/credencialSindical/sinusuario.png");
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
			}
			#linea2-foto img {
				width: 26vmin;
				height: 26vmin;
				border-radius: 50%;
			}
			#linea2-detalle {
				display: grid;
				grid-template-rows: 55% 45%;
				color: white;
			}
			#linea2-detalle-nombre {
				font-size: 5vmin;
				font-weight: 600;
				align-self: self-end;
			}
			#linea2-detalle-dni {
				font-size: 3.5vmin;
				font-weight: 200;
			}
			#linea3 {
				display: grid;
				grid-template-columns: 40% 60%;
				color: white;
			}
			#linea3-qr {
				background-color: white;
				width: 26vmin;
				height: 26vmin;
				border: solid 1vmin white;
				place-self: center;
				/* background-image: url("https://app.uocra.org/credencialSindical/qr-code.png"); */
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
			}
			#linea3-detalle {
				grid-template-rows: 7vmin 6vmin 15vmin 7vmin;
				padding: 1vmin 0;
				align-self: center;
			}
			#linea3-detalle-legajo {
				display: grid;
				grid-template-columns: auto 1fr;
				grid-gap: 2vmin;
				font-size: 5vmin;
				font-weight: 400;
			}
			#linea3-detalle-legajo-icono svg {
				stroke: var(--color-verde-claro);
			}
			#linea3-detalle-legajo-numero {
				color: #dedede;
			}
			#linea3-detalle-linea {
				height: 1px;
				background-color: white;
				margin: 1vmin 2vmin 1vmin 0;
			}
			#linea3-detalle-funcion {
				font-size: 5vmin;
				font-weight: 600;
				height: 100%;
				word-wrap: break-word;
			}
			#linea3-detalle-sede {
				font-size: 5vmin;
				font-weight: 600;
				color: #dedede;
			}
			#linea4 {
				display: grid;
				align-content: center;
				font-size: 3.2vmin;
				font-weight: 300;
				color: #dedede;
				padding: 1vmin 4vmin;
			}
			#linea5 {
				display: grid;
				font-size: 4.4vmin;
				font-weight: 300;
				color: var(--color-amarillo);
				border-top: solid 1px #dedede;
				border-bottom: solid 1px #dedede;
				text-align: center;
				place-self: center;
				padding: 1vmin 4vmin;
			}
			#linea6 {
				display: grid;
				grid-template-columns: 45% 55%;
			}
			#linea6-firma {
				background-image: url("https://app.uocra.org/credencialSindical/firmaGM.png");
				background-repeat: no-repeat;
				background-position: center center;
				background-size: 70%;
			}
			#linea6-gerardo {
				display: grid;
				grid-template-rows: 45% 55%;
				grid-gap: 0.5vmin;
				align-self: center;
			}
			#linea6-gerardo-nombre {
				display: grid;
				align-content: center;
				font-size: 4.3vmin;
				font-weight: 500;
				color: #ffffff;
			}
			#linea6-gerardo-cargo {
				display: grid;
				align-content: center;
				font-size: 3.2vmin;
				font-weight: 300;
				color: #dedede;
			}
			#linea7 {
				background-image: url("https://app.uocra.org/titulos/gremio.png");
				background-repeat: no-repeat;
				background-position: center center;
				background-size: 32%;
			}
		`;
	}
	render() {
		if (store.getState().credencialSindical.porDNI.entities) {
			return html`
				<div id="cuerpo">
					<div id="linea1">MI CREDENCIAL <b>UOCRA</b></div>
					<div id="linea2">
						<div id="linea2-foto-div">
							<div id="linea2-foto"><img src="https://app.uocra.org/credencialSindical/MarcaAgua.png" /></div>
						</div>
						<div id="linea2-detalle">
							<div id="linea2-detalle-nombre">CRO:${" " + store.getState().credencialSindical.porDNI.entities.Nombre.trim() + " " + store.getState().credencialSindical.porDNI.entities.Apellido.trim()}</div>
							<div id="linea2-detalle-dni">DNI:${" " + store.getState().credencialSindical.porDNI.entities.Documento}</div>
						</div>
					</div>
					<div id="linea3">
						<div id="linea3-qr"></div>
						<div id="linea3-detalle">
							<div id="linea3-detalle-legajo">
								<div id="linea3-detalle-legajo-icono">${SVGS["TARJETA"]}</div>
								<div id="linea3-detalle-legajo-numero">LEG.${" " + store.getState().credencialSindical.porDNI.entities.Legajo}</div>
							</div>
							<div id="linea3-detalle-linea"></div>
							<div id="linea3-detalle-funcion">${store.getState().credencialSindical.porDNI.entities.Funcion.trim()}</div>
							<div id="linea3-detalle-sede">${store.getState().credencialSindical.porDNI.entities.Seccional.trim()}</div>
						</div>
					</div>
					<div id="linea4">Se halla autorizado a prestar asesoramiento e intervenir ante la Delegación Regional del Ministerio de Trabajo y a visitar Obras, Talleres y Depósitos (Conf. Resol. 34/02)</div>
					<div id="linea5">VIGENCIA DESDE${" " + store.getState().credencialSindical.porDNI.entities.Desde.trim() + " "}HASTA${" " + store.getState().credencialSindical.porDNI.entities.Hasta.trim()}</div>
					<div id="linea6">
						<div id="linea6-firma"></div>
						<div id="linea6-gerardo">
							<div id="linea6-gerardo-nombre">Gerardo A. Martínez</div>
							<div id="linea6-gerardo-cargo">Secretario General UOCRA</div>
						</div>
					</div>
					<div id="linea7"></div>
				</div>
			`;
		} else {
		}
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
			const SeMuestraEnUnasDeEstasPantallas = "-gremioCredencial-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				if (store.getState().credencialSindical.porDNI.entities) {
					let foto = this.shadowRoot.querySelector("#linea2-foto");
					let imagenSTR = "https://app.uocra.org/credencialSindical/" + store.getState().credencialSindical.porDNI.entities.Documento + ".jpg";

					let qr_svg = qr.imageSync("https://app.uocra.org/credencialSindicalPage?Documento=" + store.getState().credencialSindical.porDNI.entities.Documento, { type: "svg" });
					this.shadowRoot.getElementById("linea3-qr").innerHTML = qr_svg;

					this.checkIfImageExists(imagenSTR, (exists) => {
						if (exists) {
							foto.style.backgroundImage = "url(" + imagenSTR + ")";
						} else {
							foto.style.backgroundImage = "url('https://app.uocra.org/credencialSindical/sinusuario.png')";
						}
					});
				}
			}
		}
	}
	checkIfImageExists(url, callback) {
		const img = new Image();
		img.src = url;
		if (img.complete) {
			callback(true);
		} else {
			img.onload = () => {
				callback(true);
			};
			img.onerror = () => {
				callback(false);
			};
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
window.customElements.define("gremiocredencial-screen", gremioCredencialScreen);

/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goHistoryPrev, goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";
import { send as sendMail } from "../../redux/mail/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const RESERVA_TIMESTAMP = "programacion.reservaTimeStamp";
const MAIL_OK = "mail.sendTimeStamp";
const MAIL_ERROR = "mail.sendErrorTimeStamp";
export class teatroReservaScreen extends connect(store, MAIL_OK, MAIL_ERROR, RESERVA_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.reserva = null;
		this.gremioLista = require("../../../assets/idiomas/teatroProgramacion.json");
		this.idiomaGenerico = require("../../../assets/idiomas/generic.json");
	}

	static get styles() {
		return css`
			${gridLayout}
			${button}
			${input}

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
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
				align-self: self-start;
			}
			#tituloTexto {
				align-self: self-start;
				font-size: var(--font-header-h1-size);
				font-weight: 900;
				grid-template-columns: auto 1fr;
				padding-bottom: 0.6rem;
			}
			#reserva {
				align-self: self-start;
				font-size: var(--font-header-h1-size);
				font-weight: 900;
				padding: 0.6rem;
				text-align: center;
				background-color: var(--color-gris);
				color: var(--color-negro);
			}
			#subNombreTexto {
				width: 80%;
				align-self: self-start;
				font-size: var(--font-titulo-h1-menos-size);
				justify-self: center;
				padding-bottom: 0.4rem;
			}
			#subTituloTexto {
				width: 80%;
				align-self: self-start;
				font-size: var(--font-titulo-h2-size);
				justify-self: center;
				padding-bottom: 0.4rem;
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
				stroke: var(--color-amarillo);
			}
			#bullet1 svg {
				width: 1rem;
				height: 1rem;
				fill: var(--color-blanco);
				stroke: var(--color-verde-claro);
			}
			#textoFolleto {
			}
		`;
	}
	render() {
		if (this.reserva) {
			//if (new Date(this.reserva.fecha).getTime() > Date.now()) {
			return html`
				<div id="cuerpo" class="grid row" style="grid-gap:0rem">
					<div id="titulo" class="grid column" style="background-image:url('${this.reserva.imagenFolleto}')"></div>
					<div id="reserva">Reservas</div>
					<div id="tituloTexto" class="grid">
						<div id="bullet">${SVGS["BULLET"]}</div>
						<div id="solicitud" style="color:var(--primary-color)">${this.idiomaGenerico[this.idioma].diasLargo[new Date(this.reserva.fecha).getDay()] + " " + new Date(this.reserva.fecha).getDate() + " de " + this.idiomaGenerico[this.idioma].mesLargo[new Date(this.reserva.fecha).getMonth()] + " - " + new Date(this.reserva.fecha).getHours() + ":" + new Date(this.reserva.fecha).getMinutes() + "hs."}</div>
					</div>
					<div id="subNombreTexto" class="grid" style="font-weight:900">
						<div id="solicitud">${this.reserva.protagonistas}</div>
					</div>
					<div id="subTituloTexto">Presenta: "${this.reserva.nombre}"</div>
					<div id="subTituloTexto" style="font-style:italic">${this.reserva.genero}</div>
					<div id="subTituloTexto" class="grid" style="padding:0; grid-template-columns:auto 1fr; grid-gap:.2rem;">
						<div id="bullet1">${SVGS["BULLET"]}</div>
						<div id="textoFolleto" style="font-weight:900">Cantidad de entradas (Máximo 6)</div>
						<div></div>
						<div class="input">
							<label></label>
							<input id="txtCantidad" type="number" value="0" />
							<div>Debe cargar cantidad de entradas</div>
						</div>
					</div>

					<div style="padding:1rem"></div>
					<button btn1 @click=${this.reservacion} style="width:10rem;justify-self: center;background-color:var(--color-amarillo);">RESERVAR</button>
					<div style="padding-top:2rem"></div>
				</div>
			`;
			//}
		} else {
			if (this.current == "teatroProgramacionDetalle") {
				return html`<msgnoconeccion-component @click="${this.atras}" texto="Haga click volver" style="cursor:pointer"></msgnoconeccion-component>; `;
			}
		}
	}
	reservacion() {
		[].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
			element.removeAttribute("error");
		});
		let cantidad = this.shadowRoot.querySelector("#txtCantidad");
		var ok = true;
		if (cantidad.value == "" || !typeof cantidad.value == "number" || parseInt(cantidad.value) < 1 || parseInt(cantidad.value) > 6) {
			ok = false;
			cantidad.setAttribute("error", "");
		} else {
			let item = this.reserva;
			var usu = store.getState().autorizacion.usuario;
			var body = "<b>¡Muchas gracias " + usu.nombre + " por reservar tu entrada!</b><br>";
			//body = body + "<br>Para utilizar esta reserva, presentate en la boletería del Teatro Gastón Barral (Rawson 42 - C.A.B.A) hasta 30 minutos antes del comienzo de la función. Pasado ese horario, la reserva perderá su vigencia y quedará sujeta a la disponibilidad de la sala, sin posibilidad de reclamo alguno. Una vez iniciada la función, no se permitirá el ingreso a la sala.";
			body =
				body +
				"<br>Para utilizar esta reserva, deberás presentar tu CREDENCIAL DIGITAL o RECIBO DE SUELDO del afiliado en la boletería del Teatro Gastón Barral (Rawson 42 - C.A.B.A) 30 minutos antes del comienzo de la función. Pasado ese horario, la reserva perderá su vigencia y quedará sujeta a la disponibilidad de la sala, sin posibilidad de reclamo alguno. Una vez iniciada la función, no se permitirá el ingreso a la sala. No se permitirá el uso de esta reserva sin la debida presentación del documento que acreedite la afiliación al sindicato del solicitante.</b>";
			body = body + "<br>Se podrán reservar hasta un máximo de seis (6) entradas por afiliado por función.</b>";
			body = body + "<br>Si no podés asistir y querés cancelar tu reserva, avisanos mandando un mail a: reservasuocracultura@gmail.com";
			body = body + "<br><br><b>DATOS DE LA RESERVA</b>";
			body = body + "<br>Fecha: " + this.idiomaGenerico[this.idioma].diasLargo[new Date(item.fecha).getDay()] + " " + new Date(item.fecha).getDate() + " de " + this.idiomaGenerico[this.idioma].mesLargo[new Date(item.fecha).getMonth()] + ".";
			body = body + "<br>Hora: " + new Date(item.fecha).getHours() + ":" + new Date(item.fecha).getMinutes() + "hs.";
			body = body + "<br>Función: " + item.protagonistas + ", " + item.nombre;
			body = body + "<br>Género: " + item.genero;
			body = body + "<br><b>Cantidad: " + cantidad.value + "</b>";
			body = body + "<br>Nombre: " + usu.nombre + "<br>Apellido: " + usu.apellido + "<br>Documento: " + usu.documento + "<br>E-Mail: " + usu.email + "<br>Teléfono: " + usu.telefono;
			body = body + "<br><br>" + usu.nombre + " ¡Te esperamos!";
			body = body + "<br>UOCRA Cultura";
			body = body + "<br><br>Facebook: https://www.facebook.com/uocracultura";
			body = body + "<br>Instagram: https://www.instagram.com/uocracultura/";
			body = body + "<br>Twitter: https://twitter.com/UOCRACultura/";
			body = body + "<br>Youtube: https://www.youtube.com/UOCRACultura";
			//app.uocra.org@gmail.com
			store.dispatch(sendMail("Teatro Gastón Barral. Reservas", body, ["reservasuocracultura@gmail.com", usu.email, "app.uocra.org@gmail.com"]));
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
			const SeMuestraEnUnasDeEstasPantallas = "-teatroReserva-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				if (this.shadowRoot.querySelector("#txtCantidad")) {
					this.shadowRoot.querySelector("#txtCantidad").value = 0;
				}
			}
			this.update();
		}
		if (name == RESERVA_TIMESTAMP) {
			this.reserva = state.programacion.reserva;
		}
		if (name == MAIL_OK && state.screen.name == "teatroReserva") {
			store.dispatch(showWarning("Reserva enviada", "Recibirá su confirmación en el correo " + store.getState().autorizacion.usuario.email, "fondoAmarillo", 0));
			store.dispatch(goHistoryPrev());
		}
		if (name == MAIL_ERROR && state.screen.name == "teatroReserva") {
			store.dispatch(showWarning("ERROR, mail no enviado", "Verifique su conección de datos", "fondoError", 3000));
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
window.customElements.define("teatroreserva-screen", teatroReservaScreen);

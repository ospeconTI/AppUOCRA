/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo, goHistoryPrev } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning, showConfirmacion } from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";
import { send as sendMail } from "../../redux/mail/actions";
import { validaMail } from "../../libs/funciones";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const MAIL_OK = "mail.sendTimeStamp";
const MAIL_ERROR = "mail.sendErrorTimeStamp";

export class saludSeguridadDenunciaScreen extends connect(store, MAIL_OK, MAIL_ERROR, MEDIA_CHANGE, SCREEN)(LitElement) {
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
				width: 90vw;
				grid-gap: 0.5rem;
				background-color: var(--color-blanco);
				padding: 2rem 0 0 0 !important;
				place-self: flex-start;
				overflow-x: hidden;
				overflow-y: auto;
				display: grid;
				grid-template-columns: auto 1fr;
				justify-self: center;
			}
			.tituloImg {
				stroke: var(--color-gris);
				align-self: flex-start;
			}
			.tituloTexto {
				align-self: self-start;
				font-size: var(--font-header-h2-size);
				padding-bottom: 1rem;
			}
			.textoSolo {
				font-size: var(--font-eader-h2-size);
				grid-column-start: 1;
				grid-column-end: 3;
				padding-top: 2rem;
				color: var(--color-gris-medio);
			}
			#botones {
				width: 15rem;
				height: 3rem !important;
				justify-self: center;
				grid-column-start: 1;
				grid-column-end: 3;
			}
			#botonesImg svg {
				width: 1.5rem;
				height: 1.5rem;
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
			#bullet2 svg {
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
					<div class="tituloImg">
						<div id="bullet">${SVGS["BULLET"]}</div>
					</div>
					<div class="tituloTexto">Para realizar denuncias sobre condiciones de trabajo en una obra, llená el formulario:</div>
					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div class="input">
						<label id="lblNombre">Nombre y Apellido</label>
						<input id="txtNombre" type="text" placeholder="Jose Perez" />
						<div>Debe cargar nombre</div>
					</div>
					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div class="input">
						<label id="lblTelefono">Teléfono</label>
						<input id="txtTelefono" type="tel" placeholder="1142345678" />
						<div>Debe cargar teléfono</div>
					</div>
					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div class="input">
						<label id="lblMail">E-mail</label>
						<input id="txtMail" type="email" placeholder="joseperez@gmail.com" />
						<div>Debe cargar mail</div>
					</div>
					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div class="input">
						<label id="lblMensaje">Mensaje y obra en la que trabaja</label>
						<textarea id="txtMensaje" type="text" rows="8"></textarea>
						<div>Debe cargar mensaje</div>
					</div>
					<div id="botones" class="grid">
						<button btn1 class="btnVerMapa" @click=${this.enviar}>
							<div class="grid column" style="justify-content:center;grid-gap:1rem">
								<div id="botonesImg">${SVGS["MAILENVIO"]}</div>
								<div>ENVIAR</div>
							</div>
						</button>
					</div>
					<div class="textoSolo">
						«El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326». Se deja constancia que tanto el objeto de la consulta que plantee para ser evacuada por este medio, así como también los datos que suministre con ese propósito, serán conservados y
						resguardados conforme lo establece la ley de habeas data N° 25326 «La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES, Órgano de Control de la Ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales».
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
			const SeMuestraEnUnasDeEstasPantallas = "-saludSeguridadDenuncia-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
		if (name == MAIL_OK && state.screen.name == "saludSeguridadDenuncia") {
			store.dispatch(showWarning("Mensaje enviado", "El mail se envio con exito", "fondoAmarillo", 3000));
			store.dispatch(goHistoryPrev());
		}
		if (name == MAIL_ERROR && state.screen.name == "saludSeguridadDenuncia") {
			store.dispatch(showWarning("ERROR, mail no enviado", "Verifique su conección de datos", "fondoError", 3000));
		}
	}
	enviar() {
		var usu = store.getState().autorizacion.usuario;
		if (usu) {
			[].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
				element.removeAttribute("error");
			});
			let nombre = this.shadowRoot.querySelector("#txtNombre");
			let telefono = this.shadowRoot.querySelector("#txtTelefono");
			let mail = this.shadowRoot.querySelector("#txtMail");
			let mensaje = this.shadowRoot.querySelector("#txtMensaje");
			var ok = true;
			if (nombre.value == "") {
				ok = false;
				nombre.setAttribute("error", "");
			}
			if (telefono.value == "") {
				ok = false;
				telefono.setAttribute("error", "");
			}
			if (mail.value == "" || !validaMail(mail.value)) {
				ok = false;
				mail.setAttribute("error", "");
			}
			if (mensaje.value == "") {
				ok = false;
				mensaje.setAttribute("error", "");
			}
			if (ok) {
				//			let msg = "Nombre: " + nombre.value + ", Telefono: " + telefono.value + ", Mail: " + mail.value + ", Mensaje: " + mensaje.value;
				var body = "<br><b>DATOS DEL FORMULARIO</b>";
				body = body + "<br>Nombre y Apellido: " + nombre.value + "<br>Telefono: " + telefono.value + "<br>E-Mail: " + mail.value + "<br>Mensaje: " + mensaje.value.replaceAll('"', "");
				body = body + "<br><hr><b>DATOS DE REGISTRO DE LA APP</b>";
				body = body + "<br>Nombre: " + usu.nombre + "<br>Apellido: " + usu.apellido + "<br>Documento: " + usu.documento + "<br>E-Mail: " + usu.email + "<br>Teléfono: " + usu.telefono;
				//app.uocra.org@gmail.com
				store.dispatch(sendMail("Formulario SST", body, ["app.uocra.org@gmail.com"]));
			} else {
				store.dispatch(showWarning("Atencion!", "Falta cargar campos.", "fondoError", 3000));
			}
		} else {
			store.dispatch(
				showConfirmacion(
					"Debe estar logueado para realizar esta operacion, ¿ quiere loguearse ahora ?",
					() => {
						store.dispatch(goTo("sesion"));
					},
					null
				)
			);
		}
		//document.location.href = 'tel:0800-222-3871';
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
window.customElements.define("saludseguridaddenuncia-screen", saludSeguridadDenunciaScreen);

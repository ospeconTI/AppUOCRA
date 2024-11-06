/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goHistoryPrev, goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning, showConfirmacion } from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";
import { send as sendMail } from "../../redux/mail/actions";
import { validaMail, ValidateCUITCUIL } from "../../libs/funciones";

import { add as addAfSindical } from "../../redux/afiliacionSindical/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const MAIL_OK = "mail.sendTimeStamp";
const MAIL_ERROR = "mail.sendErrorTimeStamp";

const ADD_AF_SIND_OK = "afiliacionSindical.addTimeStamp";
const ADD_AF_SIND_ERROR = "afiliacionSindical.commandErrorTimeStamp";

export class afiliacionSindicalScreen extends connect(store, ADD_AF_SIND_OK, ADD_AF_SIND_ERROR, MAIL_OK, MAIL_ERROR, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.provincia = null;
		this.localidad = null;
		this.servicio = null;
		this.j = null;
		this.cuerpoMail = "";
		this.queMail = 0;
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
				font-size: var(--font-header-h1-size);
				padding-bottom: 1rem;
			}
			.textoSolo {
				grid-column-start: 1;
				grid-column-end: 3;
				color: var(--color-gris-medio);
				text-align: justify;
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
			.miselect {
				height: 5rem;
				width: 100%;
				justify-self: center;
				grid-gap: 0 !important;
				padding: 0 !important;
				align-content: flex-start;
				font-size: var(--font-label-size);
			}
			.elselect {
				height: 3rem;
				border: solid 1px var(--color-azul-icono);
			}
			.lblSelect {
			}
			label {
				font-size: var(--font-header-h2-size) !important;
			}
			#contactos {
				display: grid;
				border: solid 1px var(--color-verde-claro);
				padding: 1rem;
				border-radius: 1rem;
			}
			#contactos[error] {
				border: solid 1px red;
			}
			#lblcontactos {
				padding-bottom: 1rem;
			}
			input[type="checkbox"] {
				width: 1.2rem;
				height: 1.2rem;
			}
			#divCheck {
				display: grid;
				grid-template-columns: auto 1fr;
				align-items: center;
				grid-gap: 0.6rem;
				border: solid 1px var(--color-verde-claro);
				padding: 0.4rem 1rem;
				border-radius: 1rem;
			}
		`;
	}
	render() {
		if (this.provincia) {
			return html`
				<div id="cuerpo" class="grid row">
					<div class="tituloImg">
						<div id="bullet">${SVGS["BULLET"]}</div>
					</div>
					<div class="tituloTexto">AFILIACIÓN SINDICAL</div>
					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div class="input">
						<label id="lblNombre">Nombre</label>
						<input id="txtNombre" type="text" maxlength="30" placeholder="Jose" />
						<div>Debe cargar nombre</div>
					</div>
					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div class="input">
						<label id="lblApellido">Apellido</label>
						<input id="txtApellido" type="text" maxlength="30" placeholder="Perez" />
						<div>Debe cargar apellido</div>
					</div>
					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div id="selecTipoDocumento" class="grid row miselect">
						<label class="texto">Tipo de Documento</label>
						<select id="txtTipoDocumento" class="elselect">
							<option value="DN" selected>D. N. I.</option>
							<option value="CI">Cedula de identidad</option>
							<option value="LC">Libreta cívica</option>
							<option value="LE">Libreta de enrolamiento</option>
						</select>
					</div>
					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div class="input">
						<label id="lblNumeroDocumento">Número de Documento</label>
						<input id="txtNumeroDocumento" maxlength="8" type="number" placeholder="12312312" oninput="javascript: if (this.value.length > this.maxLength ) this.value = this.value.slice(0, this.maxLength);" />
						<div>Debe cargar el documento</div>
					</div>
					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div id="selecSexo" class="grid row miselect">
						<label class="texto">Sexo</label>
						<select id="txtSexo" class="elselect">
							<option value="F" selected>Femenino</option>
							<option value="M">Masculino</option>
						</select>
					</div>
					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div class="input">
						<label id="lblCUIL">CUIL (Opcional)</label>
						<input id="txtCUIL" maxlength="11" type="number" oninput="javascript: if (this.value.length > this.maxLength ) this.value = this.value.slice(0, this.maxLength);" placeholder="20123123120" />
						<div>Debe cargar el CUIL</div>
					</div>
					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>

					<div id="contactos">
						<label id="lblcontactos">Es obligatorio completar al menos un campo</label>
						<div class="input">
							<label id="lblMail">Direccion de correo electrónico</label>
							<input id="txtMail" maxlength="30" type="email" placeholder="joseperez@gmail.com" />
							<div>Debe cargar un mail valido</div>
						</div>
						<div class="input">
							<label id="lblTelefonoPersonal">Celular de contacto 1</label>
							<input id="txtTelefonoPersonal" maxlength="30" type="tel" placeholder="1142345678" />
							<div>Debe cargar un celular valido</div>
						</div>
						<div class="input">
							<label id="lblTelefonoAlternativo">Celular de contacto 2</label>
							<input id="txtTelefonoAlternativo" maxlength="30" type="tel" placeholder="1142345678" />
							<div>Debe cargar un celular valido</div>
						</div>
					</div>

					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div class="input">
						<label id="lblNombreEmpresa">Nombre de la Empresa</label>
						<input id="txtNombreEmpresa" maxlength="30" type="text" placeholder="Empresa S.A." />
						<div>Debe cargar nombre de la empresa</div>
					</div>
					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div class="input">
						<label id="lblCUIT">CUIT (Opcional)</label>
						<input id="txtCUIT" maxlength="11" type="number" placeholder="30123123120" oninput="javascript: if (this.value.length > this.maxLength ) this.value = this.value.slice(0, this.maxLength);" />
						<div>Debe cargar el CUIT</div>
					</div>

					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div class="input">
						<label id="lblDomicilioObra">Domicilio de la obra</label>
						<input id="txtDomicilioObra" maxlength="30" type="text" placeholder="San Juan 1233" />
						<div>Debe cargar el domicilio de la obra</div>
					</div>
					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div id="selectProvincias" class="grid row miselect">
						<label class="texto">Provincia de la obra</label>
						<select id="txtProvincias" class="elselect">
							${this.provincia.map((item, index) => {
								return html` <option value="${item.nombre}">${item.nombre}</option> `;
							})}
						</select>
					</div>
					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div class="input">
						<label id="lblLocalidadObra">Localidad de la obra</label>
						<input id="txtLocalidadObra" maxlength="30" type="text" placeholder="San Pedro" />
						<div>Debe cargar la localidad de la obra</div>
					</div>
					<div class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div class="input">
						<label id="lblCPObra">Codigo Postal de la obra (Opcional)</label>
						<input id="txtCPObra" maxlength="4" type="number" placeholder="1234" oninput="javascript: if (this.value.length > this.maxLength ) this.value = this.value.slice(0, this.maxLength);" />
						<div>Debe cargar el codigo postal de la obra</div>
					</div>
					<div id="lblCPObra" class="tituloImg">
						<div id="bullet2">${SVGS["BULLET"]}</div>
					</div>
					<div id="divCheck">
						<input id="chkAceptacion" type="checkbox" />
						<label for="chkAceptacion">El envío de este formulario indica mi consentimiento para iniciar el trámite de mi afiliación sindical.</label>
					</div>
					<div></div>
					<div></div>
					<div class="textoSolo">Compañero: Los datos proporcionados seran procesados. El estado de tu solicitud será informado al correo electrónico o teléfono celular indicado en el presente formulario.</div>
					<div id="botones" class="grid">
						<button btn1 class="btnVerMapa" @click=${this.enviar}>
							<div class="grid column" style="justify-content:center;grid-gap:1rem">
								<div id="botonesImg">${SVGS["MAILENVIO"]}</div>
								<div>ENVIAR</div>
							</div>
						</button>
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
			const SeMuestraEnUnasDeEstasPantallas = "-afiliacionSindical-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				this.shadowRoot.querySelector("#chkAceptacion").checked = false;
			}
			this.provincia = state.provincias.entities;
			this.update();
		}
		if (name == ADD_AF_SIND_OK && state.screen.name == "afiliacionSindical") {
			store.dispatch(sendMail("Formulario de Afiliacion Sindical", this.cuerpoMail, ["formulariosindicalapp@uocra.org"]));
		}
		if (name == ADD_AF_SIND_ERROR && state.screen.name == "afiliacionSindical") {
			store.dispatch(showWarning("ERROR, no se registro la afiliacion", "Verifique su conección de datos", "fondoError", 3000));
		}

		if (name == MAIL_OK && state.screen.name == "afiliacionSindical") {
			this.queMail = this.queMail + 1;
			if (this.queMail == 1 && this.j.Mail != "") {
				let mensa = "<br>Este correo es una respuesta automática, por favor no responda.</b>";
				mensa = mensa + "<br><br><b>Compañero " + this.j.Apellido + ", " + this.j.Nombre + "." + "</b>";
				mensa = mensa + "<br>Los datos proporcionados serán procesados.";
				mensa = mensa + "<br>El estado de tu solicitud sera informado al correo electrónico o teléfono celular indicado en el presente formulario.";
				mensa = mensa + "<br>" + this.cuerpoMail;
				mensa = mensa + "<br><br><b>UOCRAAPP</b>";
				store.dispatch(sendMail("Afiliacion Sindical", mensa, [this.j.Mail]));
			} else {
				this.shadowRoot.querySelector("#txtNombre").value = "";
				this.shadowRoot.querySelector("#txtApellido").value = "";
				//this.shadowRoot.querySelector("#txtTipoDocumento").value = "";
				this.shadowRoot.querySelector("#txtNumeroDocumento").value = "";
				//this.shadowRoot.querySelector("#txtSexo").value = "";
				this.shadowRoot.querySelector("#txtCUIL").value = "";
				this.shadowRoot.querySelector("#txtMail").value = "";
				this.shadowRoot.querySelector("#txtTelefonoPersonal").value = "";
				this.shadowRoot.querySelector("#txtTelefonoAlternativo").value = "";
				this.shadowRoot.querySelector("#txtCUIT").value = "";
				this.shadowRoot.querySelector("#txtNombreEmpresa").value = "";
				this.shadowRoot.querySelector("#txtDomicilioObra").value = "";
				//this.shadowRoot.querySelector("#txtProvincias").value = "";
				this.shadowRoot.querySelector("#txtLocalidadObra").value = "";
				this.shadowRoot.querySelector("#txtCPObra").value = "";
				this.shadowRoot.querySelector("#chkAceptacion").checked = false;

				store.dispatch(showWarning("Mensaje enviado", "La afiliación se registro correctamente", "fondoAmarillo", 3000));
				store.dispatch(goHistoryPrev());
			}
		}
		if (name == MAIL_ERROR && state.screen.name == "afiliacionSindical") {
			store.dispatch(showWarning("ERROR, mail no enviado", "Verifique su conección de datos", "fondoError", 3000));
		}
	}
	enviar() {
		var usu = store.getState().autorizacion.usuario;
		if (usu || true) {
			let BordeContacto = this.shadowRoot.querySelector("#contactos");
			BordeContacto.removeAttribute("error");
			[].forEach.call(this.shadowRoot.querySelectorAll("[error]"), (element) => {
				element.removeAttribute("error");
			});
			let chkAceptacion = this.shadowRoot.querySelector("#chkAceptacion");
			let divChecked = this.shadowRoot.querySelector("#divCheck");
			divChecked.style.borderColor = "#00a1b2";
			let Nombre = this.shadowRoot.querySelector("#txtNombre");
			let Apellido = this.shadowRoot.querySelector("#txtApellido");
			let TipoDocumento = this.shadowRoot.querySelector("#txtTipoDocumento");
			let NumeroDocumento = this.shadowRoot.querySelector("#txtNumeroDocumento");
			let Sexo = this.shadowRoot.querySelector("#txtSexo");
			let CUIL = this.shadowRoot.querySelector("#txtCUIL");
			let Mail = this.shadowRoot.querySelector("#txtMail");
			let TelefonoPersonal = this.shadowRoot.querySelector("#txtTelefonoPersonal");
			let TelefonoAlternativo = this.shadowRoot.querySelector("#txtTelefonoAlternativo");
			let CUIT = this.shadowRoot.querySelector("#txtCUIT");
			let NombreEmpresa = this.shadowRoot.querySelector("#txtNombreEmpresa");
			let DomicilioObra = this.shadowRoot.querySelector("#txtDomicilioObra");
			let Provincias = this.shadowRoot.querySelector("#txtProvincias");
			let LocalidadObra = this.shadowRoot.querySelector("#txtLocalidadObra");
			let CPObra = this.shadowRoot.querySelector("#txtCPObra");

			let mail = this.shadowRoot.querySelector("#txtMail");
			let mensaje = this.shadowRoot.querySelector("#txtMensaje");
			var ok = true;
			if (Nombre.value == "" || (Nombre.value != "" && Nombre.value.length < 3)) {
				ok = false;
				Nombre.setAttribute("error", "");
			}
			if (Apellido.value == "" || (Apellido.value != "" && Apellido.value.length < 3)) {
				ok = false;
				Apellido.setAttribute("error", "");
			}
			if (NumeroDocumento.value == "" || (NumeroDocumento.value != "" && NumeroDocumento.value.length < 6)) {
				ok = false;
				NumeroDocumento.setAttribute("error", "");
			}
			if (CUIL.value != "" && !ValidateCUITCUIL(CUIL.value)) {
				ok = false;
				CUIL.setAttribute("error", "");
			}

			if (Mail.value == "" && TelefonoPersonal.value == "" && TelefonoAlternativo.value == "") {
				BordeContacto.setAttribute("error", "");
			} else {
				if (TelefonoPersonal.value != "" && TelefonoPersonal.value.length < 6) {
					ok = false;
					TelefonoPersonal.setAttribute("error", "");
				}
				if (TelefonoAlternativo.value != "" && TelefonoAlternativo.value.length < 6) {
					ok = false;
					TelefonoAlternativo.setAttribute("error", "");
				}
				if (Mail.value != "" && !validaMail(Mail.value)) {
					ok = false;
					Mail.setAttribute("error", "");
				}
			}
			if (CUIT.value != "" && !ValidateCUITCUIL(CUIT.value)) {
				ok = false;
				CUIT.setAttribute("error", "");
			}
			if (NombreEmpresa.value == "" || (NombreEmpresa.value != "" && NombreEmpresa.value.length < 3)) {
				ok = false;
				NombreEmpresa.setAttribute("error", "");
			}
			if (DomicilioObra.value == "" || (DomicilioObra.value != "" && DomicilioObra.value.length < 3)) {
				ok = false;
				DomicilioObra.setAttribute("error", "");
			}
			if (LocalidadObra.value == "" || (LocalidadObra.value != "" && LocalidadObra.value.length < 3)) {
				ok = false;
				LocalidadObra.setAttribute("error", "");
			}
			if (!chkAceptacion.checked) {
				ok = false;
				divChecked.style.borderColor = "red";
			}
			if (ok) {
				//let msg = "Nombre: " + nombre.value + ", Telefono: " + telefono.value + ", Mail: " + mail.value + ", Mensaje: " + mensaje.value;
				this.cuerpoMail = "<br><b>DATOS DE LA AFILIACION</b>";
				this.cuerpoMail = this.cuerpoMail + "<br>Apellido y Nombre: " + Apellido.value + ", " + Nombre.value;
				this.cuerpoMail = this.cuerpoMail + "<br>Tipo de documento: " + TipoDocumento.value;
				this.cuerpoMail = this.cuerpoMail + "<br>Numero de documento: " + NumeroDocumento.value;
				this.cuerpoMail = this.cuerpoMail + "<br>Sexo: " + Sexo.value;
				this.cuerpoMail = this.cuerpoMail + "<br>CUIL: " + CUIL.value;
				this.cuerpoMail = this.cuerpoMail + "<br>Mail: " + Mail.value;
				this.cuerpoMail = this.cuerpoMail + "<br>Telefono celular 1: " + TelefonoPersonal.value;
				this.cuerpoMail = this.cuerpoMail + "<br>Telefono celular 2: " + TelefonoAlternativo.value;
				this.cuerpoMail = this.cuerpoMail + "<br>CUIT: " + CUIT.value;
				this.cuerpoMail = this.cuerpoMail + "<br>Nombre de la empresa: " + NombreEmpresa.value;
				this.cuerpoMail = this.cuerpoMail + "<br>Domicilio de obra: " + DomicilioObra.value;
				this.cuerpoMail = this.cuerpoMail + "<br>Provincia de obra: " + Provincias.value;
				this.cuerpoMail = this.cuerpoMail + "<br>Localidad de obra: " + LocalidadObra.value;
				this.cuerpoMail = this.cuerpoMail + "<br>C.P. de obra: " + CPObra.value;

				this.j = {
					Apellido: Apellido.value,
					Nombre: Nombre.value,
					TipoDocumento: TipoDocumento.value,
					NumeroDocumento: NumeroDocumento.value,
					Sexo: Sexo.value,
					CUIL: CUIL.value,
					Mail: Mail.value,
					TelefonoPersonal: TelefonoPersonal.value,
					TelefonoAlternativo: TelefonoAlternativo.value,
					CUIT: CUIT.value,
					RazonSocial: NombreEmpresa.value,
					Direccion: DomicilioObra.value,
					Localidad: LocalidadObra.value,
					Provincia: Provincias.value,
					CodigoPostal: CPObra.value,
				};
				this.queMail = 0;
				store.dispatch(addAfSindical(this.j));
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
window.customElements.define("afiliacionsindical-screen", afiliacionSindicalScreen);

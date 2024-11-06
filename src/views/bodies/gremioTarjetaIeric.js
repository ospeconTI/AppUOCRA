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

export class gremioTarjetaIericScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
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
				background-image: url("https://app.uocra.org/images/gremioTarjetaIeric.gif");
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
				padding-bottom: 1rem;
			}
			#subTituloTexto {
				display: grid;
				width: 80%;
				align-self: self-start;
				font-size: var(--font-label-size);
				justify-self: center;
				padding-bottom: 1rem;
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
				padding: 0.2rem 0 0.2rem 0;
				justify-self: center;
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
			.btnVerMapa svg {
				height: 2rem;
			}
			#bullet {
				fill: var(--color-blanco);
				stroke: var(--color-verde-claro);
			}
			#btnSvg svg {
				width: 2rem;
				height: 2rem;
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
						<div id="solicitud">Una tarjeta inteligente</div>
					</div>
					<div id="subTituloTexto">
						La <b>Tarjeta Inteligente "Soy Constructor"</b> " es una iniciativa de la UOCRA y conforma una herramienta de vanguardia a nivel mundial en materia de registración laboral formal, puesto que es una tarjeta que:
						<li>Genera mayor transparencia.</li>
						<li>Permite la consulta instantánea sobre la registración realizada.</li>
						<li>Genera una historia Laboral Certificada por Organismo de Contralor (IERIC).</li>
						<li>Realiza una actualización permanente de categoría y especialidad del trabajador/a.</li>
						<li>Registra la información sobre los cursos realizados y certificaciones de competencia obtenidas.</li>
						<li>Jerarquiza a los trabajadores y trabajadoras de la industria.</li>
					</div>
					<div id="tituloTexto" class="grid">
						<div id="bullet">${SVGS["BULLET"]}</div>
						<div id="solicitud">Obtene tu tarjeta</div>
					</div>
					<div id="subTituloTexto">
						<b>La primera Tarjeta debe ser gestionada por la empresa contratante</b>, la cual debe enviar al IERIC todos los datos del trabajador o trabajadora para que proceda a la emisión de la tarjeta. Así lo establece la Ley 22.250 (en su artículo 13, último párrafo).
						<p>En caso de pérdida, robo o deterioro de la tarjeta, podes gestionar vos mismo/a una nueva tarjeta en las oficinas de las representaciones del IERIC de cualquier punto del país.</p>
						<p><b>Buscá la representación del IERIC más cercana</b></p>
					</div>
					<div id="botones">
						<button btn1 class="btnVerMapa" @click=${this.mail}>
							<div class="grid column">
								<div id="btnSvg">${SVGS["MISINDICATO"]}</div>
								<div>REPRESENTACIONES</div>
							</div>
						</button>
					</div>
					<div id="tituloTexto" class="grid">
						<div id="bullet">${SVGS["BULLET"]}</div>
						<div id="solicitud">Documentación necesaria para tramitar una tarjeta en caso de robo, pérdida o deterioro.</div>
					</div>
					<div id="subTituloTexto">
						<p>El trabajador o trabajadora debe presentarse a la representación del IERIC con la siguiente documentación:</p>
						<li><b>Formulario</b> (FI.002) "Emisión Credencial de Registro Laboral solicitada por el Trabajador". Presentar por Duplicado.</li>
						<br />
						<a download style="justify-self: center;" href="https://www.ieric.org.ar/wp-content/uploads/2020/01/FI002.pdf">
							<div id="botones">
								<button btn1 class="btnVerMapa">
									<div class="grid column">
										<div id="btnSvg">${SVGS["TARJETAIERIC"]}</div>
										<div>(FI.002)</div>
									</div>
								</button>
							</div>
						</a>
						<br />
						<li><b>Documento Nacional de Identidad:</b> original y copia de la primera y segunda hoja.</li>
						<ul>
							<li>En caso de ser extranjeros sin DNI: deberá adjuntarse fotocopia de residencia precaria o radicación migratoria en término o con sello de renovación de prórroga y fotocopia de cédula de identidad del país de origen.</li>
							<li>En caso de extravío del DNI: adjuntar constancia de DNI en trámite y fotocopia de partida de nacimiento o acta de matrimonio.</li>
						</ul>
						<li><b>Constancia de CUIL del trabajador:</b> Sólo para el caso en que el DNI no tenga incorporado el número de CUIL. En caso de trabajador extranjero: no se admitirá la constancia tramitada con documentación del país de origen." Constancia de CUIL del trabajador: Sólo para el caso en que el DNI no tenga incorporado el número de CUIL. En caso de trabajador extranjero: no se admitirá la constancia tramitada con documentación del país de origen.</li>
						<li><b>Tarjeta "dañada" o "deteriorada":</b> únicamente cuando el trabajador requiera el cambio.</li>
						<p><b>Importante:</b> el trámite para una nueva tarjeta (en caso de robo, pérdida o deterioro) se realiza de manera personal y deben abonarse los costos de emisión.</p>
						<p>Por consultas podés comunicarte con la representación del IERIC más cercana a tu domicilio o acercarte a cualquiera de las seccionales de UOCRA para obtener información.</p>
					</div>
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
			const SeMuestraEnUnasDeEstasPantallas = "-gremioTarjetaIeric-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
	}
	mail() {
		window.open("https://www.ieric.org.ar/ieric/representaciones/", "_blank");

		//let usu = store.getState().autorizacion.usuario;
		//if (usu) {
		//	let msg = "Nombre: " + usu.nombre + ".%0D%0A" + "Apellido: " + usu.apellido + ". %0D%0ADocumento: " + usu.documento;
		//	location.href = "mailto:app.uocra.org@gmail.com?cc=&subject=UOCRA%20Solicitud%20,tarjeta%20soy%20constructor&body=" + msg;
		//} else {
		//	store.dispatch(
		//		showConfirmacion(
		//			"Debe estar logueado para realizar esta operacion, ¿ quiere loguearse ahora ?",
		//			() => {
		//				store.dispatch(goTo("sesion"));
		//			},
		//			null
		//		)
		//	);
		//}
	}
	cultura() {
		store.dispatch(goTo("cultura"));
	}
	volver() {
		store.dispatch(goTo("inicial"));
	}
	claveRecuperar() {
		store.dispatch(goTo("claveRecuperar"));
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
window.customElements.define("gremiotarjetaieric-screen", gremioTarjetaIericScreen);

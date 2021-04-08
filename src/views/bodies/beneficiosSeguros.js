/** @format */

import { html, LitElement, css } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class beneficiosSegurosScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;

		this.item = [
			{ Id: 1, titulo: "SEGURO DE VIDA COLECTIVO", cuerpo: "<p>El Seguro de Vida Colectivo alcanza a los obreros comprendidos en la Convención Colectiva 76/75 y es un beneficio que pone a disposición la UOCRA para las trabajadoras y los trabajadores constructores.</p>" },
			{
				Id: 2,
				titulo: "REQUISITOS Y DOCUMENTACIÓN",
				cuerpo:
					"<p><b>Adicional por Servicios Públicos:</b></p><p>Copia Boleta de Servicios Públicos (luz, gas, agua, alumbrado barrido y limpieza). Las citadas facturas deben estar a nombre del fallecido, esposa o concubina y corresponder al mes del deceso del causante y con comprobante de pago.</p><p>En caso de no poseer facturas a nombre del fallecido o cónyuge se podrá adjuntar a las mismas Certificado de Domicilio o Contrato de Alquiler.</p><p><b>Adicional por Apoyo Escolar y Beca Secundaria:</b></p><p>Constancias de Alumno Regular original y correspondiente al año en curso de los hijos menores de edad para los siguientes niveles: PRIMARIA – SECUNDARIA.</p><p><b>Adicional por Hijo Póstumo:</b></p><p>Certificado de Embarazo dónde conste las semanas de gestación y la fecha probable de parto</p><p><b>*A las personas que soliciten este beneficio, se le requerirá la siguiente documentación:</b></p><p>-CBU emitido por el Banco<br>-Constancia de CUIL<br>-Fotocopia de DNI<br>-Teléfono de Contacto<br>-Correo Electrónico</p>",
			},
			{
				Id: 3,
				titulo: "ADICIONALES DEL SEGURO DE VIDA",
				cuerpo:
					"<p><p>Los adicionales son sumas que complementan el monto a cobrar por seguro de vida a partir de conceptos específicos.</p><p>Los adicionales vigentes son:</p><p><li>Apoyo Cónyuge o Conviviente</li><li>Apoyo Cónyuge o Conviviente (Accidente)</li><li>Apoyo Familia Numerosa</li><li>Apoyo Escolar</li><li>Beca Secundaria</li><li>Gastos Sucesorios</li><li>Hijo Póstumo</li><li>Servicios Públicos</li><li>Cuota Sindical (Si figura en el recibo de sueldo el descuento correspondiente del 2.50%)</li><li>Para la tramitación de los adicionales por Servicios Públicos, Apoyo Escolar y Beca Secundaria, se solicita documentación adicional específica.</li></p>",
			},
			{ Id: 4, titulo: "¿DÓNDE TRAMITAR UN SUBSIDIO?", cuerpo: "<p>Los subsidios se pueden gestionar en los centros de atención médica - CEMAP (con excepción del Sanatorio Franchinnn).</p><p>Consultá cuál es tu CEMAP más cercano.</p>" },
			{ Id: 5, titulo: "ESCRIBI TU CONSULTA", cuerpo: "<p>Hace click en el boton y envia por mail tu consulta</p><c-boton style='justify-self:center;' texto='ENVIAR MAIL' svg='SEGUROVIDA' accion='beneficiosSeguros' parametro=''></c-boton>" },
		];
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
				background-image: url("https://app.uocra.org/images/hogar.gif");
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
				align-self: self-start;
			}
			#subTituloTexto {
				width: 80%;
				align-self: self-start;
				font-size: var(--font-header-h1-menos-size);
				justify-self: center;
				padding-bottom: 1rem;
			}
			#items {
				grid-gap: 1rem !important;
				justify-items: center;
			}
			.item0 {
				width: 100%;
				justify-items: center;
				grid-gap: 0 !important;
				padding: 0 !important;
			}
			.item {
				background-color: var(--color-gris-medio);
				height: 5vh;
				width: 80%;
				padding: 0 2vw 0 2vw !important;
				grid-gap: 0 !important;
				cursor: pointer;
				border-radius: 0.3rem;
			}
			.mas {
				text-align: right;
			}
			.blanco {
				color: var(--color-blanco);
				fill: var(--color-blanco);
				stroke: transparent;
			}
			.cuerpoNota {
				padding: 0 10vw 0 10vw !important;
				justify-self: flex-start;
				grid-gap: 0 !important;
			}
			*[ocultar] {
				display: none;
			}
		`;
	}
	render() {
		if (true) {
			return html`
				<div id="cuerpo" class="grid row">
					<div style="padding:1rem"></div>
					<div id="opciones">
						<div id="items" class="grid row">
							${this.item.map((item, index) => {
								return html`
									<div class="grid row item0">
										<div class="grid column item blanco" .item="${item.Id}" @click=${this.mostrar}>
											<div>${item.titulo}</div>
											<div id="mas${item.Id}" class="mas">+</div>
										</div>
										<div id="cuerpoNota${item.Id}" class="cuerpoNota" hidden>
											<div id="elCuerpo${item.Id}"></div>
											${unsafeHTML(item.cuerpo)}
											<div ?ocultar="${index != 3}"><button btn1 @click=${this.cemap}>Ver</button></div>
										</div>
									</div>
								`;
							})}
						</div>
					</div>
					<div style="padding-top:1rem"></div>
				</div>
			`;
		}
	}

	mostrar(e) {
		let r = this.shadowRoot.querySelector("#" + "cuerpoNota" + e.currentTarget.item);
		let mas = this.shadowRoot.querySelector("#" + "mas" + e.currentTarget.item);
		if (r) {
			if (!r.hasAttribute("hidden")) {
				r.setAttribute("hidden", "");
				mas.innerHTML = "+";
			} else {
				[].forEach.call(this.shadowRoot.querySelectorAll(".cuerpoNota"), (element) => {
					element.setAttribute("hidden", "");
				});
				[].forEach.call(this.shadowRoot.querySelectorAll(".mas"), (element) => {
					element.innerHTML = "+";
				});
				r.removeAttribute("hidden");
				mas.innerHTML = "-";
			}
		}
	}
	cemap() {
		store.dispatch(goTo("cartilla"));
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-beneficiosSeguros-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
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
window.customElements.define("beneficiosseguros-screen", beneficiosSegurosScreen);

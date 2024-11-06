/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";
import { button } from "../css/button";
import { goHistoryPrev } from "../../redux/routing/actions";
import { aceptaCondicionesCobertura } from "../../redux/coberturas/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const CURRENT_TIMESTAMP = "screen.timeStamp";

export class msgAceptaCoberturaComponent extends connect(store, CURRENT_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.texto = "";
	}

	static get styles() {
		return css`
			${gridLayout}
			${button}
			:host {
				display: grid;
				position: absolute;
				background-color: var(--color-gris);
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				width: fit-content;
				height: 75vh;
				padding: 0.2rem;
			}
			#cuerpo {
				position: relative;
				background-color: var(--primary-color);
				color: white;
				text-align: left;
				border: 1px solid white;
				border-radius: 0.5rem;
				width: 80vw;
				overflow-y: auto;
			}
			*[hidden] {
				display: none;
			}
			#linea {
				color: var(--color-gris-claro);
				width: 95%;
			}
			#botones {
				width: 80%;
				height: 2rem;
				justify-self: center;
			}
			.btn {
				background-color: var(--color-verde-oscuro) !important;
				border-radius: 1rem !important;
				color: var(--color-blanco) !important;
				font-size: var(--font-header-h1-size) !important;
				grid-gap: 0 !important;
				justify-content: center;
				padding: 1 !important;
			}
		`;
	}
	render() {
		return html`
			<div class="grid row" id="cuerpo">
				<div style="font-size:5vw;font-weight: 900;">Términos y Condiciones</div>
				<div style="font-size:3vw;">
					<p>
						El uso de la Aplicación Móvil "O.S.Pe.Con." se encuentra sujeta a los siguientes Términos y Condiciones (en adelante, los "Términos y Condiciones") que establecen las condiciones generales y particulares y las políticas de privacidad aplicables al uso de la Aplicación Móvil. Cualquier persona que no acepte estos Términos y Condiciones, los cuales tienen un carácter obligatorio y vinculante, deberá abstenerse de utilizar la Aplicación Móvil. CONSTRUIR SALUD, la Obra Social
						del Personal de la Construcción, brinda servicios médicos al trabajador constructor y su familia, así como a trabajadores de otras actividades y MONOTRIBUTISTA que optan por sus servicios. Atiende en su Red Nacional de Servicios Médicos, con el SANATORIO FRANCHIN como cabecera, siendo un centro de alta complejidad en Capital Federal, y más de 50 CENTROS MÉDICOS DE ATENCIÓN PRIMARIA (CEMAP) propios, que operan como cabeceras provinciales, complementando estos servicios con
						efectores públicos y privados contratados en todo el ámbito nacional. Conforme lo establecido por la Ley Nacional de Obras Sociales 23.660 y la Ley 23.661 del Sistema nacional del Seguro de Salud (Arts. 28 y cctes.) el sistema que se brinda es cerrado, lo que implica que cuando las personas optan por afiliarse a OSPECON, aceptan libre y voluntariamente el sistema y la prestación en los servicios contratados, no pudiendo de ninguna manera, salirse por fuera del mismo. En
						el caso de hacerlo, correrá por su exclusiva cuenta y riesgo económico y de cualquier naturaleza. La Obra Social asiste bajo el modelo prestacional basado en la Atención Primaria de la Salud y en la Medicina Familiar como principal recurso. Otorga una cobertura integral para resolver las necesidades de salud de nuestros afiliados, incluidas en el PMO (Programa medico obligatorio) y las modificaciones que realice la Autoridad de Aplicación. El Médico de familia o el centro
						médico asignado es quien conduce al paciente a través de los distintos niveles de complejidad del sistema y proporciona cuidados continuos. La atención primaria es fundamental para asegurar el acceso equitativo y proveer atención integral. Conforme el Dcto. 292/95, es facultativo para las obras sociales inscribirse o no en el Registro especial para atender a jubilados o pensionados. NO ENCONTRANDOSE INSCRIPTA LA OSPECON, PARA ATENDER A NINGUN TIPO DE JUBILIADOS SEAN DE SU
						ACTIVIDAD Y/O MONOTRIBUTISTAS, DOMÉSTICOS NI DE NINGUNA OTRA ESPECIA. Ergo a partir de la obtención del beneficio jubilatorio no podrán continuar con los servicios de OSPECON.
					</p>
					<p>
						1. ALCANCE 1.1 Para acceder a la Aplicación Móvil y/o mediante el acceso a la Aplicación Móvil por cualquier medio, el Usuario acepta los Términos y Condiciones generales que regularán el uso de la Aplicación Móvil y que seguidamente se exponen. 1.2 El Usuario es el único responsable por la no divulgación de su Contraseña. En caso de incumplimiento se aplicarán sanciones. 1.3 El Administrador podrá requerir en cualquier momento al Usuario que actualice su versión de la
						Aplicación Móvil.
					</p>
					<p>2. MODIFICACIONES DE LOS TÉRMINOS Y CONDICIONES</p>
					<p>El Administrador podrá modificar los Términos y Condiciones en cualquier momento haciendo públicos a través de la Aplicación Móvil los términos modificados. Todos los términos modificados entrarán en vigor a los 10 (diez) días de su publicación.</p>
					<p>3. CONDICIONES PARA FORMALIZAR EL INGRESO</p>
					<p>
						La persona interesada en ingresar al sistema de medicina de OSPeCon, deberá suscribir la solicitud de ingreso, junto a sus antecedentes clínicos y de su grupo familiar; ambos instrumentos revisten el carácter de declaración jurada de estado de salud y toda otra información médica requerida por nuestra Auditoría Médica. El beneficiario es personalmente responsable por la información suministrada en su declaración jurada, como así también por la correspondiente a cada uno
						de los integrantes de su grupo familiar a su cargo asumiendo el compromiso por el declarante y por todo el grupo familiar que cualquier modificación que se produjera, sea por obtención de beneficio jubilatorio, y/o alta en otro agente del seguro de salud ya sea como titular y/o bajo cualquier otro concepto, será comunicada en forma inmediata a la Obra Social.
					</p>
					<p>
						La falsedad de los datos y/o falta de comunicación de los cambios podrían eventualmente implicar perjuicios a los beneficiarios fundamentalmente, y que podrían perjudicar incluso los tratamientos que requieran. "El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de
						la Ley Nº 25326" "La Dirección Nacional de Protección de Datos personales, Órgano de Control de la Ley Nº 25326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de los datos personales"
					</p>
					<p>4. CREDENCIAL VIRTUAL</p>
					<p>4.1 Toda vez que OSPeCon valide el ingreso del solicitante, el mismo accederá a su credencial virtual que se renovará automáticamente. La cual una vez activa, se deberá presentar junto con el Documento de Identidad, cada vez que se requieran servicios contemplados en el Plan Médico Obligatorio. 4.2 La credencial virtual es personalísima e intransferible.</p>
					<p>5. PROFESIONALES</p>
					<p>5.1 El afiliado tiene derecho de atención con profesionales propios o contratados por la Obra Social, en forma exclusiva, excluyente y taxativa entre la totalidad de los profesionales médicos, odontólogos, bioquímicos, centros de diagnósticos y tratamientos, Centros de internación y farmacias adheridas que se encuentran en la Obra Social, cuyo modelo de Salud se basa en la Atención Primaria.</p>
					<p>
						5.2 No se reconocen solicitudes de reembolsos al afiliado por pagos realizados a otras instituciones o profesionales que no pertenezcan a la Red propia de la Obra Social, aun cuando correspondieren a prestaciones que no se pudieren efectuar a través de prestadores de su listado, con la sola excepción de derivación previa expresa por parte de la Obra Social y siempre que se trate de casos expresamente de urgencia. La Obra Social garantizará la cobertura de la prestación
						sólo con derivación previa expresa de la Auditoría Médica. 5.3 La Obra Social no se encuentra obligada a cubrir por vía de reintegro las prestaciones establecidas conforme al Sistema de Prestaciones Básicas para Personas con Discapacidad prevista en la Ley 24.901 y sus normas complementarias y modificatorias, siempre y cuando cuente con prestadores especialmente contratados.
					</p>
					<p>6. ACCESO PROGRESIVO</p>
					<p>
						Existen diversos tipos de beneficiarios, y conforme las legislaciones específicas de la materia, cuentan con accesos progresivos a la atención médica Res. 001/2010 y su Dcto. Reglamentario establecen que los MONOTRIBUTISTA, sean estos comunes y/o MONOTRIBUTISTAS SOCIALES, cuentan con acceso progresivo de atención médica, desde la adhesión al régimen. Asimismo, para requerir atención deben tener aportes correlativos y al día. Si suspendieran pagos por algunos períodos, no
						podrán requerir atención, tampoco abonar en forma retroactiva, dado que la ley exige periodicidad en los aportes. Conforme dictamen AFIP, para poder inscribirse como MONOTRIBUTISTA tiene que REALIZAR ALGUNA ACTIVIDAD COMERCIAL, debiendo acreditar tal condición en oportunidad de solicitar la afiliación en la obra social.
					</p>
					<p>
						6.1 Acceso Progresivo: Se define como acceso progresivo (carencias) al período entre el ingreso del afiliado MONOTRIBUTISTA a la Obra Social y el momento en que puede comenzar a utilizar los beneficios de todas aquellas prestaciones que son superadoras y complementarias del Plan Médico Obligatorio (PMO) vigente cf. Res. 201/02 MSAL, Res. 310/04 MSAL y normas complementarias y modificatorias)- Durante ese lapso, se podrán utilizar todos los prestadores exclusivos para la
						atención de prestaciones del Programa Médico Obligatorio (PMO) identificados en la cartilla.
					</p>
					<p>7. REHABILITACION DE TERAPIA FISICA</p>
					<p>
						Este tipo de rehabilitaciones tendrá una cantidad determinada de sesiones. DISCAPACITADOS: La obra social en virtud del art. 11 de la Ley 24.901 cuenta con facultades para realizar una Junta Médica Interdisciplinaria, quien verificará -con criterio médico- cuales son las terapias que el paciente necesite. Primando lo determinado por la Junta. En ningún caso podrán los familiares de pacientes que cuenten con discapacidad, imponer tratamientos en prestadores fuera de la
						cartilla, ni optar por servicios fuera de los contratados. Si a pesar de ello optaren por recurrir a profesionales fuera del ámbito de cobertura de la OSPECON, se entenderá que han tomado la decisión de forma unilateral y por ende serán los que estén a cargo de los gastos y consecuencias que originen sus determinaciones.
					</p>
					<p>8. EXCLUSIONES:</p>
					<p>Quedan expresamente excluidas de la cobertura que la Obra Social brinda a sus afiliados: 8.1 Accidentes de trabajo, enfermedades profesionales.</p>
					<p>8.2 Internaciones en establecimientos geriátricos, Internaciones para cura de reposo, para tratamientos de adelgazamiento o rejuvenecimiento. Dietología; cosmetología y podología objetos para el confort personal tales como aparatos de radio, televisión o servicios de peluquería o belleza; alquiler o compra de acondicionadores de aire, humificadores, vaporizadores, equipos para ejercicios, ascensores o elevadores, construcción de viviendas.</p>
					<p>8.3 Cualquier tratamiento en cualquier institución en la cual no hubiese sido derivado por el Médico de cabecera o Centro Médico de referencia asignado.</p>
					<p>8.4 Cualquier servicio y/p suministro no prescripto por un Médico propio.</p>
					<p>8.5 Cualquier servicio o suministro que sea experimental, orientado a la investigación o de naturaleza investigativa.</p>
					<p>8.6 Internación por afecciones en centros no autorizados por la Obra Social.</p>
				</div>
			</div>
			<!-- <hr id="linea" /> -->
			<div class="grid row" style="padding:0">
				<div class="grid row" style="border: solid 1px black; border-radius: 0.5rem">
					<div style="font-size: .8rem">DECLARO QUE HE TOMADO CONOCIMIENTO Y EN CONSECUENCIA ACEPTO</div>
					<div style="font-size: .8rem">
						<label style="font-size: 1rem"><input type="checkbox" id="cbox1" value="first_checkbox" @change=${this.aceptarchk} />Acepto</label>
					</div>
				</div>
				<div class="grid column" style="padding:0">
					<div id="botones" class="grid" ?hidden="${this.texto == ""}">
						<button disabled @click=${this.aceptar} id="btnAceptar">
							<div style="font-size: var(--font-bajada-size)">Aceptar</div>
						</button>
					</div>
					<div id="botones" class="grid">
						<button btn1 class="btn" @click=${this.cancelar}>
							<div style="font-size: var(--font-bajada-size)">Cancelar</div>
						</button>
					</div>
				</div>
			</div>

			<div style="padding:.1rem"></div>
		`;
	}
	aceptarchk() {
		let btn = this.shadowRoot.getElementById("btnAceptar");
		if (this.shadowRoot.getElementById("cbox1").checked) {
			btn.setAttribute("btn1", true);
			btn.removeAttribute("disabled");
			btn.classList.add("btn");
		} else {
			btn.removeAttribute("btn1");
			btn.setAttribute("disabled", true);
			btn.classList.remove("btn");
		}
		//btnAceptar
	}
	aceptar() {
		store.dispatch(aceptaCondicionesCobertura(true));
	}
	cancelar() {
		store.dispatch(goHistoryPrev());
	}
	static get properties() {
		return {
			mediaSize: {
				type: String,
				reflect: true,
				attribute: "media-size",
			},
			current: {
				type: String,
				reflect: true,
			},
			texto: {
				type: String,
				reflect: true,
			},
		};
	}
}
window.customElements.define("msgaceptacobertura-component", msgAceptaCoberturaComponent);

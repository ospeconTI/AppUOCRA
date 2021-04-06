/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goHistoryPrev, goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";
import { get as getFundacionEspecialidades } from "../../redux/fundacionEspecialidades/actions";
import { get as getFundacionCursos, seleccion } from "../../redux/fundacionCursos/actions";
import { get as getFundacionCentros, fundacionCentroMapa } from "../../redux/fundacionCentros/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const FUNDACIONCURSOS_TIMESTAMP = "fundacionCursos.timeStamp";
const FUNDACIONESPECIALIDAD_TIMESTAMP = "fundacionEspecialidades.timeStamp";
const FUNDACIONCENTROS_TIMESTAMP = "fundacionCentros.timeStamp";
const FUNDACIONCURSOS_ERRORTIMESTAMP = "fundacionCursos.errorTimeStamp";
const FUNDACIONESPECIALIDAD_ERRORTIMESTAMP = "fundacionEspecialidades.errorTimeStamp";
const FUNDACIONCENTROS_ERRORTIMESTAMP = "fundacionCentros.errorTimeStamp";

export class fundacionCursosScreen extends connect(store, FUNDACIONCURSOS_ERRORTIMESTAMP, FUNDACIONESPECIALIDAD_ERRORTIMESTAMP, FUNDACIONCENTROS_ERRORTIMESTAMP, FUNDACIONCENTROS_TIMESTAMP, FUNDACIONCURSOS_TIMESTAMP, FUNDACIONESPECIALIDAD_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.especialidades = null;
		this.cursos = null;
		this.centros = null;
		this.provincias = null;
		this.localidades = null;
		this.duraciones = null;
		this.especialidad = null;
		this.idioma = store.getState().ui.idioma;
		this.cartilla = require("../../../assets/idiomas/cartilla.json");
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
				background-image: url("https://app.uocra.org/images/fundacionCursos.gif");
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
				align-self: self-start;
			}
			.miselect {
				width: 60%;
				height: 3.5rem;
				justify-self: center;
				grid-gap: 0 !important;
			}
			.elselect {
				height: 2.5rem;
			}
			.lblSelect {
				font-size: var(--font-label-size);
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
		`;
	}
	render() {
		if (this.especialidades) {
			return html`
				<div id="cuerpo" class="grid row">
					<div id="titulo" class="grid column"></div>
					<div id="selectEspecialidades" class="grid row miselect">
						<select id="txtEspecialidad" class="elselect" @change="${this.cambioEspecialidad}">
							<option value="-1">Especialidades</option>
							${this.especialidades
								? this.especialidades.map((item, index) => {
										return html` <option value="${item.id}">${item.nombre}</option> `;
								  })
								: ""}
						</select>
					</div>
					<div id="selectProvincias" class="grid row miselect">
						<select id="txtProvincias" class="elselect" @change="${this.cambioProvincia}">
							<option value="">Provincias</option>
							${this.provincias
								? this.provincias.map((item, index) => {
										return html` <option value="${item.nombre}">${item.nombre}</option> `;
								  })
								: ""}
						</select>
					</div>
					<div id="selectLocalidades" class="grid row miselect">
						<select id="txtLocalidades" class="elselect" @change="${this.cambioLocalidad}">
							<option value="">Localidades</option>
							${this.localidades
								? this.localidades.map((item, index) => {
										return html` <option value="${item.nombre}">${item.nombre}</option> `;
								  })
								: ""}
						</select>
					</div>
					<div id="selectDuracion" class="grid row miselect">
						<select id="txtDuracion" class="elselect" @change="${this.cambioDuracion}">
							<option value="">Duración</option>
							${this.duraciones
								? this.duraciones.map((item, index) => {
										return html` <option value="${item.nombre}">${item.nombre}</option> `;
								  })
								: ""}
						</select>
					</div>
					<div id="botones" class="grid">
						<button btn1 class="btnListado" @click="${this.listado}">
							<div class="grid column">
								<div>${SVGS["LISTADO"]}</div>
								<div>LISTADO</div>
							</div>
						</button>
						<button btn1 class="btnVerMapa" @click="${this.mapa}">
							<div class="grid column">
								<div>${SVGS["VERMAPA"]}</div>
								<div>VER MAPA</div>
							</div>
						</button>
					</div>
				</div>
			`;
		} else {
			if (this.current == "fundacionCursos" && (this.centros == 0 || this.cursos == 0 || this.especialidad == 0)) {
				return html`<msgnoconeccion-component @click="${this.atras}" texto="Haga click volver" style="cursor:pointer"></msgnoconeccion-component>; `;
			}
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
			const SeMuestraEnUnasDeEstasPantallas = "-fundacionCursos-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				if (!this.especialidades) {
					store.dispatch(getFundacionEspecialidades());
				}
				if (!this.cursos) {
					store.dispatch(getFundacionCursos());
				}
				if (!this.centros) {
					store.dispatch(getFundacionCentros());
				}
			}
		}
		if (name == FUNDACIONESPECIALIDAD_TIMESTAMP) {
			this.especialidades = state.fundacionEspecialidades.entities.filter((a) => a.tipo == 1);
			if (this.cursos && this.centros) {
				this.actualizaArray();
			}
		}
		if (name == FUNDACIONCURSOS_TIMESTAMP) {
			this.cursos = state.fundacionCursos.entities;
			if (this.cursos && this.centros) {
				this.actualizaArray();
			}
		}
		if (name == FUNDACIONCENTROS_TIMESTAMP) {
			this.centros = state.fundacionCentros.entities;
			if (this.cursos && this.cursos) {
				this.actualizaArray();
			}
		}
		if (name == FUNDACIONCENTROS_ERRORTIMESTAMP) {
			this.centros = 0;
		}
		if (name == FUNDACIONCURSOS_ERRORTIMESTAMP) {
			this.cursos = 0;
		}
		if (name == FUNDACIONESPECIALIDAD_ERRORTIMESTAMP) {
			this.especialidades = 0;
		}
	}
	listado() {
		const txtEspecialidad = this.shadowRoot.querySelector("#txtEspecialidad").value;
		const txtProvincia = this.shadowRoot.querySelector("#txtProvincias").value;
		const txtLocalidad = this.shadowRoot.querySelector("#txtLocalidades").value;
		const txtDuracion = this.shadowRoot.querySelector("#txtDuracion").value;
		if (txtEspecialidad == -1 || txtProvincia == "" || txtLocalidad == "" || txtDuracion == "") {
			store.dispatch(showWarning("Atencion!", "Falta seleccionar valores en los campos anteriores", "fondoError", 4000));
		} else {
			store.dispatch(seleccion(txtEspecialidad, txtProvincia, txtLocalidad, txtDuracion, 1));
			store.dispatch(goTo("fundacionCursosLista"));
		}
	}
	mapa() {
		const txtEspecialidad = this.shadowRoot.querySelector("#txtEspecialidad").value;
		const txtProvincia = this.shadowRoot.querySelector("#txtProvincias").value;
		const txtLocalidad = this.shadowRoot.querySelector("#txtLocalidades").value;
		const txtDuracion = this.shadowRoot.querySelector("#txtDuracion").value;
		if (txtEspecialidad == -1 || txtProvincia == "" || txtLocalidad == "" || txtDuracion == "") {
			store.dispatch(showWarning("Atencion!", "Falta seleccionar valores en los campos anteriores", "fondoError", 4000));
		} else {
			store.dispatch(seleccion(txtEspecialidad, txtProvincia, txtLocalidad, txtDuracion, 1));
			store.dispatch(goTo("fundacionMapa"));
		}
	}
	actualizaArray() {
		var arr = store.getState().fundacionEspecialidades.entities;
		this.especialidades = arr.filter((a) => a.tipo == 1);
		arr = store.getState().fundacionCursos.entities;
		this.cursos = arr.filter((a) => a.tipo == 1);
		arr = store.getState().fundacionCentros.entities;
		this.centros = arr;
		this.update();
	}
	cambioEspecialidad(e) {
		this.especialidad = e.currentTarget.value;
		// Cursos para la especialidad elegida
		this.cursos = store.getState().fundacionCursos.entities.filter((a) => a.tipo == 1 && a.fundacionEspecialidadesId == this.especialidad);
		// Centros para la especialidad elegida
		this.centros = store.getState().fundacionCentros.entities.filter((centro) => {
			return this.cursos.some((curso) => {
				return curso.fundacionCentrosId === centro.id;
			});
		});
		// Provincias para la especialidad elegida
		var lasProvincias = [];
		this.centros.forEach(function (item) {
			var i = lasProvincias.findIndex((x) => x.nombre == item.provincia);
			if (i <= -1) {
				lasProvincias.push({ nombre: item.provincia });
			}
		});
		lasProvincias.sort(function (a, b) {
			return a["nombre"] > b["nombre"] ? 1 : -1;
		});
		this.provincias = lasProvincias;
		this.shadowRoot.querySelector("#txtProvincias").value = "";
		this.shadowRoot.querySelector("#txtLocalidades").value = "";
		this.shadowRoot.querySelector("#txtDuracion").value = "";
		this.localidades = null;
		this.duraciones = null;
		this.update();
	}
	cambioProvincia(e) {
		var prov = this.shadowRoot.querySelector("#txtProvincias").value;
		//var losCentros = this.centros.filter(a => a.provincia == prov);
		var lasLocalidades = [];
		this.centros
			.filter((a) => a.provincia == prov)
			.forEach(function (item) {
				var i = lasLocalidades.findIndex((x) => x.nombre == item.localidad);
				if (i <= -1) {
					lasLocalidades.push({ nombre: item.localidad });
				}
			});
		lasLocalidades.sort(function (a, b) {
			return a["nombre"] > b["nombre"] ? 1 : -1;
		});
		this.localidades = lasLocalidades;

		this.shadowRoot.querySelector("#txtLocalidades").value = "";
		this.shadowRoot.querySelector("#txtDuracion").value = "";
		this.duraciones = null;
		this.update();
	}
	cambioLocalidad(e) {
		var loc = this.shadowRoot.querySelector("#txtLocalidades").value;
		var prov = this.shadowRoot.querySelector("#txtProvincias").value;
		var losCentros = this.centros.filter((a) => a.provincia == prov && a.localidad == loc);

		var cursosElegidos = this.cursos.filter((curso) => {
			return losCentros.some((centro) => {
				return curso.fundacionCentrosId === centro.id;
			});
		});
		var lasDuraciones = [];
		cursosElegidos.forEach(function (item) {
			var i = lasDuraciones.findIndex((x) => x.nombre == item.duracion);
			if (i <= -1) {
				lasDuraciones.push({ nombre: item.duracion });
			}
		});
		lasDuraciones.sort(function (a, b) {
			return a["nombre"] > b["nombre"] ? 1 : -1;
		});
		this.duraciones = lasDuraciones;

		this.shadowRoot.querySelector("#txtDuracion").value = "";
		this.update();
	}
	cambioDuracion() {}

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
window.customElements.define("fundacioncursos-screen", fundacionCursosScreen);

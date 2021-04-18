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
import { OLComponent } from "../componentes/ol-map";
import { Overlay } from "ol/Overlay";
import { getDistance } from "../../libs/funciones";

export const featureListener = function (event) {
	console.log("featureListenerCalled");
};

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const MAPA_CLICK = "ui.mapa.timeStamp";
const SECCIONALES_DATOS = "seccionales.MapaTimeStamp";

export class gremioListaScreen extends connect(store, SECCIONALES_DATOS, MAPA_CLICK, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.gremioLista = require("../../../assets/idiomas/gremioLista.json");
		this.centros = null;
		this.puntos = [];
	}

	static get styles() {
		return css`
			${gridLayout}
			${button}
			${input}

			:host {
				display: grid;
				position: relative;
				background-color: var(--color-blanco);
				overflow: hidden;
				padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				height: 100%;
				grid-auto-flow: row;
				background-color: var(--color-blanco);
			}
			#titulo {
				padding: 0.8vh 0 0.8vh 0;
				text-align: center;
				font-size: 3vh;
				background-color: var(--color-verde-claro);
				color: var(--color-blanco);
			}
			svg {
				height: 8vh;
				width: 8vh;
			}
			.panel {
				display: grid;
				height: 75vh;
				grid-auto-flow: row;
				grid-gap: 0.2rem;
				align-content: start;
				overflow-x: hidden;
				overflow-y: auto;
			}
			.notas {
				width: 95vw;
				justify-self: center;
				grid-template-columns: auto 1fr;
				padding: 0 !important;
				grid-gap: 0 !important;
			}
			.notaDetImg {
				width: 36vw;
				height: 24vw;
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
				justify-self: center;
				border-radius: 0.4rem;
			}
			.notaTitTxt {
				color: var(--primary-color);
				justify-self: left;
				font-size: var(--font-header-h1-size);
			}
			.notaDetTxt {
				color: var(--color-gris-oscuro);
				justify-self: left;
				font-size: var(--font-header-h2-size);
			}
			:host([media-size="small"]) .notaDetTxt {
				font-size: var(--font-label-size);
			}
			*[hidden] {
				display: none;
			}
		`;
	}
	render() {
		if (this.centros) {
			return html`
				<div id="cuerpo">
					<div id="titulo">${this.gremioLista[this.idioma].titulo}</div>
					<div class="panel">
						<div style="padding:.5rem"></div>
						${this.centros.map((item, index) => {
							return html`
								<div ?hidden="${index == 0}">
									<hr id="linea" />
								</div>
								<div class="grid notas" style="align-items: stretch;">
									<div class="notaDetImg" style="background-image: url('${item.imagen}')"></div>
									<div class="grid row">
										<div class="notaTitTxt">${item.nombre}</div>
										<div class="notaDetTxt">${item.direccion}</div>
										<div class="notaDetTxt">${item.telefono}</div>
										<div class="notaDetTxt">${item.mail}</div>
									</div>
								</div>
							`;
						})}
						<div style="padding:.5rem"></div>
					</div>
				</div>
			`;
		} else {
			if (this.current == "gremioLista") {
				return html`<msgnoconeccion-component @click="${this.atras}" texto="Haga click volver" style="cursor:pointer"></msgnoconeccion-component>; `;
			}
		}
	}
	atras() {
		store.dispatch(goHistoryPrev());
	}

	closer() {
		var closer = this.shadowRoot.querySelector("#popup");
		if (!closer.hasAttribute("hidden")) {
			closer.setAttribute("hidden", "");
		}
	}

	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-gremioLista-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.puntos.length = 0;
				this.puntos.unshift([0, 0, "MI UBICACION", "", "S"]);
				for (var i = 0; i < this.centros.length; ++i) {
					let a = this.centros[i];
					this.puntos.push([a.longitud, a.latitud, a.nombre, a.direccion, "C"]);
				}
				if (navigator.geolocation) {
					var success = (position) => {
						var latitud = position.coords.latitude,
							longitud = position.coords.longitude;
						const myPosition = [longitud, latitud, "MI UBICACION", "", "S"];
						this.puntos[0] = myPosition;
						//this.update()
					};
					navigator.geolocation.getCurrentPosition(success, function (msg) {
						this.update();
					});
				}
				this.hidden = false;
				this.update();
			}
		}
		// if (name == MAPA_CLICK){
		//     var closer = this.shadowRoot.querySelector('#popup');
		//     var content = this.shadowRoot.querySelector('#popup-content');
		//     const dato = state.ui.mapa.feature.values_.geometry.flatCoordinates
		//     const event = state.ui.mapa.event
		//     var mostrar = '<p>' + dato[2] + '</p><code>' + dato[3] + '</code>';
		//     if(this.puntos[0][0] != 0){
		//         let distancia = getDistance(this.puntos[0][1], this.puntos[0][0], dato[1], dato[0]).toFixed(1);
		//         if (distancia > 0 ){
		//             mostrar = mostrar + "<p><a target='_blank' href='https://www.google.com.ar/maps/dir/" + this.puntos[0][1] + "," + this.puntos[0][0] + "/" + dato[1] + ","  + dato[0] + "'>Distancia: " +  distancia + " km</a></p>"
		//         }
		//     }
		//     content.innerHTML = mostrar
		//     closer.removeAttribute("hidden");
		// }

		if (name == SECCIONALES_DATOS) {
			this.centros = state.seccionales.entityMapa.sort(function (a, b) {
				return a["nombre"] > b["nombre"] ? 1 : -1;
			});
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
window.customElements.define("gremiolista-screen", gremioListaScreen);

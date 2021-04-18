/** @format */

import { html, LitElement, css } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo, goHistoryPrev } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning } from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { mySliderScreen } from "../componentes/mySlider";
import { msgNoConeccionComponent } from "../componentes/msgNoConeccion";
import { SVGS } from "../../../assets/icons/svgs";
import { get as getTitulo } from "../../redux/titulos/actions";
import { get as getBanners } from "../../redux/banners/actions";
import { get as getMenues } from "../../redux/menues/actions";
import { get as getItems } from "../../redux/items/actions";
import { get as getLeyendas } from "../../redux/leyendas/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const CURRENT_TIMESTAMP = "screen.timeStamp";

const TITULO_TIMESTAMP = "titulos.timeStamp";
const TITULO_ERRORTIMESTAMP = "titulos.errorTimeStamp";
const BANNERS_TIMESTAMP = "banners.timeStamp";
const BANNERS_ERRORTIMESTAMP = "banners.errorTimeStamp";
const MENUES_TIMESTAMP = "menues.timeStamp";
const MENUES_ERRORTIMESTAMP = "menues.errorTimeStamp";
const ITEMS_TIMESTAMP = "items.timeStamp";
const ITEMS_ERRORTIMESTAMP = "items.errorTimeStamp";
const LEYENDAS_TIMESTAMP = "leyendas.timeStamp";
const LEYENDAS_ERRORTIMESTAMP = "leyendas.errorTimeStamp";

const ITEMS_BOTONITEM = "items.botonItem.timeStamp";

export class generalScreen extends connect(store, ITEMS_BOTONITEM, MENUES_ERRORTIMESTAMP, ITEMS_ERRORTIMESTAMP, LEYENDAS_ERRORTIMESTAMP, TITULO_ERRORTIMESTAMP, BANNERS_ERRORTIMESTAMP, CURRENT_TIMESTAMP, LEYENDAS_TIMESTAMP, MENUES_TIMESTAMP, BANNERS_TIMESTAMP, ITEMS_TIMESTAMP, TITULO_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.numero = 1;
		this.url = "https://app.uocra.org/images/";
		this.titulo = null;
		this.banner = null;
		this.menu = null;
		this.item = null;
		this.leyenda = null;
		this.intervalo = 0;
		this.slideIndex = 0;
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
				grid-gap: 0;
				grid-auto-flow: row;
				background-color: var(--color-blanco);
				overflow-x: hidden;
				overflow-y: auto;
				align-content: flex-start;
			}
			#titulo {
				width: 100%;
				height: 7vh;
				margin: 1vh 0 1vh 0;
				background-repeat: no-repeat;
				background-position: center center;
				background-size: contain;
			}
			#banner {
				width: 100%;
				height: 27vh;
				background-repeat: no-repeat;
				background-position: top center;
				background-size: cover;
				border-bottom-left-radius: 1rem;
				border-bottom-right-radius: 1rem;
			}
			svg {
				height: 4.5vh;
				width: 4.5vh;
			}
			#datos {
				display: grid;
				grid-template-rows: 10vh 4vh 10vh;
				grid-template-columns: 38vw 38vw;
				grid-gap: 2vh;
				justify-self: center;
				padding: 0;
			}
			#datos2 {
				display: grid;
				grid-template-rows: 7vh;
				grid-template-columns: 38vw 38vw;
				grid-gap: 2vh;
				justify-self: center;
				padding: 2vh 0 2vh 0;
			}
			.opc {
				padding: 0 !important;
				border-radius: 1rem;
				justify-items: center;
				text-align: center;
				align-content: center;
				font-size: 1.8vh;
				cursor: pointer;
				grid-gap: 1px !important;
			}
			.opc1 {
				grid-row-start: 1;
				grid-row-end: 3;
				width: 100%;
				height: 100%;
			}
			.opc2 {
				width: 100%;
				height: 100%;
			}
			.opc3 {
				grid-row-start: 2;
				grid-row-end: 4;
				width: 100%;
				height: 100%;
			}
			.opc21 {
				width: 100%;
				height: 100%;
			}
			.opc22 {
				width: 100%;
				height: 100%;
			}
			.opcTexto {
				padding: 0 2vw 0 2vw;
				font-size: 2vh;
			}
			.blanco {
				color: var(--color-blanco);
				fill: var(--color-blanco);
				stroke: transparent;
			}
			.negro {
				color: var(--color-negro);
				fill: transparent;
				stroke: var(--color-gris-oscuro);
			}
			.fondoVerde {
				background-color: var(--color-verde-claro);
			}
			.fondoGris {
				background-color: var(--color-gris-medio);
			}
			.fondoAmarillo {
				background-color: var(--color-amarillo-claro);
			}
			.fondoPrimario {
				background-color: var(--primary-color);
			}
			#leyenda {
				display: grid;
				font-size: var(--font-eader-h2-size);
				justify-self: center;
				width: 80%;
				padding-top: 1.5rem;
			}
			#items {
				grid-gap: 1rem !important;
				justify-items: center;
				padding: 0.9rem 0 0 0;
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
			.cuerpoNota {
				padding: 0 10vw 0 10vw !important;
				justify-self: flex-start;
				grid-gap: 0 !important;
			}
			*[hidden] {
				display: none;
			}

			#mybanner {
				width: 100%;
				height: 56vw;
			}
		`;
	}
	render() {
		if (this.banner && this.item && this.leyenda && this.titulo && this.menu) {
			return html`
				<div id="cuerpo">
					<div id="titulo" ?hidden="${!this.titulo[0] || this.titulo[0].titulo == ""}" style="background-image: url('${this.titulo[0] ? this.titulo[0].titulo : ""}');"></div>

					<myslider-screen id="mybanner" ?hidden="${!this.banner[0] || this.banner[0].banner == ""}" pagina=${this.current} .banners=${this.banner} current=${this.current}></myslider-screen>
					<div style="padding:1rem" ?hidden="${this.banner[0] && this.banner[0].banner != ""}"></div>

					${this.menu[0].nombre != ""
						? html`
								<div id="${this.menu[0].div}">
									${this.menu
										.filter((item) => {
											return item.tipo == this.current;
										})
										.map((item) => {
											return html`
												<div id="opc${item.id}" class="grid row opc ${item.clase}" .item=${item.goto} @click="${this.ir}">
													<div>${SVGS[item.imagen]}</div>
													<div class="opcTexto">${item.nombre}</div>
												</div>
											`;
										})}
								</div>
						  `
						: ""}
					${this.leyenda[0].leyenda != "" ? html` <div id="leyenda">${unsafeHTML(this.leyenda[0].leyenda)}</div>` : ""}
					<div id="opciones">
						<div id="items" class="grid row">
							${this.item
								.filter((item) => {
									return item.tipo == this.current;
								})
								.map((item, index) => {
									return html`
										<div class="grid row item0">
											<div class="grid column item blanco" .item="${item.id}" @click=${this.mostrar}>
												<div>${item.titulo}</div>
												<div id="mas${item.id}" class="mas">+</div>
											</div>
											<div id="cuerpoNota${item.id}" class="cuerpoNota" hidden>
												<div id="elCuerpo${item.id}">${unsafeHTML(item.cuerpo)}</div>
											</div>
										</div>
									`;
								})}
							<div style="padding:.4rem"></div>
						</div>
					</div>
				</div>
			`;
		} else {
			const es = "-sindicato-cultura-tv-moecra-salud-saludSeguridad-ivt-cine-adolecencia-adicciones-hogar-mujeres-arte-deportes-beneficios-turismo-".indexOf("-" + store.getState().screen.name + "-") != -1;
			if (es && (this.banner == 0 || this.item == 0 || this.leyenda == 0)) {
				return html`<msgnoconeccion-component @click="${this.atras}" texto="Haga click volver" style="cursor:pointer"></msgnoconeccion-component>; `;
			}
		}
	}
	atras() {
		store.dispatch(goHistoryPrev());
	}
	botonItem(que) {
		let usu = store.getState().autorizacion.usuario;
		let msg = "Nombre: " + usu.nombre + ".%0D%0A" + "Apellido: " + usu.apellido + ". %0D%0ADocumento: " + usu.documento;
		switch (que) {
			case "mujeres":
				location.href = "mailto:appuocra@gmail.com?cc=&subject=UOCRA%20Mujeres&body=" + msg;
				break;
			case "adicciones":
				location.href = "mailto:appuocra@gmail.com?cc=&subject=UOCRA%20Adicciones&body=" + msg;
				break;
			case "turismo":
				location.href = "mailto:appuocra@gmail.com?cc=&subject=UOCRA%20Turismo&body=" + msg;
				break;
			case "adolecencia":
				location.href = "mailto:appuocra@gmail.com?cc=&subject=UOCRA%20Adolescencia&body=" + msg;
				break;
			case "deportes":
				location.href = "mailto:appuocra@gmail.com?cc=&subject=UOCRA%20Deportes&body=" + msg;
				break;
			case "beneficiosJubilacion":
				location.href = "mailto:appuocra@gmail.com?cc=&subject=UOCRA%20Beneficios%20jubilatorios&body=" + msg;
				break;
			case "beneficiosSeguros":
				location.href = "mailto:appuocra@gmail.com?cc=&subject=UOCRA%20Seguro%20de%20vida&body=" + msg;
				break;
			case "beneficiosSepelios":
				location.href = "mailto:appuocra@gmail.com?cc=&subject=UOCRA%20Sepelios&body=" + msg;
				break;
			case "beneficiosSubsidios":
				location.href = "mailto:appuocra@gmail.com?cc=&subject=UOCRA%20Subsidios&body=" + msg;
				break;
			case "salud":
				location.href = "https://api.whatsapp.com/send?phone=+5491128803167&text=" + msg;
			case "saludCompartirPorWA":
				location.href = "https://api.whatsapp.com/send/?text=Hace+click+en+app.uocra.org+e+instala+appUOCRA&app_absent=0";
				//https://api.whatsapp.com/send/?text=Me+interesa+in+el+auto+que+vendeshttps://api.whatsapp.com/send/?text=Me+interesa+in+el+auto+que+vendes&app_absent=0
				break;
			case "tablasSalariales":
				window.open("https://www.uocra.org/?s=nuevas-escalas-salariales&lang=1", "_blank");
				break;
			case "saludSeguridad":
				window.open("https://www.uocra.org/?s=protocolos&lang=1", "_blank");
				break;
			case "beneficiosSegurosDocumentacion":
				window.open("https://www.uocra.org/pdf/SeguroVidaColectivo.pdf", "_blank");
				break;
			case "beneficiosSegurosAdicionales":
				window.open("https://www.uocra.org/pdf/SeguroVidaColectivo.pdf ", "_blank");
				break;
			default:
				store.dispatch(goTo(que));
				break;
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

	stateChanged(state, name) {
		if (name == CURRENT_TIMESTAMP && this.intervalo != 0) {
			clearInterval(this.intervalo);
			this.intervalo = 0;
		}
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-sindicato-cultura-tv-moecra-salud-saludSeguridad-ivt-cine-adolecencia-adicciones-hogar-mujeres-arte-deportes-beneficios-turismo-fundacion-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				if (!this.titulo) store.dispatch(getTitulo());
				if (!this.banner) store.dispatch(getBanners());
				if (!this.menu) store.dispatch(getMenues());
				if (!this.item) store.dispatch(getItems());
				if (!this.leyenda) store.dispatch(getLeyendas());

				if (this.menu && this.item && this.titulo && this.banner && this.leyenda) {
					this.actualizaArray();
				}
			}
		}

		if (name == MENUES_TIMESTAMP) {
			this.menu = state.menues.entities;
			if (this.item && this.titulo && this.banner && this.leyenda) {
				this.actualizaArray();
			}
		}
		if (name == ITEMS_TIMESTAMP) {
			this.item = state.items.entities;
			if (this.menu && this.titulo && this.banner && this.leyenda) {
				this.actualizaArray();
			}
		}
		if (name == TITULO_TIMESTAMP) {
			this.titulo = state.titulos.entities;
			if (this.item && this.menu && this.banner && this.leyenda) {
				this.actualizaArray();
			}
		}
		if (name == BANNERS_TIMESTAMP) {
			this.banner = state.banners.entities;
			if (this.item && this.titulo && this.menu && this.leyenda) {
				this.actualizaArray();
			}
		}
		if (name == LEYENDAS_TIMESTAMP) {
			this.leyenda = state.leyendas.entities;
			if (this.item && this.titulo && this.banner && this.menu) {
				this.actualizaArray();
			}
		}
		if (name == ITEMS_BOTONITEM) {
			this.botonItem(store.getState().items.botonItem.accion);
		}
		if (name == BANNERS_ERRORTIMESTAMP) {
			this.banner = 0;
			this.update();
		}
		if (name == ITEMS_ERRORTIMESTAMP) {
			this.item = 0;
			this.update();
		}
		if (name == LEYENDAS_ERRORTIMESTAMP) {
			this.leyenda = 0;
			this.update();
		}
	}

	actualizaArray() {
		var arr = store.getState().titulos.entities;
		this.titulo = arr.filter((a) => a.tipo == this.current);
		arr = store.getState().banners.entities;
		this.banner = arr.filter((a) => a.tipo == this.current);
		arr = store.getState().menues.entities;
		this.menu = arr.filter((a) => a.tipo == this.current);
		arr = store.getState().leyendas.entities;
		this.leyenda = arr.filter((a) => a.tipo == this.current);
		this.update();
	}
	ir(e) {
		if (e.currentTarget.item.toUpperCase().indexOf("HTTPS:") !== -1) {
			window.open(e.currentTarget.item, "_blank");
			//location.href = e.currentTarget.item;
		} else {
			store.dispatch(goTo(e.currentTarget.item));
		}
		if (e.currentTarget.item == 3 && this.current == "moecra") {
			store.dispatch(goTo(e.currentTarget.item));
		}
		if (e.currentTarget.item == 1 && this.current == "cemapsMapa") {
			store.dispatch(goTo("compras"));
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
				hasChanged(newValue, oldValue) {
					if (newValue != oldValue) {
						let r = 2;
					}
					return true;
				},
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
window.customElements.define("general-screen", generalScreen);

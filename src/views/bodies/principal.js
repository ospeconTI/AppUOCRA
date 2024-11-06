/** @format */

import { html, LitElement, css } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo, goHistoryPrev } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { menuActivar, showWarning, video } from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";
import { get as getNoticias, noticia as setNoticia } from "../../redux/noticias/actions";
import { msgNoConeccionComponent } from "../componentes/msgNoConeccion";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const NOTICIAS_TIMESTAMP = "noticias.timeStamp";
const NOTICIAS_ERRORTIMESTAMP = "noticias.errorTimeStamp";

export class principalScreen extends connect(store, NOTICIAS_TIMESTAMP, NOTICIAS_ERRORTIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.aplicacion = require("../../../assets/idiomas/aplicacion.json");
		this.principal = require("../../../assets/idiomas/principal.json");
		this.noticia = null;
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
				position: relative;
				width: 100vw;
				grid-gap: 0rem;
				/*grid-template-rows: 12% 88%;*/
				background-color: var(--color-blanco);
			}
			#titulo {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
				grid-template-rows: 1fr 1fr;
				width: 96vw;
				grid-gap: 0.4rem !important;
				align-items: center;
				justify-items: center;
				padding: 0.2rem o !important;
				background-color: rgba(255, 255, 255, 0.7);
				z-index: 100;
				position: absolute;
				top: 0;
				left: 0;
			}
			.icBoton {
				height: 2.8rem;
				width: 95%;
				padding: 0.4vw;
				border-radius: 0.5rem;
				color: var(--color-blanco);
				font-size: 0.5rem;
				grid-gap: 0 !important;
				justify-items: center;
				cursor: pointer;
			}
			#icGremio {
				background-color: var(--primary-color);
			}
			#icSalud {
				background-color: var(--color-verde-claro);
			}
			#icSST {
				background-color: var(--color-gris-medio);
			}
			#icCursos {
				background-color: var(--color-amarillo);
			}
			#icTeatro {
				background-color: var(--color-verde-oscuro);
			}
			#icAfiliate {
				background-color: var(--color-rojo-covid);
			}
			#icSalarial {
				background-color: var(--color-oro);
			}
			#icMutual {
				background-color: var(--color-amarillo-oscuro);
			}
			#icMas {
				grid-row-start: 1;
				grid-row-end: 3;
				height: 96%;
				align-content: center;
				background-color: var(--color-gris-oscuro);
			}

			svg {
				height: 1.8rem;
				width: 1.8rem;
				fill: white;
			}
			#masuocra svg {
				height: 1.3rem;
				width: 1.3rem;
			}
			#linea {
				color: var(--color-blanco);
				width: 90%;
			}
			#datos {
				/* puwe*/
				position: absolute;
				left: 3vw;

				height: 80vh;
				width: 90vw;
				overflow-x: hidden;
				overflow-y: auto;
				grid-gap: 0.3rem;
				background-color: var(--color-blanco);
			}
			#datos::-webkit-scrollbar {
				display: none;
			}
			.notaCabImg {
				width: 95%;
				height: 45vw;
				display: grid;
				position: relative;
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
				justify-self: center;
				border-radius: 0.4rem;
			}
			.notaCabTxt {
				color: var(--color-gris-oscuro);
				font-style: italic;
				justify-self: center;
				font-size: 1.2rem;
				-webkit-line-clamp: 4;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				text-align: justify;
				word-wrap: break-word;
			}
			.verMas {
				color: var(--color-gris-oscuro);
				font-size: 1.4vh !important;
				font-weight: bolder;
				cursor: pointer;
				text-align: right;
				align-self: self-end;
				padding-right: 1.5rem;
			}
			.notas {
				display: grid;
				grid-template-columns: auto 1fr;
				justify-self: center;
				padding: 0 !important;
				grid-gap: 0.5rem !important;
			}
			.notaDetImg {
				width: 18vw;
				height: 20vw;
				display: grid;
				position: relative;
				background-repeat: no-repeat;
				background-position: center;
				background-size: contain;
				justify-self: center;
				border-radius: 0.8rem;
			}
			.notaDetTxt {
				color: var(--color-gris-oscuro);
				justify-self: center;
				font-size: calc(var(--font-header-h1-menos-size) + 0.05rem);
				word-wrap: break-word;
				padding-right: 1.5rem;
			}
			.txtNota {
				display: grid;
				grid-template-rows: auto 1fr;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			*[hidden] {
				display: none !important;
			}
			.play {
				display: inline-block;
				position: absolute;
				top: calc(50% - 27px);
				left: calc(50% - 27px);
				width: 55px;
				height: 55px;
				border-radius: 50%;
				background-color: rgba(255, 255, 255, 0.8);
				cursor: pointer;
				z-index: 99;
			}
			.play svg {
				width: 56px;
				height: 56px;
				fill: black;
			}
			.playDetalle {
				display: inline-block;
				position: absolute;
				top: calc(50% - 17px);
				left: calc(50% - 17px);
				width: 35px;
				height: 35px;
				border-radius: 50%;
				background-color: rgba(255, 255, 255, 0.5);
				cursor: pointer;
				z-index: 99;
			}
			.playDetalle svg {
				width: 36px;
				height: 36px;
				fill: black;
			}
			.notaTit {
				color: var(--primary-color);
				font-size: 0.6rem;
			}
		`;
	}
	render() {
		if (this.noticia) {
			return html`
				<div id="cuerpo">
					<div id="titulo" class="grid column">
						<div id="icGremio" class="grid row icBoton" @click="${this.sindicato}">
							<div>${SVGS["MISINDICATO"]}</div>
							<div>MI SINDICATO</div>
						</div>
						<div id="icCursos" class="grid row icBoton" @click="${this.fundacion}">
							<div>${SVGS["CURSOS"]}</div>
							<div>CAPACITACION</div>
						</div>
						<div id="icAfiliate" class="grid row icBoton" @click="${this.afiliate}">
							<div>${SVGS["AFILIATE"]}</div>
							<div>AFILIATE YA</div>
						</div>
						<div id="icSST" class="grid row icBoton" @click="${this.sst}">
							<div>${SVGS["SEGURIDADBLANCO"]}</div>
							<div>SST</div>
						</div>
						<div id="icSalarial" class="grid row icBoton" @click="${this.tsalarial}">
							<div>${SVGS["GRILLA"]}</div>
							<div>T.SALARIALES</div>
						</div>
						<div id="icTeatro" class="grid row icBoton" @click="${this.cultura}">
							<div>${SVGS["TEATRO"]}</div>
							<div>TEATRO</div>
						</div>
						<div id="icSalud" class="grid row icBoton" @click="${this.salud}">
							<div>${SVGS["SALUD"]}</div>
							<div>SALUD</div>
						</div>
						<div id="icMutual" class="grid row icBoton" @click="${this.mutual}">
							<div>${SVGS["COMPRA"]}</div>
							<div>MUTUAL</div>
						</div>

						<div id="icMas" class="grid row icBoton" @click="${this.masUOCRA}">
							<div id="masuocra">${SVGS["MASUOCRA"]}</div>
							<div>${this.aplicacion[this.idioma].masuocra}</div>
						</div>
					</div>
					<div id="datos" class="grid row" style="">
						<div class="grid row" style="height:10vh"></div>
						${this.noticia.map((item, index) => {
							if (index == 0) {
								return html`
									<div class="grid row">
										<div class="notaCabImg" style="background-image: url('${item.imagen}')">
											<div ?hidden="${item.link == ""}" class="play" .item=${item} @click=${this.verLink}>${SVGS["PLAY"]}</div>
										</div>
										<div class="notaCabTxt">${unsafeHTML(item.copete)}</div>
										<div class="verMas" .item=${item} @click="${this.verMas}">${this.principal[this.idioma].verMas}</div>
									</div>
								`;
							} else {
								return html`
									<div>
										<hr id="linea" />
									</div>
									<div class="notas">
										<div class="notaDetImg" style="background-image: url('${item.imagen_chica}')">
											<div ?hidden="${item.link == ""}" class="playDetalle" .item=${item} @click=${this.verLink}>${SVGS["PLAY"]}</div>
										</div>
										<div class="txtNota">
											<div class="notaTit">${unsafeHTML(item.titulo)}</div>
											<div class="notaDetTxt">${unsafeHTML(item.copete)}</div>
											<div id="verMas" class="verMas" .item=${item} @click="${this.verMas}">${this.principal[this.idioma].verMas}</div>
										</div>
									</div>
								`;
							}
						})}
						<div style="padding:2rem;"></div>
					</div>
				</div>
			`;
		} else {
			if (this.current == "main" && this.noticia == 0) {
				return html`<msgnoconeccion-component @click="${this.refresh}" texto="Haga click para refrescar" style="cursor:pointer"></msgnoconeccion-component>; `;
			}
		}
	}
	refresh() {
		store.dispatch(goTo("main"));
	}
	removeTags(txt) {
		var rex = /(<([^>]+)>)/gi;
		txt = txt.replace(rex, "");
		return txt;
	}
	verLink(e) {
		//window.open("https://www.youtube.com/watch?v=" + e.currentTarget.item.link, "_blank");
		//<a href="intent://<URL>#Intent;scheme=http;package=com.android.chrome;end"></a>
		//window.open("intent://www.youtube.com/watch?v=" + e.currentTarget.item.link + "#Intent;scheme=https;package=com.android.chrome;end", "_blank");
		//location.href = "intent://www.youtube.com/watch?v=" + e.currentTarget.item.link + "#Intent;scheme=https;package=com.android.chrome;end";
		//window.location = "googlechrome://navigate?url=" + "https://www.youtube.com/watch?v=" + e.currentTarget.item.link;
		store.dispatch(video(e.currentTarget.item.link));
		store.dispatch(goTo("verVideo"));
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-main-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
				store.dispatch(getNoticias());
			}
		}
		if (name == NOTICIAS_TIMESTAMP) {
			this.noticia = state.noticias.entities.filter((a) => a.activo == 1);
			this.noticia = this.noticia.sort(function (a, b) {
				return a["orden"] > b["orden"] ? 1 : -1;
			});
			this.update();
		}
		if (name == NOTICIAS_ERRORTIMESTAMP) {
			this.noticia = 0;
			this.update();
		}
	}
	sindicato() {
		store.dispatch(goTo("sindicato"));
	}
	salud() {
		store.dispatch(goTo("salud"));
	}
	fundacion() {
		store.dispatch(goTo("fundacion"));
	}
	cultura() {
		store.dispatch(goTo("cultura"));
	}
	covid() {
		store.dispatch(goTo("covid"));
		//window.open("https://api.whatsapp.com/send?phone=+5491136623055&text=COVID");
	}
	afiliate() {
		store.dispatch(goTo("afiliacionSindical"));
	}
	sst() {
		store.dispatch(goTo("saludSeguridad"));
	}
	mutual() {
		store.dispatch(goTo("moecra"));
	}
	tsalarial() {
		window.open("https://www.uocra.org/?s=nuevas-escalas-salariales&lang=1", "_blank");
	}
	verMas(e) {
		store.dispatch(setNoticia(e.currentTarget.item));
		store.dispatch(goTo("noticiaDetalle"));
	}
	masUOCRA() {
		store.dispatch(menuActivar());
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
window.customElements.define("principal-screen", principalScreen);

/** @format */

import { html, LitElement, css } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goHistoryPrev, goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning, video } from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import { SVGS } from "../../../assets/icons/svgs";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class noticiaDetalleScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.noticia = null;
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
				display: grid;
				position: relative;
				background-repeat: no-repeat;
				background-position: center center;
				background-size: contain;
				align-self: self-start;
			}
			#tituloTexto {
				width: 80vw;
				align-self: self-start;
				font-size: var(--font-header-h1-size);
				font-weight: 900;
				padding-bottom: 1rem;
				justify-self: center;
			}
			#subTituloTexto {
				width: 80%;
				align-self: self-start;
				font-size: var(--font-header-h2-size);
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
				stroke: var(--color-verde-claro);
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
		`;
	}
	render() {
		if (this.noticia) {
			return html`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" style="background-image: url('${this.noticia.imagen}');">
						<div ?hidden="${this.noticia.link == ""}" class="play" .item=${this.noticia} @click=${this.verLink}>${SVGS["PLAY"]}</div>
					</div>
                    <div id="tituloTexto" class="grid">
                    ${unsafeHTML(this.noticia.copete)}
                    </div>
                    <div id="subTituloTexto">
                        ${unsafeHTML(this.noticia.detalle)}
                    </div>
                    </div>
                    <div style="padding-top:2rem"></div>
                </div>
            `;
		} else {
			if (this.current == "noticiaDetalle") {
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
			const SeMuestraEnUnasDeEstasPantallas = "-noticiaDetalle-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.noticia = state.noticias.noticia;
			this.update();
		}
	}
	laJu() {
		window.open("https://www.88552d2b491975945.temporary.link/moodle/login/index.php", "_blank");
		//location.href = "https://www.88552d2b491975945.temporary.link/moodle/login/index.php"
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
window.customElements.define("noticiadetalle-screen", noticiaDetalleScreen);

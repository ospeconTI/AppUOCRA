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
import { get as getBanners } from "../../redux/banners/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const BANNERS_TIMESTAMP = "banners.timeStamp";
const BANNERS_ERRORTIMESTAMP = "banners.errorTimeStamp";

export class gremioJuventudScreen extends connect(store, BANNERS_TIMESTAMP, BANNERS_ERRORTIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.current = "";
		this.idioma = store.getState().ui.idioma;
		this.banner = null;
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
				background-image: url("https://app.uocra.org/images/gremioJuventud.gif");
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
			#mybanner {
				width: 100%;
				height: 56vw;
			}
		`;
	}
	render() {
		if (this.banner) {
			return html`
				<div id="cuerpo" class="grid row">
					<myslider-screen id="mybanner" ?hidden="${!this.banner[0] || this.banner[0].banner == ""}" pagina=${this.current} .banners=${this.banner} current=${this.current}></myslider-screen>

					<div id="tituloTexto" class="grid">
						<div id="bullet">${SVGS["BULLET"]}</div>
						<div id="solicitud">Juventud UOCRA</div>
					</div>
					<div id="subTituloTexto">La Juventud UOCRA (LA JU) es una iniciativa que promueve la participación activa de las y los jóvenes constructores en la vida interna del sindicato. Además, este espacio busca fortalecer los lazos de pertenencia sindical, potenciar el compromiso militante y afianzar los valores de la cultura del trabajo y la justicia social.</div>
					<div id="tituloTexto" class="grid">
						<div id="bullet">${SVGS["BULLET"]}</div>
						<div id="solicitud">Programa Nacional de Formación Sindical a Distancia</div>
					</div>
					<div id="subTituloTexto">
						<p>El Programa Nacional de Formación Sindical a Distancia para Jóvenes de UOCRA es una propuesta de capacitación innovadora que busca acercar la formación sindical a más compañeros y compañeras, en todo el país.</p>
						<p>Desarrollamos una formación que se implementa a través de una plataforma virtual, a la que se puede acceder desde cualquier lugar y a través de cualquier dispositivo.</p>
						<p>El Programa brinda una amplia variedad de contenidos en formato audiovisual, para la formación de cuadros sindicales con una visión política-sindical integral.</p>
						<p>Además, resulta un lugar de encuentro entre compañeros y compañeras.</p>
						<p>Si estás inscripto en el curso de LA JU ingresá a la plataforma ahora</p>
					</div>
					<button btn1 @click=${this.laJu} style="width:10rem;justify-self: center;background-color:var(--color-amarillo);">PLATAFORMA</button>
					<div style="padding-top:2rem"></div>
				</div>
			`;
		} else {
			if (this.current == "gremioJuventud" && this.banner == 0) {
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
			const SeMuestraEnUnasDeEstasPantallas = "-gremioJuventud-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			if (state.banners.entities) {
				this.update();
			} else {
				store.dispatch(getBanners());
			}
		}
		if (name == BANNERS_TIMESTAMP) {
			this.banner = state.banners.entities.filter((a) => a.tipo == "gremioJuventud");
			this.update();
		}
		if (name == BANNERS_ERRORTIMESTAMP) {
			this.banner = 0;
			this.update();
		}
	}
	laJu() {
		window.open("https://www.88552d2b491975945.temporary.link/moodle/login/index.php", "_blank");
		//location.href = "https://www.88552d2b491975945.temporary.link/moodle/login/index.php"
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
window.customElements.define("gremiojuventud-screen", gremioJuventudScreen);

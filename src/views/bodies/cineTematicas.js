/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning} from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import {SVGS} from "../../../assets/icons/svgs";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class cineTematicasScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
        this.provincia = null
        this.localidad = null
        this.servicio = null
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
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://www.uocra.net/App/images/cineTematicas.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: .6rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h1-menos-size);
                justify-self: center;
                padding-bottom: .2rem;
            }
            #subsubTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h2-size);
                justify-self: center;
                padding-bottom: 0rem;
            }
            .miselect{
                width:60%;
                height:3rem; 
                justify-self: center;
                text-align: center;
            }
            .elselect{
                height:2.5rem; 
            }
            #botones{
                width:90%;
                justify-self: center;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
            #bullet1{
                align-self: flex-start;
            }
            #bullet1 svg{
                width:1rem;
                height:1rem;
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`;
	}
	render() {
        if (true) {
            return html`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div style="padding-top:1rem"></div>
                    <div id="subTituloTexto">
                        Las obras que participan del Festival narran siempre historias relacionadas al mundo del trabajo y de los trabajadores. Dentro de esta amplia variedad, a manera de ejemplo, se describen a contnuación los 4 ejes temáticos sobre los que se basa el espíritu de la programación de Construir TV y Construir Cine.
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Social</div>
                    </div>
                    <div id="subTituloTexto">
                        Pilar fundamental en la construcción del tejido productivo de un país, entendemos el aspecto social como la base sobre la cual deben construirse mejores sociedades. Temas como: solidaridad, conciencia ecológica, sustentabilidad y cuidado del planeta en que vivimos, derechos fundamentales en el lugar de trabajo, igualdad de genero, inclusión, trabajo infantil, trabajo forzoso trabajo migrante, discapacidad y trabajo, y protección social, entre otros temas, son temáticas válidas para postularse al concurso.                    
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Gente</div>
                    </div>
                    <div id="subTituloTexto">
                        Pilar fundamental en la construcción del tejido productivo de un país, entendemos el aspecto social como la base sobre la cual deben construirse mejores sociedades. Temas como: solidaridad, conciencia ecológica, sustentabilidad y cuidado del planeta en que vivimos, derechos fundamentales en el lugar de trabajo, igualdad de genero, inclusión, trabajo infantil, trabajo forzoso trabajo migrante, discapacidad y trabajo, y protección social, entre otros temas, son temáticas válidas para postularse al concurso.                    
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Educación</div>
                    </div>
                    <div id="subTituloTexto">
                        La formación contribuye a mejorar la competitividad y la calidad de vida. Contenidos pensados para educar desde el entretenimiento, formatos innovadores que apuestan a la educación como pieza fundamental del progreso individual y de la sociedad en su conjunto.
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Industria</div>
                    </div>
                    <div id="subTituloTexto">
                        La industria es el escenario de encuentro entre recursos tecnológicos y humanos. En este eje se evidencia el rol del emprendedorismo, la actividad empresarial, los avances científicos y tecnológicos, la participación del estado, el rol sindical y el capital humano. El desarrollo de la industria como camino hacia el futuro del trabajo.
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
			const SeMuestraEnUnasDeEstasPantallas = "-cineTematicas-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
	}
    salud(){
        store.dispatch(goTo("salud"));
    }
    cultura(){
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
window.customElements.define("cinetematicas-screen", cineTematicasScreen);

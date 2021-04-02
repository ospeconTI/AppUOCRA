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

export class cineNosotrosScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
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
                position: relative;
                width:100vw;
                height:auto;
                display:grid;
                padding:0;
            }
            #titulo iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
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
                align-self: flex-start;
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
            .play{
                display: inline-block;
                position: absolute;
                top: calc(50% - 27px);
                left: calc(50% - 27px);
                width: 55px;
                height: 55px;
                border-radius: 50%;
                background-color: var(--color-blanco);
                opacity:.6;
                cursor: pointer;
            }
            .play svg{
                width: 56px;
                height:56px;
            }
		`;
	}
	render() {
        if (this.current == "cineNosotros") {
            return html`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                        <img width="100%" height="auto" src="https://img.youtube.com/vi/REbRQNQ38dA/0.jpg">
                        <div class="play" @click=${this.ver}>${SVGS["PLAY"]}</div>
                    </div>
                    <div style="padding-top:1rem"></div>
                    <div id="subTituloTexto" class="grid" style="padding:0; grid-template-columns:auto 1fr">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">
                            <b>Construir Cine</b> es un Festival único en la región, y su propósito principal es el descubrimiento y promoción de películas que aborden temas universales que afectan a los trabajadores de todo el mundo, y que consideren el trabajo como una fuerza de cambio en la vida de las personas. Su <b>8va Edición</b>, tendrá lugar en Buenos Aires, <b>del 13 al 29 de mayo de 2021</b>.
                            <p>Consciente del <b>poder de las historias</b> para inspirar a las personas y permitirles ver el mundo desde otra perspectiva, Construir Cine asume el desafío de <b>unir el arte con el impacto social</b> y se propone como un ámbito destinado a difundir y premiar trabajos audiovisuales que busquen influir sobre la realidad socio laboral de la Argentina y el Mundo.</p>
                            <p>El Festival busca fomentar <b>la creatividad y apoyar la difusión</b> de historias acerca del trabajo y de los trabajadores, privilegiando el punto de vista de éstos sobre el mundo y sobre los temas de índole social que afectan su quehacer diario, la vida de sus familias y la realidad de la comunidad a la que pertenecen.</p>
                            <p><b>Construir Cine</b> es organizado por CONSTRUIR TV -la señal Televisiva de la Fundación UOCRA para la Educación de los Trabajadores Constructores, perteneciente a la Red Social UOCRA y forma parte de la Global Labor Film Festival.</p>
                        </div>
                    </div>
                    <div style="padding-top:2rem"></div>
                </div>
            `;
        }
	}
    ver(e){
        window.open("https://www.youtube.com/watch?v=REbRQNQ38dA")
        //location.href = "https://www.youtube.com/watch?v=REbRQNQ38dA"

    }
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-cineNosotros-".indexOf("-" + state.screen.name + "-") != -1;
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
window.customElements.define("cinenosotros-screen", cineNosotrosScreen);

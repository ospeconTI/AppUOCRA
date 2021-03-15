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

export class arteConcursosScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
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
                background-image: url("https://app.uocra.org/images/arteConcursos.gif");
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
                padding-bottom: .3rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h2-size);
                justify-self: center;
                padding-bottom: .3rem;
            }
            #bullet{
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
					<div id="subTituloTexto">
                        <p>Desde Construyendo ARTE creemos que estos escenarios de desarrollo de la creatividad deben ofrecer conocimientos y habilidades nuevas que estimulen a convivir en un marco de respeto, amor y mayor equidad, ámbitos de contención e inclusión fortalecedores del tejido social.</p>
                     </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Obra Artística</div>
                    </div>
                    <div id="subTituloTexto">
                        Una obra que debe ser una pieza escultórica, recorrible en las 3 dimensiones, que identifique conceptualmente la "cultura del trabajo". Especialmente, expresar la búsqueda de la promoción y el desarrollo cultural, educativo y social de los trabajadores y trabajadoras.
                    </div>

                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Montaje y Subasta</div>
                    </div>
                    <div id="subTituloTexto">
						<p>Una atractiva propuesta artística integradora con la participación de artistas basada en los siguientes pilares:</p>
						<p><li>Exposición</li></p>
						El montaje de una muestra que abordará los valores del trabajador constructor en el mundo del trabajo.
						<p><li>Subasta</li></p>
						La realización de una subasta a beneficio del Hogar Peldaños, perteneciente a la Fundación Construir Futuro.
						<li><p>Solidaridad</li></p>
						La Red Social UOCRA reivindica los conceptos de solidaridad, productividad y equidad social sobre la base de una metodología de acción dinámica transformadora y moderna.
                    </div>

                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Creación de Afiche</div>
                    </div>
                    <div id="subTituloTexto">
					Una convocatoria abierta para la comunidad artística nacional e internacional que incluye a creativos de diversas disciplinas, tales como la ilustración, el grafiti, el diseño gráfico, el diseño multimedia, la pintura, la fotografía, entre otros, con el objetivo de diseñar afiches para la campaña contra el trabajo infantil y el trabajo forzoso, de cara a la próxima IV Conferencia Mundial sobre la Erradicación Sostenida del Trabajo infantil que tendrá lugar en Buenos Aires, Argentina, durante el mes de noviembre del 2017.
                    </div>

					<div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Futuro del Trabajo</div>
                    </div>
                    <div id="subTituloTexto">
					El objetivo del certamen es examinar el futuro del trabajo utilizando el arte y, específicamente el medio audiovisual, para abrir el debate sobre cómo los cambios en la innovación tecnológica, la organización del trabajo y de la producción, la globalización, el cambio climático, y los cambios demográficos y migratorios serán factores decisivos en las formas de trabajo actuales.
                    </div>

					<div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Fotografía</div>
                    </div>
                    <div id="subTituloTexto">
					Concurso de fotografía sobre las 7 Iniciativas planteadas por OIT para cumplir eficazmente con su mandato de justicia Social y para visibilizar las diferentes situaciones de trabajo que atraviesan las mujeres, buscando mostrar los desafíos y las desigualdades.
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
			const SeMuestraEnUnasDeEstasPantallas = "-arteConcursos-".indexOf("-" + state.screen.name + "-") != -1;
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
window.customElements.define("arteconcursos-screen", arteConcursosScreen);

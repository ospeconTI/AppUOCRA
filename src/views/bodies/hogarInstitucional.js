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

export class hogarInstitucionalScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
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
                background-image: url("https://app.uocra.org/images/hogarInstitucional.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
                border-bottom-left-radius: .5rem;
                border-bottom-right-radius: .5rem;
                padding:0;
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
		`;
	}
	render() {
        if (true) {
            return html`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${SVGS["BULLET"]}</div>
                        <div id="solicitud">Carta del Pte. Honorario</div>
                    </div>
                    <div id="subTituloTexto">
                        <p>Cambiar la realidad de pobreza, marginalidad, exclusión y desamparo que padecen cientos de miles de niños y adolescentes en situación de riesgo social en nuestro país y que nos duele a todos, requiere de un compromiso colectivo de participación, de nuestra solidaridad, de nuestro aporte desinteresado en la búsqueda de un objetivo, nada sencillo pero profundamente necesario: que la igualdad de derechos y oportunidades para cada chico de nuestra argentina deje de ser una utopía y se transforme en una realidad efectiva.</p>
                        <p>Fue con esa premisa con la que, desde la UOCRA, decidimos crear la Fundación Construir Futuro. como un eslabón más en la extensa cadena solidaria constituida por instituciones y personas que, día a día, contribuyen con su vocación de servicio y su generosidad, a transformar la realidad de quienes más lo necesitan, de quienes resultan más vulnerables a la injusticia social: los niños.</p>
                        <p>A poco de iniciar su tarea, la Fundación Construir Futuro concretó su mayor obra: el Hogar Peldaños, destinado a albergar a chicos en situación de riesgo social.</p>
                        <p>La palabra hogar nos conecta con sentimientos y valores que contribuyen de manera decisiva a modelar nuestra personalidad y proyectar nuestro futuro.</p>
                        <p>Hogar significa mucho más que un espacio físico propio. Representa protección, contención, amor, educación, cuidado, valores, respeto, solidaridad, pertenencia. todo ello nos proponemos brindarle a los niños y niñas que habitan peldaños.</p>
                        <p>Los trabajadores constructores, a los que tengo la responsabilidad y el orgullo de representar, siempre decimos que tenemos en nuestras manos el arte de construir. Y con esta tarea que llevamos adelante a través de la Fundación Construir Futuro y su Hogar Peldaños, tenemos la convicción de que estamos trabajando en la construcción de un cambio.</p>
                        <p>Los grandes cambios, se construyen a partir de la suma cotidiana de pequeños cambios. Las grandes transformaciones, se logran con nuestra vocación de contribuir y participar de las pequeñas transformaciones.</p>
                        <p>Si nos comprometemos a tender nuestra mano solidaria. Si sentimos como propio el sufrimiento o la sonrisa de cada chico carente de oportunidades.</p>
                        <p>Si la fuerza del amor al prójimo logra vencer nuestros prejuicios y nuestra indiferencia, habremos dado el primer paso en el camino de transformar la realidad, el futuro y la vida de tantos chicos que sólo esperan una cosa de nosotros: que les demos la oportunidad de un futuro mejor.</p>
                        <p>Y es lo que nos hemos propuesto desde construir futuro.</p>
                        <p>Gerardo Martinez</p>
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
			const SeMuestraEnUnasDeEstasPantallas = "-hogarInstitucional-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
	}
    laJu(){
        //window.open("https://www.88552d2b491975945.temporary.link/moodle/login/index.php",'_blank');
        location.href = "https://www.88552d2b491975945.temporary.link/moodle/login/index.php"
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
window.customElements.define("hogarinstitucional-screen", hogarInstitucionalScreen);

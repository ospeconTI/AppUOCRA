/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning} from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import {SVGS} from "../../../assets/icons/svgs";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class saludSeguridadDenunciaScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
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
			${input}

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
                width: 90vw;
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 2rem 0 0 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
                display: grid;
                grid-template-columns: auto 1fr;
                justify-self: center;
			}
			.tituloImg {
                stroke: var(--color-gris);
                align-self: flex-start;
            }
            .tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h2-size);
                padding-bottom: 1rem;
            }
            .textoSolo {            
                font-size: var(--font-eader-h2-size);
                grid-column-start:1;
                grid-column-end:3;
                padding-top:2rem;
                color: var(--color-gris-medio);
            }
            #botones{
                width:15rem;
                height:3rem !important;
                justify-self: center;
                grid-column-start:1;
                grid-column-end:3;
            }
            #botonesImg svg{
                width: 1.5rem;
                height: 1.5rem;
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
            #bullet2 svg{
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
                    <div class="tituloImg">
                        <div id="bullet">${SVGS["BULLET"]}</div>                    
                    </div>
                    <div class="tituloTexto" >
                        Para realizar denuncias sobre condiciones de trabajo en una obra, llená el formulario:
                    </div>
                    <div class="tituloImg">
                        <div id="bullet2">${SVGS["BULLET"]}</div>                    
                    </div>
                    <div class="input">
                        <label id="lblClave1">Nombre y Apellido</label>
                        <input id="txtClave1" type="text">
                        <label id="lblErrorClave1" error oculto></label>
                    </div>
                    <div class="tituloImg">
                        <div id="bullet2">${SVGS["BULLET"]}</div>                    
                    </div>
                    <div class="input">
                        <label id="lblClave1" style="color:black">Teléfono</label>
                        <input id="txtClave1" type="text">
                        <label id="lblErrorClave1" error oculto></label>
                    </div>
                    <div class="tituloImg">
                        <div id="bullet2">${SVGS["BULLET"]}</div>                    
                    </div>
                    <div class="input">
                        <label id="lblClave1">E-mail</label>
                        <input id="txtClave1" type="text">
                        <label id="lblErrorClave1" error oculto></label>
                    </div>
                    <div class="tituloImg">
                        <div id="bullet2">${SVGS["BULLET"]}</div>                    
                    </div>
                    <div class="input">
                        <label id="lblClave1">Mensaje y obra en la que trabaja</label>
                        <input id="txtClave1" type="text">
                        <label id="lblErrorClave1" error oculto></label>
                    </div>
                    <div id="botones" class="grid">
				        <button btn1 class="btnVerMapa" @click=${this.telefono}>
                            <div class="grid column" style="justify-content:center;grid-gap:1rem">
                                <div id="botonesImg">
                                    ${SVGS["MAILENVIO"]}                        
                                </div>
                                <div>ENVIAR</div>
                            </div>
                        </button>
                    </div>
                    <div class="textoSolo" >
                        «El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326». 
                        Se deja constancia que tanto el objeto de la consulta que plantee para ser evacuada por este medio, así como también los datos que suministre con ese propósito, serán conservados y resguardados conforme lo establece la ley de habeas data N° 25326
                        «La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES, Órgano de Control de la Ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales».
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
			const SeMuestraEnUnasDeEstasPantallas = "-saludSeguridadDenuncia-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
	}
    telefono(){
        document.location.href = 'tel:0800-222-3871';
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
window.customElements.define("saludseguridaddenuncia-screen", saludSeguridadDenunciaScreen);

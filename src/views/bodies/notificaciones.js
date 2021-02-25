/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning} from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import {SVGS} from "../../../assets/icons/svgs";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class notificacionesScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
		this.notificaciones = require('../../../assets/idiomas/notificaciones.json');

        this.notificacion=[
            {id:1, titulo:"Llegaron los descuentos del verano",cuerpo:"Aprovecha de hasta 30% OFF.", fecha:"14-12-2020 18:01", link:"compras", linkDescripcion:"Ver todos los descuentos."},
            {id:2, titulo:"Nueva Franja Horaria Direc TV",cuerpo:"Ahora podés disfrutar de Construir TV de 14.30 a 18.30 hs. en el canal 729 de Direc TV", fecha:"14-12-2020 12:01", link:"", linkDescripcion:""},
            {id:3, titulo:"Abierta la inscripción",cuerpo:"Ya podés anotarte en los cursos de verano.", fecha:"12-12-2020 20:01", link:"", linkDescripcion:"Ver todos los cursos acá."},
            {id:4, titulo:"Capacidad Pulmonar",cuerpo:"Te contamos 4 técnicas para ampliar tu capacidad pulmonar", fecha:"12-12-2020 18:04", link:"", linkDescripcion:"Leer la nota."},
            {id:5, titulo:"Medidas de seguridad para trabajar en altura",cuerpo:"Te contamos todo lo que tenes que tener en cuenta", fecha:"12-12-2020 16:01", link:"", linkDescripcion:"Ver todas las medidas y regulaciones acá."},
        ]
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
                height:100%;
				grid-gap: 0;
				grid-auto-flow: row;
                background-color: var(--color-blanco);
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                padding: .8vh 0 .8vh 0;
                background-color: var(--color-gris-medio);
                color: var(--color-blanco);
                text-align: center;
                font-size: 3vh;
            }
            svg{
                height:6vh;
                width:6vh;
                fill: var(--color-gris-medio);
            }
            #notificaciones{
                grid-gap:.2vh;
            }
            .etiqueta{
                height: 100%;
                grid-gap: .2vh;
                grid-template-columns: 90% 10%;
            }
            .textos{
                grid-gap: .5vh;
            }
            .imagen{
            }
            .titulo{
                font-size: 2.6vh;
            }
            .cuerpo{
                font-size: 2.4vh;
                color: var(--color-gris-oscuro);
            }
            .link{
                font-size: 2vh;
                color: var(--color-gris-medio);
                padding-top:1vh;
                font-style: italic;
                cursor: pointer;
            }
            .fecha{
                font-size: 1.8vh;
                color: var(--color-gris-medio);
            }
            .linea{
                background-color: var(--color-gris);
                justify-self: center;
                width: 90%;
                height: 1px;
            }
		`;
	}
	render() {
		return html`
			<div id="cuerpo">
				<div id="titulo">${this.notificaciones[this.idioma].titulo}</div>
                <div id="notificaciones" class="grid row">
                    ${this.notificacion.map((item) => {
                    return html` 
                        <div class="grid column etiqueta">
                            <div class="grid row textos" .item="${item.Id}" @click=${this.mostrar}>
                                <div class="titulo">${item.titulo}</div>
                                <div class="cuerpo">${item.cuerpo}</div>
                                <div class="link" .item=${item} @click=${this.ir} >${item.linkDescripcion}</div>
                                <div class="fecha">${item.fecha}</div>
                            </div>
                            <div class="imagen">
                                ${SVGS["TRASH"]}
                            </div>
                        </div>
                        <div class="linea"></div>
                        `
                    })}
                </div>
			</div>
		`;
    }
    ir(e){
        let item = e.currentTarget.item;
        if (item.link != ""){
            store.dispatch(goTo(item.link));
        }
    }
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-notificaciones-".indexOf("-" + state.screen.name + "-") != -1;
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
window.customElements.define("notificaciones-screen", notificacionesScreen);

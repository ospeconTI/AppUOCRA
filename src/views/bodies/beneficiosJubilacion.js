/** @format */

import { html, LitElement, css } from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

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
export class beneficiosJubilacionScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;

        this.item = [
            {Id:1,titulo:"¿QUE ES EL APOYO JUBILATORIO?", cuerpo: "<p>El Apoyo Jubilatorio o Contribución Extraordinaria, es un monto que se abona por única vez a las personas jubiladas a partir de 1 enero de 2019.</p><p>Para ello, se toma como referencia la fecha de notificación de ANSES.</p>"},
            {Id:2,titulo:"REQUISITOS Y DOCUMENTACIÓN", cuerpo: "<p>Para acceder al beneficio se debe presentar el último recibo de haberes (donde conste el aporte sindical del 2,5%) y la comunicación de ANSES con la fecha de otorgamiento de la jubilación.</p><p>El beneficio se tramita a través del Departamento de Subsidios y Seguros de Vida de UOCRA.</p><p><b>*A las personas que soliciten este beneficio, se le requerirá la siguiente documentación:</b></p><p>-CBU emitido por el Banco<br>-Constancia de CUIL<br>-Fotocopia de DNI<br>-Teléfono de Contacto<br>-Correo Electrónico</p>"},
            {Id:5,titulo:"ESCRIBI TU CONSULTA", cuerpo:"<p>Hace click en el boton y envia por mail tu consulta</p><c-boton style='justify-self:center;' texto='ENVIAR MAIL' svg='JUBILACION' accion='beneficiosJubilacion' parametro=''></c-boton>"},
        ]
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
                background-image: url("https://app.uocra.org/images/hogar.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h1-menos-size);
                justify-self: center;
                padding-bottom: 1rem;
            }
            #items{
                grid-gap: 1rem !important;
                justify-items: center;
            }
            .item0{
                width: 100%;
                justify-items: center;
                grid-gap: 0 !important;
                padding: 0 !important;
            }
            .item{
                background-color: var(--color-gris-medio);
                height: 5vh;
                width: 80%;
                padding: 0 2vw 0 2vw !important;
                grid-gap: 0 !important;
                cursor: pointer;
                border-radius: .3rem;
            }
            .mas{
                text-align: right; 
            }
            .blanco{
                color: var(--color-blanco);
                fill: var(--color-blanco);
                stroke: transparent;
            }
            .cuerpoNota{
                padding: 0  10vw 0 10vw !important;
                justify-self: flex-start;
                grid-gap: 0 !important;
            }

		`;
	}
	render() {
        if (true) {
            return html`
                <div id="cuerpo" class="grid row">
                    <div style="padding:1rem"></div>
                    <div id="opciones">
                        <div id="items" class="grid row">
                            ${this.item.map((item) => {
                            return html` 
                                <div class="grid row item0">
                                    <div class="grid column item blanco" .item="${item.Id}" @click=${this.mostrar}>
                                        <div>${item.titulo}</div>
                                        <div id="mas${item.Id}" class="mas">+</div>
                                    </div>
                                    <div id="cuerpoNota${item.Id}" class="cuerpoNota" hidden>
                                        <div id="elCuerpo${item.Id}"></div>
                                        ${unsafeHTML(item.cuerpo)}            
                                    </div>                  
                                </div>
                            `
                            })}
                        </div>
                    </div>
                    <div style="padding-top:1rem"></div>
 
                </div>
            `;
        }
	}

    mostrar(e){
        let r = this.shadowRoot.querySelector("#" + "cuerpoNota" + e.currentTarget.item)
        let mas = this.shadowRoot.querySelector("#" + "mas" + e.currentTarget.item)
        if (r){
            if (!r.hasAttribute("hidden")){
                r.setAttribute("hidden","")
                mas.innerHTML="+"
            }else{
                [].forEach.call(this.shadowRoot.querySelectorAll(".cuerpoNota"), element => {
                    element.setAttribute("hidden", "")
                });
                [].forEach.call(this.shadowRoot.querySelectorAll(".mas"), element => {
                    element.innerHTML="+"
                });
                r.removeAttribute("hidden")
                mas.innerHTML="-"
            }
        }
    }
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-beneficiosJubilacion-".indexOf("-" + state.screen.name + "-") != -1;
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
window.customElements.define("beneficiosjubilacion-screen", beneficiosJubilacionScreen);

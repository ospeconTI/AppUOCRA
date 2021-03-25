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

export class beneficiosSepeliosScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;

        this.item = [
            {Id:1,titulo:"SERVICIO DE SEPELIO", cuerpo: "<p>Se trata de un servicio funerario básico realizado por empresas funerarias que mantienen convenio con UOCRA.</p><p>Este servicio cubre tanto al afiliado como a su grupo familiar.</p><p>Se reconoce el traslado del fallecido o integrantes del grupo familiar primario sólo cuando se realice al domicilio que figure en el D.N.I del fallecido (dentro del territorio nacional), emitiendo la certificación en la seccional de U.O.C.R.A que corresponda.</p>"},
            {Id:3,titulo:"REINTEGRO POR SEPELIO", cuerpo: "<p>El sindicato realiza un re-integro por gastos de servicio funerario en el caso que se contrate una empresa no conveniada por el servicio funerario de la UOCRA.</p><p>El reintegro se otorga de acuerdo a montos máximos establecidos. Los gastos por encima de estos montos corren por cuenta de la familia.</p><p>La cobertura alcanza al afiliado y su grupo familiar en caso de fallecimiento (esposa e hijos).</p>"},
            {Id:2,titulo:"REQUISITOS Y DOCUMENTACIÓN", cuerpo: "<p><b>Para Servicio de Sepelio</b></p><p>Ante un fallecimiento de afiliado o miembro del grupo familiar, debe acercarse un familiar del fallecido a la seccional de UOCRA correspondiente y solicitar la Certificación que habilita a realizar el Servicio de Sepelio.</p><p>Se requiere para tramitar la Certificación:</p><p>Recibos de sueldo del titular que demuestren dos meses de antigüedad en la empresa que trabajaba, con descuento cuota sindical (2,5%).</p><p><b>Para Reintegro de Sepelio</b></p>Para solicitar el re-integro por servicio de sepelio prestado por empresa no conveniada con la UOCRA, se debe presentar:</p><p><li>Factura original del servicio de sepelio contratado.</li><li>Fotocopia 4 últimos recibos de sueldo con descuento cuota sindical (2,5%).</li><li>Fotocopia de Certificado de Defunción.</li><li>Fotocopia del D.N.I de la persona que figura en la factura.</li></p><p><b>*A las personas que soliciten este beneficio, se le requerirá la siguiente documentación:</b></p><p>-CBU emitido por el Banco<br>-Constancia de CUIL<br>-Fotocopia de DNI<br>-Teléfono de Contacto<br>-Correo Electrónico</p>"},
            {Id:4,titulo:"¿DÓNDE TRAMITAR UN SUBSIDIO?", cuerpo: "<p>En caso de consultas sobre el Servicio de Sepelio y el Reintegro por Sepelios, podés:</p><p>Acercarte a las oficinas del Departamento de Subsidios y Seguros de Vida: Avenida Belgrano 1870, - 3er Piso - Ciudad Autónoma de Buenos Aires.</p><p>Comunicarte por Teléfono: 4384-7141/51 - Internos 3403 o 3404 (Tel. /fax: Interno 3403)</p><p>Los Horarios de atención son: Lunes a Viernes de 9 a 17:30hs.</p>"},
            {Id:5,titulo:"ESCRIBI TU CONSULTA", cuerpo:"<p>Hace click en el boton y envia por mail tu consulta</p><c-boton style='justify-self:center;' texto='ENVIAR MAIL' svg='SEPELIOS' accion='beneficiosSepelios' parametro=''></c-boton>"},
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
			const SeMuestraEnUnasDeEstasPantallas = "-beneficiosSepelios-".indexOf("-" + state.screen.name + "-") != -1;
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
window.customElements.define("beneficiossepelios-screen", beneficiosSepeliosScreen);

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
import {
    CENTROMEDICO,
    SALUD,
    TV,
    URGENCIAS,
    TURNOS,
    FARMACIA,
    TEATRO
} from "../../../assets/icons/svgs";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class comprasScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.numero = 1
        this.salud=[
            {Id:"1", titulo:"MODELO DE ATENCIÓN", cuerpo: "<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"2", titulo:"PLAN MATERNO INFANTIL", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"3", titulo:"AFILIACIONES", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"4", titulo:"SANATORIO FRANCHÍN", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
        ]
        this.productos=[
            {Id:"1", producto:"Budin Marmolado", imagen: "https://app.uocra.org/images/pBudinMarmolado.gif", presentacion: "200 gr.", precio: "$93,55-"},
            {Id:"2", producto:"Magdalenas Marmoladas", imagen: "https://app.uocra.org/images/pMagdalenasMarmoladas.gif", presentacion: "225 gr.", precio: "$106,05-"},
            {Id:"3", producto:"Magdalenas Vainilla", imagen: "https://app.uocra.org/images/pMagdalenasVainilla.gif", presentacion: "225 gr.", precio: "$98,50-"},
            {Id:"4", producto:"Magdalena Vainilla Dulce De Leche", imagen: "https://app.uocra.org/images/pMagdalenaVainillaDulceDeLeche.gif", presentacion: "1 unidad - 32 gr.", precio: "$121,40-"},
            {Id:"5", producto:"Pan Artesano Original", imagen: "https://app.uocra.org/images/pPanArtesano.gif", presentacion: "500 gr.", precio: "$214,20-"},
            {Id:"6", producto:"Pan Blanco Familiar", imagen: "https://app.uocra.org/images/pPanBlancoFamiliar.gif", presentacion: "550 gr.", precio: "$192,00-"},
            {Id:"7", producto:"Rapidita Clasicas", imagen: "https://app.uocra.org/images/pRapiditaClasicas.gif", presentacion: "10 Unidades - 275 gr.", precio: "$100,00-"},
            {Id:"8", producto:"Rapidita Integrales", imagen: "https://app.uocra.org/images/pRapiditaIntegral.gif", presentacion: "10 Unidades - 275 gr.", precio: "$100,00-"},
            {Id:"9", producto:"Rapidita Ligth", imagen: "https://app.uocra.org/images/pRapiditaLigth.gif", presentacion: "10 Unidades - 275 gr.", precio: "$108,00-"},
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
                background-color: var(--color-blanco) !important;
                overflow: hidden;
                padding: 0 !important;
                overflow-x: hidden;
                overflow-y: auto;
                grid-gap: 1rem;
			}
			:host([hidden]) {
				display: none;
			}
			#titulo {
                width:100%;
                height:51vw;
                margin-top: 1vh;
                background-image: url("https://app.uocra.org/images/bimboBanner.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
             }
            #datos{
                grid-gap: 0;
                padding: 0;
                width: 95vw;
                height: auto;
                grid-template-columns: 1.4fr 3fr;
                background-color: var(--color-gris-medio-claro);
                border-radius: .5rem;
                justify-self: center;
                box-shadow: var(--shadow-elevation-2-box);
            }
            #imagen{
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
				background-position: center center ;
                background-size: contain ;
            }
            #detalle{
                height: 100%;
                grid-gap: .5vh;
                align-content: center;
            }
            #producto{
                font-size: 2.5vh;
                font-weight: bolder;
            }
            #presentacion{
                font-size: 2.5vh;
                font-weight: normal;
            }
            #precio{
                margin-top:.5vh;
                font-size: 2.8vh;
                font-weight: bold;               
            }
            #cantidad{
                justify-content: left;
                grid-gap: 2vw;
                padding:0;
                font-size: 2vh;
                font-weight: bold;
            }
            .cantidadTotal{
                font-size: 3vh;
                font-weight: bold;
             }
            .cantidadMas{
                height: 100%;
                width: 1.4rem;
                font-size: 2.5vh;
            }
            #seleccion{
                padding:0;
                grid-gap:0; 
            }
            #botonComprar{
                font-size: 1.8vh;
                justify-self: flex-end;
            }
		`;
	}
	render() {
		return html`
			<div id="cabecera">
                <div id="titulo"></div>
            </div>
            ${this.productos.map((item) => {
                return html`
                    <div id="datos" class="grid">
                        <div id="imagen" style="background-image: url('${item.imagen}')"></div>
                        <div id="detalle" class="grid row">
                            <div id="producto">${item.producto}</div>
                            <div id="presentacion">${item.presentacion}</div>
                            <div id="precio">${item.precio}</div>
                            <div id="seleccion" class="grid column">
                                <div id="cantidad" class="grid column">
                                    <button btn1 .item="${'cantidadTotal' + item.Id}" class="cantidadMas" @click="${this.cantidad}">-</button>
                                    <div id="${'cantidadTotal' + item.Id}" class="cantidadTotal">0</div>
                                    <button btn1 .item="${'cantidadTotal' + item.Id}" class="cantidadMas" @click="${this.cantidad}">+</button>
                                </div>
                                <button id="botonComprar" btn1 @click="${this.volver}">COMPRAR</button>
                            </div>
                        </div>
                    </div>

                `
            })}
		`;
    }
    cantidad(e){
        let opcion = e.currentTarget.innerHTML
        let c = parseInt(this.shadowRoot.querySelector("#" + e.currentTarget.item).innerHTML)
        if (opcion == "+"){
            c = c + 1
        }else{
            if (c > 0){
                c = c - 1
            }
        }
        this.shadowRoot.querySelector("#" + e.currentTarget.item).innerHTML = c
    }
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-compras-".indexOf("-" + state.screen.name + "-") != -1;
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
window.customElements.define("compras-screen", comprasScreen);

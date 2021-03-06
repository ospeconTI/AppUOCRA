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
    EMPRESA,
    CARTILLA
} from "../../../assets/icons/svgs";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class saludScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.numero = 1
        this.menu=[
            {id:1, nombre:"CARTILLA MÉDICA",imagen:CARTILLA, clase:"opc1 blanco fondoVerde"},
            {id:2, nombre:"TURNOS",imagen:TURNOS, clase:"opc2 blanco fondoGris"},
            {id:3, nombre:"SANATORIO FRANCHIN",imagen:CENTROMEDICO, clase:"opc2 blanco fondoAmarillo"},
            {id:4, nombre:"URGENCIAS",imagen:URGENCIAS, clase:"opc3 blanco fondoPrimario"},
        ]
        this.salud=[
            {Id:"1", titulo:"MODELO DE ATENCIÓN", cuerpo: "<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"2", titulo:"PLAN MATERNO INFANTIL", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"3", titulo:"AFILIACIONES", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"4", titulo:"SANATORIO FRANCHÍN", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
        ]

        this.cc = ""
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
				grid-gap: 3vh;
				grid-auto-flow: row;
                background-color: var(--color-blanco);
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:12vh;
                background-image: url("https://app.uocra.org/images/construirsalud.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: 40% ;
            }
            svg{
                height:8vh;
                width:8vh;
            }
            #datos{
                display: grid;
                grid-template-rows: 15vh 12vh 15vh;
                grid-template-columns: 17vh 17vh;
                grid-gap: 2vh;
                justify-self: center;
            }
            .opc{
                padding: 0 !important;
                border-radius: 1rem;
                justify-items: center;
                text-align: center;
                align-content: center;
                font-size: 2vh;
            }
            .opc1{
                grid-row-start:1;
                grid-row-end:3;
                width: 100%;
                height: 100%;
            }
            .opc2{
                width: 100%;
                height: 100%;
            }
            .opc3{
                grid-row-start:2;
                grid-row-end:4;                
                width: 100%;
                height: 100%;
            }
            .opcTexto{
                padding: 0 2vw 0 2vw;
            }
            .blanco{
                color: var(--color-blanco);
                fill: var(--color-blanco);
                stroke: transparent;
            }
            .negro{
                color: var(--color-negro);
                fill: transparent;
                stroke: var(--color-gris-oscuro);
            }
            .fondoVerde{
                background-color:var(--color-verde-claro);
            }
            .fondoGris{
                background-color:var(--color-gris-medio);
            }
            .fondoAmarillo{
                background-color:var(--color-amarillo-claro);
            }
            .fondoPrimario{
                background-color:var(--primary-color);
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
            .cuerpoNota{
                padding: 0  2vw 0 7vw !important;
                justify-self: flex-start;
                grid-gap: 0 !important;
            }
            *[hidden] {
                display: none;
            }
		`;
	}
	render() {
		return html`
			<div id="cuerpo">
				<div id="titulo">
                </div>

				<div id="datos">
                    ${this.menu.map((item) => {
                        return html` 
                            <div id="opc${item.id}" class="grid row opc ${item.clase}" .item=${item} @click=${this.ir}>
                                <div>${item.imagen}</div>
                                <div class="opcTexto">${item.nombre}</div>
                            </div>
                        `
                    })}
                </div>

                <div id="opciones">
                    <div id="items" class="grid row">
                    ${this.salud.map((item) => {
                    return html` 
                        <div class="grid row item0">
                            <div class="grid column item blanco" .item="${item.Id}" @click=${this.mostrar}>
                                <div>${item.titulo}</div>
                                <div id="mas${item.Id}" class="mas">+</div>
                            </div>
                            <div id="cuerpoNota${item.Id}" class="cuerpoNota" hidden>
                                <div id="elCuerpo${item.Id}"></div>
                            </div>
                        </div>
                        ${this.elCuerpo(item.Id , item.cuerpo)}
                        ` 
                    })}
                    </div>
                </div>
			</div>
		`;
    }
    ir(e){
        if (e.currentTarget.item.id == 1 && this.current == "salud"){
            store.dispatch(goTo("cemapsMapa"));
        }
    }
    mostrar(e){
        let r = this.shadowRoot.querySelector("#" + "cuerpoNota" +e.currentTarget.item)
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
    elCuerpo(id,cuerpo){
        let div = this.shadowRoot.querySelector("#elCuerpo" + id)
        if (div){
            div.outerHTML = cuerpo
        }
     }
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-salud1-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}

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
window.customElements.define("salud-screen", saludScreen);

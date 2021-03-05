/** @format */

import { html, LitElement, css } from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

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
const TITULO_TIMESTAMP = "titulos.timeStamp";
const BANNERS_TIMESTAMP = "banners.timeStamp";
const MENUES_TIMESTAMP = "menues.timeStamp";
const ITEMS_TIMESTAMP = "items.timeStamp";
const LEYENDAS_TIMESTAMP = "leyendas.timeStamp";

export class generalScreen extends connect(store, LEYENDAS_TIMESTAMP, MENUES_TIMESTAMP, BANNERS_TIMESTAMP, ITEMS_TIMESTAMP, TITULO_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.numero = 1
        this.url = "https://www.uocra.net/App/images/"
        this.titulo = null
        this.banner = null
        this.menu = null
        this.item = null 
        this.leyenda = null 
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
                align-content: flex-start;
			}
			#titulo {
                width:100%;
                height:7vh;
                margin: 1vh 0 1vh 0;
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: contain ;
            }
            #banner {
                width:100%;
                height:27vh;
				background-repeat: no-repeat;
				background-position: top center ;
                background-size: cover ;
                border-bottom-left-radius: 1rem;
                border-bottom-right-radius: 1rem;
            }
            svg{
                height:5vh;
                width:5vh;
            }
            #datos{
                display: grid;
                grid-template-rows: 10vh 4vh 10vh;
                grid-template-columns: 38vw 38vw;
                grid-gap: 2vh;
                justify-self: center;
                padding: 2vh 0 2vh 0;
            }
            #datos2{
                display: grid;
                grid-template-rows: 7vh;
                grid-template-columns: 38vw 38vw;
                grid-gap: 2vh;
                justify-self: center;
                padding: 2vh 0 2vh 0;
            }
            .opc{
                padding: 0 !important;
                border-radius: 1rem;
                justify-items: center;
                text-align: center;
                align-content: center;
                font-size: 2vh;
                cursor: pointer;
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
            .opc21{
                width: 100%;
                height: 100%;
            }
            .opc22{
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
            #leyenda{
                display: grid;
                font-size: var(--font-eader-h2-size);
                justify-self: center;
                width: 80%;
                padding-top: 1.5rem;
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
		if (this.titulo) { return html`
			<div id="cuerpo">
                ${this.titulo[0].titulo != "" ? 
                    html`
                    <div id="titulo" style="background-image: url('${this.titulo[0].titulo}');">
                    </div>`
                    : '' 
                }
                ${this.banner[0].banner != "" ? 
                    html`
                    <div id="banner" style="background-image: url('${this.banner[0].banner}');">
                    </div>`
                    : '' 
                }
                ${this.menu[0].nombre != "" ? 
                    html`
				<div id="${this.menu[0].div}">
                    ${this.menu.filter(item => { return item.tipo == this.current }).map((item) => {
                        return html` 
                            <div id="opc${item.id}" class="grid row opc ${item.clase}" .item=${item.goto} @click="${this.ir}">
                                <div>${SVGS[item.imagen]}</div>
                                <div class="opcTexto">${item.nombre}</div>
                            </div>
                        `
                    })}
                </div>
                `
                : ''
                }
                ${this.leyenda[0].leyenda != "" ? 
                    html`
                    <div id="leyenda">
                        ${unsafeHTML(this.leyenda[0].leyenda)}
                    </div>`
                    : '' 
                }
                <div id="opciones">
                    <div id="items" class="grid row">
                        ${this.item.filter(item => { return item.tipo == this.current }).map((item) => {
                        return html` 
                            <div class="grid row item0">
                                <div class="grid column item blanco" .item="${item.Id}" @click=${this.mostrar}>
                                    <div>${item.titulo}</div>
                                    <div id="mas${item.Id}" class="mas">+</div>
                                </div>
                                <div id="cuerpoNota${item.Id}" class="cuerpoNota" hidden>
                                    <div id="elCuerpo${item.Id}"></div>
                                    ${this.elCuerpo(item.Id , item.cuerpo)}            
                                </div>                  
                            </div>
                            `
                        })}
                    </div>
                </div>
            </div>
        `;
        }

    }
    elCuerpo(id,cuerpo){
        let div = this.shadowRoot.querySelector("#elCuerpo" + id)
        if (div){
            div.outerHTML = cuerpo
        }
    }
    ir(e){
        if (e.currentTarget.item.toUpperCase().indexOf("HTTPS:") !== -1){
            window.open(e.currentTarget.item,'_blank');
        }else{
            store.dispatch(goTo(e.currentTarget.item));
        }
        if (e.currentTarget.item == 3 && this.current == "moecra"){
            store.dispatch(goTo(e.currentTarget.item));
        }
        if (e.currentTarget.item == 1 && this.current == "cemapsMapa"){
            store.dispatch(goTo("compras"));
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
			const SeMuestraEnUnasDeEstasPantallas = "-sindicato-cultura-tv-moecra-salud-saludSeguridad-ivt-cine-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
                this.hidden = false;
                //store.dispatch(getTitulo());
                if (this.titulo){
                    let arr = state.titulos.entities;
                    this.titulo = arr.filter(a => a.tipo == this.current);        
                }
                if (this.banner){
                    let arr = state.banners.entities;
                    this.banner = arr.filter(a => a.tipo == this.current);        
                }
                if (this.menu){
                    let arr = state.menues.entities;
                    this.menu = arr.filter(a => a.tipo == this.current);        
                }
                if (this.leyenda){
                    let arr = state.leyendas.entities;
                    this.leyenda = arr.filter(a => a.tipo == this.current);        
                }
                this.update();
                this.update(); // NO BORRAR,  se necesitan
			}
        }

        if (name == MENUES_TIMESTAMP) {
            this.menu = state.menues.entities;
        }
        if (name == ITEMS_TIMESTAMP) {
            this.item = state.items.entities;
		}
        if (name == TITULO_TIMESTAMP) {
            this.titulo = state.titulos.entities;
        }
        if (name == BANNERS_TIMESTAMP) {
            this.banner = state.banners.entities;
        }
        if (name == LEYENDAS_TIMESTAMP) {
            this.leyenda = state.leyendas.entities;
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
window.customElements.define("general-screen", generalScreen);

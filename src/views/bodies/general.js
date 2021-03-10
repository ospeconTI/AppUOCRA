/** @format */

import { html, LitElement, css } from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo, goHistoryPrev } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning} from "../../redux/ui/actions";
import { button } from "../css/button";
import { input } from "../css/input";
import { gridLayout } from "../css/gridLayout";
import {SVGS} from "../../../assets/icons/svgs";
import {get as getTitulo} from "../../redux/titulos/actions"
import {get as getBanners} from "../../redux/banners/actions"
import {get as getMenues} from "../../redux/menues/actions"
import {get as getItems} from "../../redux/items/actions"
import {get as getLeyendas} from "../../redux/leyendas/actions"

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const CURRENT_TIMESTAMP = "screen.timeStamp";

const TITULO_TIMESTAMP = "titulos.timeStamp";
const TITULO_ERRORTIMESTAMP = "titulos.errorTimeStamp";
const BANNERS_TIMESTAMP = "banners.timeStamp";
const BANNERS_ERRORTIMESTAMP = "banners.errorTimeStamp";
const MENUES_TIMESTAMP = "menues.timeStamp";
const MENUES_ERRORTIMESTAMP = "menues.errorTimeStamp";
const ITEMS_TIMESTAMP = "items.timeStamp";
const ITEMS_ERRORTIMESTAMP = "items.errorTimeStamp";
const LEYENDAS_TIMESTAMP = "leyendas.timeStamp";
const LEYENDAS_ERRORTIMESTAMP = "leyendas.errorTimeStamp";



export class generalScreen extends connect(store, MENUES_ERRORTIMESTAMP, ITEMS_ERRORTIMESTAMP, LEYENDAS_ERRORTIMESTAMP, TITULO_ERRORTIMESTAMP, BANNERS_ERRORTIMESTAMP,CURRENT_TIMESTAMP, LEYENDAS_TIMESTAMP, MENUES_TIMESTAMP, BANNERS_TIMESTAMP, ITEMS_TIMESTAMP, TITULO_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.numero = 1
        this.url = "https://app.uocra.org/images/"
        this.titulo = null
        this.banner = null
        this.menu = null
        this.item = null 
        this.leyenda = null 
        this.intervalo = 0;
        this.slideIndex = 0;

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
                height:4.5vh;
                width:4.5vh;
            }
            #datos{
                display: grid;
                grid-template-rows: 10vh 4vh 10vh;
                grid-template-columns: 38vw 38vw;
                grid-gap: 2vh;
                justify-self: center;
                padding: 0;
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
                font-size: 1.8vh;
                cursor: pointer;
                grid-gap: 1px !important;
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
                font-size: 2vh;
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
                padding: 0  10vw 0 10vw !important;
                justify-self: flex-start;
                grid-gap: 0 !important;
            }
            *[hidden] {
                display: none;
            }


            .mySlides {display: none;}
            /* Slideshow container */
            .slideshow-container {
            position: relative;
            margin: auto;
            }
            /* Fading animation */
            .fade {
            -webkit-animation-name: fade;
            -webkit-animation-duration: 1.5s;
            animation-name: fade;
            animation-duration: 1.5s;
            }
            @-webkit-keyframes fade {
                from {opacity: .4} 
                to {opacity: 1}
            }

            @keyframes fade {
                from {opacity: .4} 
                to {opacity: 1}
            }
            /* The dots/bullets/indicators */
            .dot {
                height: 10px;
                width: 10px;
                margin: 0 2px;
                background-color: #bbb;
                border-radius: 50%;
                display: inline-block;
                transition: background-color 0.6s ease;
            }
            .active {
                background-color: #717171;
            }
		`;
	}
	render() {
		if (this.titulo && this.leyenda && this.banner && this.item && this.menu) { return html`
			<div id="cuerpo">
                ${this.titulo[0].titulo != "" ? 
                    html`
                    <div id="titulo" style="background-image: url('${this.titulo[0].titulo}');">
                    </div>`
                    : '' 
                }
                ${this.banner[0].banner != "" ? 
                    this.banner.map((item) => {
                        return html` 
                            <div id="banner" class="mySlides fade" style="background-image: url('');">
                                <img src="${item.banner}" style="width:100%;max-height:27vh;">
                            </div>
                        `
                    })                                    
                    : '' 
                }
                    <div style="text-align:center;height:20px;width:100%" >
                    ${this.banner.length > 1 ? 
                            this.banner.map((item) => {
                                return html `
                                    <span class="dot"></span> 
                                `
                            })                                  
                        : '' 
                    }
                </div>  

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
                        ${this.item.filter(item => { return item.tipo == this.current }).map((item,index) => {
                        return html` 
                            <div class="grid row item0">
                                <div class="grid column item blanco" .item="${item.Id}" @click=${this.mostrar}>
                                    <div>${item.titulo}</div>
                                    <div id="mas${item.Id}" class="mas">+</div>
                                </div>
                                <div id="cuerpoNota${item.Id}" class="cuerpoNota" hidden>
                                    <div id="elCuerpo${item.Id}">
                                        ${unsafeHTML(item.cuerpo)}    
                                    </div>
                                </div>                  
                            </div>
                            `
                        })}
                    </div>
                </div>
            </div>
        `;
        }else{
            const es = "-sindicato-cultura-tv-moecra-salud-saludSeguridad-ivt-cine-adolecencia-adicciones-hogar-mujeres-arte-deportes-beneficios-".indexOf("-" + store.getState().screen.name + "-") != -1;
            if (es){
                return html` 
                    <div class="grid row" style="background-color:var(--primary-color);color:white;align-content: center;text-align: center;border:1px solid white;cursor:point" @click=${this.atras}>
                        <div style="font-size:6vw;font-weight: 900;">Error de comexíon</div>
                        <div style="font-size:4vw;">Verifique su conección de datos</div>
                        <div style="font-size:3vw;">Click para continuar</div>
                    </div>
                `
            }
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
        if (name == CURRENT_TIMESTAMP && this.intervalo != 0){
            clearInterval(this.intervalo);
            this.intervalo=0;
        }
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-sindicato-cultura-tv-moecra-salud-saludSeguridad-ivt-cine-adolecencia-adicciones-hogar-mujeres-arte-deportes-beneficios-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
                this.hidden = false;
                if (!this.titulo) store.dispatch(getTitulo())
                if (!this.banner) store.dispatch(getBanners())
                if (!this.menu) store.dispatch(getMenues())
                if (!this.item) store.dispatch(getItems())
                if (!this.leyenda) store.dispatch(getLeyendas())

                if (this.intervalo == 0){
                    if (this.shadowRoot.querySelectorAll(".mySlides").length>0){
                        this.shadowRoot.querySelectorAll(".mySlides")[0].style.display = "grid";
                    }
                    if (this.shadowRoot.querySelectorAll(".dot").length>0){
                        this.shadowRoot.querySelectorAll(".dot")[0].className += " active";
                    }
                }
                if (this.banner.length > 1 && this.intervalo == 0){ 
                    this.intervalo = setInterval(() => {
                        var i;
                        let slides = this.shadowRoot.querySelectorAll(".mySlides")
                        var dots = this.shadowRoot.querySelectorAll(".dot");
                        for (i = 0; i < slides.length; i++) {
                            slides[i].style.display = "none";  
                        }
                        this.slideIndex++;
                        if (this.slideIndex >= slides.length) {this.slideIndex = 0}    
                        for (i = 0; i < dots.length; i++) {
                            dots[i].className = dots[i].className.replace(" active", "");
                        }
                        slides[this.slideIndex].style.display = "grid";  
                        dots[this.slideIndex].className += " active";

                    }, 5000);
                }
                if (this.menu && this.item && this.titulo && this.banner && this.leyenda) { 
                    this.actualizaArray();
                }
            }
        }

        if (name == MENUES_TIMESTAMP) {
            this.menu = state.menues.entities;
            if (this.item && this.titulo && this.banner && this.leyenda) { 
                this.actualizaArray();
            }
        }
        if (name == ITEMS_TIMESTAMP) {
            this.item = state.items.entities;
            if (this.menu && this.titulo && this.banner && this.leyenda) { 
                this.actualizaArray(); 
            }
		}
        if (name == TITULO_TIMESTAMP) {
            this.titulo = state.titulos.entities;
            if (this.item && this.menu && this.banner && this.leyenda) { 
                this.actualizaArray(); 
            }
        }
        if (name == BANNERS_TIMESTAMP) {
            this.banner = state.banners.entities;
            if (this.item && this.titulo && this.menu && this.leyenda) { 
                this.actualizaArray(); 
            }
        }
        if (name == LEYENDAS_TIMESTAMP) {
            this.leyenda = state.leyendas.entities;
            if (this.item && this.titulo && this.banner && this.menu) { 
                this.actualizaArray(); 
            }
        }
	}

    actualizaArray(){
        var arr = store.getState().titulos.entities;
        this.titulo = arr.filter(a => a.tipo == this.current);        
        arr = store.getState().banners.entities;
        this.banner = arr.filter(a => a.tipo == this.current);        
        arr = store.getState().menues.entities;
        this.menu = arr.filter(a => a.tipo == this.current);        
        arr = store.getState().leyendas.entities;
        this.leyenda = arr.filter(a => a.tipo == this.current);  
        this.update();       
    }
    ir(e){
        if (e.currentTarget.item.toUpperCase().indexOf("HTTPS:") !== -1){
            //window.open(e.currentTarget.item,'_blank');
            location.href = e.currentTarget.item
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

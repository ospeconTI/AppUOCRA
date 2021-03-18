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
import {get as getHotelesBanner} from "../../redux/hotelesBanner/actions"

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const HOTEL_TIMESTAMP = "hoteles.hotelTimeStamp";
const HOTELESBANNER_DATOS = "hotelesBanner.timeStamp";
const HOTELESBANNER_DATOS_ERROR = "hotelesBanner.errorTimeStamp";
const CURRENT_TIMESTAMP = "screen.timeStamp";

export class mySliderScreen extends connect(store, CURRENT_TIMESTAMP, HOTELESBANNER_DATOS, HOTELESBANNER_DATOS_ERROR, HOTEL_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
        this.current = "";
        this.reserva = null
        this.banners = null
        this.pagina + "";
        this.intervalo = 0;
        this.slideIndex = 0;
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
                padding: 0 !important;
			}
			#imagenes {
                width:100%;
                height:52vw;
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }


            .mySlides {
                display: none;
            }
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
        if (this.banners) {
            return html`
                <div id="imagenes" class="grid column" style="padding:0">
                    ${this.banners.map((item) => {
                        return html` 
                            <div id="banner" class="mySlides fade" .item="${item}" @click=${this.detalle}>
                            <img src="${item.banner}" style="width:100%;max-height:27vh;">
                            </div>
                        `
                    })}
                </div>
                <div style="text-align:center;height:20px;width:100%" >
                    ${this.banner.map((item) => {
                        return html `
                            <span class="dot"></span> 
                        `
                    })}
                </div>  
            `;
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
			const SeMuestraEnUnasDeEstasPantallas = "-turismoHotelesDetalle-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
                store.dispatch(getHotelesBanner())
 				this.hidden = false;

                 if (this.intervalo == 0){
                    let slides = this.shadowRoot.querySelectorAll(".mySlides")
                    for (var i = 0; i < slides.length; i++) {
                        slides[i].style.display = "none";  
                    }
                    this.slideIndex = 0;
                    var dots = this.shadowRoot.querySelectorAll(".dot");
                    for (var i = 0; i < dots.length; i++) {
                        dots[i].className = dots[i].className.replace(" active", "");
                    }
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
			}
		}
        if (name == HOTEL_TIMESTAMP) {
            this.reserva = state.hoteles.hotel
            if (this.banner){
                this.update();
            }
        }
        if (name == HOTELESBANNER_DATOS){
            this.banner = state.hotelesBanner.entities
            if (this.reserva){
                this.update();
            }
        }
        if (name == HOTELESBANNER_DATOS_ERROR){
            this.banner = null
            this.update()
        }
	}

	static get properties() {
		return {
			mediaSize: {
				type: String,
				reflect: true,
				attribute: "media-size",
			},
			current: {
				type: String,
				reflect: true,
			},
            pagina: {
				type: String,
				reflect: true,
            },
            banners:{
                type: Array,
                reflect: true,
            }
		};
	}
}
window.customElements.define("myslider-screen", mySliderScreen);

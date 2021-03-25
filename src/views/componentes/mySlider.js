/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { gridLayout } from "../css/gridLayout";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const CURRENT_TIMESTAMP = "screen.timeStamp";

export class mySliderScreen extends connect(store, CURRENT_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
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

			:host {
				display: grid;
				position: relative;
                background-color: transparent !important;
                padding: 0 0 2vh 0 !important;
                width:100vw;
			}
            #banner{
				display: grid;
                width:100vw;
                height:100%;                
                background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #puntos{
                position:absolute;
                bottom:20px;
                text-align:center;
                height:20px;
                width:100%;
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
                -webkit-animation-duration: 2s;
                animation-name: fade;
                animation-duration: 2s;
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
                border: 1px solid black;
                background-color: #ccc;
                border-radius: 50%;
                display: inline-block;
                transition: background-color 0.6s ease;
            }
            .active {
                border: 1px solid white;
                background-color: #717171;
            }
		`;
	}
	render() {
        if (this.banners) {
            return html`
                ${this.banners.map((item) => {
                    return html` 
                        <div id="banner" style="background-image:url(${item.banner})" class="mySlides fade" .item="${item}" @click=${this.detalle}>
                        </div>
                    `
                })}
                <div id="puntos" >
                    ${this.banners.map((item) => {
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
        if (state.screen.name == this.pagina){	
            if (this.intervalo == 0 && this.banners.length>0){
                this.slideIndex = 0;
                var slides = this.shadowRoot.querySelectorAll(".mySlides")
                for (var i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";  
                }
                var dots = this.shadowRoot.querySelectorAll(".dot");
                for (var i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                if (slides.length>0) slides[0].style.display = "grid";   
                if (this.banners.length > 1){ 
                    if (dots.length>0) dots[0].className += " active";
                    this.intervalo = setInterval(() => {
                        this.slideIndex++;
                        var slides = this.shadowRoot.querySelectorAll(".mySlides")
                        var dots = this.shadowRoot.querySelectorAll(".dot");
                        for (var i = 0; i < slides.length; i++) {
                            slides[i].style.display = "none";  
                        }
                        for (var i = 0; i < dots.length; i++) {
                            dots[i].className = dots[i].className.replace(" active", "");
                        }
                        if (this.slideIndex >= slides.length) {this.slideIndex = 0}    
                        slides[this.slideIndex].style.display = "grid";  
                        dots[this.slideIndex].className += " active";

                    }, 5000);
                }

                this.update()
            }
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

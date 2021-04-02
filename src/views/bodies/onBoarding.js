/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goNext, goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { gridLayout } from "../css/gridLayout";
import { button } from "../css/button";
import {SVGS} from "../../../assets/icons/svgs";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const ONBOARDING_DATO = "onBoarding.timeStamp";

export class onBoardingScreen extends connect(store, ONBOARDING_DATO, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
		this.timeOut = 0;
		this.item = null;
		this.numero = 0;
	}

	static get styles() {
		return css`
			${gridLayout}
			${button}
			:host {
				display: grid;
				justify-content: center;
				align-items: center;
				position: relative;
				top: 0rem;
				left: 0rem;
				height: 100vh;
				width: 100vw;
                background-image: linear-gradient(var(--color-azul-oscuro), var(--primary-color));
				padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				position: relative;
				width: 100vw;
				grid-template-rows: 25fr 20fr 30fr 25fr;
				place-content: center;
				justify-items: center;
				align-self: normal;
				grid-gap:.5rem;
			}
			#bandera{
				position: absolute;
				width:100vw;
                height:86vw;
                background-image: url("https://app.uocra.org/images/bandera.gif");
				background-repeat: no-repeat;
				background-position: center bottom ;
                background-size: contain ;
				bottom:0;
				left:0;
				opacity:0.5;
				padding: 0;
			}
			#titulo{
				color: white;
				font-size: calc(var(--font-header-h1-size) * 1.8 );
				width: 90vw;
    			text-align: center;
				align-self: self-end;
			}
			#leyenda{
				padding-top:1rem;
				align-self: flex-start;
				font-size: calc(var(--font-header-h1-menos-size) * 1.4);
				font-weight: 300;
				color: white;
				width: 80vw;
    			text-align: center;
			}
			#botonera{
				align-content: flex-end;
				justify-self: stretch;
				z-index:10;
			}
			#imagen{
				align-self: center;
			}
			#version {
				display: grid;
				position: absolute;
				top: 3vh;
				left: 3vw;
				color: var(--color-blanco);
				font-size: var(--font-header-h2-size);
				font-weight: var(--font-header-h2-weight);
			}
		`;
	}
	render(){
		if (this.item){
			return html`
				<div id="cuerpo" >
					<div id="imagen">${SVGS["LOGO"]}</div>
					<div id="titulo">${this.item[this.numero].titulo}</div>
					<div id="leyenda">${this.item[this.numero].leyenda}</div>
					<div id="botonera" class="grid column">
						<button btn3 @click="${this.cuenta}">Ya tengo cuenta</button>
						<button btn3 @click="${this.pasar}">Siguiente</button>
					</div>
					<div id="bandera"></div>
				</div>
			`;
			
		}
	}
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;

			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-onBoarding-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				//this.style.height = window.innerHeight;
				this.hidden = false;

				// this.timeOut = setTimeout(() => {
				// 	//store.dispatch(goNext());
				// }, 4000);
				//window.scrollTo(0,1);
				//this.scrollIntoView(false);

			}
			this.update();
		}
		if (name == ONBOARDING_DATO){
            this.item = state.onBoarding.entities;
        }
	}

	pasar() {
		this.numero++
		if(this.numero<this.item.length){
			this.update();
		}else{
			this.numero=0;
			store.dispatch(goNext());
		}
		//store.dispatch(goTo("salud"));
	}

	cuenta(){
		store.dispatch(goNext());
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
		};
	}
}
window.customElements.define("onboarding-screen", onBoardingScreen);

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
import { OLComponent } from "../componentes/ol-map";
import {Overlay} from 'ol/Overlay';
import {getDistance} from "../../libs/funciones";
import { fundacionCentroMapa } from "../../redux/fundacionCentros/actions";

export const featureListener = function ( event ) {
    console.log("featureListenerCalled");
}; 

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const MAPA_CLICK = "ui.mapa.timeStamp";
const FUNDACION_CENTROS = "fundacionCentros.fundacionCentroMapaTimeStamp";
const FUNDACION_CENTROS_ERROR = "fundacionCentros.fundacionCentroMapaErrorTimeStamp";

export class fundacionMapaScreen extends connect(store, FUNDACION_CENTROS, FUNDACION_CENTROS_ERROR, MAPA_CLICK, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma ;
		this.cemapsMapa = require('../../../assets/idiomas/cemapsMapa.json');
        this.centros = null
        this.puntos = []
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
				grid-auto-flow: row;
                background-color: var(--color-blanco);
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                padding: .8vh 0 .8vh 0;
                text-align: center;
                font-size: 3vh;
                background-color: var(--color-verde-claro);
                color: var(--color-blanco);
            }
            svg{
                height:8vh;
                width:8vh;
            }
            .panel {
                display: grid;
                height: 89vh;
                overflow-y: auto;
                grid-auto-flow: row;
                grid-gap: 1rem;
                align-content: start;
            }
            .map {
                height: 89vh;
            }
            .ol-popup {
                position: absolute;
                background-color: white;
                box-shadow: 0 1px 4px rgba(0,0,0,0.2);
                padding: 15px;
                border-radius: 10px;
                border: 1px solid #cccccc;
                bottom: 12px;
                left: 2vw;
                min-width: 280px;
            }
            .ol-popup:after, .ol-popup:before {
                top: 100%;
                border: solid transparent;
                content: " ";
                height: 0;
                width: 0;
                position: absolute;
                pointer-events: none;
            }
            .ol-popup:after {
                border-top-color: white;
                border-width: 10px;
                left: 48px;
                margin-left: -10px;
            }
            .ol-popup:before {
                border-top-color: #cccccc;
                border-width: 11px;
                left: 48px;
                margin-left: -11px;
            }
            .ol-popup-closer {
                text-decoration: none;
                position: absolute;
                top: 2px;
                right: 8px;
            }
            .ol-popup-closer:after {
                content: "✖";
            }
            .centros{
                display: grid;
                position: absolute;
                top: 5vh;
                bottom: 0;
                right: 0;
                width: 20vw;
                grid-gap: 1vh;
                overflow-y: auto;
                overflow-x: auto;
                background-color: var(--color-gris-claro);
                white-space: nowrap;
                font-size: 2vh;
            }
            *[hidden] {
                display: none;
            }
		`;
	}
	render() {
		if (this.centros) { return html`
			<div id="cuerpo">
				<div id="titulo">
                    ${this.cemapsMapa[this.idioma].titulo}
                </div>
				<div class="panel">
                    <ol-map id="map" class="map"  media-size="${this.mediaSize}" .puntos=${this.puntos}></ol-map>
                </div>
            </div>
            <div id="popup" class="ol-popup" hidden @click=${this.closer}>
                <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
		`;
        }else{
            if (this.current=="fundacionMapa" && this.centros==0){
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

 
    closer() {
        var closer = this.shadowRoot.querySelector('#popup');
        if (!closer.hasAttribute("hidden")){
            closer.setAttribute("hidden","")
        }
    };
    
    stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-fundacionMapa-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {

 				this.hidden = false;
                var mapa=state.fundacionCursos.seleccion
                store.dispatch(fundacionCentroMapa(mapa.especialidad, mapa.provincia, mapa.localidad, mapa.duracion, 1));

            }
        }
        if (name == MAPA_CLICK && this.current == "fundacionMapa"){
            var closer = this.shadowRoot.querySelector('#popup');
            var content = this.shadowRoot.querySelector('#popup-content');
            const dato = state.ui.mapa.feature.values_.geometry.flatCoordinates
            const event = state.ui.mapa.event
            var mostrar = '<p>' + dato[2] + '</p><code>' + dato[3] + '</code>';
            if(this.puntos[0][0] != 0){
                let distancia = getDistance(this.puntos[0][1], this.puntos[0][0], dato[1], dato[0]).toFixed(1);
                if (distancia > 0 ){
                    mostrar = mostrar + "<p><a target='_blank' href='https://www.google.com.ar/maps/dir/" + this.puntos[0][1] + "," + this.puntos[0][0] + "/" + dato[1] + ","  + dato[0] + "'>Distancia: " +  distancia + " km</a></p>" 
                }
            }
            content.innerHTML = mostrar
            closer.removeAttribute("hidden");                    
        }

        if (name == FUNDACION_CENTROS){
            this.centros = state.fundacionCentros.entityMapa
            this.mapa()
        }
        if (name == FUNDACION_CENTROS_ERROR){
            this.centros = 0
            this.update()
        }
    }
    mapa(){
        this.puntos.length = 0
        this.puntos.unshift([ 0, 0, "MI UBICACION", "","S"])
        for (var i = 0; i < this.centros.length; ++i) {
            let a = this.centros[i]
            this.puntos.push([a.longitud,a.latitud, a.nombre, a.direccion,"F"]);
        }
        if (navigator.geolocation) {
            var success = (position) => {
                var latitud = position.coords.latitude,
                    longitud = position.coords.longitude;
                const myPosition = [longitud, latitud , "MI UBICACION", "","S"];
                this.puntos[0] = myPosition;
                //this.update()
            };
            navigator.geolocation.getCurrentPosition(success, function (msg) {
                this.update()
            });
        }  
        this.update()
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
window.customElements.define("fundacionmapa-screen", fundacionMapaScreen);

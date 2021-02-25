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

export const featureListener = function ( event ) {
    console.log("featureListenerCalled");
}; 

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const MAPA_CLICK = "ui.mapa.timeStamp";

export class cemapsMapaScreen extends connect(store, MAPA_CLICK, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma ;
		this.cemapsMapa = require('../../../assets/idiomas/cemapsMapa.json');
        this.centros = [[-58.416510, -34.609363, "SANATORIO FRANCHIN", "Bartolomé Mitre 3545"],
        [-58.50494533152994, -34.482248148166086,  "CEMAP ACASUSO", "Av.Santa Fe 1086"],
        [-58.355346773852155, -34.66656645127035,  "CEMAP AVELLANEDA", "Estanislao Zeballos 1674"],
        [ -62.26237063137208, -38.7201042402835, "CEMAP BAHIA BLANCA", "Las Heras 39"],
        [ -58.392774 , -34.614011, "CEMAP BELGRANO", "Av. Belgrano 1864"], 
        [-58.95768306037708, -34.157349650331625,   "CEMAP CAMPANA", "Dellepiane 769"],
        [ -65.78290904522264, -28.461119110968927, "CEMAP CATAMARCA","Junín 54"],
        [ -58.01514127581432 , -31.38704370993243, "CEMAP CONCORDIA","Espejo 71"],
        [ -64.17971037396404, -31.416719162079385, "CEMAP CORDOBA","Av. Maipú 48"],
        [ -57.09794166052627, -29.7088600805787, "CEMAP CORRIENTES","Av. España 1408"],
        [  -58.056297831688134, -29.786827255369488,"CEMAP CURUZU CUATIA","Juan de Vera 977"],
        [-58.27829397384724, -34.802918748758685,  "CEMAP FLORENCIO VARELA", "San Martin 2631"],
        [ -59.10518034931761, -25.729600831795974, "CEMAP FORMASA","Av. 9 de Julio 440"],
        [ -58.638815373859345, -34.462297524774954, "CEMAP GENERAL PACHECO", "Av. Hipolito Irigoyen 1259"],
        [ -63.756185489158746, -35.65877053610952, "CEMAP GENERAL PICO","Calle 11 Nº 887"],
        [ -67.56609004670257, -39.02761067984191, "CEMAP GENERAL ROCA","Córdoba 1662"],
        [ -56.68311237168805, -27.58257996811924, "CEMAP ITUZAINGO","Perú 1832"],
        [ -65.30940734719526, -24.18036220978682, "CEMAP JUJUY","Santibáñez 1150"],
        [-57.949983745007856, -34.90534901842309,  "CEMAP LA PLATA", "Calle 44 Nº 335"],
        [ -66.85454424704265, -29.409057410478635, "CEMAP LA RIOJA","Lamadrid 322"],
        [ -58.40289007384858, -34.763393575163256, "CEMAP LOMAS DE ZAMORA", "Av. Hipolito Irigoyen 9264"],
        [ -68.88268161808745, -33.03815469975917, "CEMAP LUJAN DE CUYO","Patricios 285"],
        [ -57.56033027372903 , -37.989724923065246, "CEMAP MAR DEL PLATA", "Olazabal 1470"],
        [ -68.83641990275046, -32.87527058923882, "CEMAP MENNDOZA","Av. 9 de Julio 2381"],
        [-58.416577 , -34.609183, "CEMAP MITRE", "Bartolomé Mitre 3588"],
        [ -58.47355389898362 , -34.81619497026056, "CEMAP MONTE GRANDE", "Maximo Paz 290"],
        [ -58.793038245017094, -34.650632533042035, "CEMAP MORENO", "Zeballos 71/73"],
        [ -58.616394187345755, -34.650147813326036, "CEMAP MORON", "Ing. Boatti 183"],
        [ -60.5267535009398, -31.731401678636086, "CEMAP PARANA","San Juan 172"],
        [ -57.08841101819723, -29.719061023751884, "CEMAP PASO DE LOS LIBRES","Pago Largo 1475"],
        [ -58.91294391803748 , -34.46183772365447, "CEMAP PILAR", "Rivadavia 938"],
        [ -68.88264943158056, -33.03814570569306, "CEMAP POSADAS","La Rioja 2284"],
        [ -65.04188155819513,-42.7646403653579, "CEMAP PUERTO MADRYN","Domec Garcia 402"],
        [ -58.25765001617873 , -34.72472007434642, "CEMAP QUILMES", "San Martín 724"],
        [ -69.21196723081299, -51.62134425346009, "CEMAP RIO GALLEGOS","Alcorta 130"],
        [ -60.653768289255005, -32.94428370112704, "CEMAP ROSARIO","Boulevard Oroño 870"],
        [ -58.9832375317599, -27.455021648414725, "CEMAP RESISTENCIA","Juan B. Justo 453"],
        [ -68.53128157580926, -31.543225130042998, "CEMAP SAN JUAN","Avenida Alem 725 sur"],
        [ -58.55483273152297 , -34.677301950134044, "CEMAP SAN JUSTO", "Juan Domingo Perón 3350"],
        [ -58.541951102690895 , -34.57697263951746, "CEMAP SAN MARTIN", "Caseros 2248"],
        [ -58.50428619636764 , -34.5400743722392, "CEMAP SAN MIGUEL", "Av. Mitre 80"],
        [ -60.220417946912896 , -33.329249160565176, "CEMAP SAN NICOLAS", "URQUIZA Nº 114"],
        [ -65.41015676067207, -24.779421464013513, "CEMAP SALTA","Mitre 819"],
        [ -60.73588264693283, -32.75205554107435, "CEMAP SAN LORENZO","Moreno 756"],
        [ -60.703263445120896, -31.643330172049104, "CEMAP SANTA FE","Rivadavia 2830"],
        [ -66.33999167390037, -33.294856628878044, "CEMAP SAN LUIS","San Martín 1305"],
        [ -64.26781663174997, -27.786883691278693, "CEMAP SANTIAGO DEL ESTERO","Av. Moreno (Sud) Nº 81"],
        [ -65.49703681642606, -27.16288253495262, "CEMAP TUCUMAN","Tucuman 436"],
        [ -65.19898458944972, -26.825415133018303, "CEMAP TUCUMAN","Monteagudo 446"],
        [ -68.34142554415155 , -54.8194495438245, "CEMAP USHUAIA", "Intendente Torelli 1228"],
        [ -58.38640354422014, -34.60345549535785, "URUAGUAY","Uruaguay 435"],
        [ -65.46822100272252, -33.6828777996741, "CEMAP VILLA MERCEDEZ","Marconi 125"],
        [ -59.020855218050514 , -34.096602953336536, "CEMAP ZARATE", "Independencia 540"],
        ]
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
            .mapa {
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
		return html`
			<div id="cuerpo">
				<div id="titulo">
                    ${this.cemapsMapa[this.idioma].titulo}
                </div>
				<div class="panel">
                    <ol-map class="mapa"  media-size="${this.mediaSize}" .puntos=${this.puntos}></ol-map>
                    <!-- <div id="centros" class="row centros" >
                        ${this.centros.map((item) => {
                            if (item[2] != ""){
                                return html` 
                                    <div>
                                        ${item[2].replace("CEMAP ", "")}
                                    </div>
                                `
                            }
                        })}
                    </div> -->
                </div>
            </div>
            <div id="popup" class="ol-popup" hidden @click=${this.closer}>
                <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
		`;
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
			const SeMuestraEnUnasDeEstasPantallas = "-cemapsMapa-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
                this.puntos.length = 0
                this.puntos.unshift([ 0, 0])
                for (var i = 0; i < this.centros.length; ++i) {
                    this.puntos.push(this.centros[i]);
                }
                if (navigator.geolocation) {
                    var success = (position) => {
                        var latitud = position.coords.latitude,
                            longitud = position.coords.longitude;
                        const myPosition = [longitud, latitud , "MI UBICACION", ""];
                        this.puntos[0] = myPosition;
                        //this.puntos = [[-58.416510, -34.609363],[ -58.392774 , -34.614011], [-58.416577 , -34.609183] ]
                        this.update()
                    };
                    navigator.geolocation.getCurrentPosition(success, function (msg) {
                        //this.update()
                    });
                }  
				this.hidden = false;
			}
			this.update();
        }

        if (name == MAPA_CLICK){
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

	}

	volver() {
		store.dispatch(goTo("inicial"));
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
window.customElements.define("cemapsmapa-screen", cemapsMapaScreen);

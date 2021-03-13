/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { showWarning} from "../../redux/ui/actions";
import { button } from "../css/button";
import { select } from "../css/select";
import { gridLayout } from "../css/gridLayout";
import {SVGS} from "../../../assets/icons/svgs";
import {getMapaLocalidad, getMapaProvincia, getMapaTodos} from "../../redux/cemaps/actions"
import { seleccion as selLocalidad} from "../../redux/localidades/actions";
import { seleccion as selServicio} from "../../redux/servicios/actions";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const PROVINCIA_TIMESTAMP = "provincias.timeStamp";
const LOCALIDAD_TIMESTAMP = "localidades.timeStamp";
const SERVICIO_TIMESTAMP = "servicios.timeStamp";
const CEMAPS_DATOS = "cemaps.MapaTimeStamp";

export class fundacionInstitutoScreen extends connect(store, CEMAPS_DATOS, PROVINCIA_TIMESTAMP, LOCALIDAD_TIMESTAMP, SERVICIO_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;
        this.provincia = null
        this.localidad = null
        this.servicio = null
        this.idioma = store.getState().ui.idioma;
        this.cartilla = require('../../../assets/idiomas/cartilla.json');
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
				grid-gap: 0rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://app.uocra.org/images/fundacionInstituto.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #panel{
                width:90%;
                justify-self: center;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: .6rem;
            }
            #subNombreTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-titulo-h1-menos-size);
                justify-self: center;
                padding-bottom: .4rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-titulo-h2-size);
                justify-self: center;
                padding-bottom: .4rem;
            }
            .miselect{
                width:60%;
                height:3.5rem; 
                justify-self: center;
                grid-gap: 0 !important;
            }
            .elselect{
                height:2.5rem; 
            }
            .lblSelect{
                font-size: var(--font-label-size);
            }
            #botones{
                width:90%;
                justify-self: center;
                grid-template-columns: 1fr 1fr;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
		`;
	}
	render() {
            return html`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="panel" class="grid row">
                        <div style="height:.5rem"></div>
                        <div >
                            El <b>Instituto UOCRA</b> fue creado en el año 2007 y desde entonces desarrolla un estilo de formación personalizado, que concibe a los estudiantes como protagonistas.
                        </div>
                        <div id="botones" class="grid">
                            <button btn1 class="btnListado" >
                                <div class="grid column">
                                    <div>
                                        ${SVGS["LISTADO"]}                        
                                    </div>
                                    <div>
                                        LISTADO
                                </div>
                                </div>
                            </button>
                            <button btn1 class="btnVerMapa" >
                                <div class="grid column">
                                    <div>
                                        ${SVGS["VERMAPA"]}                        
                                    </div>
                                    <div>
                                        VER MAPA  
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div  class="grid column">
                            <b>Escribí tu consulta</b>
                        </div>
                        <textarea rows="8"></textarea>
                        <button btn1 class="btnVerMapa" style="width:10rem;justify-self: center;">ENVIAR</button>
                    </div>
                </div>
            `;
	}
    listados(){
        const txtProvincia = this.shadowRoot.querySelector("#txtProvincias").value;
        const txtLocalidad = this.shadowRoot.querySelector("#txtLocalidades").value;
        const txtServicio = this.shadowRoot.querySelector("#txtServicios").value;
        if(txtProvincia == 0 || txtLocalidad == 0 || txtServicio == 0){
			store.dispatch(showWarning(this.cartilla[this.idioma].warning[1].titulo, this.cartilla[this.idioma].warning[1].subTitulo, "fondoError", 2000));
        }else{
            store.dispatch(goTo("cemapCartillaDetalle"));
        }
    }
    cemap(){
        const txtProvincia = this.shadowRoot.querySelector("#txtProvincias").value;
        const txtLocalidad = this.shadowRoot.querySelector("#txtLocalidades").value;
        if(txtProvincia == 0 && txtLocalidad == 0){
            store.dispatch(getMapaTodos())
        }else if(txtLocalidad != 0){
            store.dispatch(getMapaLocalidad(parseInt(txtLocalidad)))
        }else if(txtProvincia != 0){
            store.dispatch(getMapaProvincia(parseInt(txtProvincia)))
        }
    }
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-fundacionInstituto-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
		}
        if (name == PROVINCIA_TIMESTAMP){
            this.provincia = state.provincias.entities
        }
        if (name == LOCALIDAD_TIMESTAMP){
            //this.localidad = state.localidades.entities
        }
        if (name == SERVICIO_TIMESTAMP){
            this.servicio = state.servicios.entities
        }
        if (name == CEMAPS_DATOS){
            store.dispatch(goTo("cemapsMapa"));
        }

	}
    cambioProvincia(e){
        let arr = store.getState().localidades.entities;
        this.localidad = arr.filter(a => a.provinciasId == e.currentTarget.value);  
        this.update()      
    }
    cambioLocalidad(e){
        if (e.currentTarget.value> 0){
            let arr = store.getState().localidades.entities;
            let salida = arr.filter(a => a.id == e.currentTarget.value);  
            store.dispatch(selLocalidad(salida))
        }
    }
    cambioServicio(e){
        if (e.currentTarget.value> 0){
            let arr = store.getState().servicios.entities;
            let salida = arr.filter(a => a.id == e.currentTarget.value);  
            store.dispatch(selServicio(salida))
        }
    }
    clickLocalidad(e){
        const txtProvincia = this.shadowRoot.querySelector("#txtProvincias").value;
        const txtLocalidad = this.shadowRoot.querySelector("#txtLocalidades");
        if(txtProvincia == 0){
			store.dispatch(showWarning(this.cartilla[this.idioma].warning[0].titulo, this.cartilla[this.idioma].warning[0].subTitulo, "fondoError", 2000));
            txtLocalidad.blur()
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
window.customElements.define("fundacioninstituto-screen", fundacionInstitutoScreen);
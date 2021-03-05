import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { button } from "../css/button"
import {
    SVGS
} from "../../../assets/icons/svgs";
import {
    goTo, goPrev, goHistoryPrev
} from "../../redux/routing/actions"
import {
    isInLayout
} from "../../redux/screens/screenLayouts";
import {
    footherMuestraTapa
} from "../../redux/ui/actions"

const MEDIA_CHANGE = "ui.media.timeStamp"
const SCREEN = "screen.timeStamp";
const FOOTHER_TAPA = "ui.media.footherMuestraTapa"
export class pieComponente extends connect(store, FOOTHER_TAPA, MEDIA_CHANGE, SCREEN)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.area = "foot"
        //       this.footherMuestraTapa = false
    }

    static get styles() {
        return css`
        ${button}
        :host{
            display: grid;
            position:relative; 
            align-items:center; 
            justify-content:center;
            background-image: linear-gradient(to right, var(--primary-color), var(--color-azul-oscuro));
        }
        :host([hidden]){
            display: none; 
        } 
        :host([media-size="small"]){
            grid-template-rows: 100% ;
            grid-template-columns: 100% ;
        }
        :host(:not([media-size="small"])){
            grid-template-rows: 24% 76% ;
            grid-template-columns: 100% ;
        }
        #pieCabecera{
            width:100%;
            height:100%;
            background-image:var(--imagen-logo-splash);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 7vw;
        }
        :host([media-size="small"]) #pieCabecera{
            display:none;
         }
        #pieMenu{
            display: grid;
            position:relative;
            align-items:center; 
            justify-content:center;
            background-color: transparent;
        }
        :host([media-size="small"]) #pieMenu{
            grid-template-columns:repeat(5,2fr);
            grid-template-rows: 60% 40%;
            grid-gap:0.1rem;
        }
        :host(:not([media-size="small"])) #pieMenu{
            grid-template-columns: 40% 60%;
            grid-template-rows: 3rem 3rem 3rem ;
            grid-auto-flow: column;
            align-self: start;
            grid-gap:0rem;
        }
        .img{
            display:grid;
            justify-content: center;
            align-content: center;
            cursor:pointer;
            width:100%;
            height:100%;
        }
        :host(:not([media-size="small"])) .img{
            border-left: solid 4px transparent;
        }
        .img[select="SI"]{
            cursor: not-allowed;
            pointer-events: none;  
        }
        .img[select="NO"]{
            cursor: pointer;
            pointer-events: auto;  
        }
        :host(:not([media-size="small"])) .img[select="SI"]{
            border-left: solid 4px var(--color-azul-oscuro);
            background-color:var(--color-gris-fondo);
        }
        .lbl{
            width:100%;
            height:100%;
            display:grid;
            justify-content: center;
            align-content: center;
            font-size: 1.1vh;
            font-weight: var(--font-label-weight);
            color:var(--color-gris);
            cursor:pointer;
        }
        .lbl:hover{
            color:var(--color-blanco);       
        }
        :host(:not([media-size="small"])) .lbl{
            justify-content: start;
        }

        svg{
            fill:var(--color-gris);
            stroke:var(--color-gris);
            height:1rem;
            width:1.1rem;
        }
        svg:hover{
            fill:var(--color-blanco);
            stroke:var(--color-blanco);
        }
        :host(:not([media-size="small"])) svg{
            width:1.5rem;
            height:1.5rem;
        }
        #divAyudaPie{
            position:absolute;
            display:grid;
            left:0;
            bottom:1rem;
            grid-template-rows: 30% 40% 40%;
            width:100%;
            grid-gap:0rem;
            justify-items:center;
        }
        :host([media-size="small"]) #divAyudaPie{
            display:none;
        }
        .lblayudaPie{
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);
            width:100%;
            text-align:center;
        }
        #btn-ayudaPie{
            height:1.8rem;
            width:90%;
            font-size: var(--font-label-size);
            font-weight: var(--font-label-weight);
        }
        :host([media-size="medium"]) #btn-ayudaPie{
            font-size: var(--font-error-size);
        }
        #divTapa{
            position:absolute;
            display: none;
            top:0;
            left:0;
            bottom: 0;
            right: 0;    
            z-index:20;            
            background-color: var(--color-gris-oscuro);
            opacity:.5;
            backdrop-filter: blur(2px);
        }
        :host([foother-muestra-tapa]) #divTapa{
            display: grid;           
        }
        `
    }

    render() {
        return html`
            <div id="pieCabecera">
            </div>
            <div id="pieMenu">
                <div id="img-atras" select=${this.opcion == 'uno' ? 'SI' : 'NO'} @click="${this.volver}" class="img">
                    ${SVGS["ATRAS"]}
                </div>
                <div id="img-usuario" select=${this.opcion == 'dos' ? 'SI' : 'NO'} @click="${this.inicio}" class="img">
                    ${SVGS["HOME"]}
                </div>
                <div id="img-publicaciones" select=${this.opcion == 'tres' ? 'SI' : 'NO'}  @click="${this.notificaciones}" class="img">
                    ${SVGS["CAMPANACON"]}
                </div>
                <div id="img-tablas" select=${this.opcion == 'cuatro' ? 'SI' : 'NO'} @click="${this.compras}" class="img">
                    ${SVGS["CARRITO"]}
                </div>  
                <div id="img-tablas" select=${this.opcion == 'cinco' ? 'SI' : 'NO'} @click="${this.clickBoton3}" class="img">
                    ${SVGS["PERFIL"]}
                </div>
                <div id="lbl-atras" select=${this.opcion == 'uno' ? 'SI' : 'NO'} @click="${this.volver}"  class="lbl">
                    ATRAS
                </div>
                <div id="lbl-usuario" select=${this.opcion == 'dos' ? 'SI' : 'NO'} @click="${this.inicio}"  class="lbl">
                    INICIO
                </div>
                <div id="lbl-publicaciones" select=${this.opcion == 'tres' ? 'SI' : 'NO'} @click="${this.notificaciones}"  class="lbl">
                    NOTIFICACIONES
                </div>
                <div id="lbl-tablas" select=${this.opcion == 'cuatro' ? 'SI' : 'NO'} @click="${this.compras}"  class="lbl">
                    COMPRAS
                </div>
                <div id="lbl-tablas" select=${this.opcion == 'cinco' ? 'SI' : 'NO'} @click="${this.clickBoton3}"  class="lbl">
                    PERFIL
                </div>
            </div>
            <div id="divAyudaPie">
                <hr style="width:90%; border-top: 2px solid var(--color-gris-claro)">
                <div><label class="lblayudaPie">AYUDA</label></div>
                <button btn3 id="btn-ayudaPie" @click=${this.clickAyuda}>AYUDA</button>
            </div>
            <div id="divTapa"></div>
        `
    }
    volver(){
        // if ("-cultura-tv-moecra-salud-notificaciones-".indexOf("-" + store.getState().screen.name + "-") != -1 ){
        //     store.dispatch(goTo("main"))
        // }else{
        //    store.dispatch(goHistoryPrev())
        // }
        if ("-main-".indexOf("-" + store.getState().screen.name + "-") == -1 ){
            store.dispatch(goHistoryPrev())
        }
    }
    inicio(){
        store.dispatch(goTo("main"))
    }
    compras(){
        store.dispatch(goTo("moecra"))
    }
    notificaciones(){
        store.dispatch(goTo("notificaciones"))
    }
    stateChanged(state, name) {
        if ((name == SCREEN || name == MEDIA_CHANGE || name == FOOTHER_TAPA)) {
            this.footherMuestraTapa = state.ui.media.footherMuestraTapa
            this.mediaSize = state.ui.media.size
            this.hidden = true
            const haveFootArea = isInLayout(state, this.area)
            const SeMuestraEnUnasDeEstasPantallas = "-main-sindicato-salud-compras-cultura-tv-moecra-cemapsMapa-notificaciones-cartilla-cartillaDetalle-cemapCartillaDetalle-turnos-franchin-emergencias-gremioZonas-gremioMapa-gremioLista-gremioJuventud-gremioTarjetaIeric-gremioConvenio-teatroProgramacion-teatroProgramacionDetalle-teatroBoleteria-web-saludSeguridad-saludSeguridadConsultas-saludSeguridadDenuncia-ivt-macro-cine-cineNosotros-cineEdicion-cineTematicas-cineEdicionesAnteriores-tvCanales-tvEstrenos-".indexOf("-" + state.screen.name + "-") != -1
            if (haveFootArea && SeMuestraEnUnasDeEstasPantallas) {
                this.hidden = false
            }
            this.update();
        }

    }
    clickAyuda(e) {
        location.href = "tel:08001221453"
    }
    clickBoton1() {
    }
    clickBoton2() {
    }
    clickBoton3() {
        //store.dispatch(goTo("atencionesMascotas"))
    }

    static get properties() {
        return {
            opcion: {
                type: String,
                reflect: true
            },
            mediaSize: {
                type: String,
                reflect: true,
                attribute: 'media-size'
            },
            layout: {
                type: String,
                reflect: true
            },
            hidden: {
                type: Boolean,
                reflect: true
            },
            area: {
                type: String
            },
            footherMuestraTapa: {
                type: Boolean,
                reflect: true,
                attribute: 'foother-muestra-tapa'
            }
        }
    }
}

window.customElements.define("pie-componente", pieComponente);
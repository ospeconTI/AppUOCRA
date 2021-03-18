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
            justify-content:stretch;
            background-image: linear-gradient(to right, var(--primary-color), var(--color-azul-oscuro));
        }
        :host([hidden]){
            display: none; 
        } 
        
        
        #pieMenu{
            display: grid;
            position:relative;
            align-items:center; 
            justify-content:center;
            background-color: transparent;
            grid-template-columns:repeat(4,2fr);
            grid-template-rows: 60% 40%;
            grid-gap:0.1rem;
        }
        
        
        .img{
            display:grid;
            justify-content: center;
            align-content: center;
            cursor:pointer;
            width:100%;
            height:100%;
        }
        
        .img[select="SI"]{
            cursor: not-allowed;
            pointer-events: none;  
        }
        .img[select="NO"]{
            cursor: pointer;
            pointer-events: auto;  
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
        
        `
    }

    render() {
        return html`
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
                <div id="lbl-tablas" select=${this.opcion == 'cinco' ? 'SI' : 'NO'} @click="${this.clickBoton3}"  class="lbl">
                    PERFIL
                </div>
            </div>
           
        `
    }
    volver(){
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
            const SeMuestraEnUnasDeEstasPantallas = "-main-sindicato-salud-compras-cultura-tv-moecra-cemapsMapa-notificaciones-cartilla-cartillaDetalle-cemapCartillaDetalle-turnos-saludCredencial-emergencias-gremioZonas-gremioMapa-gremioLista-gremioJuventud-gremioTarjetaIeric-gremioConvenio-teatroProgramacion-teatroProgramacionDetalle-teatroBoleteria-web-saludSeguridad-saludSeguridadConsultas-saludSeguridadDenuncia-ivt-macro-cine-cineNosotros-cineEdicion-cineTematicas-cineEdicionesAnteriores-tvCanales-tvEstrenos-tvGrilla-adolecencia-adolecencia2020-adolecenciaOtras-adicciones-adicciones2020-adiccionesOtras-hogar-hogarInstitucional-hogarDescripcion-hogarVideoteca-hogarColabora-mujeres-mujeresConstruccion-mujeresFormacion-arte-arteNosotros-arteEdicion-arteConcursos-arteEdicionesAnteriores-deportes-beneficios-beneficiosSubsidios-beneficiosSeguros-beneficiosSepelios-beneficiosJubilacion-denunciasFormulario-turismo-turismoHotelesLista-turismoMapa-turismoHotelesDetalle-fundacion-fundacionAulas-fundacionCursos-fundacionEscuelas-fundacionInstituto-noticiaDetalle-teatroObras-".indexOf("-" + state.screen.name + "-") != -1
            if (haveFootArea && SeMuestraEnUnasDeEstasPantallas) {
                this.hidden = false
            }
            this.update();
        }

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
/** @format */

import { html, LitElement, css } from "lit-element";
import { connect } from "@brunomon/helpers";
import { store } from "../redux/store";
import { layoutsCSS } from "../views/ui/layouts";
import { getLayout } from "../redux/screens/screenLayouts";
import { pantallaWarning } from "../views/bodies/warning";
import { botonComponent } from "../views/componentes/c-boton";
import { msgNoConeccionComponent } from "../views/componentes/msgNoConeccion";
import { msgSinCoberturaComponent } from "../views/componentes/msgSinCobertura";

import { menuPrincipal } from "../views/headers/menu";

import { alertaErrores } from "./bodies/alert";

import { SpinnerLoading } from "./componentes/spinner";
import { verVideoScreen } from "./componentes/verVideo";

import { pieComponente } from "./foots/pie";
import { splashScreen } from "./bodies/splash";
import { onBoardingScreen } from "./bodies/onBoarding";
import { inicialScreen } from "./bodies/inicial";
import { sesionScreen } from "./bodies/sesion";
import { claveRecuperarScreen } from "./bodies/claveRecuperar";
import { claveRecuperarMensajeScreen } from "./bodies/claveRecuperarMensaje";
import { claveCambioScreen } from "./bodies/claveCambio";
import { claveCambioMensajeScreen } from "./bodies/claveCambioMensaje";
import { registroScreen } from "./bodies/registro";
import { registroMensajeScreen } from "./bodies/registroMensaje";
import { registroUpdateScreen } from "./bodies/registroUpdate";
import { principalScreen } from "./bodies/principal";
import { comprasScreen } from "./bodies/compras";
import { generalScreen } from "./bodies/general";
import { cemapsMapaScreen } from "./bodies/cemapsMapa";
import { notificacionesScreen } from "./bodies/notificaciones";
import { cartillaScreen } from "./bodies/cartilla";
import { cartillaDetalleScreen } from "./bodies/cartillaDetalle";
import { turnosScreen } from "./bodies/turnos";
import { franchinScreen } from "./bodies/franchin";
import { emergenciasScreen } from "./bodies/emergencias";
import { gremioZonasScreen } from "./bodies/gremioZonas";
import { gremioMapaScreen } from "./bodies/gremioMapa";
import { gremioListaScreen } from "./bodies/gremioLista";
import { gremioJuventudScreen } from "./bodies/gremioJuventud";
import { gremioTarjetaIericScreen } from "./bodies/gremioTarjetaIeric";
import { gremioConvenioScreen } from "./bodies/gremioConvenio";
import { teatroProgramacionScreen } from "./bodies/teatroProgramacion";
import { teatroProgramacionDetalleScreen } from "./bodies/teatroProgramacionDetalle";
import { teatroBoleteriaScreen } from "./bodies/teatroBoleteria";
import { saludSeguridadConsultasScreen } from "./bodies/saludSeguridadConsultas";
import { saludSeguridadDenunciaScreen } from "./bodies/saludSeguridadDenuncia";
import { macroScreen } from "./bodies/macro";
import { cineNosotrosScreen } from "./bodies/cineNosotros";
import { cineEdicionScreen } from "./bodies/cineEdicion";
import { cineTematicasScreen } from "./bodies/cineTematicas";
import { cineEdicionesAnterioresScreen } from "./bodies/cineEdicionesAnteriores";
import { cemapCartillaDetalleScreen } from "./bodies/cemapCartillaDetalle";
import { tvCanalesScreen } from "./bodies/tvCanales";
import { tvEstrenosScreen } from "./bodies/tvEstrenos";
import { tvGrillaScreen } from "./bodies/tvGrilla";
import { adolecencia2020Screen } from "./bodies/adolecencia2020";
import { adiccionesScreen } from "./bodies/adicciones";
import { hogarInstitucionalScreen } from "./bodies/hogarInstitucional";
import { hogarDescripcionScreen } from "./bodies/hogarDescripcion";
import { hogarVideotecaScreen } from "./bodies/hogarVideoteca";
import { hogarColaboraScreen } from "./bodies/hogarColabora";
import { mujeresFormacionScreen } from "./bodies/mujeresFormacion";
import { mujeresConstruccionScreen } from "./bodies/mujeresConstruccion";
import { arteNosotrosScreen } from "./bodies/arteNosotros";
import { arteConcursosScreen } from "./bodies/arteConcursos";
import { arteEdicionScreen } from "./bodies/arteEdicion";
import { arteEdicionesAnterioresScreen } from "./bodies/arteEdicionesAnteriores";
import { beneficiosSubsidiosScreen } from "./bodies/benefiosSubsidios";
import { beneficiosSegurosScreen } from "./bodies/beneficiosSeguros";
import { beneficiosSepeliosScreen } from "./bodies/beneficiosSepelios";
import { beneficiosJubilacionScreen } from "./bodies/beneficiosJubilacion";
import { denunciasFormularioScreen } from "./bodies/denunciasFormulario";
import { turismoHotelesListaScreen } from "./bodies/turismoHotelesLista";
import { turismoHotelesDetalleScreen } from "./bodies/turismoHotelesDetalle";
import { turismoMapaScreen } from "./bodies/turismoMapa";
import { fundacionAulasScreen } from "./bodies/fundacionAulas";
import { fundacionCursosScreen } from "./bodies/fundacionCursos";
import { fundacionEscuelasScreen } from "./bodies/fundacionEscuelas";
import { fundacionInstitutoScreen } from "./bodies/fundacionInstituto";
import { saludCredencialScreen } from "./bodies/saludCredencial";
import { noticiaDetalleScreen } from "./bodies/noticiaDetalle";
import { teatroObrasScreen } from "./bodies/teatroObras";
import { fundacionMapaScreen } from "./bodies/fundacionMapa";
import { fundacionCursosListaScreen } from "./bodies/fundacionCursosLista";
import { adolescenciaCuadernillosScreen } from "./bodies/adolescenciaCuadernillos";
import { compartirScreen } from "./bodies/compartir";
import { teatroReservaScreen } from "./bodies/teatroReserva";
import { pantallaHorizontalScreen } from "./bodies/pantallaHorizontal";
import { activacionScreen } from "./bodies/activacion";

emergenciasScreen;
const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const SELECTION = "ui.menu.timeStamp";

export class viewManager extends connect(store, MEDIA_CHANGE, SCREEN, SELECTION)(LitElement) {
    constructor() {
        super();
    }

    static get styles() {
        return css`
            :host {
                position: absolute;
                top: 0;
                display: grid;
                height: 100vh;
                width: 100vw;
                padding: 0;
                background-color: var(--color-gris-claro);
                overflow: hidden;
            }

            ${layoutsCSS}

            :host::-webkit-scrollbar {
                width: 0.5vw;
                cursor: pointer;
            }
            :host::-webkit-scrollbar([media-size="small"]) {
                display: none;
            }
            :host::-webkit-scrollbar-thumb {
                background: var(--primary-color);
                border-radius: 5px;
            }
        `;
    }

    render() {
        return html`
            <splash-screen id="splash" class="body"></splash-screen>
            <onboarding-screen id="onBoarding" class="body"></onboarding-screen>
            <inicial-screen id="inicial" class="body"></inicial-screen>
            <sesion-screen id="sesion" class="body"></sesion-screen>
            <claveRecuperar-screen id="claveRecuperar" class="body"></claveRecuperar-screen>
            <claveRecuperarmensaje-screen id="claveRecuperarMensaje" class="body"></claveRecuperarmensaje-screen>
            <clavecambio-screen id="clavecambio" class="body"></clavecambio-screen>
            <clavecambiomensaje-screen id="clavecambiomensaje" class="body"></clavecambiomensaje-screen>
            <registro-screen id="registro" class="body"></registro-screen>
            <registromensaje-screen id="registroMensaje" class="body"></registromensaje-screen>
            <registroupdate-screen id="registroUpdate" class="body"></registroupdate-screen>
            <principal-screen id="principal" class="body"></principal-screen>
            <compras-screen id="compras" class="body"></compras-screen>
            <general-screen id="general" class="body"></general-screen>
            <cemapsmapa-screen id="cemapsMapa" class="body"></cemapsmapa-screen>
            <notificaciones-screen id="notificaciones" class="body"></notificaciones-screen>
            <cartilla-screen id="cartilla" class="body"></cartilla-screen>
            <cartilladetalle-screen id="cartillaDetalle" class="body"></cartilladetalle-screen>
            <turnos-screen id="turnos" class="body"></turnos-screen>
            <franchin-screen id="franchin" class="body"></franchin-screen>
            <emergencias-screen id="emergencias" class="body"></emergencias-screen>
            <gremiozonas-screen id="gremioZonas" class="body"></gremiozonas-screen>
            <gremiomapa-screen id="gremioMapa" class="body"></gremiomapa-screen>
            <gremiolista-screen id="gremioLista" class="body"></gremiolista-screen>
            <gremiojuventud-screen id="gremioJuventud" class="body"></gremiojuventud-screen>
            <gremiotarjetaieric-screen id="gremioTarjetaIeric" class="body"></gremiotarjetaieric-screen>
            <gremioconvenio-screen id="gremioConvenio" class="body"></gremioconvenio-screen>
            <teatroprogramacion-screen id="teatroProgramacion" class="body"></teatroprogramacion-screen>
            <teatroprogramaciondetalle-screen id="teatroProgramacionDetalle" class="body"></teatroprogramaciondetalle-screen>
            <teatroboleteria-screen id="teatroBoleteria" class="body"></teatroboleteria-screen>
            <saludseguridadconsultas-screen id="saludSeguridadConsultas" class="body"></saludseguridadconsultas-screen>
            <saludseguridaddenuncia-screen id="saludSeguridadDenuncia" class="body"></saludseguridaddenuncia-screen>
            <macro-screen id="macro" class="body"></macro-screen>
            <cinenosotros-screen id="cineNosotros" class="body"></cinenosotros-screen>
            <cineedicion-screen id="cineEdicion" class="body"></cineedicion-screen>
            <cinetematicas-screen id="cineTematicas" class="body"></cinetematicas-screen>
            <cineedicionesanteriores-screen id="cineEdicionesAnteriores" class="body"></cineedicionesanteriores-screen>
            <cemapcartilladetalle-screen id="cemapCartillaDetalle" class="body"></cemapcartilladetalle-screen>
            <tvcanales-screen id="tvCanales" class="body"></tvcanales-screen>
            <tvestrenos-screen id="tvEstrenos" class="body"></tvestrenos-screen>
            <tvgrilla-screen id="tvGrilla" class="body"></tvgrilla-screen>
            <adolecencia2020-screen id="adolecencia2020" class="body"></adolecencia2020-screen>
            <adicciones-screen id="adicciones" class="body"></adicciones-screen>
            <hogarinstitucional-screen id="hogarInstitucional" class="body"></hogarinstitucional-screen>
            <hogardescripcion-screen id="hogarDescripcion" class="body"></hogardescripcion-screen>
            <hogarvideoteca-screen id="hogarVideoteca" class="body"></hogarvideoteca-screen>
            <hogarcolabora-screen id="hogarColabora" class="body"></hogarcolabora-screen>
            <mujeresformacion-screen id="mujeresFormacion" class="body"></mujeresformacion-screen>
            <mujeresconstruccion-screen id="mujeresConstruccion" class="body"></mujeresconstruccion-screen>
            <artenosotros-screen id="arteNosotros" class="body"></artenosotros-screen>
            <arteconcursos-screen id="arteConcursos" class="body"></arteconcursos-screen>
            <arteedicion-screen id="arteEdicion" class="body"></arteedicion-screen>
            <arteedicionesanteriores-screen id="arteEdicionesAnteriores" class="body"></arteedicionesanteriores-screen>
            <beneficiossubsidios-screen id="beneficiosSubsidios" class="body"></beneficiossubsidios-screen>
            <beneficiosseguros-screen id="beneficiosSeguros" class="body"></beneficiosseguros-screen>
            <beneficiossepelios-screen id="beneficiosSepelios" class="body"></beneficiossepelios-screen>
            <beneficiosjubilacion-screen id="beneficiosJubilacion" class="body"></beneficiosjubilacion-screen>
            <denunciasformulario-screen id="denunciasFormulario" class="body"></denunciasformulario-screen>
            <turismohoteleslista-screen id="turismoHotelesLista" class="body"></turismohoteleslista-screen>
            <turismohotelesdetalle-screen id="turismoHotelesDetalle" class="body"></turismohotelesdetalle-screen>
            <turismomapa-screen id="turismoMapa" class="body"></turismomapa-screen>
            <fundacionaulas-screen id="fundacionAulas" class="body"></fundacionaulas-screen>
            <fundacioncursos-screen id="fundacionCursos" class="body"></fundacioncursos-screen>
            <fundacionescuelas-screen id="fundacionEscuelas" class="body"></fundacionescuelas-screen>
            <fundacioninstituto-screen id="fundacionInstituto" class="body"></fundacioninstituto-screen>
            <saludcredencial-screen id="saludCredencial" class="body"></saludcredencial-screen>
            <noticiadetalle-screen id="noticiaDetalle" class="body"></noticiadetalle-screen>
            <teatroobras-screen id="teatroObras" class="body"></teatroobras-screen>
            <fundacionmapa-screen id="fundacionMapa" class="body"></fundacionmapa-screen>
            <fundacioncursoslista-screen id="fundacionCursosLista" class="body"></fundacioncursoslista-screen>
            <adolescenciacuadernillos-screen id="adolescenciaCuadernillos" class="body"></adolescenciacuadernillos-screen>
            <compartir-screen id="compartir" class="body"></compartir-screen>
            <teatroreserva-screen id="teatroReserva" class="body"></teatroreserva-screen>
            <pantallahorizontal-screen id="pantallaHorizontal" class="body"></pantallahorizontal-screen>

            <pie-componente class="foot"></pie-componente>

            <alerta-errores></alerta-errores>
            <pantalla-warning id="warning"></pantalla-warning>
            <menu-principal id="menu" class="header"></menu-principal>
            <spinner-loading type="spinner2"></spinner-loading>
            <vervideo-screen type="verVideo"></vervideo-screen>
            <activacion-screen id="activacion" class="body"></activacion-screen>
        `;
    }

    stateChanged(state, name) {
        if (name == MEDIA_CHANGE || name == SCREEN) {
            this.mediaSize = state.ui.media.size;
            this.orientation = state.ui.media.orientation;
            this.layout = getLayout(state).name;
            if (!window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
                if ("standalone" in window.navigator && window.navigator.standalone) {
                    this.style.height = document.documentElement.offsetHeight ? document.documentElement.offsetHeight : window.innerHeight + "px";
                } else {
                    if (state.ui.media.orientation == "portrait") {
                        this.style.height = window.innerHeight < window.innerWidth ? window.innerWidth : window.innerHeight + "px";
                    } else {
                        this.style.height = window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight + "px";
                    }
                }
            }
        }
        this.update();
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
            orientation: {
                type: String,
                reflect: true,
            },
        };
    }
}

window.customElements.define("view-manager", viewManager);

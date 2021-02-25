/** @format */

import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { gridLayout } from "../css/gridLayout";
import { SVGS} from "../../../assets/icons/svgs";
import { gestures } from "../../libs/gestures";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const LEFTMENU_TIMESTAMP = "screen.timeStamp";

export class menuPrincipal extends connect(store, LEFTMENU_TIMESTAMP, MEDIA_CHANGE, SCREEN)(LitElement) {
    constructor() {
        super();
        this.area = "header";
        this.visible = false;
        this.arrastrando = false;
        this.addEventListener("gestures", this.gestos);
        this.current = "";
        this.puntos = null;
    }
    static get styles() {
        return css`
            ${gridLayout}
            :host {
                display: grid;
                grid-auto-flow: column;
                padding: 0 !important;
                background-image: linear-gradient(to right, var(--color-azul-oscuro), var(--primary-color));
            }
            :host([hidden]) {
                display: none;
            }
            #tituloGeneral {
                height: 6vh;
				width: 40vw;
				background-image: url("https://www.uocra.net/App/images/redsocialsinleyenda.gif");
				background-repeat: no-repeat;
				background-position: center right;
                background-size: contain;   
                justify-self: flex-end;
            }
            #tituloMoecra {
                height: 6vh;
				width: 40vw;
				background-image: url("https://www.uocra.net/App/images/moecraLogo.gif");
				background-repeat: no-repeat;
				background-position: center right;
                background-size: contain;   
                justify-self: center;
            }
            div[oculto] {
                display: none;
            }
            h1 {
                margin: 0;
            }
            #opciones {
                justify-content: end;
                grid-gap: 0.6rem;
                padding: .6rem;
            }
            :host(:not([media-size="large"])) #opciones {
                position: fixed;
                top: 0;
                right: -100%;
                height: 100vh;
                width: 60%;
                grid-template-columns: repeat(auto-fit, minmax(3.4rem, 1fr));
                background-image: linear-gradient(to right, var(--primary-color), var(--color-azul-oscuro));
                align-content: start;
                transition: 0.5s all;
                display: grid;
                justify-items: normal;
                z-index: 100;
            }

            :host([media-size="large"]) .menu-button,
            :host([media-size="large"]) #velo {
                display: none;
            }

            #velo {
                position: fixed;
                top: 0;
                right: -100%;
                width: 100vw;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.3);
                z-index: 90;
            }

            .menu-button {
                cursor: pointer;
                stroke: transparent;
                fill: var(--color-blanco);
                display: grid;
                justify-self: flex-start;
            }

            :host([visible]) #velo {
                right: 0;
            }

            :host([arrastrando]) #opciones {
                position: absolute;
                transition: none;
            }
            .hola{
                color: var(--color-gris);
                font-size: 0.7rem;
                justify-self: flex-start; 
            }
            .menuItem {
                background-color: var(--color-blanco);
                color: var(--primary-color);
                cursor: pointer;
                font-size: .5rem;
                border-radius: .4rem;
                padding: 0.2vh 0 .2vh 0;
                grid-gap: 0 !important;
                justify-items: center;
            }
            #carrito{
                justify-self: flex-end; 
            }
            #svgTeatro,#svgMisindicato,#svgSalud,#svgCursos,#svgTeatro,#svgTv,#svgCine
            ,#svgArte,#svgVivienda,#svgDeporte,#svgTurismo,#svgBeneficio,#svgSeccional,#svgCompra,#svgEmpresa,#svgDenuncia
            {
                height: 1.5rem;
                width: 1.5rem;
                stroke: transparent;
                fill: var(--primary-color);
            }
            #svgCarrito{
                height: 1.5rem;
                width: 1.5rem;
                stroke: transparent;
                fill: var(--color-blanco);
            }
            *[hidden] {
                display: none;
            }
        `;
    }
    render()  {
        if (this.puntos){
        return html`
            <div id="velo" @click=${this.toggleMenu}></div>
            <div class="grid column" >
                <div class="grid column" style="justify-content: flex-start;">
                    <div class="menu-button" @click=${this.toggleMenu}>${SVGS["MENU"]}</div>
                    <div class="grid row gridGapPunto2vh" ?hidden="${this.current == 'compras'}">
                        <div class="hola">Hola,</div>
                        <div class="hola">Gerardo!</div>     
                    </div>
                </div>
                <div id="tituloGeneral" ?hidden="${this.current == 'compras'}"></div>
                <div id="tituloMoecra" ?hidden="${this.current != 'compras'}"></div>
                <div id="carrito" ?hidden="${this.current != 'compras'}">${SVGS["CARRITO"]}</div>
            </div>

            <div id="opciones" class="grid fit" @click=${this.toggleMenu}>
                <div class="menu-button">${SVGS["RIGHT"]}</div>
                ${this.puntos.map((item) => {
                    return html` 
                        <div class="menuItem grid row" @click=${this.click} .option="${item.accion}">
                            <div >${SVGS[item.imagen]}</div>
                            <div >${item.nombre}</div>         
                        </div>
                    `
                })}
            </div>
        `;
        }
    }
    gestos(e) {
        if (this.mediaSize != "large") {
            if (e.detail.ACTION == "move") {
                if (e.detail.dx > 0) {
                    this.arrastrando = true;
                    this.opciones.style.right = -e.detail.dx + "px";
                }
            }
            if (e.detail.ACTION == "end" && e.detail.LEFT_TO_RIGHT) {
                this.arrastrando = false;
                if (e.detail.dx > 40) {
                    this.toggleMenu();
                } else {
                    this.opciones.style.right = "0";
                    this.update();
                }
            }
        }
    }
    toggleMenu() {
        this.visible = !this.visible;
        this.opciones.style.right = this.visible ? "0" : "-100%";
        this.update();
    }

    click(e) {
        if (e.currentTarget.option != ""){
            store.dispatch(goTo(e.currentTarget.option));
        }
    }

    stateChanged(state, name) {
        this.current = state.screen.name;
        if (name == SCREEN || name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size;
            this.hidden = true;
            if (isInLayout(state, this.area)) {
                //activo evento de gestos
                this.opciones = this.shadowRoot.querySelector("#opciones");
                gestures(this.opciones, this.gestos, this);
                this.hidden = false;
            }

            this.update();
        }
        if (name == LEFTMENU_TIMESTAMP) {
            this.puntos = state.leftmenu.entities;
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
            visible: {
                type: Boolean,
                reflect: true,
            },
            arrastrando: {
                type: Boolean,
                reflect: true,
            },
            current: {
				type: String,
				reflect: true,
			},
        };
    }
}
window.customElements.define("menu-principal", menuPrincipal);

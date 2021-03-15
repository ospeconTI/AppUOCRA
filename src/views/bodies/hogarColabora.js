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

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class hogarColaboraScreen extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
	constructor() {
		super();
		this.hidden = true;
		this.area = "body";
        this.current = "";
        this.idioma = store.getState().ui.idioma;

        this.item = [
            {Id:1,titulo:"VOLUNTARIOS", cuerpo: "<p>El voluntariado, es una actividad social con diversos objetivos. En este caso en particular, se trata de realizar acciones solidarias, hacia la institución o hacia los niños y las niñas. Estas acciones, deben estar enmarcadas dentro de la dinámica del Hogar, con sus autoridades, con el consentimiento del/a niño/a y con un objetivo.</p>"},
            {Id:2,titulo:"BLANQUERÍA", cuerpo: "<p>Sábanas (Plaza y 1/2) <br>Frazadas (Plaza y 1/2)<br>Cubrecamas (Plaza y 1/2), <br>Toallas<br>Toallones<p>"},
            {Id:3,titulo:"ROPA", cuerpo: "<p>Zapatillas (Nº 28 al 42)<br>Pantuflas (Nº 28 al 42)<br>Calzoncillos (Talles de 6 a 14 años)<br>Pijamas (De talle 6 a M Adulto) <br>Bombachas (Talles de 6 a 14 años) <br>Medias niños/as (Para niños/as con calzado de Nº 28 a Nº 42) <br>Corpiños juveniles niñas (11 a 14 años) <br>Camisetas manga larga (Talle 6 a M Adulto)<br>Remeras (De talle 6 a M Adulto)<br>Pantalón jogging (Talle 3 niño a 38 Adulto)<br>Buzos (De talle 6 a M Adulto)<br>Campera de abrigo (6 a 14 años) <br>Jeans Talle 3 para niño/a a 38 Adulto) Pullovers (De talle 6 a M Adulto)<br>Botas de lluvia (Nº 28 al 42)<br>Paraguas</p>"},
            {Id:4,titulo:"ELEMENTOS DE HIGIENE", cuerpo: "<p>Shampoo, Acondicionador, Papel higiénico, Toallitas femeninas, Desodorante corporal (para niños y niñas), Pasta dental, Cepillo de dientes (para niños/as pequeños y normales medios), Talco para pies, Peine / cepillo, Jabón de tocador, Jabón en polvo, Crema depilatoria (Para rostro y piernas), Producto para piojos, Curitas, Termómetro, Tabletas y aparato para mosquitos, Pañuelo descartables.</p>"},
            {Id:5,titulo:"UTENCILLOS DE COCINA", cuerpo: "<p>Vasos (de plástico), Platos playos y hondos (de plástico o melamina), Tazas (de plástico o melamina), Tenedores (todo de metal o metal con mango de plástico), Cuchillos (todo de metal o metal con mango de plástico), Cucharas (todo de metal o metal con mango de plástico), Cucharas de madera, Cucharitas (todo de metal o metal con mango de plástico), Repasadores, Rejillas, Tapers (Diferentes tamaños), Pizeras, Tablas (plástico), Jarras, Ensaladeras (Diferentes tamaños), Fuentes (Diferentes tamaños), Papel film, Bolsas para freezer, Tender de pie, Licuadora</p>"},
            {Id:6,titulo:"ÚTILES ESCOLARES", cuerpo: "<p>Cuadernos (Tapa dura rayado), Cuadernos (ABC rayado), Repuesto de hoja (Para carpeta rayada nº 3), Lapiz negro, Lápices de colores, Gomas (P/ lápiz negro), Sacapuntas, Boligoma, Plasticola, Lapiceras (tinta azul), Birome (negra y azul), Hojas canson (Nº 5 y Nº 6 (para dibujo)), Separadores de carpeta (Nº 3), Borratinta, Regla (15cm - 20cm), Escuadra, Compás, trasportador, Tijeras, Carpetas (Nº 3), Crayones, Fibras, Temperas (Colores varios), Papel glace (Opaco y brillante), Plastilina (Colores varios), atulinas (Colores varios), Papel afiche (Colores varios), Cartucheras, Mochilas, Folios para carpeta (Nº 3)</p>"},
        ]
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
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://app.uocra.org/images/hogar.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
                border-bottom-left-radius: .5rem;
                border-bottom-right-radius: .5rem;
                padding:0;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h1-menos-size);
                justify-self: center;
                padding-bottom: 1rem;
            }
            #items{
                grid-gap: 1rem !important;
                justify-items: center;
            }
            .item0{
                width: 100%;
                justify-items: center;
                grid-gap: 0 !important;
                padding: 0 !important;
            }
            .item{
                background-color: var(--color-gris-medio);
                height: 5vh;
                width: 80%;
                padding: 0 2vw 0 2vw !important;
                grid-gap: 0 !important;
                cursor: pointer;
                border-radius: .3rem;
            }
            .mas{
                text-align: right; 
            }
            .blanco{
                color: var(--color-blanco);
                fill: var(--color-blanco);
                stroke: transparent;
            }
            .cuerpoNota{
                padding: 0  10vw 0 10vw !important;
                justify-self: flex-start;
                grid-gap: 0 !important;
            }

		`;
	}
	render() {
        if (true) {
            return html`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div style="padding-top:1rem"></div>
                    <div id="subTituloTexto">
                        La fundación se sustenta de donaciones de gente como vos. ¿Qué necesitamos?
                    </div>
                    <div id="opciones">
                        <div id="items" class="grid row">
                            ${this.item.map((item) => {
                            return html` 
                                <div class="grid row item0">
                                    <div class="grid column item blanco" .item="${item.Id}" @click=${this.mostrar}>
                                        <div>${item.titulo}</div>
                                        <div id="mas${item.Id}" class="mas">+</div>
                                    </div>
                                    <div id="cuerpoNota${item.Id}" class="cuerpoNota" hidden>
                                        <div id="elCuerpo${item.Id}"></div>
                                        ${this.elCuerpo(item.Id , item.cuerpo)}            
                                    </div>                  
                                </div>
                            `
                            })}
                        </div>
                    </div>
                    <div style="padding-top:1rem"></div>
 
                </div>
            `;
        }
	}
    elCuerpo(id,cuerpo){
        let div = this.shadowRoot.querySelector("#elCuerpo" + id)
        if (div){
            div.outerHTML = cuerpo
        }
    }
    mostrar(e){
        let r = this.shadowRoot.querySelector("#" + "cuerpoNota" + e.currentTarget.item)
        let mas = this.shadowRoot.querySelector("#" + "mas" + e.currentTarget.item)
        if (r){
            if (!r.hasAttribute("hidden")){
                r.setAttribute("hidden","")
                mas.innerHTML="+"
            }else{
                [].forEach.call(this.shadowRoot.querySelectorAll(".cuerpoNota"), element => {
                    element.setAttribute("hidden", "")
                });
                [].forEach.call(this.shadowRoot.querySelectorAll(".mas"), element => {
                    element.innerHTML="+"
                });
                r.removeAttribute("hidden")
                mas.innerHTML="-"
            }
        }
    }
	stateChanged(state, name) {
		if (name == SCREEN || name == MEDIA_CHANGE) {
			this.mediaSize = state.ui.media.size;
			this.hidden = true;
			this.current = state.screen.name;
			const haveBodyArea = isInLayout(state, this.area);
			const SeMuestraEnUnasDeEstasPantallas = "-hogarColabora-".indexOf("-" + state.screen.name + "-") != -1;
			if (haveBodyArea && SeMuestraEnUnasDeEstasPantallas) {
				this.hidden = false;
			}
			this.update();
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
window.customElements.define("hogarcolabora-screen", hogarColaboraScreen);

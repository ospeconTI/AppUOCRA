import "ol/ol.css";
import { store } from "../../redux/store";
import { Icon, Circle, Fill, Style, RegularShape, Stroke } from "ol/style";
import { Feature, Map, Overlay, View } from "ol/index";
import { OSM, Vector as VectorSource, XYZ } from "ol/source";
import {defaults as defaultControls} from 'ol/control.js';
import {} from "ol";
import { Point } from "ol/geom";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { useGeographic } from "ol/proj";
import { html, LitElement, css } from "lit-element";
import {featureListener} from "../bodies/cemapsMapa"
import {mapaClick} from "../../../src/redux/ui/actions"

export class OLComponent extends LitElement {
    constructor() {
        super();

        this._puntos = [];

        //this._puntos.push([-58.4356338, -34.6064996])
        //this._puntos.push([-58.2567308, -34.723714])

        this.iconStyles = {
            elIcono: new Style({
                image: new Icon({
                    anchor: [0.5, 0.5],
                    anchorXUnits: "fraction",
                    anchorYUnits: "fraction",
                    src: 'https://www.uocra.net/App/images/iconConstruirSalud.gif',
                    scale: [0.1, 0.1],
                }),
            }),
            posicion: new Style({
                image: new Icon({
                    anchor: [0.5, 0.5],
                    anchorXUnits: "fraction",
                    anchorYUnits: "fraction",
                    src: 'https://www.uocra.net/App/images/posicion.gif',
                    scale: [0.1, 0.1],
                }),
            }),
        }
        ;
    }

    firstUpdated() {
        useGeographic();

        const link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "css/ol.css");
        this.shadowRoot.appendChild(link);
        const count = this._puntos.length;
        const features = new Array(count);

        for (var i = 0; i < count; ++i) {
            features[i] = new Feature(new Point(this._puntos[i]));
            if (i>0){
                features[i].setStyle(this.iconStyles["elIcono"]);
            }else{
                features[i].setStyle(this.iconStyles["posicion"]);               
            }
        }

        var source = new VectorSource({
            features: features,
        });

        this.vectorLayer = new VectorLayer({
            source: source,
        });

        this.tileLayer = new TileLayer({
            source: new XYZ({
                url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
            }),

        });

        this.view = new View({
            center: this._puntos[0],
            zoom: 8,
        });

        this.layers = [this.tileLayer, this.vectorLayer];

        this.map = new Map({
            target: this.shadowRoot.querySelector("#map"),
            layers: this.layers,
            view: this.view,
        }); 

        
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
            button[title="Attributions"],
            button[title="Reset rotation"],
            ul {
                display: none;
            }
        `;
    }
    render() {
        return html`<div id="map" style="width:100%;height:100%"></div>`;
    }

    set puntos(value) {
        this._puntos = value;
        const count = this._puntos.length;
        const features = new Array( this._puntos.length > 1 ? this._puntos[0][0] !=0 ? this._puntos.length : this._puntos.length -1 : this._puntos.length);
        let cont = 0

        for (var i = 0; i < count; ++i) {
            if(this._puntos[i][0] != 0){
                features[cont] = new Feature(new Point(this._puntos[i]));
                if (i>0){
                    features[cont].setStyle(this.iconStyles["elIcono"]);    
                }else{
                    features[cont].setStyle(this.iconStyles["posicion"]);  
                    features[cont].getStyle().setZIndex(100);   
                }
                cont ++
            }
        }

        var source = new VectorSource({
            features: features,
        });

        this.vectorLayer = new VectorLayer({
            source: source,
        });

        this.tileLayer = new TileLayer({
            source: new XYZ({
                url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
            }),

        });

        this.layers = [this.tileLayer, this.vectorLayer];

        this.view = new View({
            center: this._puntos.length > 1 ? this._puntos[0][0] !=0 ? this._puntos[0] : this._puntos[1] : this._puntos[0],
            zoom: 8,
        });

        if (this.map) {
            this.shadowRoot.querySelector("#map").innerHTML = "";

            this.map = new Map({
                target: this.shadowRoot.querySelector("#map"),
                layers: this.layers,
                view: this.view,
            });
   
            this.map.on('singleclick', function(evt) { 
                var feature = this.forEachFeatureAtPixel(evt.pixel, function (feature) {
                    //return feature;
                    //featureListener(feature);
                    store.dispatch(mapaClick(feature, evt));
                  });
            });

            var currZoom = this.map.getView().getZoom();
            this.map.on('postrender', function(e) {
                var myZoom = this.getView().getZoom()
                if (myZoom != currZoom){
                    var xx = e.map.getLayers();
                    var iconos = xx.array_[1].values_.source.uidIndex_;
                    var zoomCoef = myZoom < 6 ? 0.08 : (myZoom+2)/100
                    for(let key in iconos){
                        //iconos[key].style_.image_.scale_[0] =  zoomCoef
                        //iconos[key].style_.image_.scale_[1] =  zoomCoef
                        iconos[key].style_.image_.setScale([zoomCoef, zoomCoef])
                    }
                    currZoom = myZoom;
                }   
            });
        }




    }
}

window.customElements.define("ol-map", OLComponent);

import {
    GET,
    GET_SUCCESS,
    GET_ERROR,
    ADD,
    ADD_SUCCESS,
    ADD_ERROR,
    UPDATE,
    UPDATE_SUCCESS,
    UPDATE_ERROR,
    PATCH,
    PATCH_SUCCESS,
    PATCH_ERROR,
    REMOVE,
    REMOVE_SUCCESS,
    REMOVE_ERROR,
    GET_MAPA_LOCALIDAD,
    GET_MAPA_PROVINCIA,
    GET_MAPA_TODOS,
    GET_MAPA_SUCCESS,
    GET_MAPA_ERROR

} from "../cemaps/actions";

import {

} from "../fetchs"

import {
    RESTAdd,
    RESTDelete,
    RESTUpdate,
    RESTPatch
} from "../rest/actions"

import {
    apiRequest
} from "../api/actions"

export const get = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET) {
        let cemaps = [
        {id:1,provinciasId:1,localidadesId:1,longitud:-58.416510,latitud:-34.609363, nombre:"SANATORIO FRANCHIN",direccion:"Bartolomé Mitre 3545",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:2,localidadesId:4,longitud:-58.50494533152994,latitud:-34.482248148166086,nombre:"CEMAP ACASUSO",direccion:"Av.Santa Fe 1086",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:2,localidadesId:3,longitud:-58.355346773852155,latitud:-34.66656645127035,nombre:"CEMAP AVELLANEDA",direccion:"Estanislao Zeballos 1674",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:2,localidadesId:100,longitud:-62.26237063137208,latitud:-38.7201042402835,nombre:"CEMAP BAHIA BLANCA",direccion:"Las Heras 39",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:1,longitud:-58.392774 ,latitud:-34.614011,nombre:"CEMAP BELGRANO",direccion:"Av. Belgrano 1864",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"}, 
        {id:1,provinciasId:2,localidadesId:100,longitud:-58.95768306037708,latitud:-34.157349650331625,nombre:"CEMAP CAMPANA",direccion:"Dellepiane 769",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-65.78290904522264,latitud:-28.461119110968927,nombre:"CEMAP CATAMARCA",direccion:"Junín 54",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-58.01514127581432 ,latitud:-31.38704370993243,nombre:"CEMAP CONCORDIA",direccion:"Espejo 71",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:6,longitud:-64.17971037396404,latitud:-31.416719162079385,nombre:"CEMAP CORDOBA",direccion:"Av. Maipú 48",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-57.09794166052627,latitud:-29.7088600805787,nombre:"CEMAP CORRIENTES",direccion:"Av. España 1408",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-58.056297831688134,latitud:-29.786827255369488,nombre:"CEMAP CURUZU CUATIA",direccion:"Juan de Vera 977",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-58.27829397384724,latitud:-34.802918748758685,nombre:"CEMAP FLORENCIO VARELA",direccion:"San Martin 2631",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-59.10518034931761,latitud:-25.729600831795974,nombre:"CEMAP FORMASA",direccion:"Av. 9 de Julio 440",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-58.638815373859345,latitud:-34.462297524774954,nombre:"CEMAP GENERAL PACHECO",direccion:"Av. Hipolito Irigoyen 1259",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:9,longitud:-63.756185489158746,latitud:-35.65877053610952,nombre:"CEMAP GENERAL PICO",direccion:"Calle 11 Nº 887",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-67.56609004670257,latitud:-39.02761067984191,nombre:"CEMAP GENERAL ROCA",direccion:"Córdoba 1662",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-56.68311237168805,latitud:-27.58257996811924,nombre:"CEMAP ITUZAINGO",direccion:"Perú 1832",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-65.30940734719526,latitud:-24.18036220978682,nombre:"CEMAP JUJUY",direccion:"Santibáñez 1150",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-57.949983745007856,latitud:-34.90534901842309,nombre:"CEMAP LA PLATA",direccion:"Calle 44 Nº 335",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-66.85454424704265,latitud:-29.409057410478635,nombre:"CEMAP LA RIOJA",direccion:"Lamadrid 322",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-58.40289007384858,latitud:-34.763393575163256,nombre:"CEMAP LOMAS DE ZAMORA",direccion:"Av. Hipolito Irigoyen 9264",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-68.88268161808745,latitud:-33.03815469975917,nombre:"CEMAP LUJAN DE CUYO",direccion:"Patricios 285",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-57.56033027372903 ,latitud:-37.989724923065246,nombre:"CEMAP MAR DEL PLATA",direccion:"Olazabal 1470",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-68.83641990275046,latitud:-32.87527058923882,nombre:"CEMAP MENNDOZA",direccion:"Av. 9 de Julio 2381",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-58.416577 ,latitud:-34.609183,nombre:"CEMAP MITRE",direccion:"Bartolomé Mitre 3588",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-58.47355389898362 ,latitud:-34.81619497026056,nombre:"CEMAP MONTE GRANDE",direccion:"Maximo Paz 290",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-58.793038245017094,latitud:-34.650632533042035,nombre:"CEMAP MORENO",direccion:"Zeballos 71/73",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:5,longitud:-58.616394187345755,latitud:-34.650147813326036,nombre:"CEMAP MORON",direccion:"Ing. Boatti 183",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-60.5267535009398,latitud:-31.731401678636086,nombre:"CEMAP PARANA",direccion:"San Juan 172",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-57.08841101819723,latitud:-29.719061023751884,nombre:"CEMAP PASO DE LOS LIBRES",direccion:"Pago Largo 1475",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-58.91294391803748 ,latitud:-34.46183772365447,nombre:"CEMAP PILAR",direccion:"Rivadavia 938",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-68.88264943158056,latitud:-33.03814570569306,nombre:"CEMAP POSADAS",direccion:"La Rioja 2284",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-65.04188155819513,latitud:-42.7646403653579,nombre:"CEMAP PUERTO MADRYN",direccion:"Domec Garcia 402",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-58.25765001617873 ,latitud:-34.72472007434642,nombre:"CEMAP QUILMES",direccion:"San Martín 724",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-69.21196723081299,latitud:-51.62134425346009,nombre:"CEMAP RIO GALLEGOS",direccion:"Alcorta 130",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-60.653768289255005,latitud:-32.94428370112704,nombre:"CEMAP ROSARIO",direccion:"Boulevard Oroño 870",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-58.9832375317599,latitud:-27.455021648414725,nombre:"CEMAP RESISTENCIA",direccion:"Juan B. Justo 453",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-68.53128157580926,latitud:-31.543225130042998,nombre:"CEMAP SAN JUAN",direccion:"Avenida Alem 725 sur",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-58.55483273152297 ,latitud:-34.677301950134044,nombre:"CEMAP SAN JUSTO",direccion:"Juan Domingo Perón 3350",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-58.541951102690895 ,latitud:-34.57697263951746,nombre:"CEMAP SAN MARTIN",direccion:"Caseros 2248",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-58.50428619636764,latitud:-34.5400743722392,nombre:"CEMAP SAN MIGUEL",direccion:"Av. Mitre 80",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-60.220417946912896,latitud:-33.329249160565176,nombre:"CEMAP SAN NICOLAS",direccion:"URQUIZA Nº 114",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-65.41015676067207,latitud:-24.779421464013513,nombre:"CEMAP SALTA",direccion:"Mitre 819",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:12,longitud:-60.73588264693283,latitud:-32.75205554107435,nombre:"CEMAP SAN LORENZO",direccion:"Moreno 756",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:11,longitud:-60.703263445120896,latitud:-31.643330172049104,nombre:"CEMAP SANTA FE",direccion:"Rivadavia 2830",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-66.33999167390037,latitud:-33.294856628878044,nombre:"CEMAP SAN LUIS",direccion:"San Martín 1305",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-64.26781663174997,latitud:-27.786883691278693,nombre:"CEMAP SANTIAGO DEL ESTERO",direccion:"Av. Moreno (Sud) Nº 81",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-65.49703681642606,latitud:-27.16288253495262,nombre:"CEMAP TUCUMAN",direccion:"Tucuman 436",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-65.19898458944972,latitud:-26.825415133018303,nombre:"CEMAP TUCUMAN",direccion:"Monteagudo 446",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-68.34142554415155,latitud:-54.8194495438245,nombre:"CEMAP USHUAIA",direccion:"Intendente Torelli 1228",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-58.38640354422014,latitud:-34.60345549535785,nombre:"URUAGUAY",direccion:"Uruaguay 435",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:7,longitud:-65.46822100272252,latitud:-33.6828777996741,nombre:"CEMAP VILLA MERCEDEZ",direccion:"Marconi 125",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},
        {id:1,provinciasId:1,localidadesId:100,longitud:-59.020855218050514,latitud:-34.096602953336536,nombre:"CEMAP ZARATE",direccion:"Independencia 540",activo: true, telefono:"011 43827171", telMostrar:"011 43827171/84", mail:"uocra@uocra.org", imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif", cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg", urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"}
        ]    
        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: cemaps
            }
          })
        //dispatch(apiRequest(ikePuestosQuery, action.options, GET_SUCCESS, GET_ERROR))
    }
};

export const getMapaTodos = ({
    dispatch, getState
}) => next => action => {
    next(action);
    if (action.type === GET_MAPA_TODOS) {
        let cemaps = getState().cemaps.entities;       
        dispatch({
            type: GET_MAPA_SUCCESS,
            payload: {
                send: 1,
                receive: cemaps
            }
          })
        //dispatch(apiRequest(ikePuestosQuery, action.options, GET_SUCCESS, GET_ERROR))
    }
};
export const getMapaProvincia = ({
    dispatch, getState
}) => next => action => {
    next(action);
    if (action.type === GET_MAPA_PROVINCIA) {
        let arr = getState().cemaps.entities;
        let cemaps = arr.filter(a => a.provinciasId == action.provinciaId);        
        dispatch({
            type: GET_MAPA_SUCCESS,
            payload: {
              send: 1,
              receive: cemaps
            }
          })
        //dispatch(apiRequest(ikePuestosQuery, action.options, GET_SUCCESS, GET_ERROR))
    }
};
export const getMapaLocalidad = ({
    dispatch, getState
}) => next => action => {
    next(action);
    if (action.type === GET_MAPA_LOCALIDAD) {
        let arr = getState().cemaps.entities;
        let cemaps = arr.filter(a => a.localidadesId == action.localidadId);        
        dispatch({
            type: GET_MAPA_SUCCESS,
            payload: {
                send: 1,
                receive: cemaps
            }
          })
        //dispatch(apiRequest(ikePuestosQuery, action.options, GET_SUCCESS, GET_ERROR))
    }
};

export const add = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === ADD) {
        //dispatch(RESTAdd(ikePuestos, action.body, ADD_SUCCESS, ADD_ERROR, action.token))
    }
};

export const update = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === UPDATE) {
        //dispatch(RESTUpdate(ikePuestos, action.id, action.body, UPDATE_SUCCESS, UPDATE_ERROR, action.token))
    }
};

export const patch = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === PATCH) {
        //dispatch(RESTPatch(ikePuestos, action.id, action.body, PATCH_SUCCESS, PATCH_ERROR, action.token))
    }
};

export const remove = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === REMOVE) {
        //dispatch(RESTDelete(ikePuestos, action.id, REMOVE_SUCCESS, REMOVE_ERROR, action.token))
    }
};


export const processGet = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET_SUCCESS) {

    }
};

export const processComand = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === ADD_SUCCESS || action.type === UPDATE_SUCCESS || action.type === REMOVE_SUCCESS || action.type === PATCH_SUCCESS) {

    }
};



export const processError = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET_ERROR || action.type === ADD_ERROR || action.type === UPDATE_ERROR || action.type === REMOVE_ERROR || action.type === PATCH_ERROR) {

    }
};

export const middleware = [get, getMapaTodos, getMapaProvincia, getMapaLocalidad ,add, update, patch, remove, processGet, processComand, processError];
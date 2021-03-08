/** @format */

import {} from "../css/main.css";
import {} from "../css/media.css";
import {} from "../css/openSans.css";
import {} from "../css/fontSizes.css";
import {} from "../css/colors.css";
import {} from "../css/shadows.css";

import { store } from "../src/redux/store";
import { captureMedia } from "./redux/ui/actions";
import { goTo } from "./redux/routing/actions";
import { viewManager } from "./views/manager";
import { register as registerSW, activate as activateSW } from "./libs/serviceWorker";

import {urls as setUrls} from "./redux/ui/actions"

import {get as getNoticias} from "./redux/noticias/actions"
import {get as getTitulo} from "./redux/titulos/actions"
import {get as getBanners} from "./redux/banners/actions"
import {get as getMenues} from "./redux/menues/actions"
import {get as getItems} from "./redux/items/actions"
import {get as getLeftMenu} from "./redux/leftmenu/actions"
import {get as getLocalidades} from "./redux/localidades/actions"
import {get as getProvincias} from "./redux/provincias/actions"
import {get as getServicios} from "./redux/servicios/actions"
import {get as getCemaps} from "./redux/cemaps/actions"
import {get as getZonas} from "./redux/zonas/actions"
import {get as getSeccionales} from "./redux/seccionales/actions"
import {get as getConvenios} from "./redux/convenios/actions"
import {get as getProgramacion} from "./redux/programacion/actions"
import {get as getLeyendas} from "./redux/leyendas/actions"
import {get as getEdicionesAnteriores} from "./redux/edicionesAnteriores/actions"
import {get as getEstrenos} from "./redux/tvEstrenos/actions"
import {get as getGrilla} from "./redux/tvGrilla/actions"
import {get as getAdolecenciaJornadas} from "./redux/adolecenciaJornadas/actions"
import {get as getAdicciones} from "./redux/adicciones/actions"
import {get as getHogarVideos} from "./redux/hogarVideos/actions"
import {get as getMujeresVideos} from "./redux/mujeresVideos/actions"
import {get as getArteEdicionesAnteriores} from "./redux/arteEdicionesAnteriores/actions"

if (process.env.NODE_ENV === "production") {
    registerSW();
    activateSW();
}

store.dispatch(setUrls("http://localhost:8080/","https://app.uocra.org/images/"))

store.dispatch(getNoticias())
store.dispatch(getTitulo())
store.dispatch(getBanners())
store.dispatch(getMenues())
store.dispatch(getItems())
store.dispatch(getLeftMenu())
store.dispatch(getLocalidades())
store.dispatch(getProvincias())
store.dispatch(getServicios())
store.dispatch(getCemaps())
store.dispatch(getZonas())
store.dispatch(getSeccionales())
store.dispatch(getConvenios())
store.dispatch(getProgramacion())
store.dispatch(getLeyendas())
store.dispatch(getEdicionesAnteriores())
store.dispatch(getEstrenos())
store.dispatch(getGrilla())
store.dispatch(getAdolecenciaJornadas())
store.dispatch(getAdicciones())
store.dispatch(getHogarVideos())
store.dispatch(getMujeresVideos())
store.dispatch(getArteEdicionesAnteriores())


store.dispatch(captureMedia());
//store.dispatch(goTo("main"));
store.dispatch(goTo("splash"));
//store.dispatch(goTo("tvCanales"));
//store.dispatch(goTo("emergencias"));

//store.dispatch(goTo("cartilla"));
//store.dispatch(goTo("cemapsMapa"));




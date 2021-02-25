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

if (process.env.NODE_ENV === "production") {
    registerSW();
    activateSW();
}

store.dispatch(setUrls("http://localhost:8080/","https://www.uocra.net/App/images/"))

store.dispatch(getNoticias())
store.dispatch(getTitulo())
store.dispatch(getBanners())
store.dispatch(getMenues())
store.dispatch(getItems())
store.dispatch(getLeftMenu())
store.dispatch(getLocalidades())
store.dispatch(getProvincias())
store.dispatch(getServicios())

store.dispatch(captureMedia());
//store.dispatch(goTo("main"));
store.dispatch(goTo("splash"));
//store.dispatch(goTo("cartilla"));
//store.dispatch(goTo("emergencias"));

//store.dispatch(goTo("claveCambio"));
//store.dispatch(goTo("salud"));




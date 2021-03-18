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

import {get as getLeftMenu} from "./redux/leftmenu/actions"
import {get as getLocalidades} from "./redux/localidades/actions"
import {get as getProvincias} from "./redux/provincias/actions"
import {get as getServicios} from "./redux/servicios/actions"
import {get as getCemaps} from "./redux/cemaps/actions"
import {get as getZonas} from "./redux/zonas/actions"
import {get as getSeccionales} from "./redux/seccionales/actions"
import {get as getUsuarios} from "./redux/usuarios/actions"
import {get as getOnBoarding} from "./redux/onBoarding/actions"

if (process.env.NODE_ENV === "production") {
    registerSW();
    activateSW();
}

store.dispatch(setUrls("https://app.uocra.org/","https://app.uocra.org/images/"))

store.dispatch(getLeftMenu())
store.dispatch(getOnBoarding())
store.dispatch(getLocalidades())
store.dispatch(getProvincias())
store.dispatch(getServicios())
store.dispatch(getCemaps())
store.dispatch(getZonas())
store.dispatch(getSeccionales())
store.dispatch(getUsuarios())






store.dispatch(captureMedia());
//store.dispatch(goTo("main"));
store.dispatch(goTo("splash"));





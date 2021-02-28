/** @format */

import { reducer as uiReducer } from "./ui/reducer";
import { reducer as screenReducer } from "./screens/reducer";
import { reducer as routingReducer } from "./routing/reducer";
import { reducer as apiReducer } from "./api/reducer";
import { reducer as titulosReducer } from "./titulos/reducer";
import { reducer as bannersReducer } from "./banners/reducer";
import { reducer as menuesReducer } from "./menues/reducer";
import { reducer as itemsReducer } from "./items/reducer";
import { reducer as leftmenuReducer } from "./leftmenu/reducer";
import { reducer as noticiasReducer } from "./noticias/reducer";
import { reducer as localidadesReducer } from "./localidades/reducer";
import { reducer as provinciasReducer } from "./provincias/reducer";
import { reducer as serviciosReducer } from "./servicios/reducer";
import { reducer as cemapsReducer } from "./cemaps/reducer";
import { reducer as seccionalesReducer } from "./seccionales/reducer";
import { reducer as zonasReducer } from "./zonas/reducer";

export const rootReducer = (state = {}, action) => {
    return {
        api: apiReducer(state.api, action),
        ui: uiReducer(state.ui, action),
        screen: screenReducer(state.screen, action),
        routing: routingReducer(state.routing, action),
        titulos: titulosReducer(state.titulos, action),
        banners: bannersReducer(state.banners, action),
        menues: menuesReducer(state.menues, action),
        items: itemsReducer(state.items, action),
        leftmenu: leftmenuReducer(state.leftmenu, action),
        noticias: noticiasReducer(state.noticias, action),
        localidades: localidadesReducer(state.localidades, action),
        provincias: provinciasReducer(state.provincias, action),
        servicios: serviciosReducer(state.servicios, action),
        cemaps: cemapsReducer(state.cemaps, action),
        seccionales: seccionalesReducer(state.seccionales, action),
        zonas: zonasReducer(state.zonas, action),
    };
};

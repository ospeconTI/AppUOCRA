/** @format */

import { applyMiddleware, createStore, compose } from "redux";
import { logger } from "redux-logger";
import { rootReducer as reducers } from "./reducers";
import { middleware as ui } from "./ui/middleware";
import { middleware as api } from "./api/middleware";
import { middleware as rest } from "./rest/middleware";
import { middleware as route } from "./routing/middleware";
import { middleware as titulos } from "./titulos/middleware";
import { middleware as banners } from "./banners/middleware";
import { middleware as menues } from "./menues/middleware";
import { middleware as items } from "./items/middleware";
import { middleware as leftmenu } from "./leftmenu/middleware";
import { middleware as noticias } from "./noticias/middleware";
import { middleware as localidades } from "./localidades/middleware";
import { middleware as provincias } from "./provincias/middleware";
import { middleware as servicios } from "./servicios/middleware";
import { middleware as cemaps } from "./cemaps/middleware";
import { middleware as seccionales } from "./seccionales/middleware";
import { middleware as zonas } from "./zonas/middleware";
import { middleware as convenios } from "./convenios/middleware";
import { middleware as programacion } from "./programacion/middleware";
import { middleware as leyendas } from "./leyendas/middleware";
import { middleware as edicionesAnteriores } from "./edicionesAnteriores/middleware";
import { middleware as tvEstrenos } from "./tvEstrenos/middleware";
import { middleware as tvGrilla } from "./tvGrilla/middleware";
import { middleware as adolecenciaJornadas } from "./adolecenciaJornadas/middleware";
import { middleware as adicciones } from "./adicciones/middleware";
import { middleware as hogarVideos } from "./hogarVideos/middleware";
import { middleware as mujeresVideos } from "./mujeresVideos/middleware";
import { middleware as arteEdicionesAnteriores } from "./arteEdicionesAnteriores/middleware";
import { middleware as hoteles } from "./hoteles/middleware";
import { middleware as hotelesBanner } from "./hotelesBanner/middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let mdw = [api, rest, ...ui, ...route, ...menues, ...items, ...titulos, ...banners, ...leftmenu, ...noticias
    , ...localidades, ...provincias, ...servicios, ...cemaps, ...seccionales, ...zonas, ...convenios, ...programacion,
...leyendas, ...edicionesAnteriores, ...tvEstrenos, ...tvGrilla, ...adolecenciaJornadas, ...adicciones, ...hogarVideos,
...mujeresVideos, ...arteEdicionesAnteriores, ...hoteles, ...hotelesBanner];

if (process.env.NODE_ENV !== "production") {
    mdw = [...mdw, logger];
}

const initialData = {};

export const store = createStore(reducers, initialData, composeEnhancers(applyMiddleware(...mdw)));

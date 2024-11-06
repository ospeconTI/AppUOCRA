/** @format */

import { applyMiddleware, createStore, compose } from "redux";
import { logger } from "redux-logger";
import { rootReducer as reducers } from "./reducers";
import { middleware as autorizacion } from "./autorizacion/middleware";
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
import { middleware as cineEdicionesAnteriores } from "./cineEdicionesAnteriores/middleware";
import { middleware as tvEstrenos } from "./tvEstrenos/middleware";
import { middleware as tvGrilla } from "./tvGrilla/middleware";
import { middleware as adolecenciaJornadas } from "./adolecenciaJornadas/middleware";
import { middleware as adicciones } from "./adicciones/middleware";
import { middleware as hogarVideos } from "./hogarVideos/middleware";
import { middleware as mujeresVideos } from "./mujeresVideos/middleware";
import { middleware as arteEdicionesAnteriores } from "./arteEdicionesAnteriores/middleware";
import { middleware as hoteles } from "./hoteles/middleware";
import { middleware as hotelesBanner } from "./hotelesBanner/middleware";
import { middleware as usuarios } from "./usuarios/middleware";
import { middleware as onBoarding } from "./onBoarding/middleware";
import { middleware as teatroObras } from "./teatroObras/middleware";
import { middleware as fundacionCursos } from "./fundacionCursos/middleware";
import { middleware as fundacionCentros } from "./fundacionCentros/middleware";
import { middleware as fundacionEspecialidades } from "./fundacionEspecialidades/middleware";
import { middleware as adolescenciaCuadernillos } from "./adolescenciaCuadernillos/middleware";
import { middleware as coberturas } from "./coberturas/middleware";
import { middleware as mail } from "./mail/middleware";
import { middleware as arteEdicionesActuales } from "./arteEdicionesActuales/middleware";
import { middleware as cineEdicionesActuales } from "./cineEdicionesActuales/middleware";
import { middleware as podcast } from "./podcast/middleware";
import { middleware as credencialSindical } from "./credencialSindical/middleware";
import { middleware as afiliacionSindical } from "./afiliacionSindical/middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let mdw = [
	api,
	rest,
	...autorizacion,
	...ui,
	...route,
	...menues,
	...items,
	...titulos,
	...banners,
	...leftmenu,
	...noticias,
	...localidades,
	...provincias,
	...servicios,
	...cemaps,
	...seccionales,
	...zonas,
	...convenios,
	...programacion,
	...leyendas,
	...cineEdicionesAnteriores,
	...tvEstrenos,
	...tvGrilla,
	...adolecenciaJornadas,
	...adicciones,
	...hogarVideos,
	...mujeresVideos,
	...arteEdicionesAnteriores,
	...hoteles,
	...hotelesBanner,
	...usuarios,
	...onBoarding,
	...teatroObras,
	...fundacionCursos,
	...fundacionCentros,
	...fundacionEspecialidades,
	...adolescenciaCuadernillos,
	...coberturas,
	...mail,
	...arteEdicionesActuales,
	...cineEdicionesActuales,
	...podcast,
	...credencialSindical,
	...afiliacionSindical,
];

if (process.env.NODE_ENV !== "production") {
	mdw = [...mdw, logger];
}

const initialData = {};

export const store = createStore(reducers, initialData, composeEnhancers(applyMiddleware(...mdw)));

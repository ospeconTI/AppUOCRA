/** @format */

import { reducer as autorizacionReducer } from "./autorizacion/reducer";
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
import { reducer as conveniosReducer } from "./convenios/reducer";
import { reducer as programacionReducer } from "./programacion/reducer";
import { reducer as leyendasReducer } from "./leyendas/reducer";
import { reducer as cineEdicionesAnterioresReducer } from "./cineEdicionesAnteriores/reducer";
import { reducer as tvEstrenosReducer } from "./tvEstrenos/reducer";
import { reducer as tvGrillaReducer } from "./tvGrilla/reducer";
import { reducer as adolecenciaJornadasReducer } from "./adolecenciaJornadas/reducer";
import { reducer as adiccionesReducer } from "./adicciones/reducer";
import { reducer as hogarVideosReducer } from "./hogarVideos/reducer";
import { reducer as mujeresVideosReducer } from "./mujeresVideos/reducer";
import { reducer as arteEdicionesAnterioresReducer } from "./arteEdicionesAnteriores/reducer";
import { reducer as hotelesReducer } from "./hoteles/reducer";
import { reducer as hotelesBannerReducer } from "./hotelesBanner/reducer";
import { reducer as usuariosReducer } from "./usuarios/reducer";
import { reducer as onBoardingReducer } from "./onBoarding/reducer";
import { reducer as teatroObrasReducer } from "./teatroObras/reducer";
import { reducer as fundacionCursosReducer } from "./fundacionCursos/reducer";
import { reducer as fundacionEspecialidadesReducer } from "./fundacionEspecialidades/reducer";
import { reducer as fundacionCentrosReducer } from "./fundacionCentros/reducer";
import { reducer as adolescenciaCuadernillosReducer } from "./adolescenciaCuadernillos/reducer";
import { reducer as coberturasReducer } from "./coberturas/reducer";

export const rootReducer = (state = {}, action) => {
	return {
		autorizacion: autorizacionReducer(state.autorizacion, action),
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
		convenios: conveniosReducer(state.convenios, action),
		programacion: programacionReducer(state.programacion, action),
		leyendas: leyendasReducer(state.leyendas, action),
		cineEdicionesAnteriores: cineEdicionesAnterioresReducer(state.cineEdicionesAnteriores, action),
		tvEstrenos: tvEstrenosReducer(state.tvEstrenos, action),
		tvGrilla: tvGrillaReducer(state.tvGrilla, action),
		adolecenciaJornadas: adolecenciaJornadasReducer(state.adolecenciaJornadas, action),
		adicciones: adiccionesReducer(state.adicciones, action),
		hogarVideos: hogarVideosReducer(state.hogarVideos, action),
		mujeresVideos: mujeresVideosReducer(state.mujeresVideos, action),
		arteEdicionesAnteriores: arteEdicionesAnterioresReducer(state.arteEdicionesAnteriores, action),
		hoteles: hotelesReducer(state.hoteles, action),
		hotelesBanner: hotelesBannerReducer(state.hotelesBanner, action),
		usuarios: usuariosReducer(state.usuarios, action),
		onBoarding: onBoardingReducer(state.onBoarding, action),
		teatroObras: teatroObrasReducer(state.teatroObras, action),
		fundacionCursos: fundacionCursosReducer(state.fundacionCursos, action),
		fundacionEspecialidades: fundacionEspecialidadesReducer(state.fundacionEspecialidades, action),
		fundacionCentros: fundacionCentrosReducer(state.fundacionCentros, action),
		adolescenciaCuadernillos: adolescenciaCuadernillosReducer(state.adolescenciaCuadernillos, action),
		coberturas: coberturasReducer(state.coberturas, action),
	};
};

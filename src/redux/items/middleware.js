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
    REMOVE_ERROR

} from "../items/actions";

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
        let items = [
            {Id:"1", tipo:"cultura", titulo:"QUIENES SOMOS?", cuerpo: "<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"2", tipo:"cultura", titulo:"NUESTRA SALA", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"3", tipo:"tv", titulo:"¿QUÉ ES CONSTRUIR TV?", cuerpo: "<p><b>Un Canal Temático</b></p><p>Construir TV es un canal temático que propone una mirada innovadora y positiva acerca del mundo del trabajo y de los trabajadores, a través de contenidos multiplataforma de calidad internacional. Una programación que recorre toda la cadena de valor del mundo laboral y tiene como objetivo la revalorización de la cultura del trabajo. En Construir TV entendemos como trabajador a cada persona que, con su esfuerzo cotidiano, aporta y modifica la sociedad en la que vive, ya sea a través de su profesión, su oficio o su arte.</p><p><b>Nuestros Cuatro Ejes</b></p><p>Con una amplia variedad de trabajos y trabajadores en pantalla y una mirada social, los contenidos están basados en 4 ejes temáticos: <b>Gente –Educación – Industria – Dimensión Social.</b></p><p><li><b>Gente</b></li></p><p>Historias de vida contadas en primera persona donde los protagonistas son los propios trabajadores. Recorremos su realidad y sus sueños a traves de historias intímas y conmovedoras que dejan al descubierto el aporte de cada individuo en la concreción de una​ obra o proyecto. ​</p><p><li><b>Educación</b></li></p><p>La formación contribuye a mejorar la competitividad y la calidad de vida.​ ​Contenidos pensados para educar desde el entretenimiento, formatos innovadores que apuestan a la educación como pieza fundamental del progreso individual y de la sociedad en su conjunto.</p><p><li><b>Industria</b></li></p><p>La industria es el escenario de encuentro entre recursos técnologicos y humanos. En este eje se evidencia el rol del emprendedorismo, la actividad empresarial, los avances cientificos y tecnologicos, la participación del estado, el rol sindical y el capital humano. Progamas pensados para abordar cada uno de estos roles y, principalmente, el resultado de la interacción de todos ellos en el desarrrollo de una industria.</p><p><li><b>Dimensión Social</b></li></p><p>Pilar fundamental en la construcción del tejido productivo de un país, en Construir TV entendemos el aspecto social como la base sobre la cual deben construirse mejores sociedades. Documentales de alto impacto y mirada internacional que llevan a la pantalla temas como: Solidaridad: las personas se unen, arman redes y hacen que las cosas que parecían imposibles se hagan realidad.</p>"},
            {Id:"4", tipo:"tv", titulo:"SUMATE A NUESTRA COMUNIDAD", cuerpo:"<p>Unite a la Comunidad de Construir TV en <b>Facebook!</b></p><p>COMUNIDAD CONSTRUIR TV</p><p>CONSTRUIR MADERA</p><p>CONSTRUIR ACCESIBILIDAD</p><p>CONSTRUIR NATURAL</p><p>CONSTRUIR HUERTAS Y JARDINES</p>"},
            {Id:"5", tipo:"moecra", titulo:"QUIENES SOMOS?", cuerpo: "<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"6", tipo:"moecra", titulo:"COMO COMPRAR?", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"7", tipo:"salud", titulo:"MODELO DE ATENCIÓN", cuerpo: "<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"8", tipo:"salud", titulo:"PLAN MATERNO INFANTIL", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"9", tipo:"salud", titulo:"AFILIACIONES", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"10", tipo:"salud", titulo:"SANATORIO FRANCHÍN", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"11", tipo:"sindicato", titulo:"ASUNTOS LABORALES", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"12", tipo:"sindicato", titulo:"JUBILACIONES", cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
            {Id:"13", tipo:"saludSeguridad", titulo:"OBJETIVOS Y ÁREAS DE TRABAJO", cuerpo: "El Departamento de Salud y Seguridad tiene como objetivo desarrollar acciones técnico-profesionales y sindicales para mejorar las condiciones y medioambiente de trabajo de las y los trabajadores constructores.<p>Contamos con 4 áreas de trabajo:</p><li><b>Gestión y Relevamiento de Obras</b> que se encarga de procesar la información obtenida de las acciones de relevamiento en las obras en construcción.<li><b>Coordinación, Comunicación e Información</b> que coordina y articula actividades institucionales con diferentes organismos.</li><li><b>Ambiente y Desarrollo Sustentable </b>que tiene por objetivo difundir y promover el uso de las Buenas Prácticas Ambientales en la construcción.</li><li><b>Capacitación y Asistencia Técnica</b> que colabora con la generación, puesta en marcha y seguimiento de Comités de Salud y Seguridad, a fin de ayudar a establecer medidas preventivas en grandes obras.</li>"},
            {Id:"14", tipo:"saludSeguridad", titulo:"PROTOCOLOS COVID-19", cuerpo:"En el marco de un trabajo en conjunto con las cámaras empresarias representativas de la industria de la construcción, la UOCRA elaboró una serie de protocolos con recomendaciones prácticas de protección y prevención para favorecer la protección de la Salud y Seguridad de las trabajadoras y los trabajadores para hacer frente al COVID-19. <p><li><b>Nuevo Protocolo Covid-19 | Industria del Hormigón Elaborado versión 2.0</b></li></p><p><li><b>Protocolo de Recomendaciones Prácticas Covid-19 | Obras de redes de acceso, distribución y transporte bajo CCT 577/10 Versión 2.0</b></li></p><p><li><b>Protocolo de Recomendaciones Prácticas para la Industria de la Construcción Versión 3.0</b></li></p><p><li><b>Nuevo protocolo Covid-19 | Industria del Hormigón Elaborado</b></li></p><p><li><b>Protocolo de recomendaciones prácticas Covid-19 / Industria de la construcción - Traslado de los trabajadores</li></p><p><li><b>Protocolo de Recomendaciones prácticas Covid-19 | Obras de redes de acceso, distribución y trasporte bajo CCT 557/10</b></li></p><p><li><b>Protocolo de RecomendacionesPrácticas para la Industria de la Construcción Versión 2.0</b></li></p><p><li><b>Protocolo de Recomendaciones Prácticas para la Industria de la Construcción Versión 1.0</b></li></p>"},
            {Id:"15", tipo:"ivt", titulo:"ACCEDER A UNA VIVIENDA", cuerpo:"<p>Las inscripciones para acceder a una vivienda se realizan a través de las seccionales de UOCRA correspondientes, donde la persona será atendida por un representante del IVT.</p><p>La inscripción podrá realizarse una vez que la obra se encuentre en marcha.</p><p>Requisitos:</p><p><li>Estar inscriptos en el Instituto Provincial de Vivienda correspondiente a la Obra.</li></p><p><li>No tener vivienda propia.</li></p><p><li>Constituir un grupo familiar.</li></p>"},
            {Id:"16", tipo:"ivt", titulo:"OBRAS EN EJECUCIÓN", cuerpo:"<p><b>27 Viviendas (Pre-Adjudicadas)</b> en Olavarría, Provincia de Buenos Aires.</p>"},
            {Id:"17", tipo:"ivt", titulo:"OBRAS A COMENZAR", cuerpo:"<p><b>300 Viviendas</b> en Cerrillo, Provincia de Salta.</p>"},
            {Id:"18", tipo:"ivt", titulo:"OBRAS EN PROYECTO", cuerpo:"<p><b>50 Viviendas en Tapalqué</b>, Provincia de Buenos Aires.</p><p><b>50 Viviendas en Tres Arroyos</b>, Provincia de Buenos Aires.</p><p><b>98 Viviendas en San Nicolás</b>, Provincia de Buenos Aires.</p><p><b>1200 Viviendas en Posadas</b>, Provincia de Misiones.</p><p><b>50 Viviendas en Azul</b>, Provincia de Buenos Aires.</p>"},
        ]

        dispatch({
            type: GET_SUCCESS,
            payload: {
              send: 1,
              receive: items
            }
        })
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

export const middleware = [get, add, update, patch, remove, processGet, processComand, processError];
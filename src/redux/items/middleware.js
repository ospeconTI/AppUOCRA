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
        let items = [{Id:"1", tipo:"cultura", titulo:"QUIENES SOMOS?", cuerpo: "<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},
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
            {Id:"19", tipo:"adolecencia", titulo:"¿QUIENES SOMOS?", cuerpo:"<p>El reconocimiento de los adolescentes como sujetos de derecho es el punto de partida para brindar atención y acompañar a las y los jóvenes en el proceso de toma de decisiones autónomas y libres, y en el manejo de sus posibles consecuencias.</p><p>Para ello, se busca generar un espacio de atención que garantice la confidencialidad basada en el secreto médico profesional, como pilar en la relación sanitaria.</p><p>Dentro de las disciplinas que integran el equipo de adolescencia se encuentran: <b>psicología, trabajo social, hebiatría, ginecología, obstetricia, endocrinología, psiquiatría, nutrición, entre otras</b></P>"},
            {Id:"20", tipo:"adolecencia", titulo:"¿DISCIPLINAS DE TRABAJO?", cuerpo:"<p>Las <b>Jornadas en Adolescencia</b> tienen como objetivo abordar los nuevos desafíos en la vida de los adolescentes desde la mirada de  profesionales especializados en las diversas temáticas vinculadas.</p>"},
            {Id:"21", tipo:"adolecencia", titulo:"ESCRIBI TU CONSULTA", cuerpo:"<p>Hace click en el link y envia por mail tu consulta <b><a href='mailto:adolecencia@uocra.org?subject=Consulta por Adolecencia'>ENVIAR MAIL</a></b></p>"},
            {Id:"22", tipo:"adicciones", titulo:"¿QUIENES SOMOS?", cuerpo:"<p>El <b>Equipo de Prevención de Adicciones</b> se propone luchar contra las adicciones que enferman y estigmatizan al sujeto tanto en el ámbito del trabajo, así como en el resto de los ámbitos que conforman su vida cotidiana.</P>"},
            {Id:"23", tipo:"adicciones", titulo:"VOS PODES AYUDAR", cuerpo:"<p>Si conoces a un compañero o compañera en tu lugar de trabajo que necesite ayuda, el Equipo de Prevención de Adicciones recomienda:</p><p><li>Contené al compañero/a con una actitud solidaria, sin juzgar, ni discriminar.</li></p><p><li>Acércate a tu seccional de UOCRA.</li></p><p><li>Apoyate en tu sindicato para acompañar y defender la fuente de trabajo.</li></p><p><li>Comentalo con tu delegado o delegada de obra para ayudarlo.</li></p><p><li>Consultá a un médico del centro de atención primaria de Construir Salud más cercano.</li></p><p><li>Promové una actitud solidaria.</li></p>"},
            {Id:"24", tipo:"adicciones", titulo:"LINES DE CONTENCIÓN", cuerpo:"<p>Para Casos de Consutmo Problemático:</p><p><li><b>Construir Salud</b> 0800 – 222- 0123.</li></p><p><li><b>Secretaría de Políticas Integrales sobre Drogas (SEDRONAR)</b> 141 para hablar con profesionales de forma gratuita, anónima y en todo el país.</li><p>"},
            {Id:"25", tipo:"adicciones", titulo:"VOS PODÉS AYUDAR", cuerpo:"<p>Las <b>Jornadas en Adicciones</b> buscan generar espacios de Sensibilización y Capacitación sobre la Problemática de Adicciones en el Mundo Laboral.<p>"},
            {Id:"26", tipo:"adicciones", titulo:"ESCRIBI TU CONSULTA", cuerpo:"<p>Hace click en el link y envia por mail tu consulta <b><a href='mailto:adolecencia@uocra.org?subject=Consulta por Adicciones'>ENVIAR MAIL</a></b></p>"},
            {Id:"27", tipo:"hogar", titulo:"¿QUIENES SOMOS?", cuerpo:"<p>A fines de 1998 preocupados por la situación de exclusión y fragmentación social que atraviesa un número considerable de niñas/os y adolescentes menores de dieciocho años que viven en situación de calle, la Red Social UOCRA crea un proyecto institucional destinado a la creación de una fundación dirigida a la prevención, información, promoción y atención integral de las necesidades de la niñez y adolescencia que vive en las condiciones señaladas.</p><p>En este contexto se concibe la creación de un hogar convivencial para la atención integral de las necesidades básicas insatisfechas de esos niños.</p><p>El 2 de diciembre de 1999 se constituye formalmente la <b>Fundación Construir Futuro</b> y a los pocos meses, el 4 de abril de 2000, se cristaliza el proyecto de creación de hogar convivencial con la inauguración del <b>Hogar Peldaños</b>.</p>"},
            {Id:"28", tipo:"hogar", titulo:"NUESTRA MISIÓN", cuerpo:"<p>Consiste en un Hogar para Niños/as y Adolescentes donde se garantiza albergue, alimentación, vestimenta, atención de la salud; asegurando la educación primaria, secundaria u otras modalidades de capacitación, recreación y esparcimiento, de acuerdo con las características del niño, niña y/o adolescente, implementando estrategias de fortalecimiento de los vínculos familiares y comunitarios, con el objetivo de propender a un egreso en las mejores condiciones posibles o de auto valimiento.</p><p>La población objetivo del Hogar Peldaños es de niños, niñas y adolescentes de ambos sexos que hayan sido víctimas de maltrato, como cualquier daño físico o psicológico no accidental, ocasionado por sus padres y/ o responsables de su cuidado, que ha ocurrido como resultado de acciones físicas, sexuales o emocionales de omisión o comisión.</p>"},
            {Id:"29", tipo:"hogar", titulo:"UBICACIÓN Y CONTACTO", cuerpo:"<p>Hogar Peldaños - Pringles 30/34, CABA</p><p>Teléfono al 4981-9483</p>"},
            {Id:"30", tipo:"mujeres", titulo:"¿QUIENES SOMOS?", cuerpo:"<p><b>UOCRA Mujeres</b> es un espacio que asiste a trabajadoras constructoras, delegadas y trabajadoras de la Red Social UOCRA en la defensa de sus derechos laborales y su formación profesional.</p><p>Integrado por profesionales de diferentes áreas, el equipo de UOCRA Mujeres trabaja en la incorporación de la mujer trabajadora a la industria de la construcción a través de diversas acciones:</p></p><p><li>Desarrollo de programas de formación y capacitación sindical.</li><li>Creciente incorporación de cláusulas de negociación colectivas con perspectiva de género.</li><li>Elaboración de protocolos contra la violencia y el acoso.</li><li>Inclusión especifica de contenidos de salud y seguridad en el trabajo.</li></p><p>UOCRA Mujeres reivindica su compromiso en la lucha contra la violencia y el acoso en el mundo del trabajo, y  promueve la creación de espacios de trabajo seguros, inclusivos y libres de violencia.</p>"},
            {Id:"31", tipo:"mujeres", titulo:"VOS PODÉS AYUDAR", cuerpo:"<p>Ver PROTOCOLO</p>"},
            {Id:"32", tipo:"mujeres", titulo:"LÍNEAS DE CONTENCIÓN ", cuerpo:"<p>Construir Salud 0800 – 222- 0123</p>"},
            {Id:"33", tipo:"mujeres", titulo:"ESCRIBI TU CONSULTA", cuerpo:"<p>Hace click en el link y envia por mail tu consulta <b><a href='mailto:adolecencia@uocra.org?subject=Consulta por Adicciones'>ENVIAR MAIL</a></b></p>"},
            {Id:"34", tipo:"deportes", titulo:"INSTALACIONES Y SERVICIOS", cuerpo:"<p><LI>Espacios con Mesas y Sombrillas</LI></p><p><LI>Dos canchas de Fútbol 11</LI></p><p><LI>Vestuarios con Duchas y Guardarropas</LI></p><p><LI>Confitería</LI></p><p><LI>Estacionamiento para 300 vehículos</LI></p>"},
            {Id:"35", tipo:"deportes", titulo:"REQUISITOS Y DOCUMENTACIÓN", cuerpo:"<p>Pueden acceder de manera gratuita afiliados al sindicato y su grupo familiar, empleados de UOCRA y OSPECON. En todos los casos deberán presentar recibo de sueldo (con aporte sindical para afiliados) y DNI.</p><p>*Disponibilidad sujeta a las disposiciones oficiales de circulación vinculadas a la pandemia de Covid19.</p>"},
            {Id:"36", tipo:"deportes", titulo:"ESCRIBI TU CONSULTA", cuerpo:"<p>Hace click en el link y envia por mail tu consulta <b><a href='mailto:adolecencia@uocra.org?subject=Consulta por Adicciones'>ENVIAR MAIL</a></b></p>"},

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
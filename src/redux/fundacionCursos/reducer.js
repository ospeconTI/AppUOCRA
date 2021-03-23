import {
    GET_SUCCESS,
    GET_ERROR,
    PATCH_SUCCESS,
    PATCH_ERROR,
    UPDATE_SUCCESS,
    UPDATE_ERROR,
    ADD_SUCCESS,
    ADD_ERROR,
    REMOVE_SUCCESS,
    REMOVE_ERROR,
    EDIT,
    FUNDACION_CURSO,
    SELECCION,
    GETCONCENTROS_SUCCESS,
    GETCONCENTROS_ERROR,
} from "../fundacionCursos/actions";


const initialState = {
    entities: null,
    timeStamp: null,
    removeTimeStamp: null,
    updateTimeStamp: null,
    addTimeStamp: null,
    errorTimeStamp: null,
    commandErrorTimeStamp: null,
    editTimeStamp: null,
    fundacionCurso: null,
    fundacionCursoTimeStamp: null,
    seleccion: {
        especialidad: null,
        provincia: null,
        localidad: null,
        duracion:null,
        tipo:null,
    },
    entityConCentros:null,
    conCentrosTimeStamp: null,
    conCentrosErrorTimeStamp: null,


};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case GET_SUCCESS:
            newState.entities = action.payload.receive
            newState.timeStamp = (new Date()).getTime();
            break;
        case EDIT:
            newState.editTimeStamp = (new Date()).getTime();
            newState.entities.currentItem = action.item
            newState.modo = action.modo;
            break;
        case UPDATE_SUCCESS:
            newState.updateTimeStamp = (new Date()).getTime();
            break;
        case PATCH_SUCCESS:
            newState.updateTimeStamp = (new Date()).getTime();
            break;
        case REMOVE_SUCCESS:
            newState.removeTimeStamp = (new Date()).getTime();
            break;
        case ADD_SUCCESS:
            newState.addTimeStamp = (new Date()).getTime();
            break;
        case GET_ERROR:
            newState.errorTimeStamp = (new Date()).getTime();
            break;
        case UPDATE_ERROR:
        case REMOVE_ERROR:
        case PATCH_ERROR:
        case ADD_ERROR:
            newState.commandErrorTimeStamp = (new Date()).getTime();
            break;
        case FUNDACION_CURSO:
            newState.fundacionCurso = action.registro;
            newState.ffundacionCursoTimeStamp = (new Date()).getTime();
            break;
        case SELECCION:
            newState.seleccion.especialidad = action.especialidad;
            newState.seleccion.provincia = action.provincia;
            newState.seleccion.localidad = action.localidad;
            newState.seleccion.duracion = action.duracion;
            newState.seleccion.tipo = action.tipo;
            break
        case GETCONCENTROS_SUCCESS:
            newState.entityConCentros = action.payload.receive
            newState.conCentrosTimeStamp = (new Date()).getTime();
            break
        case GETCONCENTROS_ERROR:
            newState.conCentrosErrorTimeStamp = (new Date()).getTime();
            break
    }
    return newState;
};
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
    GET_MAPA_SUCCESS,
    GET_MAPA_ERROR
} from "../seccionales/actions";


const initialState = {
    entities: null,
    timeStamp: null,
    removeTimeStamp: null,
    updateTimeStamp: null,
    addTimeStamp: null,
    errorTimeStamp: null,
    commandErrorTimeStamp: null,
    editTimeStamp: null,
    entityMapa: null,
    MapaTimeStamp: null,
    MapaErrorTimeStamp: null
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
        case GET_MAPA_SUCCESS:
            newState.entityMapa = action.payload.receive
            newState.MapaTimeStamp = (new Date()).getTime();
            break;
        case GET_MAPA_ERROR:
            newState.entityMapa = null
            newState.MapaErrorTimeStamp = (new Date()).getTime();
            break;
    }
    return newState;
};
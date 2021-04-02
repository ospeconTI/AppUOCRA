import { showSpinner, hideSpinner } from "../redux/api/actions"

export const fetchJSON = (dispatch ,url, successAction, errorAction) => {
    dispatch(showSpinner())
    fetch('/json/' + url).then(response =>  { 
       return response.json(); })
        .catch(error => {
          dispatch(hideSpinner())
          dispatch({
            type: errorAction
        })        
      })
      .then(json => {
        dispatch(hideSpinner())
        dispatch({
            type: successAction,
            payload: {
              send: 1,
              receive: json
            }
        })  
    });
}
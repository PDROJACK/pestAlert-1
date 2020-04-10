import { suggestionsService } from '../services';
import { suggestionsConstants } from './constants';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const createSuggestion = (data) => {
    return dispatch => {
        dispatch(showLoading())
        // suggestionsService.uploadPlantImage(data).then(data => {
        //     dispatch({type: plantImageConstants.UPLOAD_PLANT_IMAGE, payload: data})
        //     setTimeout(() => {
        //         dispatch(hideLoading());
        //     }, 1000);
        //     return {type: plantImageConstants.UPLOAD_PLANT_IMAGE, payload: data};
        // })
    }
}

const getAllSuggestions = () => {
    return dispatch => {
        suggestionsService.getAllSuggestions().then(data => {
            dispatch({ type: suggestionsConstants.GET_ALL_SUGGESTIONS, payload: data })
            return { type: suggestionsConstants.GET_ALL_SUGGESTIONS, payload: data }
        });
    }
}

export const suggestionsActions = {
    createSuggestion, getAllSuggestions
};
import { plantImageService } from '../services';
import { plantImageConstants } from './constants';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const uploadPlantImage = (data) => {
    return dispatch => {
        dispatch(showLoading())
        plantImageService.uploadPlantImage(data).then(data => {
            dispatch({type: plantImageConstants.UPLOAD_PLANT_IMAGE, payload: data})
            setTimeout(() => {
                dispatch(hideLoading());
            }, 1000);
            return {type: plantImageConstants.UPLOAD_PLANT_IMAGE, payload: data};
        })
    }
}

const getAllPlantImages = () => {
    return dispatch => {
        plantImageService.getAllPlantImages().then(data => {
            dispatch({ type: plantImageConstants.GETALL_PLANT_IMAGES, payload: data })
            return { type: plantImageConstants.GETALL_PLANT_IMAGES, payload: data }
        });
    }
}

export const plantImageActions = {
    uploadPlantImage, getAllPlantImages
};
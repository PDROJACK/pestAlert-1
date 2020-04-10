import { api, handle } from '../helpers/api';

const uploadPlantImage = data => api.post('/farmer/image', data, {
    headers: {
        'content-type': 'multipart/form-data'
    }
}).then(handle)

const getAllPlantImages = () => api.get('/farmer/image').then(handle);

export const plantImageService = {
    uploadPlantImage, getAllPlantImages
}
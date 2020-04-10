import { api, handle } from '../helpers/api';

const createSuggestion = data => api.post('/expert/suggestion', data).then(handle)

const getAllSuggestions = () => api.get('/expert/suggestion').then(handle);

export const suggestionsService = {
    createSuggestion, getAllSuggestions
};
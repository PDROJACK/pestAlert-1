import { suggestionsConstants } from '../actions/constants';

let suggestions = {
  message: {
    title: "",
    value: false
  },
  data: []
}

export function suggestionsReducer(state = suggestions, action) {
  switch (action.type) {
    case suggestionsConstants.GET_ALL_SUGGESTIONS: {
      const updated = {
        message: {
          title: "",
          value: false
        },
        data: [
          ...action.payload
        ]
      }
      return updated;
    }
    case suggestionsConstants.UPLOAD_PLANT_IMAGE: {
       const updated = {
        message: {
          title: "Created",
          value: true
        },
        data: [
          ...state.data, action.payload
        ]
      }
      return updated;
    }
    default:
      return state
  }
}
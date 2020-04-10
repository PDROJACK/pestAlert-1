import { plantImageConstants } from '../actions/constants';

let plantImages = {
  message: {
    title: "",
    value: false
  },
  data: []
}

export function plantImageReducer(state = plantImages, action) {
  switch (action.type) {
    case plantImageConstants.GETALL_PLANT_IMAGES: {
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
    case plantImageConstants.UPLOAD_PLANT_IMAGE: {
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
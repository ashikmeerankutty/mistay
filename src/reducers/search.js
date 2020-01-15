import { SET_CHECKIN_TIME, SET_CHECKOUT_TIME, SET_SELECTED_LOCATION } from '../actions/actionTypes'

const initialState = {
  checkInDate: null,
  checkInTime: null,
  checkOutDate: null,
  checkOutTime: null,
  selectedLocation: ''
}

const search = (state = initialState, action) => {
  switch (action.type) {
  case SET_CHECKIN_TIME:
    return {
      ...state,
      checkInDate: action.date,
      checkInTime: action.time
    }
  case SET_CHECKOUT_TIME:
    return {
      ...state,
      checkOutDate: action.date,
      checkOutTime: action.time
    }
  case SET_SELECTED_LOCATION:
    return {
      ...state,
      selectedLocation: action.location
    }
  default:
    return state
  }
}

export default search

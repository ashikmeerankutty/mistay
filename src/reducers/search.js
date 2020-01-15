import {
  SET_CHECKIN_TIME, SET_CHECKOUT_TIME, SET_SELECTED_LOCATION,
  INCREMENT_TOTAL_GUESTS, INCREMENT_TOTAL_ROOMS, DECREMENT_TOTAL_GUESTS, DECREMENT_TOTAL_ROOMS
} from '../actions/actionTypes'

const initialState = {
  checkInDate: null,
  checkInTime: null,
  checkOutDate: null,
  checkOutTime: null,
  selectedLocation: '',
  totalRooms: 1,
  totalGuests: 2,
  checkInslot: null,
  checkOutslot: null
}

const search = (state = initialState, action) => {
  switch (action.type) {
  case SET_CHECKIN_TIME:
    return {
      ...state,
      checkInDate: action.date,
      checkInTime: action.time,
      checkInslot: action.slot
    }
  case SET_CHECKOUT_TIME:
    return {
      ...state,
      checkOutDate: action.date,
      checkOutTime: action.time,
      checkOutslot: action.slot
    }
  case SET_SELECTED_LOCATION:
    return {
      ...state,
      selectedLocation: action.location
    }
  case INCREMENT_TOTAL_GUESTS:
    return {
      ...state,
      totalGuests: state.totalGuests + action.count
    }
  case DECREMENT_TOTAL_GUESTS:
    return {
      ...state,
      totalGuests: state.totalGuests - action.count
    }
  case INCREMENT_TOTAL_ROOMS:
    return {
      ...state,
      totalRooms: state.totalRooms + action.count
    }
  case DECREMENT_TOTAL_ROOMS:
    return {
      ...state,
      totalRooms: state.totalRooms - action.count
    }
  default:
    return state
  }
}

export default search

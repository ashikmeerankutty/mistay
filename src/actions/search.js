import {
  SET_CHECKIN_TIME, SET_CHECKOUT_TIME, SET_SELECTED_LOCATION,
  INCREMENT_TOTAL_GUESTS, INCREMENT_TOTAL_ROOMS, DECREMENT_TOTAL_GUESTS, DECREMENT_TOTAL_ROOMS
} from './actionTypes'

const setCheckinTime = (date, time, slot) => ({
  type: SET_CHECKIN_TIME,
  date,
  time,
  slot
})

const setCheckoutTime = (date, time, slot) => ({
  type: SET_CHECKOUT_TIME,
  date,
  time,
  slot
})

const setSelectedLocation = (location) => ({
  type: SET_SELECTED_LOCATION,
  location
})

const incrementRoom = (count) => ({
  type: INCREMENT_TOTAL_ROOMS,
  count
})

const decrementRoom = (count) => ({
  type: DECREMENT_TOTAL_ROOMS,
  count
})

const incrementGuest = (count) => ({
  type: INCREMENT_TOTAL_GUESTS,
  count
})

const decrementGuest = (count) => ({
  type: DECREMENT_TOTAL_GUESTS,
  count
})

export const getCheckinTime = (date, time, slot) => (dispatch) => {
  if (date !== null) date.setHours(time, 0, 0, 0)
  dispatch(setCheckinTime(date, time, slot))
}

export const getCheckoutTime = (date, time, slot) => (dispatch) => {
  if (date !== null) date.setHours(time, 0, 0, 0)
  dispatch(setCheckoutTime(date, time, slot))
}

export const getSelectedLocation = (location) => (dispatch) => {
  dispatch(setSelectedLocation(location))
}

export const incrementRoomCount = (count) => (dispatch) => {
  dispatch(incrementRoom(count))
}

export const decrementRoomCount = (count) => (dispatch) => {
  dispatch(decrementRoom(count))
}

export const incrementGuestCount = (count) => (dispatch) => {
  dispatch(incrementGuest(count))
}

export const decrementGuestCount = (count) => (dispatch) => {
  dispatch(decrementGuest(count))
}

import { SET_CHECKIN_TIME, SET_CHECKOUT_TIME, SET_SELECTED_LOCATION } from './actionTypes'

const setCheckinTime = (date, time) => ({
  type: SET_CHECKIN_TIME,
  date,
  time
})

const setCheckoutTime = (date, time) => ({
  type: SET_CHECKOUT_TIME,
  date,
  time
})

const setSelectedLocation = (location) => ({
  type: SET_SELECTED_LOCATION,
  location
})

export const getCheckinTime = (date, time) => (dispatch) => {
  date.setHours(time, 0, 0, 0)
  dispatch(setCheckinTime(date, time))
}

export const getCheckoutTime = (date, time) => (dispatch) => {
  date.setHours(time, 0, 0, 0)
  dispatch(setCheckoutTime(date, time))
}

export const getSelectedLocation = (location) => (dispatch) => {
  dispatch(setSelectedLocation(location))
}

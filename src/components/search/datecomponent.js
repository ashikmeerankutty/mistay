/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prefer-template */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCheckinTime, getCheckoutTime } from '../../actions/search'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

class DateComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  setTime(date, timeValue, slot) {
    const {
      time, setCheckOutTime, setCheckInTime
    } = this.props
    if (time.checkOutTime !== null) {
      setCheckInTime(null, null)
      setCheckOutTime(null, null)
    } else { setCheckOutTime(date, timeValue, slot) }
  }

  isCheckoutDisabled(timeValue) {
    const {
      time, date
    } = this.props
    if (date < time.checkInDate) return true
    if (date === time.checkInDate && time.checkInTime > timeValue) return true
    return false
  }

  parseDate(timestamp) {
    const date = new Date(timestamp)
    const dd = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`
    const mm = `${date.getMonth() + 1 ? '0' : ''}${date.getMonth() + 1}`
    const yyyy = date.getFullYear()

    return `${dd}/${mm}/${yyyy}`
  }

  isCheckinDisabled(timeValue) {
    const {
      date
    } = this.props
    const hours = date.getHours()
    const datex = new Date()
    if (this.parseDate(date) === this.parseDate(datex) && hours > timeValue) return true
    return false
  }

  ischeckInActive(timeValue) {
    return true
  }

  render() {
    const {
      setCheckOutTime, setCheckInTime, time, date
    } = this.props
    const day = days[date.getDay()]
    const month = months[date.getMonth()]
    const dateValue = date.getDate()
    const hours = date.getHours()

    return (
      <div className="date_component">
        <div className="date_component_date_wrapper">
          <div>
            <h2 className="date_component_date">
              {dateValue}
              {' '}
              {month}
            </h2>
          </div>
          <div><h2 className="date_component_day">{day}</h2></div>
        </div>
        { time.checkInDate === null
          ? (
            <div className="date_component_time_wrapper">
              <div className={'date_component_time ' + (this.isCheckinDisabled(8) ? 'disabled ' : '') + (this.ischeckInActive(8) ? 'active' : '')} onClick={() => (!this.isCheckinDisabled(8) ? setCheckInTime(date, 8, 1) : null)}><h2>8AM</h2></div>
              <div className={'date_component_time ' + (this.isCheckinDisabled(12) ? 'disabled' : '')} onClick={() => (!this.isCheckinDisabled(12) ? setCheckInTime(date, 12, 2) : null)}><h2>12PM</h2></div>
              <div className={'date_component_time ' + (this.isCheckinDisabled(20) ? 'disabled' : '')} onClick={() => (!this.isCheckinDisabled(20) ? setCheckInTime(date, 20, 3) : null)}><h2>8PM</h2></div>
            </div>
          ) : (
            <div className="date_component_time_wrapper">
              <div className={'date_component_time ' + ((this.isCheckoutDisabled(7)) ? 'disabled' : '')} onClick={() => (((!this.isCheckoutDisabled(7)) ? this.setTime(date, 7, 1) : null))}><h2>7AM</h2></div>
              <div className={'date_component_time ' + ((this.isCheckoutDisabled(11)) ? 'disabled' : '')} onClick={() => (((!this.isCheckoutDisabled(11)) ? this.setTime(date, 11, 2) : null))}><h2>11AM</h2></div>
              <div className={'date_component_time ' + ((this.isCheckoutDisabled(19)) ? 'disabled' : '')} onClick={() => (((!this.isCheckoutDisabled(19)) ? this.setTime(date, 19, 3) : null))}><h2>7PM</h2></div>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  time: state.search
})

const mapDispatchToProps = (dispatch) => ({
  setCheckInTime: (date, time, slot) => {
    dispatch(getCheckinTime(date, time, slot))
  },
  setCheckOutTime: (date, time, slot) => {
    dispatch(getCheckoutTime(date, time, slot))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DateComponent)

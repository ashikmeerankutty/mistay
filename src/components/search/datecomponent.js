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
              <div className={'date_component_time ' + ((hours >= 8) ? 'disabled' : '')} onClick={() => ((hours < 8) ? setCheckInTime(date, 8) : null)}><h2>8AM</h2></div>
              <div className={'date_component_time ' + ((hours >= 12) ? 'disabled' : '')} onClick={() => ((hours < 12) ? setCheckInTime(date, 12) : null)}><h2>12PM</h2></div>
              <div className={'date_component_time ' + ((hours >= 20) ? 'disabled' : '')} onClick={() => ((hours < 20) ? setCheckInTime(date, 20) : null)}><h2>8PM</h2></div>
            </div>
          ) : (
            <div className="date_component_time_wrapper">
              <div className={'date_component_time ' + ((date <= time.checkInDate && time.checkInTime >= 7) ? 'disabled' : '')} onClick={() => setCheckOutTime(date, 7)}><h2>7AM</h2></div>
              <div className={'date_component_time ' + ((date <= time.checkInDate && time.checkInTime >= 11) ? 'disabled' : '')} onClick={() => setCheckOutTime(date, 11)}><h2>11AM</h2></div>
              <div className={'date_component_time ' + ((date <= time.checkInDate && time.checkInTime >= 19) ? 'disabled' : '')} onClick={() => setCheckOutTime(date, 19)}><h2>7PM</h2></div>
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
  setCheckInTime: (date, time) => {
    dispatch(getCheckinTime(date, time))
  },
  setCheckOutTime: (date, time) => {
    dispatch(getCheckoutTime(date, time))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DateComponent)

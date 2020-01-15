/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Location from './location'
import Guests from './guests'
import DatePicker from './datepicker'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  parseDate(timestamp) {
    const date = new Date(timestamp)
    const dd = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`
    const mm = `${date.getMonth() + 1 ? '0' : ''}${date.getMonth() + 1}`
    const yyyy = date.getFullYear()

    return `${dd}/${mm}/${yyyy}`
  }

  getSlot(checkInTime) {
    switch (checkInTime) {
    case 8: return 1
    case 12: return 2
    case 20: return 3
    default: return 0
    }
  }

  onSubmit() {
    const { time } = this.props
    const {
      checkInTime, checkOutTime, checkInDate,
      checkOutDate, selectedLocation, totalRooms, totalGuests
    } = time
    console.log({
      CheckInDate: this.parseDate(checkInDate), checkInSlot: this.getSlot(checkInTime), city: selectedLocation, guestCount: totalGuests, roomCount: totalRooms
    })
  }

  render() {
    return (
      <div className="search_bar">
        <div className="location">
          <Location />
        </div>
        <div className="date_picker">
          <DatePicker />
        </div>
        <div className="guests">
          <Guests />
        </div>
        <div className="search_button" onClick={this.onSubmit}>
          <h2>FIND HOURLY HOTELS</h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  time: state.search
})


export default connect(
  mapStateToProps
)(SearchBar)

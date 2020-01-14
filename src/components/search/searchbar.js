import React, { Component } from 'react'
import { DateRangePicker } from 'react-dates'
import Location from './location'
import Guests from './guests'


class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    }
  }

  render() {
    const { startDate, endDate, focusedInput } = this.state
    return (
      <div className="search_bar">
        <div className="location">
          <Location />
        </div>
        <div className="date_picker">
          <DateRangePicker
            startDate={startDate}
            startDateId="your_unique_start_date_id"
            endDate={endDate}
            endDateId="your_unique_end_date_id"
            // eslint-disable-next-line no-shadow
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={focusedInput}
            // eslint-disable-next-line no-shadow
            onFocusChange={focusedInput => this.setState({ focusedInput })}
          />
        </div>
        <div className="guests">
          <Guests />
        </div>
        <div className="search_button">
          <h2>FIND HOURLY HOTELS</h2>
        </div>
      </div>
    )
  }
}
export default SearchBar

import React from 'react'
import Location from './location'
import Guests from './guests'
import DatePicker from './datepicker'

const SearchBar = () => (
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
    <div className="search_button">
      <h2>FIND HOURLY HOTELS</h2>
    </div>
  </div>
)

export default SearchBar

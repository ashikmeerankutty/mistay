import React from 'react'

const DateComponent = (props) => (
  <div className="date_component">
    <div className="date_component_date_wrapper">
      <div><h2 className="date_component_date">14 JAN</h2></div>
      <div><h2 className="date_component_day">TUESDAY</h2></div>
    </div>
    <div className="date_component_time_wrapper">
      <div className="date_component_time"><h2>8AM</h2></div>
      <div className="date_component_time"><h2>12PM</h2></div>
      <div className="date_component_time"><h2 className="">8PM</h2></div>
    </div>
    <div className="divder" />
  </div>
)

export default DateComponent

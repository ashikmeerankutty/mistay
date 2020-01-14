import React from 'react'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const DateComponent = (props) => {
  const { date } = props
  const day = days[date.getDay()]
  const month = months[date.getMonth()]
  const dateValue = date.getDate()
  const hours = date.getHours()

  console.log(day, dateValue, hours)

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
      <div className="date_component_time_wrapper">
        <div className="date_component_time"><h2>8AM</h2></div>
        <div className="date_component_time"><h2>12PM</h2></div>
        <div className="date_component_time"><h2 className="">8PM</h2></div>
      </div>
      <div className="divder" />
    </div>
  )
}

export default DateComponent

/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import onClickOutside from 'react-onclickoutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarAlt, faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import DateSlider from './dateslider'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class DatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false
    }
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  handleClickOutside() {
    this.setState({ listOpen: false })
  }

  checkInTime(time) {
    if (time === 8) return '8AM'
    if (time === 12) return '12PM'
    if (time === 20) return '8PM'
    return ''
  }

  checkOutTime(time) {
    if (time === 7) return '7AM'
    if (time === 11) return '11PM'
    if (time === 19) return '7PM'
    return ''
  }

  render() {
    const { time } = this.props
    const {
      checkInDate, checkOutDate, checkInTime, checkOutTime
    } = time
    const { listOpen } = this.state
    return (
      <div className="date_wrapper">
        <div className="date_header">
          <div className="date_title" onClick={() => this.setState({ listOpen: true })}>
            {(checkInDate === null) ? (
              <div className="date_title_holder">
                <div>
                  <h2 className="date_title_text">CHECK-IN</h2>
                </div>
                <div>
                  <FontAwesomeIcon className="date_icon" icon={faChevronRight} color="#C6C6C6" />
                </div>
                <div>
                  <h2 className="date_title_text">CHECK-OUT</h2>
                </div>
              </div>
            ) : (
              <div className="date_input_wrapper">
                <div className="date_input_holder">
                  <h6 className="date_input_label">CHECK-IN</h6>
                  <div className="date_u">
                    <div className="date_v">{ this.checkInTime(checkInTime) }</div>
                    <div className="date_w">{ checkInDate.getDate() }</div>
                    <div className="date_x">{ months[checkInDate.getMonth()] }</div>
                  </div>
                  <div className="date_y">{ days[checkInDate.getDay()]}</div>
                </div>
                <div>
                  <FontAwesomeIcon className="date_icon" icon={faChevronRight} color="#C6C6C6" />
                </div>
                <div className="date_input_holder">
                  <h6 className="date_input_label pad_0">CHECK-OUT</h6>
                  {checkOutDate !== null && (
                    <div>
                      <div className="date_u">
                        <div className="date_v">{ this.checkOutTime(checkOutTime) }</div>
                        <div className="date_w">{ checkOutDate.getDate() }</div>
                        <div className="date_x">{ months[checkOutDate.getMonth()] }</div>
                      </div>
                      <div className="date_y">{ days[checkInDate.getDay()]}</div>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="date_icon">
              <FontAwesomeIcon icon={faCalendarAlt} color="#C6C6C6" />
            </div>
          </div>
        </div>
        {listOpen && (
          <div className="date_list">
            <div className="date_list_title">
              <div className={checkInDate === null ? 'active' : ''}><h3 className="date_list_heading check-in">CHECK-IN</h3></div>
              <div className={checkInDate !== null ? 'active' : ''}><h3 className="date_list_heading check-out">CHECK-OUT</h3></div>
            </div>
            <DateSlider />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  time: state.search
})


export default connect(
  mapStateToProps,
)(onClickOutside(DatePicker))

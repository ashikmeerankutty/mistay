/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar, faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import DateSlider from './dateslider'

class DatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      selectedDate: null
    }
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  handleClickOutside() {
    this.setState({ listOpen: false })
  }

  render() {
    const { listOpen, selectedDate } = this.state
    return (
      <div className="date_wrapper">
        <div className="date_header">
          <div className="date_title" onClick={() => this.setState({ listOpen: true })}>
            {(!listOpen && selectedDate === null) ? (
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
              <div className="date_input_holder">
                {/* <h6 className="date_input_label">WHERE TO</h6> */}
                {/* <input type="text" className="date_input" autoFocus onChange={this.handleSearchValue} value={selectedDate} placeholder="City" /> */}
              </div>
            )}
            <div className="date_icon">
              <FontAwesomeIcon icon={faCalendar} color="#C6C6C6" />
            </div>
          </div>
        </div>
        {listOpen && (
          <div className="date_list">
            <div className="date_list_title">
              <div><h3 className="date_list_heading">CHECK-IN</h3></div>
              <div><h3 className="date_list_heading">CHECK-OUT</h3></div>
            </div>
            <DateSlider />
          </div>
        )}
      </div>
    )
  }
}


export default onClickOutside(DatePicker)

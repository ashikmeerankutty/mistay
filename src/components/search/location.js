/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons'


class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [
        'New York',
        'Dublin',
        'California',
        'Istanbul',
        'Izmir',
        'Oslo'
      ],
      listOpen: false,
      selectedLocation: ''
    }
    this.handleSearchValue = this.handleSearchValue.bind(this)
  }

  handleClickOutside() {
    this.setState({ listOpen: false })
  }

  handleSearchValue(e) {
    this.setState({ selectedLocation: e.target.value })
  }

  render() {
    const { selectedLocation, locations, listOpen } = this.state
    return (
      <div className="location_wrapper">
        <div className="location_header">
          <div className="location_title" onClick={() => this.setState({ listOpen: true })}>
            {(!listOpen && selectedLocation.length === 0) ? (
              <div>
                <h2 className="location_title_text">WHERE TO?</h2>
              </div>
            ) : (
              <div className="location_input_holder">
                <h6 className="location_input_label">WHERE TO</h6>
                <input type="text" className="location_input" autoFocus onChange={this.handleSearchValue} value={selectedLocation} placeholder="City" />
              </div>
            )}
            <div className="location_icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} color="#C6C6C6" />
            </div>
          </div>
        </div>
        {
          listOpen && (
            <div className="location_list">
              <div className="location_list_item near_me">
                <p>
                  <span className="location_span">
                    <FontAwesomeIcon icon={faLocationArrow} />
                  </span>
                  Hotels Near Me
                </p>

              </div>
              {locations.map((item) => (
                <div className="location_list_item" key={item} onClick={() => this.setState({ selectedLocation: item })}>
                  <div><p className="location_place">{item}</p></div>
                  <div><p className="location_type">City</p></div>
                </div>
              ))}
            </div>
          )
        }
      </div>
    )
  }
}


export default onClickOutside(Location)

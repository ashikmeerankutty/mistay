/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import onClickOutside from 'react-onclickoutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { getSelectedLocation } from '../../actions/search'


class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [
        'Chennai',
        'Bangalore',
        'Delhi',
        'Hyderbad',
        'Kolkatta',
        'Mumbai',
        'Pune'
      ],
      listOpen: false
    }
  }

  handleClickOutside() {
    this.setState({ listOpen: false })
  }

  render() {
    const { locations, listOpen } = this.state
    const { time, setLocation } = this.props
    const { selectedLocation } = time
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
                <input type="text" className="location_input" autoFocus onChange={() => {}} value={selectedLocation} placeholder="City" />
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
                <div className="location_list_item" key={item} onClick={() => setLocation(item)}>
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

const mapStateToProps = (state) => ({
  time: state.search
})

const mapDispatchToProps = (dispatch) => ({
  setLocation: (location) => {
    dispatch(getSelectedLocation(location))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(onClickOutside(Location))

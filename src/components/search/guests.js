import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBed } from '@fortawesome/free-solid-svg-icons'


class Guests extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      rooms: 1,
      guests: 2
    }
  }

  handleClickOutside() {
    this.setState({ listOpen: false })
  }

  render() {
    const { rooms, guests, listOpen } = this.state
    return (
      <div className="guest_wrapper">
        <div className="guest_header">
          <div className="guest_title" onClick={() => this.setState({ listOpen: true })}>
            <div className="guest_input_holder">
              <h6 className="guest_input_label">ANY GUESTS</h6>
              <h3 className="guest_count">
                {rooms}
                {' '}
                Rooms/
                {' '}
                {guests}
                Guests
              </h3>
            </div>
            <div className="guest_icon">
              <FontAwesomeIcon icon={faBed} color="#C6C6C6" />
            </div>
          </div>
        </div>
        {
          listOpen && (
            <div className="guest_list" >
              <button type="button">Add Room</button>
            </div>
          )
        }
      </div>
    )
  }
}


export default onClickOutside(Guests)

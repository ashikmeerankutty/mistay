import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBed, faPlusCircle, faMinusCircle, faTimes
} from '@fortawesome/free-solid-svg-icons'

const defaultRoom = {
  id: 1,
  guests: 2
}

class Guests extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      rooms: [defaultRoom],
      totalRooms: 1,
      totalGuests: 2
    }
  }

  componentDidMount() {
  }

  handleClickOutside() {
    this.setState({ listOpen: false })
  }

  render() {
    const {
      rooms, totalRooms, totalGuests, listOpen
    } = this.state
    return (
      <div className="guest_wrapper">
        <div className="guest_header">
          <div className="guest_title" onClick={() => this.setState({ listOpen: true })}>
            <div className="guest_input_holder">
              <h6 className="guest_input_label">ANY GUESTS</h6>
              <h3 className="guest_count">
                {totalRooms}
                {' '}
                Rooms/
                {' '}
                {totalGuests}
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
            <div className="guest_list">
              <div className="guest_add_room">
                <button type="button" className="guest_add_room_button">Add Room</button>
              </div>
              {rooms.map((room, index) => (
                <div key={room.id} className="guest_room">
                  <div className="rooms_remove">
                    <FontAwesomeIcon className="guests_icon" icon={faTimes} color="#C6C6C6" />
                  </div>
                  <div className="room_guests">
                    <p>
                      Room
                      {' '}
                      {index + 1}
                    </p>
                    <h5>
                    Guests
                      {' '}
                      { room.guests }
                    </h5>
                  </div>
                  <div className="guests_add">
                    <FontAwesomeIcon className="guests_icon" icon={faPlusCircle} color="#C6C6C6" />
                  </div>
                  <div className="rooms_remove">
                    <FontAwesomeIcon className="guests_icon" icon={faMinusCircle} color="#C6C6C6" />
                  </div>
                </div>
              ))}
            </div>
          )
        }
      </div>
    )
  }
}


export default onClickOutside(Guests)

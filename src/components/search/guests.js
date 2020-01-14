/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
      roomId: 1,
      rooms: [defaultRoom],
      totalRooms: 1,
      totalGuests: 2
    }
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.incrementGuests = this.incrementGuests.bind(this)
    this.decrementGuests = this.decrementGuests.bind(this)
    this.addRoom = this.addRoom.bind(this)
  }

  componentDidMount() {
  }

  handleClickOutside() {
    this.setState({ listOpen: false })
  }

  incrementGuests(id) {
    const { rooms, totalGuests } = this.state
    let guestsCount = totalGuests
    const index = rooms.findIndex((room) => room.id === id)
    if (rooms[index].guests < 2) {
      rooms[index].guests += 1
      guestsCount += 1
    }
    this.setState({ rooms, totalGuests: guestsCount })
  }

  decrementGuests(id) {
    const { rooms, totalGuests } = this.state
    let guestsCount = totalGuests
    const index = rooms.findIndex((room) => room.id === id)
    if (rooms[index].guests > 1) {
      rooms[index].guests -= 1
      guestsCount -= 1
    }
    this.setState({ rooms, totalGuests: guestsCount })
  }

  addRoom() {
    const {
      rooms, roomId, totalRooms, totalGuests
    } = this.state
    rooms.push({
      id: roomId + 1,
      guests: 2
    })
    const roomsCount = totalRooms + 1
    const guestsCount = totalGuests + 2
    this.setState({
      rooms, roomId: roomId + 1, totalRooms: roomsCount, totalGuests: guestsCount
    })
  }

  removeRoom(id) {
    const { rooms, totalRooms, totalGuests } = this.state
    const index = rooms.findIndex((room) => room.id === id)
    const newRooms = rooms.filter((room) => room.id !== id)
    const roomsCount = totalRooms - 1
    const guestsCount = totalGuests - rooms[index].guests
    this.setState({ rooms: newRooms, totalRooms: roomsCount, totalGuests: guestsCount })
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
                <button type="button" className="guest_add_room_button" onClick={this.addRoom}>Add Room</button>
              </div>
              {rooms.map((room, index) => (
                <div key={room.id} className="guest_room">
                  <div className="rooms_remove" onClick={() => { this.removeRoom(room.id) }}>
                    <FontAwesomeIcon className="guests_icon" icon={faTimes} color="#C6C6C6" />
                  </div>
                  <div className="room_guests">
                    <p>
                      Room
                      {' '}
                      {index + 1}
                    </p>
                    <h5>
                      {room.guests}
                      {' '}
                      Guests
                    </h5>
                  </div>
                  <div className="guests_add" onClick={() => { this.incrementGuests(room.id) }}>
                    <FontAwesomeIcon className="guests_icon" icon={faPlusCircle} color="#C6C6C6" />
                  </div>
                  <div className="rooms_remove" onClick={() => { this.decrementGuests(room.id) }}>
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

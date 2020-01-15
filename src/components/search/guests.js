/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import onClickOutside from 'react-onclickoutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBed, faPlusCircle, faMinusCircle, faTimes
} from '@fortawesome/free-solid-svg-icons'

import {
  incrementRoomCount, incrementGuestCount, decrementGuestCount, decrementRoomCount
} from '../../actions/search'

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
    }
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.incrementGuests = this.incrementGuests.bind(this)
    this.decrementGuests = this.decrementGuests.bind(this)
    this.addRoom = this.addRoom.bind(this)
  }


  handleClickOutside() {
    this.setState({ listOpen: false })
  }

  incrementGuests(id) {
    const { incrementGuests } = this.props
    const { rooms } = this.state
    const index = rooms.findIndex((room) => room.id === id)
    if (rooms[index].guests < 2) {
      rooms[index].guests += 1
      incrementGuests(1)
    }
    this.setState({ rooms })
  }

  decrementGuests(id) {
    const { decrementGuests } = this.props
    const { rooms } = this.state
    const index = rooms.findIndex((room) => room.id === id)
    if (rooms[index].guests > 1) {
      rooms[index].guests -= 1
      decrementGuests(1)
    }
    this.setState({ rooms })
  }

  addRoom() {
    const { incrementGuests, incrementRooms } = this.props
    const {
      rooms, roomId
    } = this.state
    rooms.push({
      id: roomId + 1,
      guests: 1
    })
    incrementRooms(1)
    incrementGuests(1)
    this.setState({
      rooms, roomId: roomId + 1
    })
  }

  removeRoom(id) {
    const { decrementGuests, decrementRooms } = this.props
    const { rooms } = this.state
    const index = rooms.findIndex((room) => room.id === id)
    const newRooms = rooms.filter((room) => room.id !== id)
    decrementRooms(1)
    decrementGuests(rooms[index].guests)
    this.setState({ rooms: newRooms })
  }

  render() {
    const { time } = this.props
    const { totalGuests, totalRooms } = time
    const {
      rooms, listOpen
    } = this.state
    return (
      <div className="guest_wrapper">
        <div className="guest_header">
          <div className="guest_title" onClick={() => this.setState({ listOpen: true })}>
            <div className="guest_input_holder">
              <h6 className="guest_input_label">ANY GUESTS?</h6>
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
                  <div className="rooms_remove">
                    {totalRooms > 1 && (<FontAwesomeIcon onClick={() => { this.removeRoom(room.id) }} className="guests_icon times_icon" icon={faTimes} color="grey" />
                    )}
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
                  <div className="guests_add">
                    <FontAwesomeIcon onClick={() => { this.incrementGuests(room.id) }} className="guests_icon" icon={faPlusCircle} color="grey" />
                  </div>
                  <div className="rooms_remove">
                    <FontAwesomeIcon onClick={() => { this.decrementGuests(room.id) }} className="guests_icon" icon={faMinusCircle} color="grey" />
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


const mapStateToProps = (state) => ({
  time: state.search
})

const mapDispatchToProps = (dispatch) => ({
  incrementRooms: (count) => {
    dispatch(incrementRoomCount(count))
  },
  incrementGuests: (count) => {
    dispatch(incrementGuestCount(count))
  },
  decrementGuests: (count) => {
    dispatch(decrementGuestCount(count))
  },
  decrementRooms: (count) => {
    dispatch(decrementRoomCount(count))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(onClickOutside(Guests))

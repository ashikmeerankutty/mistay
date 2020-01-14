import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [
        {
          id: 0,
          title: 'New York',
          selected: false,
          key: 'location'
        },
        {
          id: 1,
          title: 'Dublin',
          selected: false,
          key: 'location'
        },
        {
          id: 2,
          title: 'California',
          selected: false,
          key: 'location'
        },
        {
          id: 3,
          title: 'Istanbul',
          selected: false,
          key: 'location'
        },
        {
          id: 4,
          title: 'Izmir',
          selected: false,
          key: 'location'
        },
        {
          id: 5,
          title: 'Oslo',
          selected: false,
          key: 'location'
        }
      ],
      listOpen: false,
      selectedLocation: null
    }
  }

  handleClickOutside() {
    this.setState({ listOpen: false })
  }

  render() {
    const { selectedLocation, locations, listOpen } = this.state
    return (
      <div className="location_wrapper">
        <div className="location_header">
          <div className="location_title" onClick={() => this.setState({ listOpen: true })}>
            {(selectedLocation == null) ? (
              <div>
                <h2 className="location_title_text">WHERE TO?</h2>
              </div>
            ) : <input type="text" value={selectedLocation.title} />}
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} color="#C6C6C6" />
            </div>
          </div>
        </div>
        {
          listOpen && (
            <div className="location_list">
              <div className="location_list_item near_me"><p>Hotels Near Me</p></div>
              {locations.map((item) => (
                <div className="location_list_item" key={item.id} onClick={() => this.setState({ selectedLocation: item })} >
                  <div><p className="location_place">{item.title}</p></div>
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

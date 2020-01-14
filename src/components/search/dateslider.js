import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowCircleRight, faArrowCircleLeft
} from '@fortawesome/free-solid-svg-icons'
import DateComponent from './datecomponent'
import scrollSlider from '../../utils/scroll'

const Divider = () => <div className="divider" />

class DateSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
    this.scrollRef = React.createRef()
    this.handlePrev = this.handlePrev.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  handlePrev() {
    scrollSlider(this.scrollRef.current, -232, 500)
  }

  handleNext() {
    scrollSlider(this.scrollRef.current, 232, 500)
  }

  render() {
    return (
      <div>
        <div className="slider_icons">
          <div className="prev">
            <FontAwesomeIcon onClick={this.handlePrev} className="slider_icon" icon={faArrowCircleLeft} color="#C6C6C6" />
          </div>
          <div className="next">
            <FontAwesomeIcon onClick={this.handleNext} className="slider_icon" icon={faArrowCircleRight} color="#C6C6C6" />
          </div>
        </div>
        <div ref={this.scrollRef} className="slider_container">
          <DateComponent />
          <Divider />
          <DateComponent />
          <Divider />
          <DateComponent />
          <Divider />
          <DateComponent />
          <Divider />
          <DateComponent />
          <Divider />
          <DateComponent />
          <Divider />
        </div>
      </div>
    )
  }
}

export default DateSlider

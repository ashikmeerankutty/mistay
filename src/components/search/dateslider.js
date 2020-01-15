import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowCircleRight, faArrowCircleLeft
} from '@fortawesome/free-solid-svg-icons'
import DateComponent from './datecomponent'
import scrollSlider from '../../utils/scroll'
import generateDateTimeList from '../../utils/dates'


const Divider = () => <div className="divider" />

class DateSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dateTimeList: [],
      lastDate: null
    }
    this.scrollRef = React.createRef()
    this.handlePrev = this.handlePrev.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  componentDidMount() {
    const dateTimeList = generateDateTimeList(new Date(), 10)
    this.setState({ dateTimeList, lastDate: dateTimeList[9] })
  }

  handlePrev() {
    scrollSlider(this.scrollRef.current, -232, 500)
  }

  handleNext() {
    scrollSlider(this.scrollRef.current, 232, 500)
  }

  render() {
    const { dateTimeList } = this.state
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
          {
            dateTimeList.map((date) => (
              <div key={date} className="slider_element_holder">
                <DateComponent date={date} />
                <Divider />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default DateSlider

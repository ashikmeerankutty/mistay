const generateDateTimeList = (startDate, count) => {
  let start = startDate
  const dateTimeList = []
  dateTimeList.push(start)
  for (let i = 0; i < count; i += 1) {
    const nextDay = new Date(start)
    nextDay.setDate(nextDay.getDate() + 1)
    nextDay.setHours(0, 0, 0, 0)
    start = nextDay
    dateTimeList.push(nextDay)
  }
  return dateTimeList
}

export default generateDateTimeList

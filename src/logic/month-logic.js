let daysChecker = true

export default class MonthLogic {
  name
  year
  days = []
  markedDays = []

  constructor(name, year, days, markedDays) {
    this.name = name
    this.year = year
    this.markedDays = markedDays
    for(let i = 1; i <= days; i++) {
      if (i > days) daysChecker = false
      if (daysChecker) {
        markedDays.includes(i)? this.days.push({
          day: i,
          markedDay: true
        }): this.days.push({
          day: i,
          markedDay: false
        })
      } else {
        this.days.push({
          day: i,
          markedDay: false
        })
      }
    }
  }
}
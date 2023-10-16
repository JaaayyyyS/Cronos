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
      this.days.push(i)
    }
  }
}
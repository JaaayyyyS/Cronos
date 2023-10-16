import MonthLogic from "./month-logic"

export default class CalendarLogic {
  static months = []

  static createMonth(name, year, days, markedDays) {
    this.months.push(new MonthLogic(name, year, days, markedDays))
  }

  static removeMonth(name){
    this.months = this.months.filter(month => month.name != name)
  }
}
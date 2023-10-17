import CalendarLogic from './src/logic/calendar-logic';
import AppNavigation from './src/navigation/appnavigation';

export default function App() {
  CalendarLogic.createMonth('Janeiro', 2024, 31, [7, 8])
  CalendarLogic.createMonth('Março', 2024, 31, [18])

  console.log(CalendarLogic.months[1])

  return (
    <>
    <AppNavigation/>
    </>
  );
}

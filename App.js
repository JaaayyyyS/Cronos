import CalendarLogic from './src/logic/calendar-logic';
import AppNavigation from './src/navigation/appnavigation';

export default function App() {
  CalendarLogic.createMonth('Janeiro', 2023, 31, [7])
  console.log(CalendarLogic.months)

  return (
    <>
    <AppNavigation/>
    </>
  );
}

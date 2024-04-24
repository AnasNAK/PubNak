import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent: React.FC = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  const handleCalendarChange: CalendarProps['onChange'] = (newValue) => {
    if (newValue instanceof Date) {
      setValue(newValue);
    }
  };

  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-4 mb-5">
      <Calendar
        onChange={handleCalendarChange}
        value={value}
        calendarType="US"
        className="react-calendar"
      />
    </div>
  );
};

export default CalendarComponent;

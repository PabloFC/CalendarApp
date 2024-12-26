import Navbar from "../components/Navbar";

import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { localizer } from "../../helpers/calendarLocalizer";
import { getMessagesES } from "../../helpers/getMessages";
import { useState } from "react";
import CalendarModal from "../components/CalendarModal";

const events = [
  {
    title: "Día de Navidad",
    notes: "Tengo que hacer la comida",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Pablo",
    },
  },
];

const CalendarPage = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );
  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log({ event, start, end, isSelected });

    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return {
      style,
    };
  };

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event });
  };
  const onSelect = (event) => {
    console.log({ click: event });
  };

  const onViewChange = (event) => {
    // console.log({ ViewChange: event });
    localStorage.setItem("lastView", event);
    setLastView(event);
  };

  return (
    <div>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />

      <CalendarModal />
    </div>
  );
};

export default CalendarPage;

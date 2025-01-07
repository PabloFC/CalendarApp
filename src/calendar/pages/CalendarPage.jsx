import Navbar from "../components/Navbar";

import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { localizer } from "../../helpers/calendarLocalizer";
import { getMessagesES } from "../../helpers/getMessages";
import { useState } from "react";
import CalendarModal from "../components/CalendarModal";
import { useUiStore } from "../../hooks/UseUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import FabAddNew from "../components/FabAddNew";

const CalendarPage = () => {
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();

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
    // console.log({ doubleClick: event });
    openDateModal();
  };
  const onSelect = (event) => {
    // console.log({ click: event });
    setActiveEvent(event);
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
      <FabAddNew />
    </div>
  );
};

export default CalendarPage;

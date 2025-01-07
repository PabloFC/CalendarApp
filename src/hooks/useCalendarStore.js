import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onSetActiveEvent,
} from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    try {
      if (calendarEvent._id) {
        // update
        await updateEvent(calendarEvent);
      } else {
        // create
        // const newEvent = await createEvent(calendarEvent);
        dispatch(
          onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    events,
    // hasEventSelected: !!activeEvent,
    activeEvent,
    setActiveEvent,
    startSavingEvent,
  };
};

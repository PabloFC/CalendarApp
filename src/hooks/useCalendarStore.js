import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
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
        dispatch(onUpdateEvent({ ...calendarEvent }));
      } else {
        // create
        dispatch(
          onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const startDeletingEvent = () => {
    dispatch(onDeleteEvent());
  };

  return {
    events,
    hasEventSelected: !!activeEvent,
    activeEvent,
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
  };
};

import { useDispatch, useSelector } from "react-redux";
import { onSetActiveEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  //   const startSavingEvent = async (event) => {
  //     try {
  //       if (event._id) {
  //         // update
  //         await updateEvent(event);
  //       } else {
  //         // create
  //         const newEvent = await createEvent(event);
  //         dispatch(onAddEvent({ ...event, _id: newEvent._id }));
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return {
    events,
    // hasEventSelected: !!activeEvent,
    activeEvent,
    setActiveEvent,
    // startSavingEvent,
  };
};

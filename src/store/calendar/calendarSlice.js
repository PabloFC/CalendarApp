import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
  _id: new Date().getTime(),
  title: "Día de Reyes",
  notes: "Tengo que hacer la comida",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Pablo",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    //     onAddEvent: (state, { payload }) => {
    //       state.events.push(payload);
    //       state.activeEvent = null;
    //     },
    //     onUpdateEvent: (state, { payload }) => {
    //       state.events = state.events.map((event) =>
    //         event.id === payload.id ? payload : event
    //       );
    //       state.activeEvent = null;
    //     },
    //     onDeleteEvent: (state) => {
    //       state.events = state.events.filter(
    //         (event) => event.id !== state.activeEvent.id
    //       );
    //       state.activeEvent = null;
    //     },
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
  },
});

export const { onSetActiveEvent } = calendarSlice.actions;

// export const selectEvents = (state) => state.calendar.events;
// export const selectActiveEvent = (state) => state.calendar.activeEvent;

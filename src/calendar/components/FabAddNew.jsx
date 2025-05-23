import React from "react";
import { useUiStore } from "../../hooks/UseUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { addHours } from "date-fns";

const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();
  const handleClickNew = () => {
    setActiveEvent({
      title: " ",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "Pablo",
      },
    });
    openDateModal();
  };

  return (
    <div>
      <button className="btn btn-primary fab" onClick={handleClickNew}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default FabAddNew;

import React from "react";
import { useCalendarStore } from "../../hooks/useCalendarStore";

const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();
  const handleDelete = () => {
    startDeletingEvent();
  };

  return (
    <div>
      <button
        className="btn btn-danger fab-danger"
        onClick={handleDelete}
        style={{ display: hasEventSelected ? "" : "none" }}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default FabDelete;

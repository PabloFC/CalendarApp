import { useDispatch, useSelector } from "react-redux";
import { onOpenDateModal, onCloseDateModal } from "../store/ui/UiSlice";

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isDateModalOpen } = useSelector((state) => state.ui);

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const toggleDateModal = () => {
    dispatch(!isDateModalOpen ? onOpenDateModal() : onCloseDateModal());
  };

  return { isDateModalOpen, openDateModal, closeDateModal, toggleDateModal };
};
